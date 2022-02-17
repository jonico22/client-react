
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import Nav from "../components/Nav"

const Home = ()=>{
    const {data,loading,error} = useFetch('http://localhost:8080/api/productos')
    const add = (item)=>{
        console.log(item)
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