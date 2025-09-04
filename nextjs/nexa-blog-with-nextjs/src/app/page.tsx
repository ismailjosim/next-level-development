import LatestBlogs from '../components/LatestBlogs/LatestBlogs'
import Banner from '../components/shared/Banner/Banner'

const HomePage = async () => {
	const res = await fetch('http://localhost:5000/blogs')
	const blogs = await res.json()

	return (
		<section>
			<Banner />
			<LatestBlogs blogs={blogs} />
		</section>
	)
}

export default HomePage
