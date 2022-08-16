import { useCallback, useEffect, useState } from 'react';

const useUsers = (callOnce) => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = useCallback(async () => {
        if (callOnce) {
            setLoading(true);
            const response = await fetch('https://randomuser.me/api?results=20');
            const data = await response.json();
            if (data?.results.length) {
                setLoading(false);
            }
            setUserList(data.results);
        }
    }, [callOnce])

    useEffect(() => {
        getData();
    }, []); // eslint-disable-line

    return [userList, loading];
};

export default useUsers;