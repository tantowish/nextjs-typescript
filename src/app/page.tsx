import Link from "next/link";

export default function Home(){
    return <><h1>Welcome Home</h1>
    <div>
        <Link href="/blog">Blog</Link>
    </div>
    <div>
        <Link href="/products">Products</Link>
    </div>
    <div>
        <Link href="/dashboard">Dashboard</Link>
    </div>
    <div>
        <Link href="/about">About</Link>
    </div>
    </>
}