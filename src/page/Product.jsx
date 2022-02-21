import React, { useEffect, useState } from "react";
import Nav from "../components/Nav"
import TablePro from "../components/TablePro"
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
    const [dataProducto, setDataProducto] = useState([]);
    const { data, loading, error } = useFetch('https://plastic-palm-capricorn.glitch.me/api/productos')
    const deleteItem = async (id) => {
        const requestOptions = {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' }
        };
        try {
            const response = await fetch('https://plastic-palm-capricorn.glitch.me/api/productos/' + id, requestOptions);
            const res = await response.json();
            if (res.status) {
                let filter = data.filter(elm => elm.id !== id)
                setDataProducto(filter)
            } else {
                alert(res.descripcion)
            }

        } catch (error) {
            console.log(error, 'errpr')
        }

    }


    const deleteProd = (id) => {
        deleteItem(id)
    }

    useEffect(() => {
        setDataProducto(data)
    }, [data]);

    return (
        <>
            <Nav />
            <header className="py-10 pl-2 bold">
                <h1>MANTENIMIENTO DE PRODUCTOS</h1>
            </header>
            <Link to="/productos/nuevo" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"> NUEVO PRODUCTO</Link>
            <TablePro data={dataProducto} deleteProduct={deleteProd} />
        </>
    )
}

export default Product