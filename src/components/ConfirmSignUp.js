// ConfirmSignup.js
import React from 'react'

function ConfirmSignUp(props) {
    return (
        <div style={styles.container}>
            <input
                name='confirmationCode'
                placeholder='Confirmation Code'
                onChange={e => { e.persist(); props.updateFormState(e) }}
            />
            <button onClick={props.confirmSignUp}>Confirm Sign Up</button >
        </div>
    )
}

export default ConfirmSignUp