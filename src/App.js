import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';


function App() {
  return (
    <div className="container border-8 border-black p-8 m-4 grid place-items-center">
      <Header />
      <div className="card-container mt-8 grid grid-cols-5 gap-4">
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
        <Main value={Math.floor(Math.random() * 7)} />
      </div>
      <button 
        className="mt-12 text-white bg-blue-600 te font-semibold py-1 px-4 rounded-md"
      >
        Roll
      </button>
    </div>
  )
}

export default App
