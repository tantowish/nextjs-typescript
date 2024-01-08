export default function reviewDetail({params}:{
    params:{
        productId: string,
        reviewId: string
    }
}){
    return(
        <h1>Review {params.reviewId} from product {params.productId}</h1>
    )
}