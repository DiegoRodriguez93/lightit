import React from 'react';

const Navbar = () => {

   return(
      <div className="pb-10 pt-4 bg-gray-900"> Logo here 

      <div className="mr-16 float-right"> 
         <button className="bg-white rounded p-2 ">Guardar y salir</button>
         <div className="mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Salir sin guardar</a>
            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Guardar y continuar</a>
         </div>
      </div> 

      </div>
   )

}

export default Navbar;