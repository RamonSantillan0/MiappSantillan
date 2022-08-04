const products = [
    {
        id: '1',
        name: 'Notebook',
        price: 1000,
        category: 'computacion',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_767742-MLA48011273986_102021-F.webp',
        stock: 25,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo nisi suscipit.'
    },
    {
        id: '2',
        name: 'Freezer',
        price: 950,
        category: 'electrodomesticos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_611327-MLA41250385645_032020-F.webp',
        stock: 25,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo nisi suscipit.'
    },
    {
        id: '3',
        name: 'Pelota Basquet',
        price: 100,
        category: 'deportes',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_897845-MLA47011028657_082021-F.webp',
        stock: 25,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo nisi suscipit.'
    },
    {
        id: '4',
        name: 'Shooter Robot',
        price: 20,
        category: 'juguetes',
        img: 'https://www.ditoys.com.ar/admin/productos/2204ShooterRobot.jpg',
        stock: 25,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo nisi suscipit.'
    },
]

export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getItemsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    })
}