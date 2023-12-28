import ClientForm from '../utils/ClientForm.jsx';
import React from 'react';
import '../App.css'
import ResponsiveAppBar from '../partials/ResponsiveAppBar.jsx';
import UsefulButtons from '../partials/UsefulButtons';


function Register() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <main className='fullscreen-main'>
                <UsefulButtons></UsefulButtons>
                <ClientForm></ClientForm>
            </main>

        </>
    )
}

export default Register