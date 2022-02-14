import React from "react";
import Layout from "../../components/Layout";
import { ProfileHeader } from "../../components/profile";
import ProfilePosts from "../../components/profile/ProfilePosts";
import ProfileStories from "../../components/profile/ProfileStories";

const Profile = () => {
  return (
    <Layout>
      <ProfileHeader />
      <ProfileStories />
      <ProfilePosts />
    </Layout>
  );
};

export default Profile;
