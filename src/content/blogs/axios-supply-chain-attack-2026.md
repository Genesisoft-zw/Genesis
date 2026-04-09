---
title: "The Axios Supply Chain Attack: What Happened and What Developers Must Do Now"
date: "2026-03-31"
description: "Axios, one of npm's most downloaded packages, was compromised in a supply chain attack today. Learn exactly how the attack worked, which versions are affected, and what to do immediately."
author: "Genesisoft Team"
slug: "axios-supply-chain-attack-2026"
---

On 31 March 2026, two malicious versions of **axios** — one of the most widely used JavaScript HTTP client libraries with over 100 million weekly downloads — were published to the npm registry. A maintainer account was compromised, allowing an attacker to inject a Remote Access Trojan (RAT) dropper into the package dependency tree. The malicious versions were live for approximately three hours before npm unpublished them.

If your project uses axios, this requires your immediate attention.

---

## 1. What Is a Supply Chain Attack?

A supply chain attack does not target your code directly. Instead, attackers compromise a trusted piece of software your project depends on — in this case, a massively popular npm package. When developers update their dependencies, they unknowingly pull in the malicious code alongside the legitimate update.

Supply chain attacks are particularly dangerous because:

- They exploit implicit trust in well-known, actively maintained packages
- They can reach millions of projects in a single publish event
- They bypass most application-level security controls
- Detection is often delayed since the payload hides inside a legitimate package

The axios attack has been described by analysts as "among the most operationally sophisticated supply chain attacks ever documented against a top-10 npm package."

## 2. How the Attack Happened — Technical Breakdown

### 2.1. Pre-staging: 18 Hours Before the Attack

The attack was carefully pre-staged. An attacker-controlled npm account (`nrwise`, email `nrwise@proton.me`) published a **clean decoy** version — `plain-crypto-js@4.2.0` — on March 30, 2026 at 05:57 UTC. This was a hollow copy of the legitimate `crypto-js` library with no malicious code. Its only purpose was to build registry history and reduce "brand-new package" alarms in automated security scanners.

Then, at **23:59 UTC on March 30**, `plain-crypto-js@4.2.1` was published — this time with the malicious payload embedded.

### 2.2. The Compromised Maintainer Account

The attacker gained access to the npm account of **jasonsaayman**, the primary axios maintainer, by exploiting **long-lived classic npm access tokens** that had not been rotated. The attacker changed the account's registered email to a ProtonMail address (`ifstap@proton.me`) under their control and then manually published the poisoned packages via the npm CLI — completely bypassing the project's normal GitHub Actions CI/CD pipeline.

Two versions were published:
- **`axios@1.14.1`** at 00:21 UTC on March 31
- **`axios@0.30.4`** at 01:00 UTC on March 31 (39 minutes later)

### 2.3. The Dependency Injection Technique

Neither malicious version contained any malicious code directly inside axios itself. The attacker used **dependency injection**: the only functional change in both poisoned versions was adding `plain-crypto-js@^4.2.1` as a dependency — a package never imported anywhere in the actual axios source code.

Any project using a caret range (`"axios": "^1.14.0"` or `"axios": "^0.30.0"`) would automatically resolve to the compromised version on the next `npm install` or `npm update`.

Critically, **neither `1.14.1` nor `0.30.4` have a corresponding tag or release on the axios GitHub repository** — a key red flag that automated tooling can catch.

### 2.4. The Malicious Payload — Two-Layer Obfuscation

The `setup.js` postinstall script inside `plain-crypto-js@4.2.1` used two layers of obfuscation to conceal its intent:

- **Layer 1:** String reversal combined with base64 decoding
- **Layer 2:** XOR decryption using a key derived from the string `"OrDeR_7077"`

Additional evasion techniques included dynamic module loading (to bypass static security scans) and runtime deobfuscation. The decoded script contacted a C2 server at **`sfrclak.com:8000`** (IP: `142.11.206.73`) and delivered platform-specific second-stage payloads:

