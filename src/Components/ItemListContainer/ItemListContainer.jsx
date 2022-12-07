import React, { useEffect } from 'react';
import { useState } from 'react';
import Item from '../Item/Item';
import {Productos, categorias} from '../../mock';

const ItemListContainer = () =>{
    const [item,setItem] = useState(Productos);
    const { id } = useParams()

    const FilterCategory = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("responde"+id)
        },3000)
        
    })

    useEffect(()=>{
        FilterCategory.then((response)=>{
            console.log(response)
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