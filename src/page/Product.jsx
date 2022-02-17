import react from "react";
import Form from '../components/Form'

const Product = () => {

   const saveData = async(dataForm)=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataForm)
    };
    const response = await fetch('http://localhost:8080/api/productos', requestOptions);
    const data = await response.json();
    console.log(data)
   }

    return (
        <>
            <header>
                <h1>MANTENIMIENTO DE PRODUCTOS</h1>
            </header>
            <div className="main w-max m-auto mt-10">
               <Form save={saveData} />
            </div>
        </>
    )
}

export default Product