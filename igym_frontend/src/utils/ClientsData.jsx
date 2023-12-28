import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';



function ClientsData() {
    const [clients, setClients] = useState([]);
    const [updatedClient, setUpdatedClient] = useState({});
    const [selectedRowId, setSelectedRowId] = useState(-1);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/clients');
            setClients(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);





    const columns = [
        { field: 'clientId', headerName: 'ClientID', width: 150, readOnly: true },
        {
            field: 'name', headerName: 'Name', editable: true, width: 350,
        },
        { field: 'email', headerName: 'Email', width: 400 },
        { field: 'mobileNumber', headerName: 'Mobile number', width: 350 },
    ]

    return (
        <Box className='dataGrid'>
            <DataGrid
                onCellEditStart={(params, event) => {
                    setUpdatedClient(params);
                }}
                onCellEditStop={(params, event) => {
                    params.row.name = event.target.value;
                    console.log(params.row)
                    setUpdatedClient(params.row)
                }}


                rows={clients}
                columns={columns}
                getRowId={row => row.clientId}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                checkboxSelection
                disableRowSelectionOnClick
                onRowSelectionModelChange={(params, event) => {
                    if (params.length === 0) { setSelectedRowId(-1) } else {
                        setSelectedRowId(params[0])//only the first selection counts-.-
                        //i need to allow only 1 selection at a time!
                    }

                }}
            />
            <Button disabled={selectedRowId < 0} onClick={(event) => {//async await
                axios.put(`http://localhost:8080/clients/update/${selectedRowId}`, updatedClient)
                    .then(() => {
                        fetchData();
                        alert('Client updated successfully');
                        setSelectedRowId(-1);
                    })
                    .catch((error) => {
                        console.error('Error updating subscription:', error);
                    });
            }}>
                {<SaveIcon />}
            </Button>
            <Button disabled={selectedRowId < 0} onClick={(event) => {
                console.log(row.isRowSelected)
                axios.delete('http://localhost:8080/clients/' + selectedRowId)
                    .then(() => {
                        fetchData();
                        alert('Client deleted successfully');
                    })
                    .catch((error) => {
                        console.error('Error deleting subscription:', error);
                    });
            }}>
                {<DeleteIcon />}
            </Button>
        </Box>
    );



}



export default ClientsData;