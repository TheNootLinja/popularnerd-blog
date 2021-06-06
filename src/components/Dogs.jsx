import React from 'react'

import '../styles/Dogs.styles.css'

export default function Dogs({ data }) {
    return (
        <div className='dogs'>
            <p>Below you will find pictures of my dogs. Why? Couldn't tell you. Enjoy!</p>
            <h3>Cooper the Pomeranian</h3>
            <img style={{width: '350px', margin: 'auto'}} src={data.cooperPic.publicURL} alt="" />
            <h3>Mayble the Pug</h3>
            <img style={{width: '350px', margin: 'auto'}} src={data.mayblePic.publicURL} alt="" />
        </div>
    )
}