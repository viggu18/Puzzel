
export const setUser = (user) => {
   return {
        type: 'USER',
        payload: user,
    };
}

export const setPhone = (data) => {
    return {
        type: 'customPhone',
        payload: data
    }
}
