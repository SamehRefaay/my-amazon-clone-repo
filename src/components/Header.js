import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.png';

const Header = () => {
	return (
		<div className="header flex gap-1  bg-primary-blue px-4 h-14">
			<Link to={'/'}>
				<img className="h-full" src={headerLogo} alt="amazon-logo" />
			</Link>
			{/* search bar */}
			<div className="flex p-3 flex-1  ">
				<input className=" border p-2 w-full focus:outline-none" type="text" />
				<button className="p-2 bg-secondary-karamel">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						class="w-4 h-4"
					>
						<path
							fill-rule="evenodd"
							d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</div>
			{/* sign in */}
			<div className="px-2 flex flex-col justify-center text-white ">
				<p className="text-sm ">Hello Guest</p>
				<Link to={'/login'}>
					<h5 className="font-bold">Sign In</h5>
				</Link>
			</div>
			{/* returns and orders */}
			<div className="px-2 flex flex-col justify-center text-white ">
				<p className="text-sm ">Returns</p>
				<Link to={'/orders'}>
					<h5 className="font-bold">& Orders</h5>
				</Link>
			</div>
			{/* your prime */}
			<div className="px-2 flex flex-col justify-center text-white">
				<p className="text-sm ">Your</p>
				<Link to={'/prime'}>
					<h5 className="font-bold">Prime</h5>
				</Link>
			</div>
			{/* your basket */}
			<div className="px-2 flex justify-center items-center  text-white ">
				<Link className="flex items-center" to={'/shopingcart'}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-7 h-7"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
					<span>2</span>
				</Link>
			</div>
		</div>
	);
};

export default Header;
