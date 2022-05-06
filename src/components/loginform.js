import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <form className='border border-primary m-3 p-3'>
                <h3>Login</h3>
                <div class='form-group'>
                    <label for='input-name'>Username</label>
                    <input type='text' className='form-control' id='input-name' placeholder='Username' />
                </div>
                <div class='form-group'>
                    <label for='input-password'>Password</label>
                    <input type='password' className='form-control' id='input-password' placeholder='Password' />
                    <small id='passwordHelp' className='form-text text-muted'>We'll never share your password with anyone else.</small>
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>

        );

    }
}