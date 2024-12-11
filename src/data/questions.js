const questions = {
  Passwords: [
    { id: 1, text: "Do you use unique passwords for each account?" },
    { id: 2, text: "Do you use a password manager?" },
  ],
  "Social Media": [
    { id: 1, text: "Do you restrict who can see your social media posts?" },
    { id: 2, text: "Do you avoid sharing sensitive information online?" },
  ],
  "Device Security": [
    { id: 1, text: "Do you use a firewall on your device?" },
    { id: 2, text: "Do you keep your device’s OS updated?" },
  ],
  "Data Sharing": [
    { id: 1, text: "Do you review permissions before sharing data with apps?" },
    { id: 2, text: "Do you limit data shared with third-party applications?" },
  ],
};

// Extract the categories from the questions object
const categories = Object.keys(questions);

export { questions, categories };
