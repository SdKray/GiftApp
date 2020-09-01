import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';
// import PropTypes from 'prop-types'

export const GifExperApp = props => {
	const [categories, setCategories] = useState(['PHP']);

	// const handleAdd= ()=>{
	//     setCategories(['Kaguya Sama',...categories])
	// }
	return (
		<>
			<h2>GifExperApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map(cat => (
					<GifGrid key={cat} category={cat} />
				))}
			</ol>
		</>
	);
};

// GifExperApp.propTypes = {

// }
