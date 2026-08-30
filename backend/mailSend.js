const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

async function mailSend(data) {
  console.log("📧 Sending USER email...");

  const { data: result, error } = await resend.emails.send({
    from: process.env.FROM_EMAIL
      ? `Varun Tyagi <${process.env.FROM_EMAIL}>`
      : "Varun Tyagi <hello@varuntyagi.qzz.io>",
    to: data.email,
    subject: "Thanks for reaching out, " + data.name + "!",

    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for reaching out</title>
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

        <!-- HERO BANNER - FIXED FOR BOTH -->
        <tr>
          <td style="padding:0; background-color:#1a1a2e;">
            <!-- Desktop Image (hidden on mobile) -->
            <!--[if (gte mso 9)|(IE)]>
            <table width="600" align="center" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td background="https://res.cloudinary.com/dgxnwlg0w/image/upload/v1787045578/Portfolio_soyd7m.jpg" style="background-size:cover; background-position:center center; height:350px; padding:24px 32px;" valign="top">
            <![endif]-->
            
            <!-- VML for Outlook support -->
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
              height: 400px;
              max-height: 400px;
              min-height: 350px;
              padding: 24px 32px;
              box-sizing: border-box;
            ">
              <a href="https://varuntyagi.vercel.app" target="_blank">
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

        <!-- HEADING + SUBTEXT -->
        <tr> 
          <td style="padding:32px 24px 8px;" align="center"> 
            <h1 style="margin:0;font-size:22px;line-height:1.4;font-weight:700;color:#0f1111;text-align:center;"> 
              Thanks for reaching out, ${data.name} <span style="font-size:16px;color:#888;">✧</span>
            </h1> 
            <p style="margin:12px 0 0;font-size:14px;line-height:1.6;color:#565959;text-align:center;"> 
              I've received your message and will get back to you as soon as possible.
            </p> 
          </td> 
        </tr>

        <!-- CTA BUTTON -->
        <tr>
          <td style="padding:20px 32px 28px;" align="center">
            <a
              href="https://varuntyagi.vercel.app"
              target="_blank"
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
              View Portfolio
            </a>
          </td>
        </tr>

        <!-- DIVIDER -->
        <tr>
          <td style="padding:0 24px;">
            <div style="border-top:1px solid #e5e7eb;"></div>
          </td>
        </tr>

        <!-- SOCIAL ICONS -->
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

        <!-- SENT-TO -->
        <tr>
          <td style="padding:20px 24px;">
            <p style="margin:0;font-size:12px;line-height:1.6;color:#9ca3af;text-align:center;">
              This message was sent to
              <a href="mailto:${data.email}" style="color:#2563eb;text-decoration:none;">${data.email}</a>
              because you submitted a message through my portfolio contact form.
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
            <a href="https://varuntyagi.vercel.app/" target="_blank" style="font-size:12px;color:#6b7280;text-decoration:none;font-weight:600;">Portfolio</a>
            <span style="color:#d1d5db;">&nbsp;|&nbsp;</span>
            <a href="mailto:hello@varuntyagi0099@gmail.com" style="font-size:12px;color:#6b7280;text-decoration:none;font-weight:600;">Contact</a>
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

  console.log("RESULT:", result);
  console.log("ERROR:", error);

  if (error) {
    throw new Error(error.message || JSON.stringify(error));
  }

  return result;
}

module.exports = mailSend;