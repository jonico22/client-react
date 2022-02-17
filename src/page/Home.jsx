
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
const Home = ()=>{
    const {data,loading,error} = useFetch('http://localhost:8080/api/productos')
    return(
        <>
            <header>
               <h1>TIENDA</h1> 
            </header>
            
            <Link to="productos">PRODUCTOS</Link>
            <Link to="carrito">CARRITO</Link>
            <div className="bg-gray-100 min-h-screen py-32 px-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
                    {
                          data.map((item) => (
                            <Card nombre={item.nombre} descripcion={item.descripcion} foto={item.foto} precio={item.precio}/>
                          ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home