export default function ProductDatails( { params }: { params: { productId: string}} ) {
    return <h1>Datails about product {params.productId}</h1>
}