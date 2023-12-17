 import { IfAuthenticated, IfNotAuthenticated } from './Authentication.tsx'
 import { NavGroup, NavButton } from './Styled.tsx'
 import { useAuth0 } from '@auth0/auth0-react'

 // sign in and sign out functionality
 function Nav() {
   // call the useAuth0 hook and destructure user, logout, and loginWithRedirect
   //  replace placeholder user object with the one from auth0

   const { user, logout, loginWithRedirect } = useAuth0()
   console.log(user)

   const handleSignOut = () => {
     logout()
   }

   const handleSignIn = () => {
     loginWithRedirect()
   }

   return (
     <>
       <NavGroup>
         <IfAuthenticated>
           <NavButton onClick={handleSignOut}>➤LOGOUT</NavButton>
           {user && <p className="user">Hey {user?.name}! 👋🏻</p>}
         </IfAuthenticated>
         <IfNotAuthenticated>
           <NavButton onClick={handleSignIn}>➤LOGIN </NavButton>
         </IfNotAuthenticated>
       </NavGroup>
     </>
   )
 }

 export default Nav