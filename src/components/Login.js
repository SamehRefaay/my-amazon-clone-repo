import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import whiteLogo from '../images/amazon-white-logo.jpg';
import { auth } from '../firebase';
import Page from './Page';

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState();

	const signIn = e => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then(authUser => {
				if (authUser) {
					navigate('/');
				} else {
					console.log('error failded to login ');
				}
			})
			.catch(e => {
				console.log(e);
				setError('invalid login in user');
			});
	};

	return (
		<Page
			title={'Login Title 👻'}
			content={
				<div className="flex flex-col justify-center items-center">
					{/* logo */}
					<Link className="" to="/">
						<img className="h-16" src={whiteLogo} alt="amazon-logo" />
					</Link>
					{/* error message if login failed*/}
					{error && (
						<div className="w-80 mb-4 p-6 border rounded-lg ">
							<div className="flex  items-center gap-4 text-red-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
									/>
								</svg>
								<div>
									<h6 className="">There was a problem</h6>
									<span className="inline-block text-sm font-light text-black">
										Incorrect username or password
									</span>
								</div>
							</div>
						</div>
					)}
					<div className="w-80">
						<div className="p-6 border rounded-lg">
							<h1 className="text-3xl ">Sign in</h1>
							<form>
								{/* email or phone */}
								<span className="inline-block mt-4 text-sm font-medium">
									Email or mobile phone number
								</span>
								<input
									className="w-full text-sm mt-1 py-1 px-2 outline-2 outline-cyan-200 border rounded"
									type="text"
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
								{/* password */}
								<span className="inline-block mt-4 text-sm font-medium">
									Password
								</span>
								<input
									className="w-full text-sm mt-1 py-1 px-2 outline-2 outline-cyan-200 border rounded"
									type="password"
									value={password}
									onChange={e => setPassword(e.target.value)}
								/>
								<input
									className="w-full mt-4 py-1 px-2 text-sm bg-yellow-400 hover:bg-yellow-500 border rounded-md"
									type="submit"
									value="Continue"
									onClick={signIn}
								/>
							</form>

							<p className="mt-4 max-w-xs text-xs">
								By signing in, you agree to Amazon's{' '}
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
							<div className="mt-6">
								<Link
									className="text-blue-500 text-sm hover:text-amber-700 hover:underline"
									to={'/help'}
								>
									Need help?
								</Link>
							</div>
						</div>
						<div class="inline-flex items-center justify-center w-full mt-4">
							<hr class="w-full h-px my-6 bg-gray-200 border-0 rounded dark:bg-gray-700" />
							<div class="text-xs absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900 text-gray-400">
								New to Amazon?
							</div>
						</div>
						<Link
							to={'/register'}
							className="inline-block w-full py-1 px-2 text-center text-sm border rounded-lg hover:bg-slate-50"
						>
							Create your Amazon account
						</Link>
					</div>
				</div>
			}
		/>
	);
};

export default Login;
