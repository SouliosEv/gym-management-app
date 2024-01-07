import * as React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

function SubscriptionsData() {
    const [allData, setAllData] = useState([]);
    const [subData, setSubData] = useState([]);
    const [selectedRowId, setSelectedRowId] = useState(-1);

    const getSub = (subId) => {
        const updatedSub = allData.find((sub) => sub.subId === subId);
        updatedSub.updatedAt = new Date();
        return updatedSub;
    };

    const columns = [
        { field: 'subId', headerName: 'Sub ID', width: 150 },
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'email', headerName: 'Email', width: 350 },
        { field: 'mobileNumber', headerName: 'Mobile number', width: 200 },
        { field: 'endsAt', headerName: 'End Date', type: 'number', width: 200 },
    ]
    const parseSubData = (subData) => {
        return subData.map((row) => {
            const { subId, name, email, mobileNumber, createdAt } = row;
            const planDuration = row.plan.duration;
            const updatedDate = new Date(row.updatedAt[0], row.updatedAt[1] - 1, row.updatedAt[2]);//for some reason now the data is an array
            let endDate = new Date(updatedDate.setMonth(updatedDate.getMonth() + planDuration));
            endDate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;
            return {
                subId: row.subId,
                name: row.client.name,
                email: row.client.email,
                mobileNumber: row.client.mobileNumber,
                endsAt: endDate
            };
        });
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:8080/subscriptions');
            setSubData(parseSubData(response.data));
            setAllData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Box className='dataGrid'>
            <DataGrid
                rows={subData}
                columns={columns}
                getRowId={row => row.subId}
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
                    }

                }}
            />
            <Button disabled={selectedRowId < 0} onClick={(event) => {
                axios.delete('http://localhost:8080/subscriptions/' + selectedRowId)
                    .then(() => {
                        fetchData();
                        alert('Subscription deleted successfully');
                    })
                    .catch((error) => {
                        console.error('Error deleting subscription:', error);
                    });
            }}>
                {<DeleteIcon />}
            </Button>
            <Button disabled={selectedRowId < 0} onClick={(event) => {//async await
                axios.put(`http://localhost:8080/subscriptions/update/${row.id}`, getSub(selectedRowId))
                    .then(() => {
                        fetchData();
                        alert('Subscription updated successfully');
                    })
                    .catch((error) => {
                        console.error('Error updating subscription:', error);
                    });
            }}>
                {<AddIcon />}
            </Button>
        </Box>
    );

}

export default SubscriptionsData;
