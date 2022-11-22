import Layout from '../../Components/Layout';
import NavBar from '../../Components/NavBar';
import List from '../../Components/List'
import CartWidget from '../../Components/CartWidget';
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';


const Initial =() =>{
    const Menus = ['INICIO','PRODUCTOS','CONTACTO']
    const Productos = ['Cerveza Rubia','Cerveza Roja','Cerveza Ipa','Cerveza Negra']

    return(
            <Layout>
                <NavBar menus={Menus}> 
                    <button>Carrito de Compras</button>
                    <CartWidget />
                </NavBar>
                <ItemListContainer name='Thelma' />
                <List listas={Productos}/>
            </Layout>
    )
}

export default Initial;
