import React from 'react';
import '../App.css'
import ResponsiveAppBar from '../partials/ResponsiveAppBar.jsx';
import UsefulButtons from '../partials/UsefulButtons';
function NotFound() {
    return (
        <div>
            <UsefulButtons></UsefulButtons>
            <ResponsiveAppBar></ResponsiveAppBar>
            <main className='fullscreen-main'>
                <h3 className='sub-form'>
                    404 - No match for <code>{location.pathname}</code>
                </h3>
            </main >
        </div>
    );
}

export default NotFound