import React, { Component } from 'react';
import {Route,Redirect} from 'react-router-dom';
import Home from '../pages/Home.js';
import Student from '../pages/Student.js';
import Lecturer from '../pages/Lecturer.js';
import Header from './header/Header';
import Course from '../pages/Course';
import Footer from './footer/Footer';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <switch>
                    <Redirect from='/' to='/home' />
                    <Route path='/home' component={Home} />
                    <Route path='/course' component={Course}/>
                    <Route path='/student' component={Student} />
                    <Route path='/lecturer' component={Lecturer} />
                </switch>
                <Footer />
            </div>
        );
    }
}