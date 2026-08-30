# 🎲 Tenzies — React Game

A fun and interactive **Tenzies dice game** built with **React.js**. The goal is simple: roll the dice until all ten dice show the same number while keeping all of them held.

## 🚀 Live Demo

🔗 **Live Demo:** [Add your deployed project link here]

## 🎮 How to Play

1. Click **Roll** to roll all unheld dice.
2. Click on a die to **hold** it.
3. Held dice will remain unchanged when you roll.
4. Continue rolling and holding dice until:

   * All 10 dice are held.
   * All 10 dice show the same number.
5. 🎉 You win!

Click **New Game** to start another round.

## ✨ Features

* 🎲 Generates 10 random dice
* 🖱️ Hold and release individual dice
* 🔄 Roll only unheld dice
* 🏆 Detects the winning condition automatically
* 🎉 Confetti animation when you win
* 🔁 New Game functionality
* 📱 Responsive and clean UI
* ⚡ Built with React functional components and hooks

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Vite**
* **nanoid**
* **react-confetti**

## 🧠 React Concepts Practiced

This project helped me practice several important React concepts:

* `useState`
* State management
* Functional components
* Props
* Event handling
* Conditional rendering
* Rendering lists with `.map()`
* Array methods such as `.every()`
* Updating arrays and objects in state
* Generating dynamic data
* Component reusability

## 📂 Project Structure

```text
src/
├── components/
│   └── Die.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd tenzies
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 📚 What I Learned

While building this project, I gained more practical experience with React state management and learned how to manage a game where multiple pieces of data need to update based on user interaction.

One of the most useful parts was implementing the winning condition by checking whether **all dice are held and all dice have the same value**.

## 🔮 Future Improvements

* Add a timer
* Track number of rolls
* Add a best-score system
* Add a high-score leaderboard
* Add sound effects
* Add different difficulty modes
* Improve mobile animations

## 👨‍💻 Author

**Shivam Bhosale**

Built as part of my journey learning and building projects with **React.js**.

---

⭐ If you like this project, consider giving the repository a star!
