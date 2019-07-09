import React, {Component} from 'react'
import axios from 'axios';
import {Redirect} from 'react-router-dom'

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false

        }
    }

    handleChange = (e) =>
    this.setState({[e.target.name]: e.target.value})

    register = (e) => {
        e.preventDefault()
        axios
        .post('/api/auth/register', {username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true}))
        .catch(() => {alert('Registration Unsuccessful')})
    }

    login = (e) => {
        e.preventDefault()
        axios
        .post('/api/auth/login', {username: this.state.username, password: this.state.password})
        .then(() => this.setState({redirect: true}))
        .catch(() => {alert('Login Unsuccessful')})
    }


    render() {

        if(this.state.redirect){
            return <Redirect to='/dashboard' />
        }

        const {username, password} = this.state

        return (
            <div className='auth'>
                <div className='authBox'>
                    <div className='logo'>
                        <img/>
                        <h2>Helo</h2>
                    </div>
                    <div className='authInput'>
                        Username:
                        <input name='username' value={username} onChange={this.handleChange} />
                        Password:
                        <input name='password' value={password} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button onClick={this.login}>Login</button>
                        <button onClick={this.register}>Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth