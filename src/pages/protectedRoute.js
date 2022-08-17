// protectedRoute.js
// This component checks wheather or not a user is signed in
// It will allow to view private routes or force the user to log in
// When a user signs in, they will be redirectd to their profile page

import React, { useEffect } from 'react'
import { Auth } from 'aws-amplify'

const protectedRoute = (Comp, route = '/profile') => (props) => {
    async function checkAuthState() {
        try {
            await Auth.currentAuthenticatedUser()
        } catch (err) {
            props.history.push(route)
        }
    }
    useEffect(() => {
        checkAuthState()
    })
    return <Comp {...props} />
}

export default protectedRoute