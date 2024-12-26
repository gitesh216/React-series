import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from "react-router-dom";

function Github() {

    const {gitUserName} = useParams()

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/gitesh216`)
        .then(response => response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])
//     const { gitUserName } = useParams();

//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       if (!gitUserName) return;

//       try {
//         setLoading(true); // Start loading
//         setError(null); // Reset error

//         const response = await fetch(`https://api.github.com/users/${gitUserName}`);
//         if (!response.ok) {
//           throw new Error(`Failed to fetch user data: ${response.statusText}`);
//         }

//         const data = await response.json();
//         setData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false); // End loading
//       }
//     };

//     fetchUserData();
//   }, [gitUserName]);
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!data) return <div>No data available</div>;

  return(
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md max-w-xs mx-auto">
  <div className="text-xl font-semibold text-gray-800 mb-4">
    GitHub Followers: <span className="text-blue-600">{data.followers}</span>
  </div>
  <img 
    src={data.avatar_url} 
    alt="GitHub Profile Picture" 
    className="w-32 h-32 rounded-full object-cover border-4 border-blue-500" 
  />
  <Outlet />
</div>
  )
}

export default Github