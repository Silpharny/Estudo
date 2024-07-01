import { Metadata } from "next"

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = ( { params }: Props): Metadata => {
    return  {
        title: `Product ${params.productId}`
    }
}

export default function ProductDatails( { params }: { params: { productId: string}} ) {
    return <h1>Datails about product {params.productId}</h1>
}