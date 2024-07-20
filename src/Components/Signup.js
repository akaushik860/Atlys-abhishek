import React from 'react'
import SignUpModal from './SignUpModal'

const Signup = () => {
  return (
    <div className='bg-black h-screen'>
        <SignUpModal isSignup={true} isOpen={true}></SignUpModal>
    </div>
  )
}

export default Signup