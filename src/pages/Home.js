import React, { Component } from 'react';
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className='home-layout'>
                <form className='content'>
                    <div className='user-input'>
                        <div className='input-wrap'>
                            <span>Icon</span>
                            <input placeholder="Username"></input>
                        </div>
                        <div className='input-wrap'>
                            <span>Icon</span>
                            <input placeholder="Password"></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>Remember Me</label>
                            <a href=''>Forgot password</a>
                        </div>
                        <div>
                            <button>Log in</button>
                            <div>
                                <span>or</span>
                                <a href=''>Register now!</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

