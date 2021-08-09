import React from 'react'

const Footer = () => {
    const year = (new Date).getFullYear()
    return (
        <footer className='footer'>
            <div className='border'>
                <div className='container'>
                    <span>PIZZA STORE &#xa9; { year }</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer