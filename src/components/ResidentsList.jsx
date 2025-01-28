import React from 'react';
import ResidentCard from './ResidentCard';
import './ResidentsList.scss'

function ResidentsList({ residents }) {
	return (
		<div className='residents'>
			{residents?.length > 0 ? (
				<>
					{residents.map((resident) => (
						<ResidentCard key={resident} url={resident} />
					))}
				</>
			) : (
				<p>No hay Residentes</p>
			)}
		</div>
	);
}

export default ResidentsList;
