import Head from 'next/head'
import Link from 'next/link'
import { Header, Container } from '../styles'

const Layout = ({ title, children }: any) => {
	return (
		<>
			<Head>
				<title>{title} | B-Blog</title>
				<meta name='description' content='Just Blog' />
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto'
					rel='stylesheet'
				/>
			</Head>

			<Header>
				<Link href='/'>
					<a className='logo'>
						<img src='/blogger.png' alt='' />

						<p>B-Blog</p>
					</a>
				</Link>

				<Link href='/'>
					<a>Home</a>
				</Link>

				<Link href='/about'>
					<a>About us</a>
				</Link>
			</Header>

			<Container>{children}</Container>
		</>
	)
}

export default Layout
