import React, { useState } from 'react'

function Toggle() {
    const [status, setStatus] = useState(false);

    return (
        <div className='flex flex-col gap-y-6 items-center'>
            {status ? <h1>Lorem ipsum dolor sit amet.</h1> : null}
            <div className='flex gap-3'>
                <button onClick={() => setStatus(true)} className='bg-gray-300'>Show</button>
                <button onClick={() => setStatus(false)} className='bg-gray-300'>Hide</button>
                <button onClick={() => setStatus(!status)} className='bg-gray-300'>Toggle</button>
            </div>
        </div>
    )
}

export default Toggle