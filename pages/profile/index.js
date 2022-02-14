import React from "react";
import Layout from "../../components/Layout";
import { ProfileHeader } from "../../components/profile";
import ProfileStories from "../../components/profile/ProfileStories";

const Profile = () => {
  return (
    <Layout>
      <ProfileHeader />
      <ProfileStories />
    </Layout>
  );
};

export default Profile;
