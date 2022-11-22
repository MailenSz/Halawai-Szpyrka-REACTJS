import PropTypes from 'prop-types';
import './NavBar';
import '../CartWidget/CartWidget'

const NavBar = ({menus, children}) =>{
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

