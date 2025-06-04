# 🛍️ React E-commerce Frontend AMZ

This is the frontend application for an e-commerce platform, built using **React.js**, **React Router**, and **Bootstrap**. It provides a clean, UI for users to browse products, view product details, manage a shopping cart and wishlist, and update their address information.

---

## 🚀 Tech Stack

- **React.js** – Frontend UI framework  
- **React Router DOM** – Client-side routing  
- **Bootstrap 5** – Styling and layout  
- **Bootstrap Icons** – Icon library  
- **React Context API** – State management  
- **npm** – Package manager  

---

<pre lang="markdown"> ### 📁 Project Structure ```text frontend/ ├── public/ ├── src/ │ ├── Component/ │ │ ├── Nav.jsx │ │ └── Footer.jsx │ ├── context/ │ │ ├── AddressContext.jsx │ │ ├── CartContext.jsx │ │ ├── ProductContext.jsx │ │ ├── SearchContext.jsx │ │ ├── UserContext.jsx │ │ └── WishListContext.jsx │ ├── Pages/ │ │ ├── HomePage.jsx │ │ ├── ProductListing.jsx │ │ ├── ProductDetails.jsx │ │ ├── UserProfile.jsx │ │ ├── Cart.jsx │ │ └── WishList.jsx │ ├── App.jsx │ └── main.jsx ``` </pre>


---

## 🌐 Available Routes

| Route               | Component         | Description                          |
|--------------------|------------------|--------------------------------------|
| `/`                | HomePage         | Landing page                         |
| `/product`         | ProductListing   | List all products                    |
| `/product/:proId`  | ProductDetails   | Product detail page                  |
| `/user`            | UserProfile      | User info and address management     |
| `/user/cart`       | Cart             | Shopping cart                        |
| `/user/wishlist`   | WishList         | Wishlist page                        |

---

## 🧠 Context API Usage

| Context            | Purpose                                 |
|--------------------|------------------------------------------|
| `ProductContext`   | Manages product data                    |
| `CartContext`      | Handles shopping cart state             |
| `WishListContext`  | Handles wishlist items                  |
| `AddressContext`   | Manages user addresses                  |
| `SearchContext`    | Manages search and filter queries       |
| `UserContext`      | Stores and provides user data           |

---
## 🎨 Styling
Bootstrap 5 used for layout, spacing, and components
Fully responsive design (mobile, tablet, desktop)
Bootstrap Icons for UI icons

 -✅ Features
 -✅ Product listing and filtering
 -✅ Product detail view
 -✅ Add to cart and wishlist
 -✅ View and update cart
 -✅ Manage user profile and addresses
 -✅ Fully responsive layout
 -✅ State managed with React Context API


⚙️ How to Run Locally
Follow these steps to set up and run the frontend on your local machine:

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/lav1706/AMZ_Frontend.git
cd frontend
2. Install Dependencies
Make sure you have Node.js and npm installed.

npm install
4. Start the Development Server

npm start
This will run the app in development mode.
