# 🍳 Chef Claude

Chef Claude is a React recipe-generation app that turns a list of ingredients into a delicious recipe using AI.

This project was built as part of my React learning journey and helped me practice React state, components, forms, conditional rendering, API integration, and working with AI models.

## 🚀 Features

* 🥕 Add ingredients to your ingredient list
* 🗑️ Remove ingredients
* 🤖 Generate recipes using AI
* 📖 Display the generated recipe in a clean format
* ⚛️ Built with reusable React components
* 📱 Responsive and user-friendly interface

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**
* **AI API**
* **Git & GitHub**

## 📂 Project Structure

```text
src/
├── components/
│   ├── ClaudeRecipe.jsx
│   ├── Header.jsx
│   ├── IngredientsList.jsx
│   └── ...
├── App.jsx
├── Main.jsx
├── ai.js
├── index.jsx
└── ...
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd chef-claude
```

### 3. Install dependencies

```bash
npm install
```

### 4. Add your API key

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key_here
```

> **Important:** Never commit your API key to GitHub. Make sure `.env` is included in your `.gitignore`.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🧠 What I Learned

While building Chef Claude, I practiced:

* Managing state with `useState`
* Passing data between components using props
* Rendering lists with `.map()`
* Handling form submissions
* Conditional rendering
* Creating reusable React components
* Working with asynchronous JavaScript
* Calling an AI API from a React application
* Handling API responses and errors
* Structuring a React project
* Using environment variables
* Deploying React applications

## 🎯 Future Improvements

Some improvements I could add in the future:

* Add different cuisine/style options
* Add recipe saving functionality
* Add loading animations
* Add ingredient suggestions
* Add dietary preferences such as vegetarian or vegan
* Improve error handling
* Add recipe sharing functionality

## 👨‍💻 Author

**Shivam Bhosale**

This project is one of my React projects built while learning and improving my frontend development skills.

---

⭐ If you found this project interesting, consider giving the repository a star!
