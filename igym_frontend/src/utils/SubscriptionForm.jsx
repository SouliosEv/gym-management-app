import { useState, useEffect } from 'react';
import { MenuItem, Select, Button, FormControl, InputLabel, Input, FormHelperText, TextField, Autocomplete } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import '../App.css'

const SubscriptionForm = () => {
    const [errors, setErrors] = useState([]);

    {/*data fetching*/ }
    const [allPlans, setAllPlans] = useState([]);
    const [allClients, setAllClients] = useState([]);

    const fetchPlans = async () => {
        try {
            const response = await axios.get('http://localhost:8080/plans');
            setAllPlans(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchPlans();
    }, []);

    const fetchClients = async () => {
        try {
            const response = await axios.get('http://localhost:8080/clients');
            setAllClients(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchClients();
    }, []);

    {/*data fetching end*/ }

    const [plan, setPlan] = useState({});
    const [client, setClient] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            client,
            plan,
        };
        try {
            const response = await axios.post('http://localhost:8080/subscriptions/create', formData);
            console.log(response.status);
            if (response.status === 200) {
                setErrors([]);
                setClient({});
                setPlan({});
                alert('Subscription created successfully');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        const selectedOption = event.target.value;
        setPlan(selectedOption);
    };
    const handleSelectChange = (event, value) => {
        const selectedClient = allClients.find(client => client.name === value);
        setClient(selectedClient);
    };




    return (
        <Box className="sub-form">
            <Grid container spacing={2} >
                <Grid item xs={12} >
                    <FormControl fullWidth>
                        <Autocomplete
                            disablePortal
                            id="search"
                            options={allClients.map((client) => client.name)}
                            renderInput={(params) => <TextField
                                {...params} label="Client"
                            />}
                            onChange={handleSelectChange}

                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    <FormControl fullWidth>
                        <InputLabel id="select-plan">Plan</InputLabel>
                        <Select
                            labelId="select-plan"
                            id="plan-select"
                            value={plan}
                            label="Plan"
                            onChange={handleChange}
                        >
                            {allPlans.map((fplan) => (
                                <MenuItem value={fplan}>{fplan.description}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <div className="error">{errors.join(', ')}</div>
                    <Button className="buttonS" variant="contained" type="submit" onClick={handleSubmit}>Subscribe</Button>
                </Grid>
            </Grid>
        </Box>
    );
};


export default SubscriptionForm