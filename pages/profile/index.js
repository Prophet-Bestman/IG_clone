import {
  collection,
  query,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { ProfileHeader } from "../../components/profile";
import ProfilePosts from "../../components/profile/ProfilePosts";
import ProfileStories from "../../components/profile/ProfileStories";
import { db } from "../../firebase";
import { AuthContext } from "../../providers/auth/auth.provider";

const Profile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [userProfile, setUserProfile] = useState({});
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  console.log(user.email);

  const getUserProfile = async () => {
    console.log("Getting user");
    try {
      const docRef = doc(db, "users", "anotherrandom@user.com");
      const res = await getDoc(docRef);
      console.log(res.data());
    } catch (error) {
      const err = error.toString();
      if (
        err.includes("Failed to get document because the client is offline.")
      ) {
        console.log("Network Error");
      }
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [getUserProfile]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => setPosts(snapshot.docs)
      ),
    [db]
  );

  // console.log(userProfile);

  return (
    <Layout>
      <ProfileHeader />
      <ProfileStories />
      <ProfilePosts posts={posts} />
    </Layout>
  );
};

export default Profile;
