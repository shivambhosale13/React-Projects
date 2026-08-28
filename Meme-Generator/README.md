# 😂 Meme Generator

A simple and interactive **Meme Generator** built with **React.js**. The app fetches popular meme templates from the Imgflip API and allows users to customize the top and bottom text before generating a random meme image.

## 🚀 Features

* Fetches meme templates from the **Imgflip API**
* Generates a random meme template
* Add custom **top text**
* Add custom **bottom text**
* Dynamically updates the meme preview
* Built with React state and hooks
* Responsive and simple user interface

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Imgflip API**
* **Vite**

## 📚 React Concepts Practiced

This project helped me practice several important React concepts:

* `useState`
* `useEffect`
* Fetching data from an API
* Working with asynchronous JavaScript using `.then()`
* Handling form inputs
* Controlled components
* Event handlers
* Updating objects inside state
* Selecting random items from an array
* Conditional/dynamic rendering

## 🔌 API

The project uses the Imgflip API to retrieve meme templates:

`https://api.imgflip.com/get_memes`

The API provides an array of popular meme templates, from which the application randomly selects a meme.

## 📂 Project Structure

```text
meme-generator/
├── public/
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── Main.jsx
│   ├── index.css
│   └── ...
├── package.json
├── index.html
└── README.md
```

> The exact structure may vary depending on the project setup.

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/meme-generator.git
```

### 2. Navigate into the project

```bash
cd meme-generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available at the local development URL provided by Vite.

## 🎯 How It Works

When the application loads, it fetches meme templates from the Imgflip API using `useEffect()`.

The templates are stored in React state:

```js
const [allMemes, setAllMemes] = useState([])
```

When the user clicks **"Get a new meme image"**, a random meme is selected from the fetched array and its image URL is stored in the current meme state.

The text inputs are controlled using React state, allowing the meme text to update dynamically as the user types.

## 💡 Future Improvements

* Add a **Download Meme** button
* Allow users to upload their own images
* Add font and text color customization
* Add text size controls
* Add multiple text fields
* Add drag-and-drop text positioning
* Add social media sharing

## 👨‍💻 Author

**Shivam Bhosale**

This project was built as part of my journey learning **React.js and modern web development**.

---

⭐ If you like the project, consider giving the repository a star!
