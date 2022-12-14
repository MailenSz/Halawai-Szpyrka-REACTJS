import { Link } from 'react-router-dom';

const Item=({producto})=>{
    return(
        <div>
            <div>
                <img src={producto.img} />
                <Link to = {`/item/${producto.id}`}></Link><p>{producto.name}</p>
            </div>                            
        </div>
    )
}


export default Item;