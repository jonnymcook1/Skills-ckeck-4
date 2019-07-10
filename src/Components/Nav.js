import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUser} from '../redux/reducer'

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            
        }
    }

    render() {
        console.log(this.props.username.profile_pic)
        return (
            <div className='nav'>
                <div className='navButtons'>
                    <img src={this.props.username.profile_pic} alt="profile pic" id='pic'/>
                    <h6>{this.props.username.username}</h6>
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

export default connect(mapStateToProps, {updateUser})(Nav)