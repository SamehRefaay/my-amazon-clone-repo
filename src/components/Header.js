import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../images/header-logo.png';
import { useAuth } from '../context/GlobalState';
import { auth } from '../firebase';
import { ReactComponent as CartSvg } from '../images/cart.svg';
import { ReactComponent as SearchSvg } from '../images/search.svg';
import { ReactComponent as LocationSvg } from '../images/location.svg';

const Header = () => {
	const { user, basket } = useAuth();

	const handleLogout = () => {
		auth.signOut();
	};

	const getUsername = user => {
		return user.email.split('@')[0];
	};

	return (
		<div className="header flex gap-1  bg-primary-blue px-4 h-14">
			<Link to={'/'}>
				<img className="h-full" src={headerLogo} alt="amazon-logo" />
			</Link>
			{/* deliver to geo */}

			<Link
				className="text-white flex items-center justify-center"
				to={'/orders'}
			>
				<div className="flex items-center">
					{/* location */}
					<LocationSvg />
					<div className="">
						<p className="text-xs ">Deliver to</p>
						<p className="text-sm font-medium">Egypt</p>
					</div>
				</div>
			</Link>

			{/* search bar */}
			<div className="flex p-3 flex-1  ">
				<label htmlFor="search" className="hidden">
					search
				</label>
				<input
					id="search"
					className=" border rounded-s p-2 w-full focus:outline-none"
					type="text"
				/>
				<button className="p-2 bg-karamel-light hover:bg-karamel-dark rounded-e">
					<SearchSvg className="w-5" />
				</button>
			</div>
			{/* sign in */}
			<div className="px-2 flex flex-col justify-center text-white">
				<p className="text-sm ">Hello {user ? getUsername(user) : 'Guest'}</p>
				<Link to={user ? '/' : '/login'} onClick={handleLogout}>
					<h5 className="font-bold">{user ? 'Sign out' : 'Sign In'}</h5>
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
				<Link className="flex items-center" to={'/cart'}>
					<CartSvg className="w-12" />

					<span>{basket?.length}</span>
				</Link>
			</div>
		</div>
	);
};

export default Header;
