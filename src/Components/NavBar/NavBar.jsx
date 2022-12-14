import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../NavBar';
import './NavBar.scss';
import '../CartWidget/CartWidget'

const NavBar = ({menus}) =>{
    return(
        <div className='navbar'>
            {
                menus.map((menu)=>{
                    return <Link className='navbar__menu' to={menu.href} >{menu.name}</Link>
                })
            }
        </div>
/*         <div className='navbar'>
            <a className='navbar__menu' href='/</div>'>INICIO</a>
            <a className='navbar__menu' href="/Productos">PRODUCTOS</a>
            <a className='navbar__menu' href="/Contacto">CONTACTO</a>
        </div> */
    )
}


export default NavBar;




/* 
const NavBar = ({menus, children, categorias}) =>{
    return(
        <div className='navbar'>
            <div className='navbar__menus'>
                {
                    menus.map((menu)=>{
                        return <a href='cerveza artesanal' className='navbar__menu'>{menu}</a>
                    })
                }
            </div>
            <div>
                    categorias.map((categoria) => {
                        return(<Link to={`/category/${categorias.id}`}>{categoria.name}</Link>)
                }
            </div>

            <div>
                {children}
            </div>
        </div>
    )
} 

NavBar.proptype ={
    menus: PropTypes.array.isRequired,
    children: PropTypes.element
} */




