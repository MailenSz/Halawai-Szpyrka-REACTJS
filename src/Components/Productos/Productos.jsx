import { Link } from 'react-router-dom'

const Productos = ()=>{
    const Productos = [
        {
            id: 1,
            name: 'Cerveza Rubia'
        },
        {
            id: 2, 
            name:'Cerveza IPA'
        },
        {
            id: 3,
            name: 'Papas Fritas HALAWAI'
        },
        {
            id:4,
            name:'Negroni'
        }
    ]


    return(
        <div>
            <h1>PRODUCTOS</h1>
            {
                Productos.map((producto)=>{
                    return <Link to={`/detalleProducto/${producto.id}`} >{producto.name} </Link>
                })
            }
        </div>
        
    )
}

export default Productos;