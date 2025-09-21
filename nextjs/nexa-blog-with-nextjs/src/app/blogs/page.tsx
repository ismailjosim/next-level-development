import { Metadata } from 'next'
import BlogCard from '../../components/ui/BlogCard'
import { Blog } from '../../types'

export const metadata: Metadata = {
	title: 'NexaBlog | Blog Page',
}

const BlogsPage = async () => {
	const res = await fetch('http://localhost:5000/blogs', {
		cache: 'no-store',
	})
	const blogs = await res.json()
	return (
		<section className='container mx-auto'>
			<div className='my-5'>
				<h1 className='text-3xl text-center my-5 font-bold'>
					Explore All <span className='text-teal-600'>Blogs</span>
				</h1>
				<p className='text-center text-gray-400 w-2/5 mx-auto'>
					<i>
						Dive into the fascinating world of quantum computing, where
						unlocking unprecedented computational power.
					</i>
				</p>
			</div>
			<div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 my-5'>
				{blogs.map((blog: Blog, index: number) => (
					<BlogCard blog={blog} key={index}></BlogCard>
				))}
			</div>
		</section>
	)
}

export default BlogsPage
