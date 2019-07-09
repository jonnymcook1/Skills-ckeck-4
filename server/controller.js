const bcrypt = require('bcrypt')

module.exports = {
    registerUser: (req, res) => {
        const db = req.app.get('db')
        const {username, password, profile_pic} = req.body

        db.findUser(username)
        .then((userList) => {
            if(userList > 0) {
                res.status(403).json({error: 'Username taken!'})
            } else {
                bcrypt.hash(password, 12)
                .then((newPassword) => {
                    db.addUser(username, newPassword, profile_pic)
                    .then(() => {
                        res.status(200).json(username)
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
                            username: user[0].username
                        }
                    };
                    res.status(200).json(req.session.user)
                })
            }
        })
    }
}