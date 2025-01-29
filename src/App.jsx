// ``

import { useEffect, useState } from 'react';
import useFetchApi from './hooks/useFetchApi';
import LocationCard from './components/LocationCard';
import ResidentsList from './components/ResidentsList';
import SearchForm from './components/SearchForm';
import { randomId } from './utils';
import Hero from './components/Hero';



const baseUrl = 'https://rickandmortyapi.com/api';

function App() {
	const { data, request, pending, error } = useFetchApi();
	const [search, setSearch] = useState(randomId(126));

	useEffect(() => {
		
		request(`${baseUrl}/location/${search}`);
	}, [search]);

	return (
		<div>
			 <Hero />
			<SearchForm setSearch={setSearch}/>
			{pending ? <p>Cargando...</p> : data && <LocationCard location={data} />}
			<ResidentsList residents={data?.residents} />
		</div>
	);
}

export default App;
