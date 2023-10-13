import React from 'react';
import { Link } from 'react-router-dom';
import whiteLogo from '../images/amazon-white-logo.jpg';

const Login = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			{/* logo */}
			<Link className="" to="/">
				<img className="h-16" src={whiteLogo} alt="amazon-logo" />
			</Link>
			<div>
				<div className="p-6 border rounded-lg">
					<h1 className="text-3xl ">Sign in</h1>
					<p className="mt-3 font-medium text-sm">
						Email or mobile phone number
					</p>
					<input
						className="w-full mt-1 py-1 px-2 outline-2 outline-cyan-200 border rounded"
						type="text"
					/>
					<input
						className="w-full mt-4 py-1 px-2 text-sm bg-yellow-400 hover:bg-yellow-500 border rounded-md"
						type="submit"
						value="Continue"
					/>

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
					to={'/signup'}
					className="inline-block w-full py-1 px-2 text-center text-sm border rounded-lg hover:bg-slate-50"
				>
					Create your Amazon account
				</Link>
			</div>
		</div>
	);
};

export default Login;
