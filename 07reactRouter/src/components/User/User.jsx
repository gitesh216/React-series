import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="bg-gradient-to-r from-blue-500 via-slate-500 to-indigo-500 text-white text-xl font-bold p-4 rounded-lg shadow-md flex justify-center items-center">
      User: {userId}
    </div>
  );
}

export default User;
