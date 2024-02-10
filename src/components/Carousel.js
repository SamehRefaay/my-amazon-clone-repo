// className="absolute z-0 gradient-mask-b-0 left-0 "
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Carousel = ({ children: slides, interval = 10000 }) => {
	const [bgImgIndex, setBgImgIndex] = useState(0);

	useEffect(() => {
		const autoPlayInterval = setInterval(next, interval);
		return () => {
			clearInterval(autoPlayInterval);
		};
	}, [interval]);

	const prev = () => {
		setBgImgIndex(bgImgIndex =>
			bgImgIndex === 0 ? slides.length - 1 : bgImgIndex - 1
		);
	};
	const next = () => {
		setBgImgIndex(bgImgIndex =>
			bgImgIndex === slides.length - 1 ? 0 : bgImgIndex + 1
		);
	};

	return (
		<div className="relative overflow-hidden">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${bgImgIndex * 100}%)` }}
			>
				{slides}
			</div>
			<div className="absolute inset-0 h-2/3 flex justify-between items-center p-5">
				<button onClick={prev}>
					<FontAwesomeIcon
						icon={faAngleLeft}
						fontSize={40}
						className="text-primary-blue cursor-pointer"
					/>
				</button>
				<button onClick={next}>
					<FontAwesomeIcon
						icon={faAngleRight}
						fontSize={40}
						className="text-primary-blue cursor-pointer"
					/>
				</button>
			</div>
		</div>
	);
};

export default Carousel;
