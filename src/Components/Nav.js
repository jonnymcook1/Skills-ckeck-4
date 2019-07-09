import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        return (
            <div className='nav'>
                <div className='navButtons'>
                    <Link to='/dashboard'><button>Home</button></Link>
                    <Link to='/post/:postid'><button>New Post</button></Link>
                    <Link to='/'><button>logout</button></Link>
                </div>
    
            </div>
        )
    }
}

export default Nav