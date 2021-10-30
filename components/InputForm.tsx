import { Post } from '../types'
import { FormContainer, Form, Button } from '../styles'

interface IForm {
	post: Post
	onPostChange: <P extends keyof Post>(prop: P, value: any) => void
	handleSubmit: (e: any) => void
	showForm: boolean
}

const InputForm: React.FC<IForm> = ({
	post,
	onPostChange,
	handleSubmit,
	showForm,
}) => {
	return (
		<FormContainer showForm={showForm}>
			<h2>Post Form</h2>

			<Form noValidate autoComplete='off' onSubmit={e => handleSubmit(e)}>
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

				<Button>Submit</Button>
			</Form>
		</FormContainer>
	)
}

export default InputForm
