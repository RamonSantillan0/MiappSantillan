const products = [
    {
        id: '1',
        name: 'Notebook',
        price: 1000,
        category: 'Computacion',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_767742-MLA48011273986_102021-F.webp',
        stock: 25,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo nisi suscipit.'
    },
    {
        id: '2',
        name: 'Freezer',
        price: 950,
        category: 'Electrodomesticos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_611327-MLA41250385645_032020-F.webp',
        stock: 25,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo nisi suscipit.'
    },
    {
        id: '3',
        name: 'Pelota Basquet',
        price: 100,
        category: 'Deportes y Fitness',
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_897845-MLA47011028657_082021-F.webp',
        stock: 25,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nemo nisi suscipit.'
    },
    {
        id: '4',
        name: 'Shooter Robot',
        price: 20,
        category: 'Juegos y Juguetes',
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
