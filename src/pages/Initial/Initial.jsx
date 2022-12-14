import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from '../../Components/Layout';
import NavBar from '../../Components/NavBar/NavBar';
import CartWidget from '../../Components/CartWidget';
import List from '../../Components/List'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../../ItemDetailContainer/ItemDetailContainer';
import ItemDetail from '../../ItemDetail/ItemDetail';
import {useState,useEffect} from 'react'
import axios from 'axios';
import {categorias, menus} from '../../mock'
import Home from '../../Components/Home/Home';
import Productos from '../../Components/Productos/Productos';
import Contacto from '../../Components/Contacto/Contacto';

const Initial =() =>{

    const menus = [{
        name:'INICIO',
        href:'/'
    },
    {
        name:'PRODUCTOS',
        href:'/Productos'
    },
    {
        name:'CONTACTO',
        href:'/Contacto'
    },
/*     {
        name:'detalle del Producto',
        href:'/detalleProducto'
    } */]
/*     
    const categorias = [
            {
                name: 'Cervezas artesanales',
                id: 1
            },
            {
                name: 'Tragos de autor',
                id: 2
            },
            {
                name: 'Comidas',
                id: 3
            },
        ]
 */

    const Productos = ['Cerveza Rubia','Cerveza Roja','Cerveza Ipa','Cerveza Negra']

    const [contador,setContador] = useState (0)

    //API
    const [pokemon, setPokemon] = useState();
    const [pokemonList,setPokemonList] = useState()

    const callPokemon = (url) =>{
        //axios.get('https://pokeapi.co/api/v2/pokemon/21')
        axios.get(url).then(result=>{
            console.log(result);
            setPokemon(result.data)
        }).catch(error =>{
            console.log(error)
        })
    }

    const callListPokemon = () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20').then(result=>{
            console.log(result);
            setPokemonList(result.data)
        })
    }

    useEffect(()=>{
        callListPokemon()
    },[])

    useEffect(()=>{
        console.log("onClick",contador)
    },[contador])

    return(
        <BrowserRouter className="initialApp">
            <Layout>
                <NavBar menus={menus} categorias={categorias}> 
                    <button>Carrito de Compras</button>
                    <CartWidget />
                </NavBar>

                <Routes>
                    <Route exact path='/' element={<Home />}/>
                    <Route exact path='/productos' element={<Productos />}/>
                    <Route exact path='/contacto' element={<Contacto />}/>
                    <Route exact path='/categoy/:id' element={<ItemListContainer />}/>
                    <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
                    <Route exact path='//detalleProducto/:idProducto' element={<ItemDetail />}/>
                </Routes>

                <ItemListContainer name='Thelma' />
                <div className='cervezasArtesanales'><List listas={Productos}/></div>
                <p>Hiciste Click {contador} veces</p>
                <button className='sumaClick' onClick={() => setContador(contador +1)}>Suma otro click mas aca!</button>

                <div>
                    { pokemonList && 
                    <div>
                        <h3>POKEMON LIST</h3>
                        {
                            pokemonList.results.map(poke=>{
                                return(<li key={poke.url}> <button onClick={(e)=>callPokemon(poke.url)}>{poke.name}</button> </li>)
                            })
                        }
                    </div>
                    }
                    <div>
                    {pokemon && 
                        <div>
                            <p>El pokemon que elegiste es: {pokemon.name}</p>

                        <img src={pokemon.sprites.other['official-artwork'].front_default}/>   
                        </div>             
                    }</div>
                </div>
            </Layout>
        </BrowserRouter>
    );
}

export default Initial;
