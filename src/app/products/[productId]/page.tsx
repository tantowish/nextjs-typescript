import { Metadata } from "next"
import { resolve } from "path"

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
    const title = await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}

type Props = {
    params: {
        productId: string
    }
}

export default function ProductDetails( {params}: {
    params: {productId: string}
} ){
    return <h1>Detail About Component {params.productId}</h1>
}