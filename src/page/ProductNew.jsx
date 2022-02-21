
import Form from '../components/Form'
import Nav from "../components/Nav"
import { useNavigate } from "react-router-dom";


const Product = () => {
    let navigate = useNavigate();
   const saveData = async(dataForm)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForm)
        };
        const response = await fetch('https://plastic-palm-capricorn.glitch.me/api/productos', requestOptions);
        const data = await response.json();
        console.log(data)
        navigate("/productos");
   }


    return (
        <>
            <Nav />
            <header>
                <h1>MANTENIMIENTO PRODUCTO</h1>
            </header>
            <div className="main w-max m-auto mt-10">
               <Form save={saveData} />
            </div>
        </>
    )
}

export default Product