import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const rootElement = document.createElement("div");
rootElement.id = "dr-root";

// const globalStyles = document.createElement("style");
// globalStyles.innerHTML = `
//   #${rootElement.id} {
//   position: fixed;
//   left: 0;
//   top: 0;
//   width: 300px;
//   height: 100vh;
//   background: #ffffff;
//   border-right: 1px solid #c2c2c2;
//   z-index: 999999999;
//   }
// `;

document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
