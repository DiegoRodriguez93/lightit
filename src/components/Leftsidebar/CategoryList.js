import React,{useState} from 'react';
import useAxios from './../hooks/useAxios';
import {Link, Router} from '@reach/router';

import arrowRight from './../../../public/images/arrowRight.png'

const CategoryList = (props) => {

   let title = props.ruta;

   const [data, loading] = useAxios('https://renoca.ml/work/clonapi/' + props.ruta + '.php');

   const [items, useItems] = useState(false);
   const [itemsList, useItemsList] = useState();


   const showItems = (e) => {

     // console.log(e.target.id)

      let data = e.target.id;

      console.log(JSON.parse(data))

      useItems(true);
      useItemsList(JSON.parse(data));

   }

   //const [data, loading] = useAxios('https://us-central1-prueba-front-280718.cloudfunctions.net/'+props.ruta);

   return (<>
      <div style={{ paddingLeft: '116px' }} className="bg-gray-300 h-screen sm:w-2/4 md:w-2/4 lg:w-2/5 bg-white px-3">
         <h3 className="capitalize pl-6 pt-2 font-bold text-gray-700 mb-4">{title}</h3>
         {loading ? (<>Cargando....</>) : (

            <>{data.map(({ name, items }, index) =>
               <div onClick={showItems} id={JSON.stringify(items)} className="bg-white rounded-lg py-3 pl-2 mx-4 mb-4 hover:bg-gray-400 cursor-pointer text-gray-700" key={index}>
                  {name} ({items.length}) <img className="float-right h-auto w-6 mb-4" src={arrowRight} />
               </div>)}
               
         {!items ? '' : (<><div className="flex mb-4">{
         itemsList.map(({ name, img }) =>
            <div key={name} className="w-1/3 bg-gray-400 h-12">
               <img className=" h-26 w-56 mb-4" src={img} />
               <p className="text-center">{name}</p>
               </div>
                  )}</div></> 
         
         )}

               </>
         )}</div>
   </>
   )

}

export default CategoryList;