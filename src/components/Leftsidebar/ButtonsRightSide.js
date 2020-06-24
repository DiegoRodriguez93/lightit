import React from 'react';

import arrowRight from './../../../public/images/arrowRight.png'
import arrowLeft from './../../../public/images/arrowLeft.png'
import arrowDown from './../../../public/images/arrowDown.png'
import arrowUp from './../../../public/images/arrowUp.png'

import plus from './../../../public/images/plus.png'
import less from './../../../public/images/less.png'

const ButtonsRightSide = () => {

  const consolearClick = (cual) => {
    console.log('boton '+ cual + ' ha sido clickeado');
  }

  return (<><div className="right-0 absolute mt-4 ">
    <button onClick={() => consolearClick('Fijar')} className="bg-white rounded py-2 px-4 mr-4">Fijar</button>
    <button onClick={() => consolearClick('Borrar')} className="bg-white rounded py-2 px-4 mr-4">Borrar</button>
  </div>
    <div className="bottom-0 right-0 absolute flex">

      <div className="flex-1 mt-6">
        {/*         <button className="bg-white inline-flex rounded py-2 px-3 mr-4">+</button>
        <button className="bg-white inline-flex rounded py-2 px-3 mr-4">- </button> */}

        <div className="table-row-group p-2">
          <div className="table-row">
            <div
              onClick={() => consolearClick('mas')}
              className="table-cell bg-white rounded-t text-gray-700 px-0 py-0 text-sm hover:bg-gray-500">
              <img src={plus} className="w-6 h-6" alt="" /></div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-white text-gray-700 px-1 py-1 text-sm">  </div>
          </div>
          <div className="table-row">
            <div 
            onClick={() => consolearClick('menos')}
            className="table-cell bg-white rounded-b text-gray-700 text-sm hover:bg-gray-500">
              <img src={less} className="w-6 h-6" alt="" /></div>
          </div>
        </div>
      </div>
      <div className="table w-42 p-4 flex-2">
        <div className="table-row-group">
          <div className="table-row">
            <div className="table-cell bg-white rounded-tl text-gray-700 px-0 py-0 text-sm">  </div>
            <div onClick={() => consolearClick('arriba')} className="table-cell bg-white text-gray-700 px-1 py-1 text-sm hover:bg-gray-500"><img src={arrowUp} className="w-6 h-6" alt="" /></div>
            <div className="table-cell bg-white rounded-tr text-gray-700 px-0 py-0 text-sm">  </div>
          </div>
          <div className="table-row">
            <div onClick={() => consolearClick('izquierda')} className="table-cell bg-white text-gray-700 px-1 py-1 text-sm hover:bg-gray-500"><img src={arrowLeft} className="w-6 h-6" alt="" /></div>
            <div className="table-cell bg-white text-gray-700 px-0 py-0 text-sm"> </div>
            <div onClick={() => consolearClick('derecha')} className="table-cell bg-white text-gray-700 px-1 py-1 text-sm hover:bg-gray-500"><img src={arrowRight} className="w-6 h-6" alt="" /></div>
          </div>
          <div className="table-row">
            <div className="table-cell bg-white rounded-bl text-gray-700 text-sm">  </div>
            <div onClick={() => consolearClick('abajo')} className="table-cell bg-white text-gray-700 px-1 py-1 text-sm hover:bg-gray-500"><img src={arrowDown} className="w-6 h-6" alt="" /></div>
            <div className="table-cell bg-white rounded-br text-gray-700 text-sm">  </div>
          </div>
        </div>
      </div>

    </div></>
  )

}

export default ButtonsRightSide;