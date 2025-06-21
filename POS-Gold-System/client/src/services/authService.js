import { auth } from './firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const API_URL = 'http://localhost:12001';

// Login with email and password
export const login = async (email, password) => {
  try {
    // For testing purposes, we'll use hardcoded credentials
    if (email === 'test@example.com' && password === 'password123') {
      return {
        success: true,
        message: 'Login successful',
        user: {
          email: 'test@example.com',
          name: 'Test User',
          role: 'admin'
        }
      };
    } else {
      throw new Error('Invalid credentials');
    }
    
    // When API is properly set up, you can use this code instead:
    /*
    const response = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }
    
    return data;
    */
    
    // When Firebase is properly set up, you can use this code instead:
    /*
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return {
      success: true,
      message: 'Login successful',
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }
    };
    */
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Logout
export const logout = async () => {
  try {
    // For now, we'll just clear local storage
    localStorage.removeItem('user');
    
    // When Firebase is properly set up, you can use this code:
    // await signOut(auth);
    
    return { success: true, message: 'Logout successful' };
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};