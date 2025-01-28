import { useState } from 'react';
import axios from 'axios';

function useFetchApi() {
	const [data, setData] = useState(null);
	const [pending, setPending] = useState(false);
	const [error, setError] = useState(null);

	const request = async (url) => {
		setPending(true);
		setError(null);
		try {
			const res = await axios.get(url);
			setData(res.data);
		} catch (error) {
			setError(error);
		} finally {
			setPending(false);
		}
	};

	return { data, pending, error, request };
}
export default useFetchApi;
