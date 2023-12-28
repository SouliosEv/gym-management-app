import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';


export default function UsefulButtons() {
    const navigate = useNavigate();

    const navigateToRegister = () => {
        // 👇️ navigate to /contacts
        navigate('/Register');
    };

    const navigateToSubscribe = () => {
        // 👇️ navigate to /contacts
        navigate('/Subscribe');
    };

    const navigateBack = () => {
        navigate(-1);
    }

    const buttons = [
        <Button key="back" variant="contained" onClick={navigateBack}>Back</Button>,
        <Button key="newClient" variant="contained" onClick={navigateToRegister}>+Client</Button>,
        <Button key="newSub" variant="contained" onClick={navigateToSubscribe}>+Sub</Button>,

    ];
    return (
        <Grid container spacing={2} >
            <Grid item xs={9} >
            </Grid>
            <Grid item xs={3} >
                <ButtonGroup orientation='vertical' >
                    {buttons}
                </ButtonGroup>
            </Grid>
        </Grid>
    );
}