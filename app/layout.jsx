import '@styles/global.css'
import React, { Children } from 'react'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
  title: "promptopia",
  description: "Discover and share AI prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <Provider>
        <body>
          <div className='main'>
            <div className="gradient"></div>
          </div>
          <main className='app'>
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  )
}

export default RootLayout