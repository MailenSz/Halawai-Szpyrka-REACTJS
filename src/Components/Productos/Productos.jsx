import { Link } from 'react-router-dom'

const Productos = ()=>{
    return(
        <div>
            <h1>PRODUCTOS</h1>
            <Link to='/detalleProducto/13'><p>Compra tu birra con un click aca!</p></Link>
        </div>
        
    )
}

export default Productos;