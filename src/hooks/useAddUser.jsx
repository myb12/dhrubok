import { useState } from "react";

const useAddUser = () => {
    const [success, setSuccess] = useState(false);

    const addUser = (data, isArray = false) => {
        setSuccess(false);
        let stringifyData = JSON.stringify(data);
        let dataStr;
        if (isArray) {
            dataStr = stringifyData.slice(1, (stringifyData.length - 1));
        } else {
            dataStr = JSON.stringify(data);
        }

        fetch('http://localhost:8000/users', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: dataStr,
        }).then((res) => {
            if (res.ok) {
                setSuccess(true);
            }
        }).catch(err => {
            console.log(err);
            setSuccess(false);
        })
    }

    return [addUser, success];
};

export default useAddUser;