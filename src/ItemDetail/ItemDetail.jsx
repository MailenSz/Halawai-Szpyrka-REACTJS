import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetail =() =>{
    const {idProducto} = useParams();
    useEffect(()=>{
        //axios.get('ruta'/{idProducto})
    },[idProducto])
    return(
        <div>
            <h1>Esto es el detalle del producto {idProducto}</h1>
            <img src="{}" alt="detalle producto" />
        </div>
    )
}

export default ItemDetail;