import React from "react";

export const Card = ({ views, downloads, likes, webformatURL, user, tags }) => {
  const hashTag = tags.split(",");
  return (
    <div>
      <div className="card-content">
        <div className="card-top">
          <img src={webformatURL} alt="result" />
        </div>

        <div className="card-body">
          <p className="author">Photo by {user}</p>
          <p>Views: {views}</p>
          <p>dowloas: {downloads}</p>
          <p>likes: {likes}</p>
          <div className="tags">
            {hashTag.map((hashTag) => {
              return <p key={hashTag}>#{hashTag}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
