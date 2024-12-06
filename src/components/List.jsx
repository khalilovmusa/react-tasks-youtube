import PropTypes from 'prop-types'

const List = (props) => {

    const itemList = props.items;
    const category = props.category;

    //! fruits.sort((a, b) => a.name.localeCompare(b.name)) //TODO=> Alphabetical order
    //! fruits.sort((a,b) => b.name.localeCompare(a.name)); //TODO=> Reverse alphabetical order

    //! fruits.sort((a,b) => b.id - a.id) //TODO=> Id order
    //! fruits.sort((a,b) => a.calories - b.calories); //TODO=> Numberic order
    //! fruits.sort((a,b) => b.calories - a.calories) //TODO=> Reverse numberic order

    //! const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
    //! const highCalFruits = fruits.filter((fruit) => fruit.calories > 100);

    const listItems = itemList.map((item) => <li key={item.id}>{item.name} : &nbsp;
        <b>{item.calories}</b></li>)
    return <>
            <h3 className="list-category">{category}</h3> 
            <ol className="list-items">{listItems}</ol>
           </>
}

List.proptypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number }))
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;