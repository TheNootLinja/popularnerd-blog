import React from 'react'

import Header from '../components/Header'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div style={{margin: '46px auto 0 auto', minHeight: '1250px', maxWidth: '600px', padding: '0 7px 0 7px'}}>
                { children }
            </div>
        </div>
    )
}
