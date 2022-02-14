import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { AuthContext } from "../../providers/auth/auth.provider";
import ProfileStory from "./ProfileStory";

function ProfileStories() {
  const [stories, setStories] = useState([]);
  const { user, setUser } = useContext(AuthContext);
  const img = "/dp.jfif";

  const fetchStories = async () => {
    const data = await axios.get("https://randomuser.me/api/?results=5");
    return data.data.results;
  };

  const { data, isLoading, error } = useQuery("stories", fetchStories);

  useEffect(() => {
    setStories(data);
  }, [data]);

  return (
    <div className="flex bg-white w-full space-x-3 overflow-x-scroll scrollbar-thumb-red-500 scrollbar-thin py-5  px-1 lg:px-20">
      {isLoading && <div>Loading stories...</div>}
      {!!user && <ProfileStory img={img} name={user?.email} />}
      {!isLoading &&
        stories?.map((profile, i) => (
          <div key={i}>
            <ProfileStory
              img={profile.picture.large}
              name={`${profile.name.first} ${profile.name.last}`}
            />
          </div>
        ))}
    </div>
  );
}

export default ProfileStories;
