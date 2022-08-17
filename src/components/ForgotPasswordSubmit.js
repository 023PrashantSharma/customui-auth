// ForgotPasswordSubmit.js
import React from 'react'

function ForgotPasswordSubmit(props) {
    return (
        <div style={styles.container}>
            <input
                name='confirmationCode'
                placeholder='Confirmation code'
                onChange={e => { e.persist(); props.updateFormState(e) }}
            />
            <input
                name='password'
                placeholder='New password'
                type='password'
                onChange={e => { e.persist(); props.updateFormState(e) }}
            />
            <button onClick={props.forgotPasswordSubmit}>Save new password</button >
        </div>
    )
}

export default ForgotPasswordSubmit