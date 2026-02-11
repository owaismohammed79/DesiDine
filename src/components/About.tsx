import {ReactElement} from 'react'
import {useUsers} from '../utils/useUsers'

function About():ReactElement {
  const {users, loading} = useUsers()

  if (loading) return <p>Loading team...</p>;

  return (
    <>
    <h1 className='text-3xl font-bold text-gray-900 ml-4 py-4'>Meet the Team</h1>
    <div className='flex gap-3 mt-3 justify-center flex-wrap'>
      {
        users.map((user) => (
          <div className='border shadow-md bg-gray-100 hover:bg-gray-200 rounded-md h-72 w-64 flex-center flex-col gap-1 py-2 hover:border-amber-800 hover:border-2' key={user.imgUrl}>
            <div className='overflow-hidden rounded-md'>
              <img src={user.imgUrl} alt="profile image" className='w-full h-full object-cover'/>
            </div>
            <h1 className='text-xl font-bold'>{user.name}</h1>
            <p>{user.role}</p>
          </div>
        ))
      }
    </div>
    </>
  )
}

export default About