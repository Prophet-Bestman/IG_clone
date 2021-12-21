import React from "react";

const Suggestion = ({ data }) => {
  return (
    <div className="flex justify-between items-center mt-3">
      <img
        src={data.picture.large}
        className="h-10 w-10 rounded-full border p-[2px]"
        alt=""
      />

      <div className="flex-1 ml-3">
        <h2 className="text-sm font-bold">
          {data.name.first} {data.name.last}{" "}
        </h2>
        <h3 className="text-sm text-grey-500">{data.location.country}</h3>
      </div>

      <div className="text-blue-500 text-xs font-semibold">Follow</div>
    </div>
  );
};

export default Suggestion;
