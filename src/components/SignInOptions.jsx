import React from 'react'

const SignInOptions = ({text, image}) => {
  return (
    <button className='flex items-center gap-1 border-2 rounded-lg p-2 mb-3 cursor-pointer'>
      <p className='text-[10px] md:text-[13px]'>Sign in with {text}</p>
      {image}
    </button>
  )
}

export default SignInOptions
