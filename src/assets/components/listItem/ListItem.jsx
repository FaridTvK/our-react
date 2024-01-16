import CardItem from "../carditem/CardItem";

const ListItem = () => {
    return (
        <>
            <h1>Das Ist ListItem Component</h1>
            <CardItem
                title={"book 1"}
                img={"https://source.unsplash.com/random/?book"}
                price={"19,99"}
            />
            <CardItem
                title={"book 2"}
                img={"https://source.unsplash.com/random/?city"}
                price={"29,99"}
            />
            <CardItem
                title={"book 3"}
                img={"https://source.unsplash.com/random/?night"}
                price={"49,99"}
            />
        </>
    );
}

export default ListItem;