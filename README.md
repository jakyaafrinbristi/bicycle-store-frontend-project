

---

# Bicycle Store

## Project Overview

Bicycle Store is an e-commerce application that allows users to browse, order, and manage bicycles with secure authentication and a responsive design. The application provides a role-based dashboard for admins and customers, integrated payment gateways, and efficient product management functionalities.

### **Live Link**
[View the live project here](https://bicycle-store-frontend-project.vercel.app/)

---

## Tech Stack

- **Frontend**: React, Redux, Tailwind CSS, ShadCN/UI
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Payment Integration**: SurjoPay, Stripe (or other options)

---

## Features

### **User Registration & Authentication (Role-Based)**

- **Secure Registration & Login**: Users can register and log in with email and password. Admin roles can be manually updated.
- **JWT**: Secure user authentication via JWT tokens, stored in local storage.
- **Logout**: Removes the JWT from local storage and redirects the user to the login page.

### **Public Routes**

1. **Home Page**: 
   - **Navbar** with logo, navigation, and login/signup buttons.
   - **Featured Bicycles** showcasing popular models with a "View All" button.
   - **Extra Section** with testimonials or e-commerce-related content.
   - **Footer** with contact and social media links.
   
2. **All Bicycles Page**:
   - **Search & Filters** to browse by brand, price, category, etc.
   - **Dynamic Results** with real-time updates based on search queries or selected filters.
   - **Bicycle Cards** showcasing key details like name, model, and price.

3. **Bicycle Details Page**: 
   - Display detailed bicycle information and an option to proceed to the checkout page.

4. **About Page**: 
   - Details about the bicycle shop and its mission.

### **Private Routes**

1. **Checkout Page**:
   - Users can place orders for bicycles with payment integration.
   - **Order Form** includes product, user details, and payment method.
   - **Payment Integration** using SurjoPay, Stripe, or other gateways.

2. **Dashboard** (Role-Based Access):
   - **Admin Dashboard** for managing users, products, and orders (CRUD operations).
   - **User Dashboard** for viewing orders and managing profiles.

### **UI/UX Design**

- **Responsive Design**: Optimized for different screen sizes.
- **Error Handling**: User-friendly error messages for invalid login, out-of-stock products, etc.
- **Loading States**: Loaders or spinners during API calls.
- **Toasts**: Notifications for actions like successful login or placed orders.

---

## Backend Requirements

- **Database**: MongoDB with collections for Users, Bicycles, and Orders.
- **Authentication**: JWT token-based login system with hashed passwords.
- **CRUD Operations**: For bicycles and orders.
- **Payment Integration**: SurjoPay, Stripe, or other payment methods.
- **Error Handling**: Consistent error messages and proper validation.

---

## How to Run Locally

### **Frontend**

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/jakyaafrinbristi/bicycle-store-frontend-project
   ```
2. Install dependencies:
   ```bash
   cd bicycle-store-frontend-project
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### **Backend**

1. Clone the backend repository:
   ```bash
   git clone https://github.com/jakyaafrinbristi/bi-cycle-store
   ```
2. Install dependencies:
   ```bash
   cd bi-cycle-store
   npm install
   ```
3. Start the backend server:
   ```bash
   npm start
   ```

---
