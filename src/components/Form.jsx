import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = ({save, defaultData=[] }) => {
    const formik = useFormik({
        initialValues: {
            nombre: defaultData.length === 0 ? '' : defaultData.nombre,
            descripcion: defaultData.length === 0 ? '' : defaultData.descripcion,
            codigo: defaultData.length === 0 ? '' : defaultData.codigo,
            foto: defaultData.length === 0 ? '' : defaultData.foto,
            precio: defaultData.length === 0 ? '' : defaultData.precio,
            stock: defaultData.length === 0 ? '' : defaultData.stock,
        },
        validationSchema: Yup.object({
            nombre: Yup.string()
                .required('El nombre es Obligatorio'),
        }),
        onSubmit: (valores) => {
            console.log(valores)
            save(valores)
        },
    });
    useEffect(() => {
        console.log(defaultData)
       }, [defaultData]);
    return (
        <>
            <div className="register">
                <form onSubmit={formik.handleSubmit}>
                    <h2 className="text-2xl mb-6"> PRODUCTO</h2>
                    <div className="display_name flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg"
                            name="nombre"
                            id="nombre"
                            value={formik.values.nombre}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" placeholder="NOMBRE" />
                    </div>
                    {formik.touched.nombre && formik.errors.nombre ? (
                        <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.nombre} </p>
                        </div>
                    ) : null}
                    <div className="username flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg"
                            name="descripcion"
                            id="descripcion"
                            value={formik.values.descripcion}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" placeholder="DESCRIPCION" />
                    </div>
                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg"
                            name="codigo"
                            id="codigo"
                            value={formik.values.codigo}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" placeholder="CODIGO" />
                    </div>
                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg"
                            name="foto"
                            id="foto"
                            value={formik.values.foto}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" placeholder="FOTO" />
                    </div>
                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg"
                            name="precio"
                            id="precio"
                            value={formik.values.precio}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" placeholder="PRECIO" />
                    </div>
                    <div className="password flex border rounded text-gray-500 mb-4">
                        <input className="outline-none px-4 h-full py-2 text-lg"
                            name="stock"
                            id="stock"
                            value={formik.values.stock}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="text" placeholder="STOCK" />
                    </div>
                    <div className="submit border rounded mb-4 bg-blue-600 text-white cursor-pointer">
                        <div className="wrapper flex w-max mx-auto">
                            
                            <button 
                                    type="submit"
                                    className=" text-gray-100 p-4 w-full  tracking-wide
                                                    font-semibold font-display focus:outline-none focus:shadow-outline 
                                                    shadow-lg">
                                    guardar
                                    </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form