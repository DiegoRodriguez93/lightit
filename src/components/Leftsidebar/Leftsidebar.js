import React, {useState} from 'react';
import {Link} from '@reach/router';

import icon1 from './../../../public/images/aberturas.png';
import icon2 from './../../../public/images/equipamiento.png';
import icon3 from './../../../public/images/terminaciones.png';

const Leftsidebar = (props) => {

   const [ activo, activar ] = useState('');


   return(
     <div className="h-screen fixed bg-white px-3">

        <div className="h-56"></div>
        
         <Link onClick={() => activar('aberturas')} to="/aberturas">
            <div className={`${activo == 'aberturas' ? 'bg-gray-300' : ''} hover:text-white hover:bg-gray-300 p-2 rounded cursor-pointer`}>
            <img src={icon1}  className="h-auto mx-auto w-12" alt="aberturas icon light-it"/>
            <p className="text-center text-xs leading-none text-gray-700">Aberturas</p>
            </div>
         </Link>

         <Link onClick={() => activar('equipamiento')} to="/equipamiento">
         <div className={`${activo == 'equipamiento' ? 'bg-gray-300' : ''} hover:text-white hover:bg-gray-300 p-2 rounded cursor-pointer mx-auto`}>
            <img src={icon2}  className="h-auto mx-auto w-12" alt="aberturas icon light-it"/>
            <p className="text-center text-xs leading-none text-gray-700">Equipamiento</p>
            </div>
         </Link>

         <Link onClick={() => activar('terminaciones')} to="/terminaciones">
            <div className={`${activo == 'terminaciones' ? 'bg-gray-300' : ''} hover:text-white hover:bg-gray-300 p-2 rounded cursor-pointer mx-auto`}>
            <img src={icon3}  className="h-auto mx-auto w-12" alt="aberturas icon light-it"/>
            <p className="text-center text-xs leading-none text-gray-700">Terminaciones</p>
            </div>
         </Link>

     </div>
        
   )

}

export default Leftsidebar;