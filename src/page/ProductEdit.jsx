import React, { useEffect, useState } from "react";
import Form from '../components/Form'
import Nav from "../components/Nav"
import { useNavigate,useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
    let navigate = useNavigate();
    let { id } = useParams();
    const {data,loading,error} = useFetch('http://localhost:8080/api/productos/'+ id)
   const saveData = async(dataForm)=>{
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForm)
        };
        const response = await fetch('http://localhost:8080/api/productos/'+id, requestOptions);
        const res = await response.json();
        console.log(data)
        if (res.status) {
            navigate("/productos");
        } else {
            alert(res.descripcion)
        }
   }

   useEffect(() => {
    console.log(id,data)
   }, [data]);

    return (
        <>
            <Nav />
            <header>
                <h1>MANTENIMIENTO PRODUCTO</h1>
            </header>
            <div className="main w-max m-auto mt-10">
                {
                    !loading && <Form save={saveData} defaultData={data} />
                }
               
            </div>
        </>
    )
}

export default Product