import React from 'react'

import '../styles/Dogs.styles.css'

export default function Dogs({ data }) {
    return (
        <div className='dogs'>
            <p>Below you will find pictures of my dogs. Why? Couldn't tell you. Enjoy!</p>
            <div className='doggo-grid'>
                <div>
                    <h3>Cooper</h3>
                    <img style={{width: '170px', margin: 'auto'}} src={data.cooperPic.publicURL} alt="" />
                </div>
                <div>
                    <h3>Mayble</h3>
                    <img style={{width: '170px', margin: 'auto'}} src={data.mayblePic.publicURL} alt="" />
                </div>
            </div>
        </div>
    )
}