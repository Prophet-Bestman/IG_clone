import { Tab } from "@headlessui/react";
import { BsGrid3X3 } from "react-icons/bs";
import { RiPriceTag2Line } from "react-icons/ri";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { IoIosPhotos } from "react-icons/io";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { AuthContext } from "../../providers/auth/auth.provider";

const ProfilePosts = ({ posts }) => {
  const { user, setUser } = useContext(AuthContext);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // console.log("User Posts", posts);
    const mappedPosts = posts.map((post) => post.data());
    console.log("Mapped Posts", mappedPosts);
    const filteredPosts = mappedPosts.filter(
      (post) => post.username === user.email
    );
    setUserPosts(filteredPosts);
  }, [posts]);

  console.log("User Posts", userPosts);

  const reels = [
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
    { url: "/profile_picture.jpeg" },
  ];

  const tags = [
    { url: "/tag.jpg" },
    { url: "/tag.jpg" },
    { url: "/tag.jpg" },
    { url: "/tag.jpg" },
    { url: "/tag.jpg" },
    { url: "/tag.jpg" },
    { url: "/tag.jpg" },
  ];

  return (
    <div className="border-t border-gray-200 mt-5 h-screen">
      {" "}
      <Tab.Group>
        <Tab.List className="grid grid-cols-3">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-sm text-center font-bold text-red-600 py-4 border-t-2 border-red-500"
                    : "text-sm text-center font-bold text-gray-500 py-4"
                }
              >
                <BsGrid3X3 className="inline-grid" /> Posts
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-sm text-center font-bold text-red-600 py-4 border-t-2 border-red-500"
                    : "text-sm text-center font-bold text-gray-500 py-4"
                }
              >
                <MdOutlineVideoLibrary className="inline-grid" /> Reels
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={
                  selected
                    ? "text-sm text-center font-bold text-red-600 py-4 border-t-2 border-red-500"
                    : "text-sm text-center font-bold text-gray-500 py-4"
                }
              >
                <RiPriceTag2Line className="inline-grid" /> Tags
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="grid grid-cols-3 gap-[1px] md:gap-4">
            {userPosts.map((post) => (
              <div className="relative col-span-1">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <IoIosPhotos className="absolute text-white shadow drop-shadow-lg text-sm sm:text-base md:text-xl top-1 right-1 md:top-3 md:right-3" />
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-3 gap-[1px] md:gap-4">
            {reels.map((image) => (
              <div className="relative col-span-1">
                <img
                  src={image.url}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <IoIosPhotos className="absolute text-white shadow drop-shadow-lg text-sm sm:text-base md:text-xl top-1 right-1 md:top-3 md:right-3" />
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className="grid grid-cols-3 gap-[1px] md:gap-4">
            {tags.map((image) => (
              <div className="relative col-span-1">
                <img
                  src={image.url}
                  alt=""
                  className=" w-full h-full object-cover"
                />
                <IoIosPhotos className="absolute text-white shadow drop-shadow-lg text-sm sm:text-base md:text-xl top-1 right-1 md:top-3 md:right-3" />
              </div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProfilePosts;
