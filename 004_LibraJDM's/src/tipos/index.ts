export type Auto = {
    id: number
    nombre: string
    marca: string
    img: string
    descripcion: {
        anio: number
        kilometraje: number
        transmision: string
        color: string
    }
    precio: number
}

// {
//         id: 1,
//         nombre: 'MR 2',
//         marca: 'Toyota',
//         descripcion: {
//             anio: 1993,
//             kilometraje: 138499,
//             transmision: 'Manual',
//             color: 'Negro'
//         },
//         precio: 28995.00
// }