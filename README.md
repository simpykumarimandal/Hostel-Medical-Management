# Hostel Medical Management System (HMS)

A comprehensive web-based system for managing medical services in a hostel environment, built with modern web technologies.

## 🚀 Features

### Core Functionality

- **Ambulance Management**: Track and manage ambulance availability, status, and real-time updates
- **Auto Driver Services**: Coordinate transportation services for students
- **Booking System**: Seamless booking for medical appointments and services
- **Real-time Updates**: Socket.io integration for live status updates
- **User Dashboard**: Centralized interface for accessing all services

### Medical Services

- Emergency Requests
- Doctor Consultations
- Lab Tests
- Medicine Orders & Reminders
- Health Insurance Management
- Electronic Health Records
- Symptom Checker
- Virtual Consultations

### Hostel Management

- Complaint Management System
- Laundry Services
- Mess Food Ordering
- Room Management & Sanitation
- Leave and Outing Requests
- Parent Notifications
- Payment Gateway Integration
- Reports & Analytics

## 🛠️ Tech Stack

### Backend

- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Socket.io** for real-time communication
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Nodemailer** for email services

### Frontend

- **HTML5** with Tailwind CSS
- **Vanilla JavaScript** for interactivity
- **Font Awesome** for icons
- **Responsive Design** for mobile compatibility

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/simpykumarimandal/Hostel-Medical-Management.git
   cd Hostel-Medical-Management
   ```

2. **Install backend dependencies**

   ```bash
   cd capstone/backend
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the `capstone/backend` directory:

   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/hms_ambulance
   JWT_SECRET=your_jwt_secret_key
   CORS_ORIGIN=http://localhost:3000
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system.

5. **Run the application**

   ```bash
   # From capstone/backend directory
   npm start
   # or for development with auto-reload
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - API: http://localhost:3000/api

## 📁 Project Structure

```
capstone/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── models/
│   │   ├── Ambulance.js         # Ambulance schema
│   │   ├── AutoDriver.js        # Auto driver schema
│   │   └── Booking.js           # Booking schema
│   ├── routes/
│   │   ├── ambulances.js        # Ambulance API routes
│   │   ├── autos.js            # Auto driver routes
│   │   └── bookings.js         # Booking routes
│   ├── package.json
│   ├── package-lock.json
│   └── server.js               # Main server file
├── frontend/
│   ├── index.html              # Login page
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js              # Frontend logic
├── pages/                      # All service pages
│   ├── dashboard.html
│   ├── ambulance.html
│   ├── doctors.html
│   └── ... (other service pages)
└── assets/
    └── icons/                  # Icon assets
```

## 🔌 API Endpoints

### Ambulances

- `GET /api/ambulances` - Get all ambulances
- `GET /api/ambulances/available` - Get available ambulances
- `PATCH /api/ambulances/:id/status` - Update ambulance status

### Bookings

- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking by ID

### Autos

- `GET /api/autos` - Get all auto drivers
- `GET /api/autos/available` - Get available auto drivers

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with glassmorphism effects
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Updates**: Live status changes without page refresh
- **Intuitive Navigation**: Easy-to-use dashboard with categorized services
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcryptjs
- CORS protection
- Input validation and sanitization
- Secure API endpoints

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
CORS_ORIGIN=https://yourdomain.com
EMAIL_USER=your_production_email
EMAIL_PASS=your_production_email_password
```

### Build Commands

```bash
# Install dependencies
npm install

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## Acknowledgments

- VIT Bhopal for the project inspiration
- Open source community for the amazing tools and libraries
- Font Awesome for icons
- Tailwind CSS for styling framework


LINK-https://hostel-medical-management.onrender.com/
---

