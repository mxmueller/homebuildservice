import React from 'react'
import logo from '../logo.png'; 

const Opening = () => {
   return (
     <div className="w-screen h-screen bg-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
            <img src={logo} alt="Logo" title="Logo" className="w-1/4" />
        </div>
     </div>
  )
}
export default Opening