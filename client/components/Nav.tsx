 import { IfAuthenticated, IfNotAuthenticated } from './Authentication.tsx'
 import { NavGroup, NavButton } from './Styled.tsx'
 import { useAuth0 } from '@auth0/auth0-react'
 import { Link } from 'react-router-dom'

 // sign in and sign out functionality
 function Nav() {
   // call the useAuth0 hook and destructure user, logout, and loginWithRedirect
   //  replace placeholder user object with the one from auth0

   const { user, logout, loginWithRedirect } = useAuth0()


   const handleSignOut = () => {
     logout()
   }

   const handleSignIn = () => {
     loginWithRedirect()
   }

   return (
     <>
       <NavGroup className="nav">
         <IfAuthenticated>
           <NavButton onClick={handleSignOut}>➤LOGOUT</NavButton>
           {user && <p className="user">Hey {user?.name}! 👋🏻</p>}
           {location.pathname === '/userLocations' ? (
             <Link to="/">Home</Link>
           ) : (
             <Link to="/userLocations">Your Collection</Link>
           )}
         </IfAuthenticated>
         <IfNotAuthenticated>
           <NavButton onClick={handleSignIn}>➤LOGIN </NavButton>
         </IfNotAuthenticated>
       </NavGroup>
     </>
   )
 }

 export default Nav