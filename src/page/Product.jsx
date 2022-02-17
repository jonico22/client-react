
import Form from '../components/Form'
import Nav from "../components/Nav"
import TablePro from "../components/TablePro"
import { useFetch } from "../hooks/useFetch";
const Product = () => {

   const {data,loading,error} = useFetch('http://localhost:8080/api/productos')
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
            <Nav />
            <header>
                <h1>MANTENIMIENTO DE PRODUCTOS</h1>
            </header>
            <div className="main w-max m-auto mt-10">
               <Form save={saveData} />
            </div>

            <TablePro data={data} />
        </>
    )
}

export default Product