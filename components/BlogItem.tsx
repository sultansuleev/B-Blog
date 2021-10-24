import Link from 'next/link'

const BlogItem = ({ title, description, id }: any) => {
	return (
		<div className='blog-item'>
			<h5>{title}</h5>
			<p>{description}</p>
			<div className='image-container'>
				<img src={`https://picsum.photos/id/${id}/500/400`} alt='image' />
			</div>
			<div className='text-align-right'>
				<Link href='/blog/[id]' as={`/blog/${id}`}>
					<a>Read more...</a>
				</Link>
			</div>
		</div>
	)
}

export default BlogItem
