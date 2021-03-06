import React from 'react';

import FormInput from '../../form/form-input/form-input.component';
import CustomButton from '../../form/custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../../data/firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styled';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName     : '',
			email           : '',
			password        : '',
			confirmPassword : '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('Error: Passwords do not Match!');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			createUserProfileDocument(user, { displayName });

			//TODO: Remember to announce this change via Aria.
			this.state = {
				displayName     : '',
				email           : '',
				password        : '',
				confirmPassword : '',
			};
		} catch (error) {
			console.error('Error: New user was not stored.', error);
		}
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<SignUpTitle className='sign-up'>I do not have an account.</SignUpTitle>
				<span>Sign Up</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						id='signupDisplayName'
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='Display Name'
						required
					/>
					<FormInput
						id='signupEmail'
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						id='signupPassword'
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						id='signupConfirmPassword'
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='Confirm Password'
						required
					/>
					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</SignUpContainer>
		);
	}
}

export default SignUp;
