import React, { useState } from 'react';
import useAxios from './../hooks/useAxios';

import ButtonsRightSide from './ButtonsRightSide';
import CloseCategoryButton from './CloseCategoryButton';

import arrowRight from './../../../public/images/arrowRight.png'


const CategoryList = (props) => {

   let title = props.ruta;

   const [data, loading] = useAxios('https://renoca.ml/work/clonapi/' + props.ruta + '.php');
   //const [data, loading] = useAxios('https://us-central1-prueba-front-280718.cloudfunctions.net/'+props.ruta);

   const [items, useItems] = useState(false);
   const [itemsList, useItemsList] = useState();


   const showItems = (e) => {

      let data = e.target.id;

      e.target.parentElement.id = 'showListDiv'
      e.target.parentElement.style.display = 'none';

      useItems(true);
      useItemsList(JSON.parse(data));

   }

   const showList = () => {

      if (document.getElementById('showListDiv') == null)
         return false;

      useItems(false);

      document.getElementById('showListDiv').style.display = 'block';


   }

   return (<div className="flex mb-4">
      <div style={{ paddingLeft: '116px' }} className="bg-gray-300 h-screen sm:w-11/12 md:w-8/12 lg:w-6/12 bg-white px-3">
         <h3 onClick={showList} className="capitalize pl-6 pt-2 font-bold text-gray-700 mb-4 inline-block hover:underline hover:text-gray-500 cursor-pointer">
            {"<"}{title}</h3>
         {loading ? (<div className="text-gray-700 ml-16">Cargando....</div>) : (

            <><div>{data.map(({ name, items }, index) =>
               <div onClick={showItems} id={JSON.stringify(items)} className={`${items == true ? 'hidden' : ''} bg-white rounded-lg py-3 pl-2 mx-4 mb-4 hover:bg-gray-400 cursor-pointer text-gray-700`} key={index}>
                  {name} ({items.length}) <img className="float-right h-auto w-6 mb-4" src={arrowRight} />
               </div>)}</div>

               {!items ? '' : (<><div className="flex mb-4">{
                  itemsList.map(({ name, img }) =>
                     <div key={name} className="w-1/3 p-2">
                        <div style={{ cursor: "zoom-in" }} className="h-28 w-full p-2 bg-gray-400 rounded-lg hover:bg-opacity-75">
                           <img className="object-scale-down h-48 w-full hover:bg-opacity-50" src={img} />
                           <p className="text-center text-gray-600">{name}</p>
                        </div>
                     </div>
                  )}</div></>

               )}

            </>
         )}</div>

      <CloseCategoryButton />
      <ButtonsRightSide />

   </div>
   )

}

export default CategoryList;