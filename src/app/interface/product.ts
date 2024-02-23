// cart object type
 export type CartObjType = {
    name: string
    price: number
    despcription: string

    images: {
        data: {
            attributes: {
                url: string
            }
        }[]
    }
    quantity: number

}

export type ProductProps = {
    name: string,
    price: number,
    description: string,
    images: string[]
}

export type ProductImageProps = {

    images: {
        data: {
            attributes: {
                url: string
            }
        }[]
    }
}