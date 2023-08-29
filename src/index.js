import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import App from './App';
import './index.css';

const root = document.getElementById('root');

// Use createRoot for rendering
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Check if the root element is found
if (root) {
  createRoot(root).render(rootElement); // Use createRoot to render
} else {
  console.error("Element with ID 'root' not found.");
}
