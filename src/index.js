import React from 'react';
import './index.css';
import App from './App';
import DataGridPage from './components/DataGridPage';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}/>
          <Route path="/previewData" element={<DataGridPage />}/>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
