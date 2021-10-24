import type { InferGetStaticPropsType, NextPage } from 'next'
import { useState } from 'react'
import BlogItem from '../components/BlogItem'
import Layout from '../components/Layout'
import { IPost } from '../types'

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts'

export default function Home({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [postList, setPostList] = useState(posts)

	return (
		<Layout title='Tweets'>
			<h1>Intresting tweets</h1>

			<div className='posts'>
				{postList.map((post: IPost) => (
					<BlogItem
						key={post.id}
						title={post.title}
						description={post.body}
						id={post.id}
					/>
				))}
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const res = await fetch(API_URL)
	const posts: IPost[] = await res.json()

	return {
		props: {
			posts,
		},
	}
}
