import Head from 'next/head'
import Link from 'next/link'

const Layout = ({ title, children }: any) => {
	return (
		<>
			<Head>
				<title>{title} | B-Blog</title>
				<meta name='description' content='Just Blog' />
			</Head>

			<header>
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
			</header>

			<div className='container'>{children}</div>
		</>
	)
}

export default Layout
