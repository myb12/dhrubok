import { Alert, Button, Grid, InputAdornment, InputLabel, Select, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';

const Form = () => {
    const [gender, setGender] = useState('Male');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleGenderChange = (value) => {
        setGender(value);
    }


    const onSubmit = (data) => {
        console.log('data', data);
    }
    return (
        <div className='section'>
            <Grid container sx={{ mb: 3 }}>
                <Grid item sm={12} md={3}></Grid>
                <Grid item sm={12} md={6} >
                    <Typography variant="h4" sx={{ mt: -3 }}>
                        Add User
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField
                            label="Name"
                            name="name"
                            variant="standard"
                            sx={{ mt: 2, width: '100%' }}
                            {...register('name', { required: true })}
                        />
                        {
                            errors.name && <Alert severity="error" sx={{ mt: 2 }}>
                                Name is required!
                            </Alert>
                        }


                        <TextField
                            label="Email address"
                            name="email"
                            type="email"
                            variant="standard"
                            sx={{ mt: 2, width: '100%' }}
                            {...register('email', { required: true })}
                        />
                        {
                            errors.email && <Alert severity="error" sx={{ mt: 2 }}>
                                Email is required
                            </Alert>
                        }

                        {/* <TextField
                            type="text"
                            label="Gender"
                            variant="standard"
                            name="gender"
                            sx={{ mt: 2, width: '100%' }}
                            {...register('gender', { required: true })}
                        /> */}


                        <TextField
                            id="outlined-select-currency"
                            select
                            name="gender"
                            label="Gender"
                            helperText="Please select number of rows"
                            variant='standard'
                            sx={{ textAlign: 'left', mt: 2, width: '100%' }}
                            value={gender}
                            {...register('gender', { required: true })}
                        >
                            <MenuItem value="Male" onClick={() => handleGenderChange('Male')}>
                                Male
                            </MenuItem>
                            <MenuItem value="Female" onClick={() => handleGenderChange('Female')}>
                                Female
                            </MenuItem>
                        </TextField>
                        {
                            errors.gender && <Alert severity="error" sx={{ mt: 2 }}>
                                Gender is required
                            </Alert>
                        }

                        <TextField
                            type="tel"
                            label="Phone"
                            variant="standard"
                            name="phone"
                            sx={{ mt: 2, width: '100%' }}
                            {...register('phone', { required: true })}
                        />
                        {
                            errors.phone && <Alert severity="error" sx={{ mt: 2 }}>
                                Phone is required
                            </Alert>
                        }

                        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                            Submit
                        </Button>
                    </form>
                </Grid>
                <Grid item sm={12} md={3}></Grid>
            </Grid>
        </div>
    );
};

export default Form;