| Platform | Payload Location | Description |
|----------|-----------------|-------------|
| macOS | `/Library/Caches/com.apple.act.mond` | Binary disguised as an Apple cache daemon |
| Windows | `%PROGRAMDATA%\wt.exe` | PowerShell script executed via hidden VBScript with execution policy bypassed |
| Linux | `/tmp/ld.py` | Python-based RAT dropped silently |

### 2.5. Self-Destruction: The Forensics Problem

After deploying its payload, the dropper:

1. Deleted itself entirely from `node_modules`
2. Replaced its own `package.json` with a clean, empty stub

**Any developer who inspects their `node_modules` after the fact will find no trace the malicious package was ever present.** Post-infection inspection of `node_modules` will not reveal the compromise. The only reliable indicator is the lockfile or build logs from the time of infection.

Socket's automated detection flagged `plain-crypto-js@4.2.1` within **6 minutes** of publication. The malicious versions were removed by npm at approximately 03:30 UTC — roughly three hours after the first publish.

## 3. Affected Versions

| Package | Malicious Version | Safe Version |
|---------|------------------|--------------|
| `axios` (1.x) | `1.14.1` | `1.14.0` |
| `axios` (0.x) | `0.30.4` | `0.30.3` |
| `plain-crypto-js` | `4.2.1` | Do not use |

Additional packages found distributing the same malware:
- **`@shadanai/openclaw`** (versions `2026.3.28-2`, `2026.3.28-3`, `2026.3.31-1`, `2026.3.31-2`) — directly vendors the malicious `plain-crypto-js` payload
- **`@qqbrowser/openclaw-qbot@0.0.130`** — ships a tampered `axios@1.14.1` inside its bundled `node_modules`

## 4. Known Indicators of Compromise (IoCs)

| Indicator | Value |
|-----------|-------|
| C2 server domain | `sfrclak.com` |
| C2 IP address | `142.11.206.73` |
| C2 port | `8000` |
| Attacker npm account | `nrwise` / `nrwise@proton.me` |
| Compromised maintainer email (changed to) | `ifstap@proton.me` |
| `axios@0.30.4` shasum | `d6f3f62fd3b9f5432f5782b62d8cfd5247d5ee71` |
| `plain-crypto-js@4.2.1` shasum | `07d889e2dadce6f3910dcbc253317d28ca61c766` |
| macOS artifact | `/Library/Caches/com.apple.act.mond` |
| Windows artifact | `%PROGRAMDATA%\wt.exe` |
| Linux artifact | `/tmp/ld.py` |

## 5. How to Detect If You Are Affected

### Check Your Lockfile (Most Reliable)

Because the malware self-destructs from `node_modules`, your `package-lock.json` or `yarn.lock` is the most reliable artifact:

```bash
grep -E '"axios": "1\.14\.1"|"axios": "0\.30\.4"|plain-crypto-js' package-lock.json
```

If either affected version or `plain-crypto-js` appears, treat the environment as compromised.

### Check Installed Versions

```bash
npm list axios
npm list plain-crypto-js
```

### Check for RAT Artifacts on Disk

```bash
# macOS
ls -la /Library/Caches/com.apple.act.mond

# Linux
ls -la /tmp/ld.py

# Windows (PowerShell)
Test-Path "$env:PROGRAMDATA\wt.exe"
```

### Check Network Logs

Look for any outbound connections to `sfrclak.com` or IP `142.11.206.73` on port 8000 in your firewall, proxy, or EDR logs.

### Critical Time Window

If you ran `npm install` or `npm update` between approximately **00:21 and 03:30 UTC on March 31, 2026** and your lockfile references `axios@1.14.1` or `axios@0.30.4`, assume full compromise — even if your current `node_modules` looks clean.

## 6. What You Should Do Right Now

### Step 1: Downgrade to a Safe Version

```bash
# For axios 1.x users
npm install axios@1.14.0

# For axios 0.x legacy users
npm install axios@0.30.3
```

Verify the lockfile no longer references `plain-crypto-js`.

### Step 2: Rotate All Secrets and Credentials

If your machine, CI/CD environment, or build pipeline installed the affected versions, **assume all secrets accessible at that time are compromised**. Rotate immediately:

