import { useCallback, useEffect, useState } from 'react';

const useFetch = () => {
    const [users, setUsers] = useState([]);

    const getData = useCallback(async () => {
        const response = await fetch('http://localhost:8000/users');
        const data = await response.json();
        setUsers(data);
    }, []) // eslint-disable-line

    useEffect(() => {
        getData();
    }, []); // eslint-disable-line

    return users;
};

export default useFetch;