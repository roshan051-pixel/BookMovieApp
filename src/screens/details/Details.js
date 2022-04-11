import React, { useState, useEffect } from "react";
import Header from "../../common/header/Header";
import { makeStyles } from "@material-ui/styles";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import YouTube from "react-youtube";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import "./Details.css";
import { Fragment } from "react";
import axios from "axios";
import { Rating } from "@material-ui/lab";

const Details = () => {
  let { id } = useParams();
  let [movieData, setMovieData] = useState("");
  let [genres, setGenres] = useState([]);
  let [youtubeUrl, setYouttubeUrl] = useState("");
  let [actors, setActors] = useState([]);
  //let [rating, setRating] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:8085/api/v1/movies/${id}`)
      .then((response) => {
        setMovieData(response.data);
        setGenres(response.data.genres);
        setYouttubeUrl(response.data.trailer_url);
        setActors(response.data.artists);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.clear();
        }
      });
  }, []);

  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
    gridList: {
      width: 300,
      height: 350,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    emptyStar: {
      color: "black"
    }
  });

  var releaseDate = new Date(movieData.release_date).toDateString();

  let youtubeId = youtubeUrl.split("=")[1];

  let opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      origin: "http://localhost:3000",
    },
  };

  const classes = useStyles();

  return (
    <Fragment>
      <Header bookShow={true} bookShowId={id} />
      <div className="details-content">
        <Typography style={{ margin: "10px" }}>
          <Link to="/" className="back-link">
            <span className="back-to-home">&#60; Back to Home</span>
          </Link>
        </Typography>
        <div className="main-content">

          <div className="first-container">
            <img src={movieData.poster_url} alt={movieData.title} />
          </div>

          <div className="mid-container">
            <Typography variant="h2" component="h2">
              {movieData.title}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <b>Genre: </b>
              {genres.map((genre) => `${genre}, `)}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <b>Duration: </b>
              {movieData.duration}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <b>Release Date: </b>
              {releaseDate}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <b>Rating: </b>
              {movieData.rating}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginTop: "16px" }}
            >
              <b>
                Plot:{" "}
                <a href={movieData.wiki_url} target="_blank">
                  (Wiki Link)
                </a>
              </b>
              {" " + movieData.storyline}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              style={{ marginTop: "16px" }}
            >
              <b>Trailer:</b>
              <YouTube
                videoId={youtubeId}
                opts={opts}
                onReady={(event) => {
                  event.target.pauseVideo();
                }}
              />
            </Typography>
          </div>

          <div className="last-container">
            <Typography variant="subtitle1" gutterBottom>
              <b>Rate this movie:</b>
              <div className="star-container">
                <Rating
                  name="rating_icon"
                  emptyIcon={
                    <StarBorderIcon className={classes.emptyStar} />
                  }
                />
              </div>
              <div className="artist-heading">
                <b>Artists: </b>
              </div>
              <div className={classes.root}>
                <ImageList rowHeight={180} className={classes.gridList}>
                  {actors ? (
                    actors.map((actor) => (
                      <ImageListItem key={actor.id}>
                        <img src={actor.profile_url} alt={actor.first_name} />
                        <ImageListItemBar
                          title={actor.first_name + " " + actor.last_name}
                        />
                      </ImageListItem>
                    ))
                  ) : (
                    <h6>No actor data available</h6>
                  )}
                </ImageList>
              </div>
            </Typography>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Details;
