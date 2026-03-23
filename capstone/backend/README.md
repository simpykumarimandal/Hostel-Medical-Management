# Capstone Backend

Backend API for the Hostel Medical Management System (HMS), built with Node.js, Express.js, and MongoDB.

## Features

- RESTful API endpoints for ambulance, auto driver, and booking management
- Real-time communication using Socket.io
- JWT-based authentication
- MongoDB database with Mongoose ODM
- Email services with Nodemailer
- CORS enabled for frontend integration

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Socket.io** - Real-time bidirectional communication
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## Installation

1. Navigate to the backend directory:

   ```bash
   cd capstone/backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and fill in your values:

   ```bash
   cp .env.example .env
   ```

   Required environment variables:
   - `PORT` - Server port (default: 3000)
   - `MONGODB_URI` - MongoDB connection string
   - `JWT_SECRET` - Secret key for JWT tokens
   - `CORS_ORIGIN` - Frontend URL for CORS
   - `EMAIL_USER` - Email service username
   - `EMAIL_PASS` - Email service password

4. Start the server:

   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration

### Ambulances

- `GET /api/ambulances` - Get all ambulances
- `GET /api/ambulances/available` - Get available ambulances
- `POST /api/ambulances` - Create new ambulance
- `PATCH /api/ambulances/:id/status` - Update ambulance status
- `DELETE /api/ambulances/:id` - Delete ambulance

### Auto Drivers

- `GET /api/autos` - Get all auto drivers
- `GET /api/autos/available` - Get available auto drivers
- `POST /api/autos` - Create new auto driver
- `PATCH /api/autos/:id/status` - Update auto driver status

### Bookings

- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking by ID
- `PATCH /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

## Database Models

- **Ambulance**: Manages ambulance information and status
- **AutoDriver**: Manages auto driver information and availability
- **Booking**: Handles service bookings and requests

## Real-time Features

The backend supports real-time updates using Socket.io for:

- Ambulance status changes
- Auto driver availability updates
- Booking confirmations
- Emergency alerts

## Development

- Use `npm run dev` for development with nodemon
- The server will restart automatically on file changes
- MongoDB connection is established on server start

## Testing

Currently, no automated tests are implemented. Manual testing can be done using tools like Postman or curl.

## Contributing

1. Follow the existing code style
2. Add proper error handling
3. Update documentation for new endpoints
4. Test thoroughly before committing

## License

MIT License - see the main project LICENSE file for details.
