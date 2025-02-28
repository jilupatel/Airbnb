# 📌 WanderLust - Rent Homes, Hotels & Resorts Online
Your Ultimate Destination for Finding the Perfect Stay!

<!-- Add a banner image if available -->

## 🌍 About WanderLust
WanderLust is an online platform that allows users to rent homes, hotels, and resorts for vacations, business trips, and long-term stays. Whether you're looking for a cozy cottage, a luxury resort, or a budget-friendly hotel, WanderLust provides a seamless booking experience for travelers worldwide.

## ✨ Key Features
- ✔ **Search & Explore** – Find homes, hotels, and resorts based on location, budget, and amenities.
- ✔ **Easy Booking System** – Securely book properties with instant confirmation.
- ✔ **Host Your Property** – List your home, hotel, or resort and start earning.
- ✔ **Secure Payments** – Multiple payment gateways for a hassle-free experience.
- ✔ **User Reviews & Ratings** – Check guest feedback before booking.
- ✔ **Help Center** – If you have any query regarding this wandurLust website then you can ask.
- ✔ **Wishlist & Favorites** – Save your favorite properties for future bookings.


## 🛠 Tech Stack
### Frontend:
- React.js (with Tailwind CSS/Bootstrap for UI)
- Redux (for state management)
- Axios (for API requests)

### Backend:
- Node.js with Express.js
- MongoDB (Database)
- JWT Authentication (Secure Login)
- Cloudinary (for image uploads)


## 🚀 Getting Started
Follow these steps to set up the project on your local machine.

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 1️⃣ Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/jilupatel/Airbnb.git
>>cd wanderlust


# Navigate to the backend directory
cd backend

# Install backend dependencies
npm install

# Navigate to the frontend directory
cd ../frontend

# Install frontend dependencies
npm install

# create .env file
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
EMAIL_USER=your-email-user
EMAIL_PASS=your-email-pass
TWILIO_ACCOUNT_SID=your-twilio-account-sid
TWILIO_AUTH_TOKEN=your-twilio-auth-token
TWILIO_PHONE_NUMBER=your-twilio-phone-number
OPENAI_API_KEY=api-key
RAZORPAY_KEY_ID=api-key
RAZORPAY_KEY_SECRET=secret-key
CLIENT_ID=your-client-id
CLIENT_SECRETE=your-client-secrete

# Navigate back to the backend directory (if not already there)
cd ../backend

# Start the backend server using nodemon for automatic reloading
nodemon server.js

# Navigate to the frontend directory (if not already there)
cd ../frontend

# Start the frontend server
npm start
