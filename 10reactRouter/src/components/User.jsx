import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <>
      <div className="flex justify-center text-center bg-gray-600 text-3xl text-white p-4">
        <h1 className="">Invalid Page : {userid}</h1>
      </div>
    </>
  );
}

export default User;
