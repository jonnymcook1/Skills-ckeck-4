

const initialState = {
    username: '',
    profilePic: '',
    id: 0,
    user: []
}

export const UPDATE_USER="UPDATE_USER";

export const updateUser = (user, username, profilePic) => {
    return {
        type: UPDATE_USER,
        payload: user, username, profilePic
    }
}

export default function reducer(state=initialState, action) {
    const  {type, payload} = action
    switch(type) {
        case UPDATE_USER:
            return {
                ...state,
                user: payload,
                username: payload,
                profilePic: payload

            }
        default: 
        return state
    }
}