import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../apis/locations'
//Posts component
const Posts = () => {
  const {
    data: locations,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  })

  if (isLoading) {
    return (
      <>
        <p>Loading posts...</p>
      </>
    )
  }

  if (error) {
    return (
      <>
        <p>Cannot load posts ☹️</p>
      </>
    )
  }

  console.log(locations)

  return (
    <>
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
    </>
  )
}

export default Posts
