import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function EndSection() {
    return (
        <Grid container spacing={0} sx={{
            margin: '0 auto',
            borderTop: 1,
            justifyContent: 'start',
            bottom: 0,
            marginTop: "15%",
            position: "relative",
            maxWidth: "70%",
        }} >
            < Grid item xs={12} sx={{ marginTop: "2%" }}>
                <Typography variant="body2">Select a client , double click to edit the desired field press enter to finish editing and the save button will make the changes take effect.   </Typography>
            </Grid>
            < Grid item xs={12} sx={{ marginTop: "1%" }}>
                <Typography variant="body2">To search for a client/subscription hover your mouse over the category/header and press the three dots.</Typography>
            </Grid>
            < Grid item xs={12} sx={{ marginTop: "1%" }}>
                <Typography variant="body2">You can sort and filter the contents and hide or manage the columns in the three dots menu.</Typography>
            </Grid>

        </Grid >
    )

}


export default EndSection;