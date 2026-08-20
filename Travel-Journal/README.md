# Travel Journal

A simple travel journal built with **React.js** that displays information about different travel destinations using reusable components and data-driven rendering.

## Features

* Displays multiple travel destinations
* Reusable `Entry` component
* Data-driven rendering using `.map()`
* Destination images and descriptions
* Country information
* Trip dates
* Google Maps links for each destination
* Responsive and clean layout

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Vite

## React Concepts Practiced

* Components
* Props
* Importing and exporting data
* `.map()` for rendering lists
* Passing objects as props
* Dynamic rendering
* React `key` prop

## Project Structure

```text
travel-journal/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   └── Entry.jsx
│   ├── App.jsx
│   ├── data.js
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## How It Works

The travel information is stored in `data.js` as an array of objects.

The `App` component uses `.map()` to loop through the data and create an `Entry` component for each destination.

Each `Entry` receives information through props such as:

* Image
* Title
* Country
* Google Maps link
* Travel dates
* Description

This makes the application easy to expand by simply adding another destination to the data array.

## Getting Started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL provided by Vite.

## What I Learned

This project helped me understand how React can be used to build reusable components and render dynamic content from an array of data instead of hard-coding each element.

---

**Project #2 using React.js 🚀**
