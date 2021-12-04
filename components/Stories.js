import React, { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";
// import image from "next/image";

function Stories() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const stories = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    // console.log("Stories", stories);
    setStories(stories);
  }, []);
  console.log(stories);

  return (
    <div className="flex bg-white w-full space-x-2 overflow-x-scroll scrollbar-thumb-red-500 scrollbar-thin p-5">
      {stories.map((profile) => (
        <div key={profile.id}>
          <Story img={profile.avatar} name={profile.username} />
          {console.log(profile.avatar)}
        </div>
      ))}
    </div>
  );
}

export default Stories;
