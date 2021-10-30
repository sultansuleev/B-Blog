import styled from '@emotion/styled'
import Link from 'next/link'
import { Colors } from '../types/colors'

const Blog = styled.div`
	background-color: ${Colors.Primary};
	padding: 2em 2em 1em;
	margin-bottom: 26px;
	border: 1px solid ${Colors.Secondary};
	color: ${Colors.Text};
	border-radius: 30px;

	& h5 {
		margin: 0;
		margin: bottom 10px;
		text-transform: capitalize;
		font-size: 19px;
	}
	& p {
		text-transform: capitalize;
		filter: brightness(0.95);
		font-size: 16px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
`

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1em;

	& img {
		border-radius: 1em;
	}
`

const BlogLink = styled.div`
	text-align: right;
	& a {
		background-color: ${Colors.Interaction};
		text-decoration: none;
		display: inline-block;
		transition: background-color 0.4 ease;
		border-radius: 20px;
		padding: 8px 20px;
		color: #fff;

		&:hover {
			background-color: darken(${Colors.Interaction}, 5%);
		}
	}
`

const BlogItem = ({ title, description, id }: any) => {
	return (
		<Blog>
			<h5>{title}</h5>
			<p>{description}</p>
			<ImageContainer>
				<img src={`https://picsum.photos/id/${id}/500/400`} alt='image' />
			</ImageContainer>
			<BlogLink>
				<Link href='/blog/[id]' as={`/blog/${id}`}>
					<a>Read more...</a>
				</Link>
			</BlogLink>
		</Blog>
	)
}

export default BlogItem
