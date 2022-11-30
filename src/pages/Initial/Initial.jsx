import Layout from '../../Components/Layout';
import NavBar from '../../Components/NavBar';
import List from '../../Components/List'
import CartWidget from '../../Components/CartWidget';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';
import {useState,useEffect} from 'react'


const Initial =() =>{
    const Menus = ['INICIO','PRODUCTOS','CONTACTO']
    const Productos = ['Cerveza Rubia','Cerveza Roja','Cerveza Ipa','Cerveza Negra']
    const [contador,setContador] = useState (0)

    useEffect(()=>{
        console.log("onClick",contador)
    },[contador])

    return(
            <Layout>
                <NavBar menus={Menus}> 
                    <button>Carrito de Compras</button>
                    <CartWidget />
                </NavBar>
                <ItemListContainer name='Thelma' />
                <List listas={Productos}/>
                <p>Hiciste Click {contador} veces</p>
                <button onClick={() => setContador(contador +1)}>Suma otro click mas aca!</button>
            </Layout>
    )
}

export default Initial;
