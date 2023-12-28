import React from 'react';
import '../App.css'

import SubscriptionsData from '../utils/SubscriptionsData';
import ResponsiveAppBar from '../partials/ResponsiveAppBar';
import UsefulButtons from '../partials/UsefulButtons';
import EndSection from '../partials/EndSection';

function Subscriptions() {
    return (
        <>
            <ResponsiveAppBar></ResponsiveAppBar>
            <main className='fullscreen-main'>
                <UsefulButtons></UsefulButtons>
                <SubscriptionsData></SubscriptionsData>
                <EndSection></EndSection>
            </main>
        </>
    )
}

export default Subscriptions