import { useState, useCallback } from 'react';

function useLocalStorage(key: string, initialValue: string) {
	
	const [storedValue, setStoredValue] = useState(() => {
	const item = window.localStorage.getItem(key);
	return item ? JSON.parse(item) : initialValue;
	})

	const setValue = useCallback
	((value: string) => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
		}, [key]);

	return {storedValue, setValue}
}
export default useLocalStorage