const Item=({producto})=>{
    return(
        <div>
            <div>
                <img src={producto.img} />
                <p>{producto.name}</p>
            </div>                            
        </div>
    )
}


export default Item;