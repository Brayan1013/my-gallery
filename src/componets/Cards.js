import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { Nothing } from "./Nothing";

export const Cards = () => {
  const [images, setImages] = useState([]);
  const { images: imagesStore } = useSelector((state) => state.images);

  useEffect(() => {
    setImages(imagesStore);
  }, [imagesStore]);
  return (
    <div className="container">
      {images.length > 0 ? (
        images.map((image) => {
          return <Card key={image.id} {...image} />;
        })
      ) : (
        <Nothing />
      )}
    </div>
  );
};
