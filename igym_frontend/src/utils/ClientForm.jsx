import { useState, useEffect } from 'react';
import { Alert, Button, FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import '../App.css'


const ClientForm = () => {
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            email,
            mobileNumber,
            name
        };
        if (!name || name.length < 4) {
            alert('Invalid Name');
        }
        if (!email || !/[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+/.test(email)) {
            alert('Invalid email');
        }
        if (!mobileNumber) {
            alert('Mobile number is required');
        }
        try {
            const response = await axios.post('http://localhost:8080/clients/create', formData);
            console.log(response.status)
            if (response.status === 201) {
                setEmail('');
                setMobileNumber('');
                setName('');
                alert('Client added successfully!')
            }

        } catch (error) {
            console.error(error);
        }
    };
    return (
        <Box className="client-form">
            <Grid container spacing={2} >
                <Grid item xs={12} >
                    <FormControl fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" aria-describedby="my-helper-text" value={name} onChange={(e) => setName(e.target.value)} />
                        <FormHelperText id="my-helper-text">Client's full name</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} >
                    <FormControl fullWidth>
                        <InputLabel htmlFor="email">Email address</InputLabel>
                        <Input id="email" aria-describedby="my-helper-text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <FormHelperText id="my-helper-text" >We'll never share your email.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="mobileNumber">Mobile Number</InputLabel>
                        <Input id="mobileNumber" aria-describedby="my-helper-text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                        <FormHelperText id="my-helper-text">We'll never share your mobile.</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" type="submit" onClick={handleSubmit}>Register</Button>
                </Grid>

            </Grid>
        </Box>
    );
};


export default ClientForm