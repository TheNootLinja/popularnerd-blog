import React from 'react'

import Header from '../components/Header'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div style={{margin: '46px auto 0 auto', height: '2000px', maxWidth: '600px', padding: '0 5px 0 5px'}}>
                { children }
            </div>
        </div>
    )
}
