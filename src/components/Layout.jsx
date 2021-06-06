import React from 'react'

import Header from '../components/Header'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div style={{marginTop: '46px', height: '2000px'}}>
                { children }
            </div>
        </div>
    )
}
