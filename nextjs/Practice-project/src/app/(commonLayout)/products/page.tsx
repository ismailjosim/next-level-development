interface Post {
    id: string
    title: string
    views: number
}

const ProductsPage = async () => {
    const res = await fetch('http://localhost:5000/posts', {
        // * Revalidate Data after 5s. it's standard time is 30s
        // next: {
        //     revalidate: 5
        // }
        cache: "no-store"
    })
    const posts = await res.json()
    return (
        <div>
            <h3>Total Posts: {posts?.length}</h3>
            <div className='grid grid-cols-2 gap-5'>
                {posts.map((post: Post, index: number) => (
                    <div key={index} className="border">
                        <h3>{post.title}</h3>
                        <p>{post.views}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsPage
