import React, { useContext, useEffect, useState } from "react";
import { Container } from "../container/Container";
import axios from "axios";
import Image from "./Image";
import Buttons from "./Buttons";

function Gallary() {
  let { search } = useContext(Container);
  let [photosList, setPhotosList] = useState([]);

  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=255750bfa9672cdc6673cd45a6fc4552&text=${search}&per_page=20&format=json&nojsoncallback=1`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPhotosList(response.data.photos.photo);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [search, url]);

  return (
    <>
      <Buttons />
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: "50px",
          width: "100vw",
        }}
      >
        {photosList.map((photo, index) => (
          <Image
            key={index}
            server={photo.server}
            id={photo.id}
            secret={photo.secret}
          />
        ))}
      </div>
      <Buttons />
    </>
  );
}

export default Gallary;


