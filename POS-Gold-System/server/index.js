const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const admin = require('firebase-admin');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Initialize Firebase Admin
// Note: In production, you should use environment variables for these credentials
// For now, we'll skip Firebase initialization since we don't have valid credentials
console.log('Skipping Firebase Admin initialization for now');

// Routes
app.get('/', (req, res) => {
  res.send('POS Gold System API is running');
});

// Auth routes
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // For now, we'll just check if the credentials match our test user
    // In a real app, you would verify against Firebase Authentication
    if (email === 'test@example.com' && password === 'password123') {
      res.status(200).json({ 
        success: true, 
        message: 'Login successful',
        user: {
          email: 'test@example.com',
          name: 'Test User',
          role: 'admin'
        }
      });
    } else {
      res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials' 
      });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error during login' 
    });
  }
});

// Start server
const PORT = process.env.PORT || 12001;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});