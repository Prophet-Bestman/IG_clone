import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      {/* Left Section */}
      <section className="md:col-span-1 xl:col-span-2">
        {/* Stories */}
        <Stories />

        {/* Posts */}
        <Posts />
      </section>

      {/* Right Section */}
      <section>
        {/* Mini Profile */}
        {/* Suggestions  */}
      </section>
    </main>
  );
}

export default Feed;
