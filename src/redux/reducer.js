

const initialState = {
    username: '',
    profilePic: '',
    id: 0,
    user: []
}

export const UPDATE_USER="UPDATE_USER";

export const updateUser = (id, username, profilePic) => {
    return {
        type: UPDATE_USER,
        payload: id, username, profilePic
    }
}

export default function reducer(state=initialState, action) {
    const  {type, payload} = action
    switch(type) {
        case UPDATE_USER:
            return {
                ...state,
                id: payload,
                username: payload,
                profilePic: payload

            }
        default: 
        return state
    }
}