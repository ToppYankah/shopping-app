const database = {
    users: [
        {
            id: "e7a8267a8cff28a91d",
            name: "Kenny Junior",
            email: "tppyankah@gmail.com",
            password: "somemailpassword",
        }
    ],
    favorites: {
        "e7a8267a8cff28a91d": []
    },
    products: [
        {
            id: 1,
            name: "Dining Hall Chair",
            category: "chairs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores deserunt fugiat corrupti, accusantium qui quod alias illum natus.",
            price: 25,
            images: {
                main: require("../assets/chairgold.png"),
                yellow: require("../assets/chairgold.png"),
                grey: require("../assets/chairgrey.png"),
            },
            stock: 12,
            favorites: [],
        },
        {
            id: 2,
            name: "Living Room Sofa",
            category: "sofas",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores deserunt fugiat corrupti, accusantium qui quod alias illum natus.",
            price: 25,
            images: {
                main: require("../assets/sofablack.png"),
                black: require("../assets/sofablack.png"),
                orange: require("../assets/sofaorange.png"),
            },
            stock: 12,
            favorites: [],
        },
        {
            id: 3,
            name: "Comfy Chair",
            category: "chairs",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores deserunt fugiat corrupti, accusantium qui quod alias illum natus.",
            price: 25,
            images: {
                main: require("../assets/chairdarkgrey.png"),
                grey: require("../assets/chairdarkgrey.png"),
                blue: require("../assets/chairblue.png"),
            },
            stock: 12,
            favorites: [],
        },
    ],
    categories: [
        "chairs", "sofas", "tables", "benches"
    ],
    orders: [],
    cart: []
}

export default database;