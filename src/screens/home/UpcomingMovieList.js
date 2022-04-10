import * as React from 'react';
//import poster_url from "./upcomingmovie.json";
import { useEffect, useState } from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@material-ui/core";
import axios from "axios";

export default function UpcomingMovieList() {

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8085/api/v1/movies")
      .then((response) => setMovieList(response.data.movies));
  }, []);


  return (
    <ImageList rowHeight={250} cols={8} style={{ width: 1720, height: 250 }}>
      {movieList.map((data) => (
        <ImageListItem key={data.id}>
          <img src={data.poster_url} alt={data.title} />
          <ImageListItemBar
            title={data.title}
          />
        </ImageListItem>
      ))}
    </ImageList>

  );
}