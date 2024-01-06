import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../apis/locations'
import { useLocation } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Posts = () => {
  const location = useLocation()
  const { user, isAuthenticated } = useAuth0() // Destructure isAuthenticated as well
  

  const {
    data: locations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  })

  if (isLoading) {
    return <p>Loading posts...</p>
  }

  if (error) {
    return <p>Cannot load posts ☹️</p>
  }

  // Render posts
  if (location.pathname === '/') {
    return (
      <div className="post-container">
        {locations?.map((location) => (
          <div className="post" key={location.id}>
            <img
              src={`/Public/Images/${location.img}`}
              alt={location.location}
            />
            <h3>{location.location}</h3>
            <p className="main">{location.description}</p>
            <p className="rating">{location.rating}</p>
          </div>
        ))}
      </div>
    )
  } else if (location.pathname === '/userLocations' && isAuthenticated) {
    // Filter locations based on logged-in user's id
    const userLocations = locations?.filter(
      (location) => location.nickname === user?.nickname
    )

     console.log('Locations:', locations)
     console.log('User:', user)
     console.log('User Locations:', userLocations)

    return (
      <div className="post-container">
        {userLocations?.map((location) => (
          <div className="post" key={location.id}>
            <img
              src={`/Public/Images/${location.img}`}
              alt={location.location}
            />
            <h3>{location.location}</h3>
            <p className="main">{location.description}</p>
            <p className="rating">{location.rating}</p>
          </div>
        ))}
      </div>
    )
  }

  // Render nothing for other routes
  return null
}

export default Posts