- npm tokens and registry credentials
- API keys and service tokens stored in `.env` files
- SSH private keys present on the machine
- Database credentials
- Cloud provider credentials (AWS, GCP, Azure, etc.)
- GitHub Actions secrets and other CI/CD environment variables

### Step 3: Audit Your CI/CD Pipeline

Review pipeline configuration and build logs for:

- Any runs that installed the affected axios versions (check timestamps against the 00:21–03:30 UTC window)
- What environment variables and secrets were accessible during those builds
- Whether any built artifacts were deployed to production from a compromised pipeline

### Step 4: Rebuild Compromised Environments

If RAT artifacts (`com.apple.act.mond`, `wt.exe`, `ld.py`) are present on any machine, **do not attempt to clean in place**. Rebuild from a known-good image or state. The RAT may have established persistence mechanisms beyond the initial dropper file.

### Step 5: Check for Persistence

On any environment that may have been affected, inspect:

- Cron jobs and scheduled tasks for unexpected entries
- New or modified user accounts or SSH authorized keys
- Unusual outbound network connections in firewall or proxy logs
- Modified shell configuration files (`.bashrc`, `.zshrc`, `.profile`, `.bash_profile`)

## 7. Broader Lessons for Development Teams

### Use `--ignore-scripts` in CI/CD

The entire attack relied on a `postinstall` script. Running `npm ci --ignore-scripts` or `npm install --ignore-scripts` in your pipelines blocks postinstall execution entirely. For packages that legitimately require postinstall (such as native bindings), you can explicitly allow specific packages.

### Pin Exact Versions

Using caret ranges (`^`) in `package.json` means the next install will silently resolve to whatever the latest compatible version is — including a newly published malicious one. Pin exact versions in production and commit your lockfile.

### Verify SLSA Provenance Attestations

Axios `1.14.0` includes SLSA provenance attestations — cryptographic proof that the package was built by the expected CI/CD pipeline. The malicious `1.14.1` has no such attestation. Tools that verify provenance would have caught this immediately.

```bash
npm audit signatures
```

### Cross-Reference npm Releases Against GitHub Tags

If an npm package version has no corresponding git tag or GitHub release, it was not published through the normal development process. This is a strong signal of a compromised publish. Automated tools such as Socket check for this automatically.

### Adopt Continuous Dependency Monitoring

Tools like **Socket**, **Snyk**, **Dependabot**, and **StepSecurity** monitor your dependency tree for suspicious packages and can detect malicious publishes within minutes. Socket flagged this attack in six minutes — before most developers were even awake.

### Rotate npm Tokens Regularly

The root cause of this attack was a long-lived classic npm access token. Use **granular, short-lived publish tokens** scoped to specific packages. Enable two-factor authentication on all npm accounts with publish access. Where possible, use npm's **Trusted Publishing** (OIDC) integration with GitHub Actions instead of static tokens.

## 8. Official Response

**npm** unpublished both malicious versions (`axios@1.14.1` and `axios@0.30.4`). The registry now shows `1.14.0` as the latest safe release.

**Axios maintainers** — Collaborator DigitalBrainJS posted in GitHub issue **#10604** noting the severity of the account compromise and coordinating with npm administration to revoke all tokens associated with the hijacked account. An earlier report (issue #10590) was deleted; #10604 remains open with ongoing discussion.

The incident has prompted the axios project to review its publishing workflow, with early analysis pointing to the continued use of long-lived classic tokens alongside GitHub's Trusted Publisher integration as the gap that allowed the attacker to bypass OIDC protections entirely.

## Conclusion

The axios supply chain attack demonstrates how a single compromised credential in a trusted open-source project can expose millions of applications simultaneously. The attacker's use of a pre-staged decoy package, two-layer obfuscation, platform-specific payloads, and post-execution self-destruction shows a level of operational sophistication that goes well beyond typical npm abuse.

For development teams, the response has to go further than downgrading a version number. Secret rotation, pipeline auditing, lockfile hygiene, and postinstall script controls are now immediate priorities for anyone whose projects touched the affected versions today.

At Genesisoft, we build and maintain web applications with security built into every layer — from dependency management to environment hardening and CI/CD pipeline security. If you have questions about securing your application stack or want to audit your project dependencies, [reach out to our team](/#contact).
