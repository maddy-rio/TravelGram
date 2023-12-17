import Nav from './Nav.tsx'
import { useContext } from 'react'
import { Auth0Context } from '@auth0/auth0-react'

//Header component
function Header() {

  const { isAuthenticated } = useContext(Auth0Context)

  return (
    <>
      <header className="header">
        <div className="header-content">
          <img
            src={isAuthenticated ? 'LoggedInLogo.png' : 'FullLogo_NoBuffer.png'}
            className="logo"
            alt="TravelGram logo"
          />
          <Nav />
        </div>
      </header>
    </>
  )
}

export default Header