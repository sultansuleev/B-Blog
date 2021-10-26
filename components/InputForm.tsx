import { Post } from '../types'

interface IForm {
	post: Post
	onPostChange: <P extends keyof Post>(prop: P, value: any) => void
	handleSubmit: (e: any) => void
	className: string
}

const InputForm: React.FC<IForm> = ({
	post,
	onPostChange,
	handleSubmit,
	className,
}) => {
	return (
		<div className={`form-blank ` + className}>
			<h2>Post Form</h2>

			<form
				className='myForm'
				noValidate
				autoComplete='off'
				onSubmit={e => handleSubmit(e)}
			>
				<input type='hidden' id='userId' name='userId' value={post.userId} />
				<br />
				<label>
					<b>title</b>
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
					<b>body</b>
				</label>
				<textarea
					id='body'
					name='body'
					onChange={e => onPostChange('body', e.target.value)}
					value={post.body}
				/>

				<button className='primaty-btn'>Submit</button>
			</form>
		</div>
	)
}

export default InputForm
