import "./carditem.css"

const CardItem = (props) => {
    return (
        <>
            <h2>title:{props.title}</h2>
            <img src={props.img} alt="" />
            <p>{props.price}</p>
        </>
    );
}

export default CardItem;