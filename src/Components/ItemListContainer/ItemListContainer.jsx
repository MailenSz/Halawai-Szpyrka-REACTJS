import { useState } from 'react';
import {Productos, categorias} from '../../mock';
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';




const ItemListContainer = () =>{
    const [item,setItem] = useState(Productos);
    const { id } = useParams()

    const FilterCategory = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let newProductos = Productos.filter((p) => p.category == id)
            resolve(newProductos)
        },3000)
        
    })

    useEffect(()=>{
        FilterCategory.then((response)=>{
            setItem(response)
            console.log(response,item)
        })
    },[id])

    return(
        <div>
            {
                item.map((producto)=>{
                    return <Item producto={producto} />
                })
            }
        </div>
)};

export default ItemListContainer;