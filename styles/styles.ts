import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Colors } from '../types/colors'

interface FormContainerProps {
	showForm: boolean
}

export const globalStyles = css`
	* {
		box-sizing: border-box;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		font-family: 'Roboto', sans-serif;
		background-color: ${Colors.Primary};
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	h1 {
		text-align: center;
		color: ${Colors.Text};
	}
`

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: start;
	padding: 1em 7em;
	background-color: ${Colors.Primary};
	color: ${Colors.Text};
	font-weight: bold;

	& a {
		font-size: 22px;
		margin-right: 2em;
	}

	& .logo {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 0;
		padding: 0;
		margin-right: 2em;

		& img {
			max-width: 50px;
			height: auto;
			margin-right: 0.5em;
		}
	}
`

export const Container = styled.div`
	width: 40%;
	margin: 0 auto;
`

export const Button = styled.button`
	text-transform: uppercase;
	outline: 0;
	background: ${Colors.Interaction};
	width: 100%;
	border: 0;
	padding: 15px;
	color: ${Colors.Secondary};
	font-size: 14px;
	-webkit-transition: all 0.3 ease;
	transition: all 0.3 ease;
	cursor: pointer;
	border-radius: 25px;
`

export const DetailsPg = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 0 3em 0;

	& h1 {
		text-transform: uppercase;
	}
	& p {
		color: ${Colors.Text};
		text-transform: capitalize;
	}
`

export const AboutPg = styled.div`
	text-align: center;

	& p {
		color: ${Colors.Text};
		text-transform: capitalize;
		font-size: 19px;
	}
`
export const FormContainer = styled.div<FormContainerProps>`
	width: 20em;
	padding: 4% 0 0;
	height: ${props => (props.showForm ? 'auto' : '0')};
	opacity: ${props => (props.showForm ? '1' : '0')};
	overflow: hidden;
	margin: auto;
	color: ${Colors.Text};
	text-align: center;
	border-bottom: 1px solid ${Colors.Secondary};
	transition: 1s ease-out;
`

export const Form = styled.form`
	position: relative;
	z-index: 1;
	background: ${Colors.Primary};
	max-width: 360px;
	margin: 0 auto 100px;

	& label {
		text-transform: uppercase;
	}
	& input,
	textarea {
		font-family: 'Roboto', sans-serif;
		outline: 0;
		background: ${Colors.Primary};
		width: 100%;
		border: 0;
		margin: 0 0 15px;
		padding: 15px;
		box-sizing: border-box;
		font-size: 18px;
		border: 1px solid ${Colors.Secondary};
		color: ${Colors.Text};
		border-radius: 10px;
		resize: none;
	}
	& textarea {
		height: 6em;
	}
`
