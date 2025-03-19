# Kudos - frontend documentation
This repository contains the frontend code for Kudos, an review app built with the MERN stack. The frontend (React, Vite, and Tailwind CSS) allows users to submit reviews with ratings     across six categories. More features along the way 🙂
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
### 4. **User Authentication**
- [ ] Users can log in or create an account.
- [ ] After logging in, users are redirected to the dashboard.
### 5. **Dashboard**
- [ ] Users can see their received reviews.
- [ ] Users can send reviews to employers.
---
## Key components
### 1. **App component (`src/App.jsx`)**
- [x] The main component that handles routing and redirects.
### 2. **Login component (`src/pages/Auth/Login.jsx`)**
- [x] Handles user login and redirects to the dashboard.
### 3. **Dashboard component (`src/pages/Auth/Home/Dashboard.jsx`)**
- [x] Displays received reviews and provides a form to send reviews.
### 4. **ReviewList component (`src/components/ReviewList.jsx`)**
- [x] Displays a list of received reviews.
### 5. **SendReviewForm component (`src/components/SendReviewForm.jsx`)**
- [x] Provides a form to send reviews to employers.
### 6. **FormInput component (`src/components/FormInput.jsx`)**
- [x] Reusable input component for form fields.
### 7. **StarRating component (`src/components/StarRating.jsx`)**
- [x] Reusable component for star rating input.
### 8. **FormSection component (`src/components/FormSection.jsx`)**
- [x] Reusable component for form sections.
### 9. **useFormData hook (`src/hooks/useFormData.js`)**
- [x] Custom hook to manage form data and handle changes.
### 2. **Tailwind CSS (`src/index.css`)**
- [x] Imports Tailwind’s base, components, and utilities for styling.
- [ ] Ensures consistent and responsive design across devices.
### 3. **Axios for API requests**
- [ ] Used to send form data to the backend and receive the final rating.
- [ ] Handles errors and displays alerts to the user.
---
## Deployment on Vercel
- [ ] Install Vercel CLI**
  ```bash
  npm install -g vercel
  ```
- [ ] Deploy the app**
  ```bash
  vercel
  ```
## Folder structure
```
frontend/
├── public/          
├── src/
│   ├── components/
│   │   ├── FormInput.jsx
│   │   ├── FormSection.jsx
│   │   ├── ReviewList.jsx
│   │   ├── SendReviewForm.jsx
│   │   ├── StarRating.jsx
│   ├── hooks/
│   │   ├── useFormData.js
│   ├── pages/
│   │   ├── Auth/
│   │   │   ├── Home/
│   │   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   ├── App.jsx 
│   ├── main.jsx    
│   ├── index.css     
├── .gitignore        
├── [package.json](http://_vscodecontentref_/1)     
├── [vite.config.js](http://_vscodecontentref_/2)    
├── [README.md](http://_vscodecontentref_/3)         
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
