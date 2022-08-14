import { useCallback, useEffect, useState } from 'react';

const useUsers = () => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        setLoading(true);
        const response = await fetch('https://randomuser.me/api?results=20');
        const data = await response.json();
        if (data?.results.length) {
            setLoading(false);
        }
        setUserList(data.results);
    }, [])

    useEffect(() => {
        getData();
    }, []); // eslint-disable-line

    return [userList, loading];
};

export default useUsers;