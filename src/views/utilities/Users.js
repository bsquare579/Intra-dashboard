import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import MainCard from 'ui-component/cards/MainCard';
import EditRounded from '@mui/icons-material/EditRounded';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Users = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [users, setUsers] = React.useState([]);
    const [edit, setEdit] = React.useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getUsers = async () => {
        try {
            const response = await fetch(process.env.REACT_APP_API_URL + 'getUsers');
            const users = await response.json();
            // console.log(users);
            setUsers(users);
        } catch (error) {
            console.error(error);
        }
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 600,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        p: 4
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <MainCard title="Users Table" secondary>
                <Paper sx={{ width: '100%' }}>
                    <TableContainer sx={{ maxHeight: 700 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>S/N</TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Address</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Date Registered</TableCell>
                                    <TableCell align="center" col={3}>
                                        Action
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            {users.length > 0 ? (
                                <TableBody>
                                    {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
                                                <TableCell col={1}>{user.id}</TableCell>
                                                <TableCell>{user.name}</TableCell>
                                                <TableCell>{user.email}</TableCell>
                                                <TableCell>{user.address}</TableCell>
                                                <TableCell>(+234) {user.phone}</TableCell>
                                                <TableCell>{user.role}</TableCell>
                                                <TableCell>{user.status == 1 ? 'Active' : 'Inactive'}</TableCell>
                                                <TableCell>{user.date}</TableCell>
                                                <TableCell align="center">
                                                    <Button
                                                        color="primary"
                                                        variant="outlined"
                                                        key={user.id}
                                                        col={1}
                                                        onClick={() => setEdit(true)}
                                                        endIcon={<EditRounded />}
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        color="error"
                                                        variant="contained"
                                                        key={user.id}
                                                        col={1}
                                                        startIcon={<DeleteIcon />}
                                                    >
                                                        Delete
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            ) : (
                                <TableBody>No Record Found</TableBody>
                            )}
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={users.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </MainCard>
            <Modal
                open={edit}
                onClose={() => setEdit(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-title" variant="h2" component="h2">
                        Add User
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};
export default Users;
