import { useState } from 'react'
import { Post } from '../types'

const defaultPost: Post = {
	userId: Math.floor(Math.random() * 16) + 5,
	title: '',
	body: '',
}

const InputForm = () => {
	const [post, setPost] = useState(defaultPost)

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
				console.log('response: ' + JSON.stringify(json))
			})
	}

	return (
		<div className='form-blank'>
			<h2>Post Form</h2>

			<form
				className='myForm'
				noValidate
				autoComplete='off'
				onSubmit={handleSubmit}
			>
				<label>
					<b>userId: </b>
				</label>
				<input
					type='number'
					id='userId'
					name='userId'
					onChange={e => onPostChange('userId', e.target.value)}
					value={post.userId}
				/>
				<br />
				<label>
					<b>title:</b>
				</label>
				<input
					type='text'
					id='title'
					name='title'
					onChange={e => onPostChange('title', e.target.value)}
					value={post.title}
				/>
				<br />
				<label>
					<b>body:</b>
				</label>
				<input
					type='text'
					id='body'
					name='body'
					onChange={e => onPostChange('body', e.target.value)}
					value={post.body}
				/>

				<button>Submit</button>
			</form>
		</div>
	)
}

export default InputForm
