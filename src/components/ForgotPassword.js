// ForgotPassword.js
import React from 'react'

function ForgotPassword(props) {
    return (
        <div>
            <input
                name='username'
                placeholder='Username'
                onChange={e => { e.persist(); props.updateFormState(e) }}
            />
            <button onClick={props.forgotPassword}>Reset password</button>
        </div>
    )
}

export default ForgotPassword