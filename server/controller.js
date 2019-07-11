const bcrypt = require('bcrypt')

module.exports = {
    registerUser: (req, res) => {
        const db = req.app.get('db')
        const {username, password, profile_pic, id} = req.body

        db.findUser(username)
        .then((userList) => {
            if(userList > 0) {
                res.status(403).json({error: 'Username taken!'})
            } else {
                bcrypt.hash(password, 12)
                .then((newPassword) => {
                    db.addUser(username, newPassword, profile_pic, id)
                    .then(() => {
                        res.status(200).json(username, profile_pic, id)
                    })
                })
            }
        })
    },

    loginUser: (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body

        db.findUser(username)
        .then((user) => {
            if(!user.length) {
                res.status(404).json({error: 'User does not exist'});
            } else {
                bcrypt.compare(password, user[0].password)
                .then((doesMatch) => {
                    if(!doesMatch) {
                        res.status(403).json({error: 'Username or Password is Incorrect'})
                    } else {
                        req.session.user = {
                            user: user[0].user,
                            username: user[0].username,
                            profile_pic: user[0].profile_pic,
                            id: user[0].id
                        }
                    };
                    res.status(200).json(req.session.user)
                })
            }
        })
    },

    post: async (req,res) => {
        const db = req.app.get('db'),
            { title, image_url, content } = req.body,
            { id } = req.session.user;
    
        const post = await db.post( [ id, title, image_url, content ] )
        return res.status(200).send(post)
    },
    
    getPost: async (req,res) => {
        const db = req.app.get('db')
        const post = await db.get_post()

        const {search} = req.query

        if(search) {
            const filteredPost = post.filter(post => {
                return post.title.toLowerCase() === search.toLowerCase()
            }) 
            return res.status(200).json(filteredPost)
        }

        res.status(200).send(post)
    }

}