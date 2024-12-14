const questions = {
  "Password Security": {
    questionsPageIntroduction:
      "Passwords are critical for protecting your digital accounts and personal information. In this category, you'll answer questions about your password habits. Choose 'Yes' or 'No' for each question to receive quick feedback. If you decide to leave the quiz at any point, your answers for this category will not be saved. Once all questions are answered, you can return to the category selection to either continue with other categories or see your partial results.",
    resultsIntroduction:
      "Passwords are your first line of defense against unauthorized access to your accounts. Ensuring strong, unique passwords for each account can significantly enhance your security.",
    scoreFeedback: {
      high: "Excellent! You have strong password practices. Keep up the good work to maintain your online safety.",
      medium:
        "Good effort! There’s room for improvement in securing your accounts with stronger password practices.",
      low: "Your password practices need improvement. Consider taking steps to secure your accounts with strong, unique passwords.",
    },
    items: [
      {
        id: 1,
        text: "Do you use strong passwords that include a mix of letters, numbers, and symbols?",
        feedback: {
          yes: "Great! Strong passwords provide robust protection against unauthorized access.",
          no: "Weak passwords are easier to guess, making your accounts vulnerable.",
        },
        recommendation:
          "Create strong passwords with a mix of letters, numbers, and symbols.",
      },
      {
        id: 2,
        text: "Do you avoid reusing passwords across multiple accounts?",
        feedback: {
          yes: "Good job! Avoiding reused passwords reduces vulnerability to breaches.",
          no: "Reusing passwords increases the risk of multiple accounts being compromised.",
        },
        recommendation:
          "Avoid reusing passwords to enhance your account security.",
      },
      {
        id: 3,
        text: "Have you enabled two-factor authentication (2FA) on your accounts?",
        feedback: {
          yes: "Excellent! 2FA adds an extra layer of security to your accounts.",
          no: "Not enabling 2FA leaves your accounts more vulnerable to unauthorized access.",
        },
        recommendation:
          "Enable two-factor authentication for critical accounts.",
      },
      {
        id: 4,
        text: "Do you periodically update your passwords?",
        feedback: {
          yes: "Good practice! Regular updates reduce the risk of long-term exposure to breaches.",
          no: "Not updating passwords can leave your accounts vulnerable to exploitation over time.",
        },
        recommendation: "Regularly update your passwords to enhance security.",
      },
      {
        id: 5,
        text: "Do you use a password manager?",
        feedback: {
          yes: "Great! Password managers help securely manage complex passwords.",
          no: "Not using a password manager can make it harder to maintain strong, unique passwords.",
        },
        recommendation:
          "Start using a password manager to securely manage your passwords.",
      },
    ],
  },
  "Device and App Privacy": {
    questionsPageIntroduction:
      "Device and app privacy is essential for protecting your personal data and ensuring safe usage. This category explores your practices with apps and devices. Choose 'Yes' or 'No' for each question to get quick feedback. You can exit the quiz anytime, and your answers for this section won't be saved. Complete this section to return to the category selection for more topics or partial results.",
    resultsIntroduction:
      "Device and app privacy protects your personal information from unauthorized access. Regular updates and careful permissions management are crucial for security.",
    scoreFeedback: {
      high: "Excellent! Your device and app privacy practices are strong.",
      medium:
        "Good work, but there's room for improvement in securing your devices and apps.",
      low: "Your device and app privacy needs significant attention. Take steps to enhance protection.",
    },
    items: [
      {
        id: 1,
        text: "Do you regularly update the software on your devices?",
        feedback: {
          yes: "Great! Regular updates keep your devices secure with the latest patches.",
          no: "Outdated software can leave your devices vulnerable to security breaches.",
        },
        recommendation:
          "Regularly update your device software to ensure security.",
      },
      {
        id: 2,
        text: "Do you review the permissions granted to apps on your phone?",
        feedback: {
          yes: "Good job! Reviewing permissions helps limit unnecessary data access.",
          no: "Not reviewing permissions allows apps to access sensitive data unnecessarily.",
        },
        recommendation:
          "Regularly review app permissions to manage data access.",
      },
      {
        id: 3,
        text: "Do you avoid using public Wi-Fi without a VPN?",
        feedback: {
          yes: "Nice! Avoiding unsecured networks reduces your data privacy risks.",
          no: "Using public Wi-Fi without a VPN exposes your data to potential interception.",
        },
        recommendation: "Use a VPN when connecting to public Wi-Fi networks.",
      },
      {
        id: 4,
        text: "Do you limit unnecessary location tracking on your phone?",
        feedback: {
          yes: "Good choice! Limiting location tracking helps protect your privacy.",
          no: "Always-on location tracking can compromise your privacy.",
        },
        recommendation: "Turn off location tracking unless necessary.",
      },
      {
        id: 5,
        text: "Do you use antivirus software on your devices?",
        feedback: {
          yes: "Excellent! Antivirus software provides additional security layers.",
          no: "Not using antivirus software leaves your devices vulnerable to malware.",
        },
        recommendation:
          "Install antivirus software to protect against malware.",
      },
    ],
  },
  "Social Media Privacy": {
    questionsPageIntroduction:
      "Social media platforms are great for communication but can pose privacy risks. This category will ask about your practices on social media. Select 'Yes' or 'No' for each question to get quick feedback. You can exit the quiz at any time without saving your answers. Once completed, return to the category selection to continue with other topics or see your partial results.",
    resultsIntroduction:
      "Social media platforms are powerful tools for communication but can pose significant privacy risks. Managing your visibility and avoiding oversharing helps protect your personal data.",
    scoreFeedback: {
      high: "Well done! You maintain excellent privacy practices on social media.",
      medium:
        "You’re doing well, but there’s room to improve your social media privacy settings.",
      low: "Your social media practices could expose you to privacy risks. Take steps to secure your online presence.",
    },
    items: [
      {
        id: 1,
        text: "Do you review and update the privacy settings on your social media accounts?",
        feedback: {
          yes: "Great! Keeping your privacy settings updated ensures better control over your personal data.",
          no: "Not reviewing your privacy settings can leave your data exposed to unnecessary risks.",
        },
        recommendation:
          "Regularly update your social media privacy settings to protect your data.",
      },
      {
        id: 2,
        text: "Do you avoid sharing personal details (e.g., address, phone number) on social media?",
        feedback: {
          yes: "Good choice! Avoiding sharing personal details helps maintain your privacy.",
          no: "Sharing personal details on social media can increase your risk of identity theft.",
        },
        recommendation:
          "Refrain from sharing personal details on social media platforms.",
      },
      {
        id: 3,
        text: "Do you avoid connecting your social media accounts to third-party apps?",
        feedback: {
          yes: "Good job! Avoiding third-party app connections helps maintain control over your data.",
          no: "Connecting to third-party apps can increase your exposure to privacy risks.",
        },
        recommendation:
          "Review and disconnect unnecessary third-party apps from your social media accounts.",
      },
      {
        id: 4,
        text: "Do you regularly clean up old posts and photos?",
        feedback: {
          yes: "Great! Cleaning up old posts helps reduce your digital footprint.",
          no: "Leaving old posts online can reveal outdated or sensitive information.",
        },
        recommendation:
          "Periodically review and clean up old social media posts and photos.",
      },
      {
        id: 5,
        text: "Do you limit the audience of your posts to friends only?",
        feedback: {
          yes: "Well done! Limiting your audience helps protect your personal content.",
          no: "Public posts can expose your content to unintended viewers.",
        },
        recommendation:
          "Adjust your social media settings to limit post visibility to friends.",
      },
    ],
  },
  "Data Sharing Awareness": {
    questionsPageIntroduction:
      "Sharing data is common in today's digital world. This category explores your practices with app permissions and third-party data sharing. Choose 'Yes' or 'No' to each question for instant feedback. You can stop anytime, and your answers for this section won't be saved. Complete this section to return to the category selection for more topics or partial results.",
    resultsIntroduction:
      "Sharing data is a part of digital life, but it's essential to review permissions and minimize the data shared with third-party apps to protect your privacy.",
    scoreFeedback: {
      high: "Excellent! You’re taking strong measures to control data sharing.",
      medium:
        "You’re doing well, but some improvements can be made in managing data sharing.",
      low: "Your data sharing practices need attention. Take action to better protect your information.",
    },
    items: [
      {
        id: 1,
        text: "Do you read the privacy policy before signing up for new services?",
        feedback: {
          yes: "Good practice! Understanding privacy policies helps you know how your data will be used.",
          no: "Skipping privacy policies can lead to unexpected data sharing.",
        },
        recommendation: "Read privacy policies before signing up for services.",
      },
      {
        id: 2,
        text: "Do you limit your use of loyalty cards or points programs?",
        feedback: {
          yes: "Good decision! Limiting loyalty programs helps protect your data.",
          no: "Loyalty programs often track your purchases and personal preferences.",
        },
        recommendation:
          "Limit your use of loyalty programs to protect your data.",
      },
      {
        id: 3,
        text: "Do you avoid sharing your email address or phone number with every website or app?",
        feedback: {
          yes: "Good decision! Limiting contact sharing helps protect your privacy.",
          no: "Sharing contact details widely increases the risk of spam and data breaches.",
        },
        recommendation:
          "Be selective about sharing your contact details online.",
      },
      {
        id: 4,
        text: "Have you checked whether your data has been part of a breach (e.g., on HaveIBeenPwned)?",
        feedback: {
          yes: "Good job! Monitoring for breaches helps you take timely action to protect your data.",
          no: "Not checking for breaches could leave you unaware of compromised data.",
        },
        recommendation:
          "Regularly check if your data has been breached using tools like HaveIBeenPwned.",
      },
      {
        id: 5,
        text: "Do you limit the data you share with websites to only what is necessary?",
        feedback: {
          yes: "Great! Minimizing shared data reduces your exposure to risks.",
          no: "Oversharing can increase the likelihood of data misuse.",
        },
        recommendation: "Share only the necessary data with websites and apps.",
      },
    ],
  },
  "Surveillance Awareness": {
    questionsPageIntroduction:
      "Surveillance risks are increasingly present in today's digital world. This category focuses on recognizing and mitigating these risks. Answer 'Yes' or 'No' to each question for instant feedback. You can exit anytime, and your answers for this section won't be saved. Complete this section to return to the category selection for more topics or partial results.",
    resultsIntroduction:
      "Being aware of surveillance risks helps you protect your privacy. Simple measures can significantly enhance your security against surveillance threats.",
    scoreFeedback: {
      high: "Excellent! You’re well aware of surveillance risks and take appropriate measures.",
      medium:
        "Good effort! There’s room for improvement in mitigating surveillance risks.",
      low: "Your awareness of surveillance risks needs improvement. Take steps to protect your privacy.",
    },
    items: [
      {
        id: 1,
        text: "Do you cover your laptop or phone camera when not in use?",
        feedback: {
          yes: "Good job! Covering your camera helps prevent unauthorized surveillance.",
          no: "Uncovered cameras can be exploited by malicious actors for spying.",
        },
        recommendation:
          "Use a camera cover to protect against unauthorized access.",
      },
      {
        id: 2,
        text: "Are you aware of surveillance devices (e.g., smart speakers) in your home?",
        feedback: {
          yes: "Great! Awareness helps you manage and minimize surveillance risks.",
          no: "Unawareness can lead to unintentional data collection through devices.",
        },
        recommendation:
          "Regularly review and manage smart devices in your home.",
      },
      {
        id: 3,
        text: "Do you use end-to-end encrypted messaging apps (e.g., Signal)?",
        feedback: {
          yes: "Excellent! Encrypted messaging apps protect your communication privacy.",
          no: "Using unencrypted apps can expose your messages to interception.",
        },
        recommendation:
          "Switch to end-to-end encrypted messaging apps for secure communication.",
      },
      {
        id: 4,
        text: "Do you use browser extensions that block trackers (e.g., uBlock Origin)?",
        feedback: {
          yes: "Nice! Blocking trackers helps maintain your online privacy.",
          no: "Not using tracker blockers allows websites to collect data on your browsing habits.",
        },
        recommendation:
          "Install browser extensions to block trackers and enhance privacy.",
      },
      {
        id: 5,
        text: "Do you regularly review privacy settings on your devices?",
        feedback: {
          yes: "Great! Regular reviews ensure your settings align with your privacy needs.",
          no: "Outdated settings might not offer adequate protection.",
        },
        recommendation:
          "Review and update privacy settings on your devices regularly.",
      },
    ],
  },
  "Online Shopping & Payment Security": {
    questionsPageIntroduction:
      "Shopping online and making digital payments are convenient, but they also come with risks. In this category, you'll evaluate your practices to ensure secure transactions and protect your financial information. Choose 'Yes' or 'No' for each question to receive quick feedback. If you decide to leave the quiz at any point, your answers for this category will not be saved. Once all questions are answered, you can return to the category selection to either continue with other categories or see your partial results.",
    resultsIntroduction:
      "Online shopping and digital payments can expose you to potential risks like fraud and identity theft. By following best practices, you can safeguard your transactions and enjoy a secure shopping experience.",
    scoreFeedback: {
      high: "Excellent! Your online shopping and payment security practices are strong. Keep up the great work to stay protected.",
      medium:
        "Good effort! You’re on the right track, but there’s room to improve your transaction security.",
      low: "Your online shopping and payment security practices need improvement. Consider implementing the recommended steps to protect your financial information.",
    },
    items: [
      {
        id: 1,
        text: "Do you verify the legitimacy of websites before making purchases?",
        feedback: {
          yes: "Great! Verifying websites helps ensure you’re shopping on trusted platforms.",
          no: "Skipping verification can expose you to fraudulent websites.",
        },
        recommendation:
          "Always verify the legitimacy of websites before making purchases.",
      },
      {
        id: 2,
        text: "Do you use secure payment methods, such as virtual cards or payment apps, instead of directly entering your card details?",
        feedback: {
          yes: "Good job! Secure payment methods add an extra layer of protection.",
          no: "Using less secure payment methods increases the risk of data theft.",
        },
        recommendation:
          "Use secure payment methods, like virtual cards or payment apps, to safeguard your transactions.",
      },
      {
        id: 3,
        text: "Do you avoid saving payment information on e-commerce platforms?",
        feedback: {
          yes: "Nice! Avoiding stored payment details reduces exposure in case of a breach.",
          no: "Saving payment details increases the risk of misuse if the platform is breached.",
        },
        recommendation:
          "Refrain from saving payment information on e-commerce platforms for enhanced security.",
      },
      {
        id: 4,
        text: "Do you check for HTTPS encryption on websites before entering sensitive information?",
        feedback: {
          yes: "Excellent! HTTPS encryption ensures your data is transmitted securely.",
          no: "Using non-encrypted sites can expose your sensitive information to theft.",
        },
        recommendation:
          "Always check for HTTPS encryption on websites before entering sensitive information.",
      },
      {
        id: 5,
        text: "Have you enabled transaction alerts to monitor your payment activity?",
        feedback: {
          yes: "Great! Transaction alerts help you quickly detect unauthorized activities.",
          no: "Not using transaction alerts can delay your response to suspicious activities.",
        },
        recommendation:
          "Enable transaction alerts to monitor your payment activity in real-time.",
      },
    ],
  },
};

// Extract the categories from the questions object
const categories = Object.keys(questions);

export { questions, categories };
