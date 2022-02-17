import react from "react";

const Card = ({foto,nombre,descripcion,precio}) => {
    return (
        <div className="py-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-1/3 bg-cover" style={{ backgroundImage: 'url("' + foto + '")' }}>
                </div>
                <div className="w-2/3 p-4">
                    <h1 className="text-gray-900 font-bold text-2xl">{nombre}</h1>
                    <p className="mt-2 text-gray-600 text-sm">{descripcion}</p>
                   
                    <div className="flex item-center justify-between mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">${precio}</h1>
                        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card