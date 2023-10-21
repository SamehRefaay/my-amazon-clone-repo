import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../images/amazon-white-logo.jpg';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const register = e => {
		console.log('from register');
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				// Signed up
				// const user = userCredential.user;
				// ...
				navigate('/');
			})
			.catch(error => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);
				// ..
			});
	};
	return (
		<div className="flex flex-col justify-center items-center">
			{/* logo */}
			<Link className="" to="/">
				<img className="h-16" src={whiteLogo} alt="amazon-logo" />
			</Link>
			<div className="w-80">
				<div className="p-4 border rounded-lg">
					<h1 className="text-3xl ">Create account</h1>
					<form>
						<span className="inline-block mt-4 text-sm font-medium">
							Your Name
						</span>
						<input
							className="w-full text-sm mt-1 py-1 px-2 outline-2 outline-cyan-200 border rounded"
							type="text"
							placeholder="First and last name"
						/>
						<span className="inline-block mt-4 text-sm font-medium">
							Mobile number or email
						</span>
						<input
							className="w-full text-sm mt-1 py-1 px-2 outline-2 outline-cyan-200 border rounded"
							type="text"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<span className="inline-block mt-4 text-sm font-medium">
							Password
						</span>
						<input
							className="w-full text-sm mt-1 py-1 px-2 outline-2 outline-cyan-200 border rounded"
							type="text"
							placeholder="At least 6 characters"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<span className="inline-block mt-1 text-xs font-extralight">
							Passwords must be at least 6 characters.
						</span>
						<span className="inline-block mt-4 text-sm font-medium">
							Re-enter password
						</span>
						<input
							className="w-full text-sm mt-1 py-1 px-2 outline-2 outline-cyan-200 border rounded"
							type="text"
						/>
						<input
							className="w-full mt-4 py-1 px-2 text-sm bg-yellow-400 hover:bg-yellow-500 border rounded-md"
							type="submit"
							value="Continue"
							onClick={register}
							to="/"
						/>
					</form>

					<p className="mt-4 text-xs">
						By creating an account, you agree to Amazon's{' '}
						<span className="text-blue-500">
							<Link
								className="hover:text-amber-700 hover:underline"
								to={'/help'}
							>
								Conditions of Use
							</Link>
						</span>{' '}
						and{' '}
						<span className="text-blue-500">
							<Link
								className="hover:text-amber-700 hover:underline"
								to={'/help'}
							>
								Privacy Notice
							</Link>
						</span>{' '}
						.
					</p>
					<div class="inline-flex items-center justify-center w-full">
						<hr class="w-2/3 h-px mt-2 bg-gray-200 border-0 rounded dark:bg-gray-700" />
					</div>
					<div className="mt-2 text-sm">
						Already have an account?{' '}
						<Link
							className="text-blue-500 text-sm hover:text-amber-700 hover:underline"
							to={'/login'}
						>
							Sign in
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
