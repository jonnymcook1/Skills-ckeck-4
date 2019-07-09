import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        console.log(this.props)
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

const mapStateToProps = state => {
    const {username, profilePic} = state
    return {username, profilePic}

}

export default connect(mapStateToProps)(Nav)