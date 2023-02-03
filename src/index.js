import React from 'react';
import ReactDOM from 'react-dom/client';
import { tsParticles } from "tsparticles";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
tsParticles.load("tsparticles", {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      }
    },
    modes: {
      repulse: {
        distance: 250,
        speed: 0.5
      }
    }
  },
  particles: {
    color: {
      value: "#282c34"
    },
    links: {
      enable: true,
      color: "#000",
      distance: 180,
    },
    opacity: {
      value: { min: 0.3, max: 0.6 },
    },
    move: {
      enable: true
    }
  }
}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
