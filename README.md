# Kudos -frontend documentation
This repository contains the frontend code for **Kudos**, an review app built with **React.js**, **Vite**, and **Tailwind CSS**. The frontend allows users to submit reviews with ratings across six categories and displays the final calculated rating.
---
## Table of contents
1. [How the Code Works](#how-the-code-works)
2. [Key Components](#key-components)
3. [Deployment on Vercel](#deployment-on-vercel)
4. [Folder Structure](#folder-structure)
5. [Contributing](#contributing)
6. [Technologies](#technologies)
---
## How the code works
### 1. **Form submission**
- [x] The frontend collects user input through a form with six rating categories (skills, availability, communication, quality, deadlines, cooperation) and a comments section.
- [ ] When the form is submitted, the data is sent to the backend via an API request using **Axios**.
### 2. **Final rating calculation**
- [ ] The backend stores the final rating in MongoDb.
- [x] The frontend displays the final rating to the user after a successful submission.
### 3. **Styling with Tailwind CSS**
- [x] The app uses **Tailwind CSS** for styling, which provides utility classes for rapid UI development.
- [ ] Components are styled directly in the JSX using Tailwind classes, making the code clean and easy to maintain.
---
## Key components
### 1. **App component (`src/App.jsx`)**
- [x] The main component that renders the review form.
- [x] Manages form state using React’s `useState` hook.
- [x] Handles form submission and displays the final rating.
### 2. **Tailwind CSS (`src/index.css`)**
- [x] Imports Tailwind’s base, components, and utilities for styling.
- [ ] Ensures consistent and responsive design across devices.
### 3. **Axios for API requests**
- [ ] Used to send form data to the backend and receive the final rating.
- [ ] Handles errors and displays alerts to the user.
---
## Deployment on Vercel
**Install Vercel CLI**
- Install the Vercel CLI globally:
  ```bash
  npm install -g vercel
  ```
**Deploy the app**
- Navigate to the `kudos-front` folder:
  ```bash
  cd kudos-front
  ```
- To deploy run:
  ```bash
  vercel
  ```
## Folder structure
```
frontend/
├── public/            # Static assets (e.g., favicon)
├── src/
│   ├── App.jsx        # Main React component
│   ├── main.jsx       # Entry point for the app
│   ├── index.css      # Tailwind CSS imports
├── .gitignore         # Files to ignore in Git
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration
├── README.md          # Project documentation
```
---
## Contributing
Contributions are welcome! If you’re new to coding like me, let's collaborate👥:
1. **Report bugs**: Open an issue describing the problem.
2. **Suggest features**: Share your ideas for new features or improvements.
3. **Submit PR**: Fork the repository, make your changes, and submit a pull request.
---
## Technologies
- [Vite](https://vitejs.dev/) for the fast development setup.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [React](https://reactjs.org/) for the frontend library.
- [Vercel](https://vercel.com/) for seamless deployment.
---
