import React, { useCallback, useEffect, useState } from 'react';
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
import { PageBox } from './ListStyle';


const numberOfRows = [
    {
        value: 3,
        label: '3',
    },
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
        label: 'All',
    },
];
const fakeData = [
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
        gender: 'Female',
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
        gender: 'Female',
        phone: '01674687835'
    },
    {
        name: 'Asad',
        email: 'example@email.com',
        gender: 'Male',
        phone: '01674687835'
    },

];

export default function List() {
    const [pageSize, setPageSize] = useState(5);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState(Math.ceil(fakeData.length / pageSize));
    const [rows, setRows] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sort, setSort] = useState({
        field: '',
        clicked: false
    });

    // Pagination functionalities
    const paginate = useCallback((array, page_size, page_number) => {
        return array.slice((page_number - 1) * page_size, (page_number) * page_size);
    }, [])

    useEffect(() => {
        setRows(paginate(fakeData, pageSize, pageNumber));
        setTotalPage(Math.ceil(fakeData.length / pageSize));
    }, [pageSize, pageNumber]); // eslint-disable-line

    const handlePageNumber = (value) => {
        let nextPage;
        let prevPage;
        if (value === 'next') {
            nextPage = pageNumber + 1;

            if (nextPage > totalPage) return;

            setPageNumber(nextPage);
        } else {
            prevPage = pageNumber - 1;

            if (prevPage < 1) return;

            setPageNumber(prevPage);

        }
    }

    const handlePageSize = (event) => {
        setPageNumber(1);
        setPageSize(+event.target.value);
    };

    // search functionalities
    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
    }

    const handleSearch = () => {
        if (searchText === '') {
            setRows(paginate(fakeData, 5, 1));
            setTotalPage(Math.ceil(fakeData.length / pageSize));
            return;
        };

        let filteredUser = fakeData?.filter(item =>
            item?.name.toLowerCase()?.includes(searchText.toLowerCase()) ||
            item?.gender?.toLowerCase()?.includes(searchText.toLowerCase()) ||
            item?.email.toLowerCase()?.includes(searchText.toLowerCase()));

        setPageSize(5);
        setPageNumber(1);
        setTotalPage(Math.ceil(filteredUser.length / pageSize));
        setRows(paginate(filteredUser, pageSize, pageNumber));
    }

    useEffect(() => {
        handleSearch();
    }, [searchText]); // eslint-disable-line


    // Sort functionalities
    const handleSort = (value) => {
        setSort({ field: value, clicked: !sort.clicked });

        if (sort.clicked) {
            setRows(prevState => prevState.sort((a, b) => (a[value] > b[value]) - (a[value] < b[value])))
        } else {
            setRows(prevState => prevState.sort((a, b) => (a[value] < b[value]) - (a[value] > b[value])))
        }
    }



    return (
        <Box sx={{ px: 3, pb: 3 }} className="section">
            <Typography variant="h4" sx={{ mb: 3, mt: -3 }}>User List</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', my: 2, pr: 1 }}>
                <TextField
                    size="small"
                    id="input-with-sx"
                    label="Search..."
                    variant="outlined"
                    onChange={handleSearchChange}
                    value={searchText} />
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
                        {rows?.map((row, index) => (
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


            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: 'center', p: 2 }}>
                <Box sx={{ p: 2, mr: 3 }}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Rows per page"
                        value={pageSize}
                        onChange={handlePageSize}
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
                    `Page ${pageNumber} of ${totalPage}`
                }
                <Button
                    onClick={() => handlePageNumber('prev')}
                    variant="text"
                    sx={{ mx: 1, my: 1 }}
                    size="small"
                    disabled={pageNumber === 1}
                >
                    <KeyboardArrowLeftIcon />
                </Button>

                <Box sx={{ display: 'flex' }}>
                    {
                        [...new Array(totalPage)].map((_, index) => <PageBox
                            sx={{ mx: 0.5 }}
                            key={index}
                            style={{
                                backgroundColor: pageNumber === index + 1 ? '#1976d2' : '#fff',
                                color: pageNumber === index + 1 ? '#fff' : '#1976d2'
                            }}
                            onClick={() => setPageNumber(index + 1)}
                        >
                            {index + 1}
                        </PageBox>)
                    }
                </Box>

                <Button
                    onClick={() => handlePageNumber('next')}
                    variant="text"
                    sx={{ ml: 1, my: 1 }}
                    size="small"
                    disabled={pageNumber === totalPage}
                >
                    <KeyboardArrowRightIcon />
                </Button>
            </Box>

        </Box >
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