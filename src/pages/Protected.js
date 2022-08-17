// Protected.js
// This component is a protected route
// A user has to be logged in to view this route
// If they are not logged in, they will be redirected to sign in

import React from 'react';
import Container from '../layout/Container'
import protectedRoute from './protectedRoute'

function Protected() {
    return (
        <Container>
            <h1>Protected route</h1>
        </Container>
    );
}

export default protectedRoute(Protected)