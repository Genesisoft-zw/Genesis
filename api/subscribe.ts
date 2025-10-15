import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res
        .status(400)
        .json({ error: "Please enter a valid email address" });
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!audienceId) {
      console.error("RESEND_AUDIENCE_ID is not configured");
      return res.status(500).json({ error: "Server configuration error" });
    }

    // Add contact to Resend audience
    try {
      await resend.contacts.create({
        email: email,
        audienceId: audienceId,
      });
    } catch (audienceError: any) {
      // Check if it's a duplicate contact error
      if (
        audienceError?.message?.includes("already exists") ||
        audienceError?.message?.includes("duplicate")
      ) {
        return res.status(400).json({
          error: "This email is already subscribed to our newsletter",
        });
      }
      throw audienceError; // Re-throw if it's a different error
    }

    // Send welcome email
    try {
      await resend.emails.send({
        from: "Genesisoft <info@genesisoft.co.zw>",
        to: email,
        subject: "Welcome to Genesisoft Newsletter!",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to Genesisoft</title>
            </head>
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
                <tr>
                  <td align="center">
                    <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      <!-- Header -->
                      <tr>
                        <td style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); padding: 40px 20px; text-align: center;">
                          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Welcome to Genesisoft!</h1>
                        </td>
                      </tr>
                      
                      <!-- Content -->
                      <tr>
                        <td style="padding: 40px 30px;">
                          <h2 style="color: #1f2937; margin: 0 0 20px 0; font-size: 22px;">Thank you for subscribing!</h2>
                          <p style="color: #4b5563; line-height: 1.6; margin: 0 0 15px 0; font-size: 16px;">
                            We're thrilled to have you join our community of innovators and tech enthusiasts.
                          </p>
                          <p style="color: #4b5563; line-height: 1.6; margin: 0 0 15px 0; font-size: 16px;">
                            You'll receive updates about:
                          </p>
                          <ul style="color: #4b5563; line-height: 1.8; margin: 0 0 20px 0; padding-left: 20px;">
                            <li>Latest tech insights and industry trends</li>
                            <li>Innovative solutions and case studies</li>
                            <li>Exclusive offers and updates</li>
                            <li>Tips and best practices for digital transformation</li>
                          </ul>
                          <p style="color: #4b5563; line-height: 1.6; margin: 0 0 25px 0; font-size: 16px;">
                            Stay tuned for our next newsletter!
                          </p>
                          
                          <!-- CTA Button -->
                          <table width="100%" cellpadding="0" cellspacing="0">
                            <tr>
                              <td align="center">
                                <a href="https://www.genesisoft.co.zw" style="display: inline-block; background-color: #2563eb; color: #ffffff; text-decoration: none; padding: 14px 30px; border-radius: 6px; font-weight: bold; font-size: 16px;">
                                  Visit Our Website
                                </a>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Footer -->
                      <tr>
                        <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                          <p style="color: #6b7280; margin: 0 0 10px 0; font-size: 14px;">
                            <strong>Genesisoft</strong><br>
                            Harare, Zimbabwe<br>
                            <a href="mailto:info@genesisoft.co.zw" style="color: #2563eb; text-decoration: none;">info@genesisoft.co.zw</a>
                          </p>
                          <p style="color: #9ca3af; margin: 10px 0 0 0; font-size: 12px;">
                            You're receiving this email because you subscribed to our newsletter.<br>
                            If you wish to unsubscribe, please contact us.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError);
      // Don't fail the subscription if email fails
      // The contact is already added to the audience
    }

    return res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter!",
    });
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    return res.status(500).json({
      error: "Failed to subscribe. Please try again later.",
    });
  }
}
