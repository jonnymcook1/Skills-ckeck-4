import React, {Component} from 'react'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            search: '',
            post: []
        }
    }

    componentDidMount() {
        this.getPost()
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    getPost = () => {
        let {search} = this.state
        axios
            .get(`/api/posts?search=${search}`)
            .then(response => {
                console.log(response.data)
                this.setState({ post: response.data })
            })
    }




    render() {

        let {search, post} = this.state
        let displayPost = post.map(post => {
            return (
                <div key={post.id}>
                    <div>
                        <h2>{post.title}</h2>
                    </div>
                    <div>
                        <h4>{post.username}</h4>
                    </div>
                </div>
            )
        })

        return (
            <div className='dashboard'>
                <div className='dashContainer'>
                    <h2>Dashboard</h2>
                    <input type='text' name='search' value={search}
                    onChange={(e) => this.handleChange(e)} />
                    <button onClick={this.getPost}>Search</button>

                </div>
                <div className='displayPost'>
                    {displayPost}
                </div>
            </div>
        )
    }
}

export default Dashboard