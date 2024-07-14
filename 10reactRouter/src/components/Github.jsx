import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  //   const [data, setData] = useState("");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/UdayBari3421")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, [data]);

  return (
    <div className="w-full flex justify-center text-3xl bg-gray-500 text-white p-5">
      <div className="flex flex-col text-center gap-2">
        <h1>{data.name}</h1>
        <img className="border-8 shadow-lg border-x-pink-800 rounded-full" src={data.avatar_url} alt="" />
        <h1>Github Followers : {data.followers}</h1>
      </div>
    </div>
  );
}

export default Github;

export const userInfo = async () => {
  const response = await fetch("https://api.github.com/users/UdayBari3421");
  return response.json();
};
