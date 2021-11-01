const database = {
    products: [
        {
            id: 1,
            name: "Yellow Chair",
            category: "chairs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores deserunt fugiat corrupti, accusantium qui quod alias illum natus.",
            price: 25,
            images: {
                main: require('../assets/chair1.png'),
                yellow: require("../assets/chair1.png"),
                grey: require("../assets/chair2.png"),
            }
        }
    ],
    orders: [],
    cart: []
}

export default database;