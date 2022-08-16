import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import LockResetIcon from '@mui/icons-material/LockReset';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCount = () => {
        setCounter(prevCount => prevCount + 1);
    }
    return (
        <div className='section'>
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" sx={{ mb: 5 }}>
                    Please click the <strong>Green</strong> button to increase it's value.
                </Typography>
                <Button size="large" variant="contained" color="success" onClick={handleCount}>
                    {counter}
                </Button>
                <br />
                <Button
                    onClick={() => setCounter(0)}
                    sx={{ mt: 2 }}
                    size="large"
                    color="secondary"
                    endIcon={<LockResetIcon />}>
                    Reset
                </Button>
            </Box>
        </div>
    );
};

export default Counter;