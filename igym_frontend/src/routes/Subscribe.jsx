import SubscriptionForm from '../utils/SubscriptionForm.jsx';
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
                <SubscriptionForm></SubscriptionForm>
            </main>
        </>
    )
}

export default Register