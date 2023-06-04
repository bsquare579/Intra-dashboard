import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditRounded from '@mui/icons-material/EditRounded';

const Tables = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [markers, setMarkers] = React.useState([]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getMarkers = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_API_VARIABLE + 'getlatlng');
            const markers = await response.json();
            // console.log(markers);
            setMarkers(markers);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMarkers();
    }, []);

    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 700 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell col={1}>S/N</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell align="center" col={3}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {markers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((marker) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={marker.id}>
                                    <TableCell col={1}>{marker.id}</TableCell>
                                    <TableCell>{marker.name}</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell align="center">
                                        <Button color="primary" variant="outlined" key={marker.id} col={1} endIcon={<EditRounded />}>
                                            Edit
                                        </Button>
                                        {/* <Button color="secondary" col={1}>
                                            Edit
                                        </Button> */}
                                        <Button color="error" variant="contained" key={marker.id} col={1} startIcon={<DeleteIcon />}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={markers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
export default Tables;
