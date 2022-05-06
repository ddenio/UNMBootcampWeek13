import React from 'react';
import LoginForm from './loginform';
import Navigation from './navigation';

export default class LoginPage extends React.Component {
    render() {
        return(
            <div className='container'>
                <Navigation />
                <br></br>
                <br></br>
                <br></br>
                <LoginForm />
                
            </div>

        );
    }
}