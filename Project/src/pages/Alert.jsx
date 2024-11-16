import React from 'react'
import {  useNavigate } from 'react-router-dom'

const Alert = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/Login')
    }

    const handleBack = () => {
        navigate('/')
    }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
    <div className="bg-slate-800 text-center p-8 rounded-xl shadow-lg w-[600px]">
      <p className="text-white text-lg font-semibold mb-6">Peringatan : Anda harus login untuk mengakses menu ini !</p>
      
      <div className="flex justify-center gap-4 mt-6">
        <button 
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition duration-150"
          onClick={() => handleBack()}
        >
          Kembali
        </button>
        <button 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150"
          onClick={() => handleNext()}
        >
          Lanjutkan
        </button>
      </div>
    </div>
  </div>
  
  )
}

export default Alert