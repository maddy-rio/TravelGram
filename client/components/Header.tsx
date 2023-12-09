import Nav from './Nav.tsx'

//Header component
function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <img
            src="FullLogo_NoBuffer.png"
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