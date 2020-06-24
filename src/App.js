import React ,{ Suspense, lazy } from 'react';
import Navbar from './components/Navbar/Navbar';
import Leftsidebar from './components/Leftsidebar/Leftsidebar';

import {Router} from '@reach/router';

const CategoryList = lazy( () => import('./components/Leftsidebar/CategoryList') );

function App(){

   return(
         <div className="bg-gray-400 h-screen w-screen fixed">
         <Navbar/>
         <Leftsidebar/>
         <Suspense fallback={<>Cargando...</>}>
            <Router>
                  <CategoryList path="/aberturas" ruta={'aberturas'} />
                  <CategoryList path="/equipamiento" ruta={'equipamiento'} />
                  <CategoryList path="/terminaciones" ruta={'terminaciones'} />
            </Router>
         </Suspense>
         </div>
   )

}

export default App;