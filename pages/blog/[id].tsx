import { InferGetStaticPropsType } from 'next'
import { useState } from 'react'
import Layout from '../../components/Layout'
import { IPost } from '../../types'
import { DetailsPg } from '../../styles'

export default function DetailPost({
	post,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
	if (!post) {
		return "There's no post"
	}
	const [detailedPost, setDetailedPost] = useState(post)

	return (
		<Layout title={detailedPost.title}>
			<DetailsPg>
				<h1>{detailedPost.title}</h1>
				<p>{detailedPost.body}</p>
				<img src={`https://picsum.photos/id/${post.id}/1200/700`} alt='image' />
			</DetailsPg>
		</Layout>
	)
}

export async function getServerSideProps({ query }: any) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${query.id}`
	)
	const post: IPost = await res.json()

	return {
		props: {
			post,
		},
	}
}
