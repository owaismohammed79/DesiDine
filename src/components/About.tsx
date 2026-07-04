import { ReactElement } from 'react'
import { useUsers } from '../hooks/useUsers'
import Shimmer from './Shimmer'

function About(): ReactElement {
  const { users, loading } = useUsers();

  if (loading) return <Shimmer numCards={3} />;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-black text-amber-900 mb-8 border-l-8 border-amber-500 pl-4">
        Meet the Team
      </h1>
      
      <div className="flex gap-8 justify-center flex-wrap">
        {users.map((user) => (
          <div key={user.imgUrl} className="group bg-white p-4 rounded-2xl shadow-sm border border-amber-100 w-64 flex flex-col items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-amber-400">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-amber-50 mb-4 group-hover:border-amber-200 transition-colors">
              <img 
                src={user.imgUrl} 
                alt={user.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-amber-950">{user.name}</h2>
              <p className="text-amber-600 font-medium text-sm mb-3 uppercase tracking-wider">
                {user.role}
              </p>
              <div className="w-10 h-1 bg-amber-100 mx-auto rounded-full group-hover:w-20 group-hover:bg-amber-400 transition-all duration-500"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;