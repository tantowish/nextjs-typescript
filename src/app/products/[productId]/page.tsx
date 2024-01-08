export default function ProductDetails( {params}: {
    params: {productId: string}
} ){
    return <h1>Detail About Component {params.productId}</h1>
}