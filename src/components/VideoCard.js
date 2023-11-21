import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-auto w-72">
      <img
        className="rounded-lg w-full h-48 object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="flex flex-col mt-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-500">{channelTitle}</p>
        <p className="text-gray-500">{statistics.viewCount} views</p>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="bg-red-100 border border-red-900 p-2 m-2 rounded-lg">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
