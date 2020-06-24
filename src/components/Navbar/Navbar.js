import React, {useState} from 'react';
import arrowDown from './../../../public/images/arrowDown.png';

import logo from './../../../public/images/logo.png';

const Navbar = () => {

   const [hidden, openDropdown] = useState('');

   const toggleDropdown = () => {

       hidden == 'hidden' ? openDropdown('') : openDropdown('hidden');
 
    }

   return(
      <div className="py-1 bg-gray-900 text-sm ">
   <img src={logo} className="w-40 h-20 ml-16 h-auto inline-block" alt=""/>
     <div className="mr-16 px-8 pt-4 float-right"> 

         <button onClick={toggleDropdown}
         className="bg-white rounded py-2 px-4">
            Guardar y salir
         <img 
         className="w-6 inline-block" 
         src={arrowDown} />
         </button>

         <div className={`mt-2 py-2 px-2 bg-white text-center rounded-lg shadow-xl absolute z-50 ${ hidden == 'hidden' ? '' : 'hidden' }`}>
            <a href="#" className="block py-2 text-gray-800 hover:bg-gray-500 hover:text-white">Salir sin guardar</a>
            <a href="#" className="block py-2 text-gray-800 hover:bg-gray-500 hover:text-white">Guardar y continuar</a>
         </div>
      </div> 

      </div>
   )

}

export default Navbar;