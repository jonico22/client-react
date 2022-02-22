
import Nav from "../components/Nav"
import { useFetch } from "../hooks/useFetch";
import React, { useEffect, useState } from "react";

const Cart = ()=>{
    const {data,loading,error} = useFetch('https://plastic-palm-capricorn.glitch.me/api/carrito')
    const [dataProducto, setDataProducto] = useState([]);
    const deleteCart = async(id)=>{
        const requestOptions = {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        };
        const response = await fetch('https://plastic-palm-capricorn.glitch.me/api/carrito/' + id, requestOptions);
        const res = await response.json();
        console.log(res)
        let filter = data.filter(elm => elm.id !== id)
        console.log(filter)
        setDataProducto(filter)
   }
    useEffect(() => {
      console.log(data)
        setDataProducto(data)
    }, [data]);
    return(
        <>
            <Nav />
              <div className=" max-auto">
                <div className="h-full flex flex-col bg-white shadow-xl ">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div className="text-lg font-medium text-gray-900">Shopping cart</div>
                      
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {dataProducto.map((product) => (
                            <li key={product.id} className="py-6 flex">
                              {
                                product.producto.map( (item) =>(
                                  <>
                                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      src={item.foto}
                                      className="w-full h-full object-center object-cover"
                                    />
                                  </div>
                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          {item.nombre}
                                        </h3>
                                        <p className="ml-4">{item.price}</p>
                                      </div>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between text-sm">
                                      <p className="text-gray-500">CANTIDAD {item.stock}</p>

                                      <div className="flex">
                                        <button type="button"
                                        onClick={()=> deleteCart(item.id)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  </>
                                ))}
                              
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p></p>
                    </div>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Checkout
                      </a>
                    </div>
                   
                  </div>
                </div>
              </div>
        </>
    )
}

export default Cart