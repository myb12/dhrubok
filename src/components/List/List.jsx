import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MenuItem from '@mui/material/MenuItem';

const numberOfRows = [
    {
        value: 5,
        label: '5',
    },
    {
        value: 10,
        label: '10',
    },
    {
        value: 20,
        label: '20',
    },
];
const rows = [
    {
        name: 'Mohammad Yasin',
        email: 'lexample@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Yasmin',
        email: 'gexample@email.com',
        gender: 'Female',
        phone: '01674687835'
    },
    {
        name: 'Bappy',
        email: 'bexample@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Khairun Nesa',
        email: 'kexample@email.com',
        gender: 'Female',
        phone: '01674687835'
    },
    {
        name: 'Abdullah',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Rahim',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Shakila',
        email: 'axample@email.com',
        gender: 'female',
        phone: '01674687835'
    },
    {
        name: 'Asad',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Rakibul',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Fakrul',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Rahim',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Shakila',
        email: 'axample@email.com',
        gender: 'female',
        phone: '01674687835'
    },
    {
        name: 'Asad',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Rakibul',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
    {
        name: 'Fakrul',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },
];

export default function List() {
    const [numRows, setNumRows] = useState(5);
    const [sort, setSort] = useState({
        field: '',
        clicked: false
    });

    const handleSort = (value) => {
        setSort({ field: value, clicked: !sort.clicked });
        console.log('sort', sort)
    }

    const handleChange = (event) => {
        setNumRows(+event.target.value);
    };

    return (
        <Box sx={{ px: 3, pb: 3 }} className="section">
            <Typography variant="h4" sx={{ mb: 3 }}>User List</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', my: 2, pr: 1 }}>
                <TextField id="input-with-sx" label="Search..." variant="outlined" />
                <SearchIcon sx={{ color: 'action.active', ml: -4, }} />
            </Box>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >
                                <Button
                                    onClick={() => handleSort('name')}
                                    endIcon={sort.field === 'name' && sort.clicked === true ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />} variant="text" sx={{ fontWeight: 'bold' }}>
                                    Name
                                </Button>
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} >
                                <Button
                                    onClick={() => handleSort('email')}
                                    endIcon={sort.field === 'email' && sort.clicked === true ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />} variant="text" sx={{ fontWeight: 'bold' }}>
                                    Email
                                </Button>
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} >
                                <Button
                                    onClick={() => handleSort('gender')}
                                    endIcon={sort.field === 'gender' && sort.clicked === true ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />} variant="text" sx={{ fontWeight: 'bold' }}>
                                    Gender
                                </Button>
                            </TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} >
                                <Button
                                    onClick={() => handleSort('phone')}
                                    endIcon={sort.field === 'phone' && sort.clicked === true ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />} variant="text" sx={{ fontWeight: 'bold' }}>
                                    Phone
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ pl: 2 }}>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ pl: 3 }} component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ pl: 3 }} >{row.email}</TableCell>
                                <TableCell sx={{ pl: 3 }} >{row.gender}</TableCell>
                                <TableCell sx={{ pl: 3 }} >{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Box sx={{ p: 2, mr: 3 }}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Rows per page"
                        value={numRows}
                        onChange={handleChange}
                        helperText="Please select number of rows"
                        variant='standard'
                        sx={{ textAlign: 'left' }}
                    >
                        {numberOfRows.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                {
                    `Page 1 of 5`
                }
                <Button variant="outlined" sx={{
                    mx: 1
                }}>
                    <KeyboardArrowLeftIcon />
                </Button>
                <Button variant="outlined" >
                    <KeyboardArrowRightIcon />
                </Button>
            </Box>

        </Box>
    );
}





/* import React from 'react';

const List = () => {
    return (
        <div className='section'>
            This is LIST page
        </div>
    );
};

export default List; */