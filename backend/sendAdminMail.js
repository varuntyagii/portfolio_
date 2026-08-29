const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendAdminMail(data) {
  console.log("📧 Sending ADMIN email...");

  const { data: result, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL
      ? `Varun Tyagi <${process.env.FROM_EMAIL}>`
      : "Varun Tyagi <hello@varuntyagi.qzz.io>",
    to: process.env.ADMIN_EMAIL || "vityagi98@gmail.com",
    replyTo: data.email,

    subject: `New message from ${data.name}`,

    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Request</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#eaeaea;
  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;
  color:#0f1111;
">

<table width="100%" cellpadding="0" cellspacing="0" border="0"
  style="background:#eaeaea;padding:32px 12px;">

  <tr>
    <td align="center">

      <!-- MAIN CARD -->
      <table width="600" cellpadding="0" cellspacing="0" border="0"
        style="
          width:100%;
          max-width:600px;
          background:#ffffff;
          border-radius:10px;
          overflow:hidden;
          box-shadow:0 2px 10px rgba(0,0,0,0.08);
        ">

        <!-- HERO BANNER - FIXED (HEIGHT FULL) -->
        <tr>
          <td style="padding:0; background-color:#1a1a2e;">
            <!-- Desktop support -->
            <!--[if (gte mso 9)|(IE)]>
            <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td background="https://res.cloudinary.com/dgxnwlg0w/image/upload/v1787045578/Portfolio_soyd7m.jpg" 
                    style="background-size:cover; background-position:center center; height:350px; padding:24px 32px;" 
                    valign="top">
            <![endif]-->
            
            <!-- VML for Outlook -->
            <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:350px;">
              <v:fill type="tile" src="https://res.cloudinary.com/dgxnwlg0w/image/upload/v1787045578/Portfolio_soyd7m.jpg" color="#1a1a2e" />
              <v:textbox inset="0,0,0,0">
            <![endif]-->
            
            <div style="
              background-image: url('https://res.cloudinary.com/dgxnwlg0w/image/upload/v1787045578/Portfolio_soyd7m.jpg');
              background-size: cover;
              background-position: center center;
              background-repeat: no-repeat;
              background-color: #1a1a2e;
              width: 100%;
              height: 350px;
              max-height: 350px;
              min-height: 300px;
              padding: 24px 32px;
              box-sizing: border-box;
            ">
              <a href="https://varuntyagi.qzz.io" target="_blank">
                <img
                  src="https://res.cloudinary.com/dgxnwlg0w/image/upload/v1787041389/logo-black_cigzlo.png"
                  alt="Varun Tyagi"
                  width="110"
                  style="display:block;width:110px;max-width:100%;height:auto;border:0;"
                >
              </a>
            </div>
            
            <!--[if gte mso 9]>
              </v:textbox>
            </v:rect>
            <![endif]-->
            
            <!--[if (gte mso 9)|(IE)]>
                </td>
              </tr>
            </table>
            <![endif]-->
          </td>
        </tr>

        <!-- HEADING -->
        <tr>
          <td style="padding:32px 24px 8px;" align="center">
            <h1 style="margin:0;font-size:22px;line-height:1.4;font-weight:700;color:#0f1111;text-align:center;">
              New message from ${data.name}
            </h1>
            <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#565959;text-align:center;">
              Someone just contacted you through your portfolio. Details below.
            </p>
          </td>
        </tr>

        <!-- CONTACT DETAILS CARD -->
        <tr>
          <td style="padding:24px 24px 8px;">
            <table width="100%" cellpadding="0" cellspacing="0"
              style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">

              <tr>
                <td style="background:#f7f7f7;padding:12px 20px;border-bottom:1px solid #e5e7eb;">
                  <p style="margin:0;font-size:11px;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:.5px;">
                    Contact details
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #eee;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-size:13px;color:#565959;width:90px;vertical-align:top;">Name</td>
                      <td style="font-size:14px;color:#0f1111;font-weight:600;">${data.name}</td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:16px 20px;border-bottom:1px solid #eee;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-size:13px;color:#565959;width:90px;vertical-align:top;">Email</td>
                      <td style="font-size:14px;">
                        <a href="mailto:${data.email}" style="color:#2563eb;font-weight:600;text-decoration:none;">
                          ${data.email}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:16px 20px;">
                  <p style="margin:0 0 8px;font-size:13px;color:#565959;">Message</p>
                  <div style="font-size:14px;line-height:1.7;color:#374151;white-space:pre-line;">
                    ${data.message}
                  </div>
                </td>
              </tr>

            </table>
          </td>
        </tr>

        <!-- CTA BUTTON -->
        <tr>
          <td style="padding:24px 24px 28px;" align="center">
            <a
              href="mailto:${data.email}?subject=Re:%20Your%20Portfolio%20Message"
              style="
                display:inline-block;
                padding:14px 36px;
                background:#111827;
                color:#ffffff;
                border-radius:999px;
                font-size:14px;
                font-weight:700;
                letter-spacing:.4px;
                text-decoration:none;
                text-transform:uppercase;
              "
            >
              Reply to ${data.name}
            </a>
          </td>
        </tr>

        <!-- DIVIDER -->
        <tr>
          <td style="padding:0 24px;">
            <div style="border-top:1px solid #e5e7eb;"></div>
          </td>
        </tr>

        <!-- SOCIAL -->
        <tr>
          <td style="padding:22px 24px;">
            <table cellpadding="0" cellspacing="0" style="width:100%;">
              <tr>
                <td style="font-size:12px;color:#6b7280;padding-right:12px;white-space:nowrap;">Connect:</td>
                <td style="padding-right:12px;">
                  <a href="https://instagram.com/varuntya9i" target="_blank">
                    <img src="https://img.icons8.com/fluency/48/instagram-new.png" width="22" height="22" alt="Instagram" style="display:block;border:0;">
                  </a>
                </td>
                <td style="padding-right:12px;">
                  <a href="https://linkedin.com/in/varuntyagi09" target="_blank">
                    <img src="https://img.icons8.com/fluency/48/linkedin.png" width="22" height="22" alt="LinkedIn" style="display:block;border:0;">
                  </a>
                </td>
                <td style="padding-right:12px;">
                  <a href="https://github.com/varuntyagii" target="_blank">
                    <img src="https://img.icons8.com/fluency/48/github.png" width="22" height="22" alt="GitHub" style="display:block;border:0;">
                  </a>
                </td>
                <td>
                  <a href="https://x.com/varuntyagi0" target="_blank">
                    <img src="https://img.icons8.com/ios-filled/50/x.png" width="16" height="16" alt="X" style="display:block;border:0;">
                  </a>
                </td>
                <td style="width:100%;"></td>
              </tr>
            </table>
          </td>
        </tr>

        <tr>
          <td style="padding:0 24px;">
            <div style="border-top:1px solid #e5e7eb;"></div>
          </td>
        </tr>

        <!-- SENT TO -->
        <tr>
          <td style="padding:20px 24px;">
            <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;text-align:center;">
              This notification was sent because a message was submitted through your portfolio contact form.
            </p>
          </td>
        </tr>

        <tr>
          <td style="padding:0 24px;">
            <div style="border-top:1px solid #e5e7eb;"></div>
          </td>
        </tr>

        <!-- FOOTER LINKS -->
        <tr>
          <td style="padding:20px 24px; text-align:center;">
            <a href="https://varuntyagi.qzz.io" target="_blank" style="font-size:12px;color:#6b7280;text-decoration:none;font-weight:600;">Portfolio</a>
            <span style="color:#d1d5db;">&nbsp;|&nbsp;</span>
            <a href="mailto:hello@varuntyagi.qzz.io" style="font-size:12px;color:#6b7280;text-decoration:none;font-weight:600;">Contact</a>
          </td>
        </tr>

        <!-- COPYRIGHT -->
        <tr>
          <td style="padding:4px 24px 28px; text-align:center;">
            <p style="margin:0;font-size:11px;color:#c7c7c7;">
              © ${new Date().getFullYear()} Varun Tyagi. All rights reserved.
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

  console.log("ADMIN RESULT:", result);
  console.log("ADMIN ERROR:", error);

  if (error) {
    throw new Error(error.message || JSON.stringify(error));
  }

  return result;
}

module.exports = sendAdminMail;