import Posts from './Posts'
import { useContext, useState } from 'react'
import { Auth0Context } from '@auth0/auth0-react'
import AddHoliday from './AddHoliday'
//Main component
function Main() {
  const [openModal, setOpenModal] = useState(false)
  const { isAuthenticated } = useContext(Auth0Context)

 return (
   <>
     {isAuthenticated && (
       <p className="add-holiday">
         {location.pathname === '/' ? (
           <>
             Add your Holiday{' '}
             <button
               className="openModalButton"
               onClick={() => setOpenModal(true)}
             >
               ✚
             </button>
             {openModal && (
               <AddHoliday closeModal={() => setOpenModal(false)} />
             )}
           </>
         ) : (
           'Your Collection 👇🏼'
         )}
       </p>
     )}
     <Posts />
   </>
 )
}

export default Main