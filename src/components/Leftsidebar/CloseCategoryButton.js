import React from 'react';
import { Link } from '@reach/router';
import arrowLeft from './../../../public/images/arrowLeft.png'

const CloseCategoryButton = () => {

   return (
      <div className="lg:w-1/12 sm:w-1/12 my-auto">
         <Link to="/">
            <div className="h-4 w-6  bg-gray-300 p-1 rounded-tr"></div>
            <img
               className="h-8 w-6 inline-block align-middle bg-gray-300 m-0"
               src={arrowLeft} />
            <div className="h-4 w-6  bg-gray-300 rounded-br"></div>
         </Link>
      </div>)

}

export default CloseCategoryButton;