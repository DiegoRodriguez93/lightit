import React from 'react';
import {Link} from '@reach/router';

import icon1 from './../../../public/images/aberturas.png';
import icon2 from './../../../public/images/equipamiento.png';
import icon3 from './../../../public/images/terminaciones.png';

const Leftsidebar = (props) => {

   console.log(props)

   return(
     <div className="h-screen fixed bg-white px-3">

        <div className="h-56"></div>
        
         <Link to="/aberturas">
            <div className="hover:text-white hover:bg-gray-300 p-2 rounded cursor-pointer">
            <img src={icon1}  className="h-auto mx-auto w-12" alt="aberturas icon light-it"/>
            <p className="text-center text-xs leading-none text-gray-700">Aberturas</p>
            </div>
         </Link>

         <Link to="/equipamiento">
            <div className="hover:text-white hover:bg-gray-300 p-2 rounded cursor-pointer mx-auto">
            <img src={icon2}  className="h-auto mx-auto w-12" alt="aberturas icon light-it"/>
            <p className="text-center text-xs leading-none text-gray-700">Equipamiento</p>
            </div>
         </Link>

         <Link to="/terminaciones">
            <div className="hover:text-white hover:bg-gray-300 p-2 rounded cursor-pointer">
            <img src={icon3}  className="h-auto mx-auto w-12" alt="aberturas icon light-it"/>
            <p className="text-center text-xs leading-none text-gray-700">Terminaciones</p>
            </div>
         </Link>

     </div>
        
   )

}

export default Leftsidebar;