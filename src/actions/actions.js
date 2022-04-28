import { ACTION_TYPE } from './global'

export const saveUser = (user) => {
    return {
        type: ACTION_TYPE.userCredential,
        payload: user
    }
}