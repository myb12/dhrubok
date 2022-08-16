import { Alert, Button, Collapse, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useForm } from 'react-hook-form';
import useFetch from '../../hooks/useFetch';
import useAddUser from '../../hooks/useAddUser';
import CloseIcon from '@mui/icons-material/Close';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
    const [gender, setGender] = useState('Male');
    const [open, setOpen] = useState(true);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [addUser, success] = useAddUser();

    const handleGenderChange = (value) => {
        setGender(value);
    }

    const onSubmit = async (data) => {
        const dataToAdd = { ...data, id: uuidv4() }
        addUser(dataToAdd);
        reset();
    }
    return (
        <div className='section'>
            <Grid container sx={{ mb: 3 }}>
                <Grid item sm={12} md={3}></Grid>
                <Grid item sm={12} md={6} >
                    <Typography variant="h4" sx={{ mt: -3 }}>
                        Add User
                    </Typography>
                    {
                        success && <Collapse in={open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                Close me!
                            </Alert>
                        </Collapse>
                    }
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