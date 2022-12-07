import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavBar';
import '../CartWidget/CartWidget'

const NavBar = ({menus, children, categorias}) =>{
    return(
        <div className='navbar'>
            <div className='navbar__menus'>
                {
                    menus.map((menu)=>{
                        return <a href='cerveza artesanal' className='navbar__menu'>{menu}</a>
                    })
                }
            </div>ç
            <div>
                    categorias.map((categoria) => {
                        return<Link to={`/category/${categorias.id}`}>{categoria.name}</Link>
                    })
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
}


export default NavBar;

