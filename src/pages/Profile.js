// Profile.js
// This component is a page that will hold the user's data when they signed up

import React, { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import Container from '../layout/Container'
import Form from '../components/Form'

function Profile() {
    useEffect(() => {
        checkUser()
        Hub.listen('auth', (data) => {
            const { payload } = data
            if (payload.event === 'signOut') {
                setUser(null)
            }
        })
    }, [])
    const [user, setUser] = useState(null)
    async function checkUser() {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = { username: data.username, ...data.attributes }
            setUser(userInfo)
        } catch (err) { console.log('error: ', err) }
    }
    function signOut() {
        Auth.signOut()
            .catch(err => console.log('error signing out: ', err))
    }
    if (user) {
        return (
            <Container>
                <h1>Profile</h1>
                <h2>Username: {user.username}</h2>
                <h3>Email: {user.email}</h3>
                <button onClick={signOut}>Sign Out</button>
            </Container>
        );
    }
    return <Form setUser={setUser} />
}

export default Profile