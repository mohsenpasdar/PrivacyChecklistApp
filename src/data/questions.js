const questions = {
  Passwords: {
    questionsPageIntroduction: "Passwords are critical for protecting your digital accounts and personal information. In this category, you'll answer questions about your password habits. Choose 'Yes' or 'No' for each question to receive quick feedback. If you decide to leave the quiz at any point, your answers for this category will not be saved. Once all questions are answered, you can return to the category selection to either continue with other categories or see your partial results.",
    resultsIntroduction: "Passwords are your first line of defense against unauthorized access to your accounts. Ensuring strong, unique passwords for each account can significantly enhance your security.",
    scoreFeedback: {
      high: "Excellent! You have strong password practices. Keep up the good work to maintain your online safety.",
      medium: "Good effort! There’s room for improvement in securing your accounts with stronger password practices.",
      low: "Your password practices need improvement. Consider taking steps to secure your accounts with strong, unique passwords.",
    },
    items: [
      {
        id: 1,
        text: "Do you use unique passwords for each account?",
        feedback: {
          yes: "Great! Unique passwords reduce the risk of multiple accounts being compromised.",
          no: "Using the same password for multiple accounts increases vulnerability to breaches.",
        },
        recommendation: "Consider using unique passwords for each account to enhance security.",
      },
      {
        id: 2,
        text: "Do you use a password manager?",
        feedback: {
          yes: "Good job! Password managers help generate and store strong passwords securely.",
          no: "Not using a password manager can make it harder to maintain strong, unique passwords.",
        },
        recommendation: "Start using a password manager to securely manage your passwords.",
      },
    ],
  },
  "Social Media": {
    questionsPageIntroduction: "Social media platforms are great for communication but can pose privacy risks. This category will ask about your practices on social media. Select 'Yes' or 'No' for each question to get quick feedback. You can exit the quiz at any time without saving your answers. Once completed, return to the category selection to continue with other topics or see your partial results.",
    resultsIntroduction: "Social media platforms are powerful tools for communication but can pose significant privacy risks. Managing your visibility and avoiding oversharing helps protect your personal data.",
    scoreFeedback: {
      high: "Well done! You maintain excellent privacy practices on social media.",
      medium: "You’re doing well, but there’s room to improve your social media privacy settings.",
      low: "Your social media practices could expose you to privacy risks. Take steps to secure your online presence.",
    },
    items: [
      {
        id: 1,
        text: "Do you restrict who can see your social media posts?",
        feedback: {
          yes: "Well done! Restricting visibility helps protect your privacy from unwanted access.",
          no: "Allowing unrestricted access to your posts could expose sensitive information.",
        },
        recommendation: "Update your social media privacy settings to control who can view your posts.",
      },
      {
        id: 2,
        text: "Do you avoid sharing sensitive information online?",
        feedback: {
          yes: "Excellent! Avoiding sensitive information online reduces the risk of misuse.",
          no: "Sharing sensitive information can lead to privacy breaches or identity theft.",
        },
        recommendation: "Be cautious about sharing personal or sensitive details online.",
      },
    ],
  },
  "Device Security": {
    questionsPageIntroduction: "Device security is essential for protecting your digital life. In this section, you'll answer questions on securing your devices. Respond with 'Yes' or 'No' to receive immediate feedback. Feel free to leave the quiz if needed, and your answers won't be saved. Upon completing this section, you can return to the category selection to proceed with other topics or view partial results.",
    resultsIntroduction: "Device security is essential to protect your digital assets from unauthorized access. Regular updates and security measures help ensure your data remains safe.",
    scoreFeedback: {
      high: "Great job! Your device security practices are strong and effective.",
      medium: "You’re on the right track, but there’s room to strengthen your device security.",
      low: "Your device security needs significant improvement. Implement recommended practices to stay protected.",
    },
    items: [
      {
        id: 1,
        text: "Do you use a firewall on your device?",
        feedback: {
          yes: "Good work! A firewall helps block unauthorized access to your network.",
          no: "Not using a firewall can leave your device vulnerable to external threats.",
        },
        recommendation: "Enable a firewall on your device to safeguard your network.",
      },
      {
        id: 2,
        text: "Do you keep your device’s OS updated?",
        feedback: {
          yes: "Great! Keeping your OS updated ensures you have the latest security patches.",
          no: "Outdated operating systems may have vulnerabilities that can be exploited.",
        },
        recommendation: "Regularly update your operating system to stay protected.",
      },
    ],
  },
  "Data Sharing": {
    questionsPageIntroduction: "Sharing data is common in today's digital world. This category explores your practices with app permissions and third-party data sharing. Choose 'Yes' or 'No' to each question for instant feedback. You can stop anytime, and your answers for this section won't be saved. Complete this section to return to the category selection for more topics or partial results.",
    resultsIntroduction: "Sharing data is a part of digital life, but it's essential to review permissions and minimize the data shared with third-party apps to protect your privacy.",
    scoreFeedback: {
      high: "Excellent! You’re taking strong measures to control data sharing.",
      medium: "You’re doing well, but some improvements can be made in managing data sharing.",
      low: "Your data sharing practices need attention. Take action to better protect your information.",
    },
    items: [
      {
        id: 1,
        text: "Do you review permissions before sharing data with apps?",
        feedback: {
          yes: "Good practice! Reviewing permissions helps you control what data apps can access.",
          no: "Not reviewing permissions can lead to apps accessing unnecessary sensitive data.",
        },
        recommendation: "Always review app permissions before granting access to your data.",
      },
      {
        id: 2,
        text: "Do you limit data shared with third-party applications?",
        feedback: {
          yes: "Nice! Limiting data sharing reduces the chances of misuse by third parties.",
          no: "Sharing too much data with third parties increases your privacy risks.",
        },
        recommendation: "Restrict the data you share with third-party applications to enhance privacy.",
      },
    ],
  },
};

// Extract the categories from the questions object
const categories = Object.keys(questions);

export { questions, categories };
