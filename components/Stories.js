import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
import { useQuery } from "react-query";
import axios from "axios";

// import image from "next/image";

function Stories() {
  const [stories, setStories] = useState([]);
  // const [loading, setLoading] = useState(false);

  const fetchStories = async () => {
    const data = await axios.get("https://randomuser.me/api/?results=14");
    return data.data.results;
  };

  const { data, isLoading, error } = useQuery("stories", fetchStories);

  useEffect(() => {
    setStories(data);
    console.log(stories);
  }, [data]);

  return (
    <div className="flex bg-white w-full space-x-2 overflow-x-scroll scrollbar-thumb-red-500 scrollbar-thin p-5">
      {isLoading && <div>Loading stories...</div>}
      {!isLoading &&
        stories?.map((profile, i) => (
          <div key={i}>
            <Story img={profile.picture.large} name={profile.name} />
            {console.log(profile.avatar)}
          </div>
        ))}
    </div>
  );
}

export default Stories;
