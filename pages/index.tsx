import type { InferGetStaticPropsType, NextPage } from 'next'
import { useEffect, useState } from 'react'
import BlogItem from '../components/BlogItem'
import InputForm from '../components/InputForm'
import Layout from '../components/Layout'
import { IPost, Post } from '../types'

const API_URL: string = 'https://jsonplaceholder.typicode.com/posts'

const defaultPost: Post = {
	userId: Math.floor(Math.random() * 16) + 5,
	title: '',
	body: '',
}

export default function Home({
	posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const [postList, setPostList] = useState(posts)
	const [post, setPost] = useState(defaultPost)
	const [showForm, setShowForm] = useState(false)

	const onPostChange = <P extends keyof Post>(prop: P, value: any) => {
		setPost({ ...post, [prop]: value })
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()

		var userid = post.userId
		var new_title = post.title
		var new_body = post.body

		console.log('Input Data: ' + userid + ' ' + new_title + ' ' + new_body)

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: new_title,
				body: new_body,
				userId: userid,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then(response => response.json())
			.then(json => {
				console.log(json) //id: number title: string body: string
				var newPost: IPost = {
					id: json.id,
					title: json.title,
					body: json.body,
				}
				setPostList([newPost, ...postList])
				console.log(postList)
			})
	}

	const onClick = () => setShowForm(!showForm)

	useEffect(() => {
		console.log('Post List changed!')
	}, [postList])

	return (
		<Layout title='Tweets'>
			<button onClick={onClick} className='primaty-btn'>
				{showForm ? 'Hide form' : 'Write a post'}
			</button>
			<InputForm
				post={post}
				onPostChange={onPostChange}
				handleSubmit={handleSubmit}
				className={showForm ? 'show' : ''}
			/>

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
