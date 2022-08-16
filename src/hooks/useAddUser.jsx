import { useCallback, useState } from "react";

const useAddUser = () => {
    const [success, setSuccess] = useState(false);

    const addUser = useCallback((data, isRandom = false, length) => {
        let url = '';

        if (isRandom) {
            url = 'http://localhost:8000/randomUsers'
        } else {
            url = 'http://localhost:8000/users'
        }

        setSuccess(false);

        if (!length) {
            fetch(url, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }).then((res) => {
                if (res.ok) {
                    setSuccess(true);
                    console.log('resres', res);
                }
            }).catch(err => {
                console.log(err);
                setSuccess(false);
            })
        }

    }, [])

    return [addUser, success];
};

export default useAddUser;