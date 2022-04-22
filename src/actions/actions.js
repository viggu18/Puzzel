import { ACTION_TYPE } from './global'

export const saveUser = (user) => {
    return {
        type: ACTION_TYPE.SAVE_USER_DATA,
        payload: user
    }
}