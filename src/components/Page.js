import React from 'react';
import useDocumentTitle from '../utils/useDocumentTitle';

const Page = ({ title, content }) => {
	const titlePrefix = 'Amazon Clone | ';
	useDocumentTitle(`${titlePrefix}${title}`);
	return <>{content}</>;
};

export default Page;
