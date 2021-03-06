
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import Nav from "../components/Nav"
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const {data,loading,error} = useFetch('https://plastic-palm-capricorn.glitch.me/api/productos')
    let navigate = useNavigate();
    const saveData = async(dataForm)=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataForm)
        };
        const response = await fetch('https://plastic-palm-capricorn.glitch.me/api/carrito', requestOptions);
        const data = await response.json();
        console.log(data)
        navigate("/carrito");
   }
    const add = (item)=>{
        console.log(item)
        saveData({producto : [item]})
    }
    return(
        <>
            <Nav />
            <div className="bg-gray-100 min-h-screen py-10 px-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 ">
                    {
                          data.map((item) => (
                            <Card key={item.id} nombre={item.nombre} descripcion={item.descripcion} foto={item.foto} precio={item.precio} getAdd={() =>add(item)}/>
                          ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home