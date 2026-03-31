---
title: "The Axios Supply Chain Attack: What Happened and What Developers Must Do Now"
date: "2026-03-31"
description: "Axios, one of npm's most downloaded packages, was compromised in a supply chain attack. Learn how the attack worked, which versions are affected, and how to protect your projects."
author: "Genesisoft Team"
slug: "axios-supply-chain-attack-2026"
---

On 31 March 2026, security researchers confirmed that **axios** — one of the most widely used JavaScript HTTP client libraries with over 100 million weekly downloads — was the target of a supply chain attack. Malicious versions were published to npm after a maintainer account was compromised, injecting a Remote Access Trojan (RAT) dropper into projects that updated to the affected releases.

If your project uses axios, this requires your immediate attention.

---

## 1. What Is a Supply Chain Attack?

A supply chain attack does not target your code directly. Instead, attackers compromise a trusted piece of software that your project depends on — in this case, a popular open-source npm package. When developers update their dependencies, they unknowingly pull in the malicious code along with the legitimate update.

Supply chain attacks are particularly dangerous because:

- They exploit implicit trust in well-known packages
- They can reach millions of projects in a single publish
- They bypass most application-level security controls
- Detection can be delayed since the malicious code hides inside a legitimate package

The axios attack is a textbook example of this threat model.

## 2. How the Attack Happened

### 2.1. Compromised Maintainer Account

Attackers gained access to the npm account of **jasonsaayman**, the primary axios maintainer. This was achieved by exploiting **long-lived npm access tokens** — credentials that had not been rotated or scoped, giving the attacker full publish access to the axios package.

### 2.2. Malicious Versions Published

Two versions of axios were published with the malicious payload embedded:

- **axios@1.14.1**
- **axios@0.30.4**

These versions appeared as routine point releases — exactly the kind of update developers apply without much scrutiny.

### 2.3. The Injected Dependency: plain-crypto-js

The attack used **dependency injection** as its delivery mechanism. Rather than modifying axios source code directly (which would be easier to spot in a diff), the malicious release added a new dependency — **plain-crypto-js@4.2.1** — to the axios `package.json`.

This package, disguised as a cryptography utility, was in reality a **cross-platform Remote Access Trojan (RAT) dropper**. When installed, it was capable of:

- Executing arbitrary commands on the infected host
- Exfiltrating environment variables, secrets, and credentials
- Establishing persistent access on developer machines and CI/CD environments
- Spreading laterally within build pipelines

The use of a fake nested dependency made the malicious code one layer removed from the axios package itself — a technique designed to reduce visibility and delay detection.

## 3. Who Is Affected

Any project that **updated to axios@1.14.1 or axios@0.30.4** during the window the malicious versions were live is potentially compromised. Given axios's download volume, the blast radius of this attack is significant.

Environments at elevated risk include:

- **Developer workstations** that ran `npm install` or `npm update` pulling the affected versions
- **CI/CD pipelines** that perform fresh installs on each build
- **Docker build processes** that install dependencies from npm at build time
- **Production servers** that install npm packages during deployment

Projects using version ranges such as `"axios": "^1.14.0"` in `package.json` would have automatically resolved to `1.14.1` on the next install.

## 4. Detecting If You Are Affected

### Check Your Installed Version

Run the following in your project directory:

```bash
npm list axios
```

If the output shows `1.14.1` or `0.30.4`, your environment has been exposed.

### Check for the Malicious Dependency

```bash
npm list plain-crypto-js
```

If this package appears in your dependency tree, treat the environment as compromised.

### Review Your Lock File

Check your `package-lock.json` or `yarn.lock` for references to `plain-crypto-js`. Presence in the lock file indicates the malicious package was resolved and installed.

### Audit Your Build Logs

If you have retained CI/CD build logs, search for install output that includes `plain-crypto-js` being downloaded or installed.

## 5. What You Should Do Right Now

### 5.1. Downgrade to a Safe Version

The malicious versions have been unpublished from npm, but the immediate remediation step is to pin your axios version to a known-safe release:

- For axios v1 users: downgrade to **axios@1.14.0**
- For axios v0 users: downgrade to **axios@0.30.3**

Update your `package.json`:

```json
"dependencies": {
  "axios": "1.14.0"
}
```

Then run:

```bash
npm install
```

Verify the lock file no longer references `plain-crypto-js`.

### 5.2. Rotate All Secrets and Credentials

If your development machine or CI/CD environment installed the affected versions, assume that **all secrets accessible during that time are compromised**. This includes:

- Environment variables in `.env` files
- API keys and tokens used in builds
- SSH keys present on the machine
- Database credentials
- Cloud provider credentials (AWS, GCP, Azure)
- npm tokens and registry credentials

Rotate these immediately, then audit access logs for unusual activity.

### 5.3. Audit Your CI/CD Pipeline

Review your pipeline configuration for:

- When `npm install` or `npm ci` was last run
- Whether the affected axios versions were installed during any builds
- What secrets and environment variables were accessible during those builds

### 5.4. Scan for Persistence Mechanisms

If the RAT dropper executed on any machine, check for persistence mechanisms such as:

- Unusual cron jobs or scheduled tasks
- New user accounts or SSH keys
- Unexpected outbound network connections
- Modified shell configuration files (`.bashrc`, `.zshrc`, `.profile`)

### 5.5. Enable npm Token Scoping and Expiry

For teams that publish their own npm packages, this incident is a strong reminder to:

- Use **scoped, short-lived tokens** for publishing
- Enable **two-factor authentication (2FA)** on npm accounts
- Audit which team members have publish access

## 6. Broader Lessons for Development Teams

### Lock Your Dependencies

Using exact versions (e.g., `"axios": "1.14.0"` rather than `"axios": "^1.14.0"`) in combination with a committed lock file (`package-lock.json`) ensures reproducible installs and prevents automatic resolution to a newly published malicious version.

### Use `npm ci` in CI/CD Environments

The `npm ci` command installs strictly from the lock file, ignoring the version ranges in `package.json`. This reduces — though does not eliminate — the risk of resolving unexpected versions.

### Monitor Dependencies Continuously

Tools such as **Socket**, **Snyk**, **Dependabot**, and **StepSecurity** can monitor your dependency tree for suspicious packages, unexpected new dependencies, or known malicious packages. Integrating one of these into your pipeline adds an important detection layer.

### Review Dependency Diffs Before Merging

When a dependency update PR is opened (manually or by a bot), review the full diff — including changes to `package.json` and the lock file. An unexpected new nested dependency is a red flag worth investigating before merging.

## 7. Official Response

The axios maintainer team and npm security team responded by:

- Unpublishing `axios@1.14.1` and `axios@0.30.4` from the npm registry
- Revoking the compromised tokens and securing the maintainer account
- Opening **GitHub issue #10604** with official guidance for affected users
- Coordinating with security researchers at Socket, Aikido, StepSecurity, and others who initially flagged the malicious packages

The issue has since been contained at the registry level, but remediation remains the responsibility of individual projects and teams.

## Conclusion

The axios supply chain attack is a stark reminder that no dependency — regardless of how established or widely trusted — is immune to compromise. The attack exploited a simple but effective technique: injecting a malicious dependency one level deep, packaged as a routine update, reaching millions of projects in hours.

For development teams, the response must go beyond just updating a version number. Secret rotation, pipeline auditing, and dependency hygiene are now immediate priorities for anyone who installed the affected versions.

At Genesisoft, we build and maintain web applications with security as a core requirement — from dependency management to environment hardening. If you have questions about securing your application stack or auditing your project dependencies, [reach out to our team](/#contact).
