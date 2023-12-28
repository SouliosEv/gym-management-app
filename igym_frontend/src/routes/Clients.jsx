import ClientsData from '../utils/ClientsData';
import React from 'react';
import '../App.css'
import ResponsiveAppBar from '../partials/ResponsiveAppBar';
import UsefulButtons from '../partials/UsefulButtons';
import EndSection from '../partials/EndSection';


function Clients() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <main className='fullscreen-main'>
                <UsefulButtons></UsefulButtons>
                <ClientsData></ClientsData>
                <EndSection></EndSection>
            </main>
        </>
    )
}

export default Clients