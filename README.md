📧 Node.js Email Sender using Nodemailer


This Node.js script sends personalised emails to a list of users using Gmail and Nodemailer.


✅ This setup requires you to enable Two-Factor Authentication (2FA) on your Google account and generate an App Password.

🚀 Features

    Sends individual, personalised emails to each recipient.

    Uses Gmail with secure authentication (via App Passwords).

    Logs the status of each email sent.


📋 Prerequisites
Make sure you have the following ready:

    Node.js installed

    A Gmail account

    Two-Factor Authentication (2FA) enabled on your Gmail

    Nodemailer installed (npm install nodemailer)

🔐 Setting Up Gmail for Nodemailer: Google blocks less secure sign-ins, you MUST follow these steps:

    1. Enable 2-Step Verification
        Go to Google Account Settings
        Turn on 2-Step Verification for your Gmail account.

    2. Generate an App Password
        Go to Google App Passwords
        Select Mail as the App.
        Select Other as the device, and name it something like "Node.js App".
        Google will generate a 16-character password for you.
        Use this password instead of your normal Gmail password in the code!

📦 Installation
Clone/download the project folder.

    Run the following command to install dependencies:
        npm install nodemailer

🛠️ Usage
Replace the email and app password in the script:

        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_generated_app_password'
        }

Update the recipients list with your desired names and emails.

        Run the script:
            node email.js

If successful, you'll see messages like:

    ✅ Email sent successfully to subashdhungel555@gmail.com

If any error occurs, it will also be logged.

📜 Code Overview
Here's a quick glance at the key parts:

Transporter Setup:

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_app_password'
        }
    });


Recipient List:

    const recipients = [
        { email: 'example@gmail.com', name: 'Example Name' },
        // more recipients...
    ];

Sending Emails:

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(`❌ Error:`, error.message);
        } else {
            console.log(`✅ Email sent successfully to ${recipient.email}`);
        }
    });

⚠️ Important Notes

    Do not share your App Password or upload it publicly (like on GitHub).

    If you change your Gmail account password or security settings, you may need to generate a new App Password.

    Make sure the app password is correctly pasted with no spaces!

🧠 Credits

    Created with 💻 by Nirajan Dhungel.
