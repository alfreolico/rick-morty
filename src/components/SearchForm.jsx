import React, { useRef, useState } from 'react';
import './SearchForm.scss'

function SearchForm({setSearch}) {
	const inputRef = useRef()
	const [error, setError] = useState('')
	const handleSubmit = (e) => {
		e.preventDefault()
		setError('')
		const value = +inputRef.current?.value.trim()
		
		if (!value){
			setError('Please enter a location ID');
			return
		}

		if(isNaN(+value) || +value < 1) {
			setError('Please enter a valid number');
			return
		}

		if(+value > 126){
			setError('You must Provide a number between 1 and 126');
			return
		}

		setSearch(value);
		inputRef.current.value = ''

	}
	return (
	<form className='search' onSubmit={handleSubmit}>
		<div className='container'>
		<input className='search__input' 
		type = "text" 
		ref = {inputRef} 
		placeholder = 'Enter a location ID' 
		/>
		<button className='search__btn'>Search</button>
		{error && <p className='search__error'>{error} </p>}
		</div>
	</form>);
}

export default SearchForm;
