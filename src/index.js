import React from 'react';
import { createRoot } from 'react-dom/client'; // for react 18
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const root = createRoot(document.getElementById("root")); // for react 18
root.render(<App />);
