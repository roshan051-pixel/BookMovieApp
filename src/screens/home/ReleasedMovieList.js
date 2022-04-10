import React, { useState, useEffect } from "react";
import {
    ImageList,
    ImageListItem,
    ImageListItemBar,
} from "@material-ui/core";
import poster_url from './releasedmovie.json';
import './Home.css';
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
    gridList: {
      width: 1000,
      height: 1050,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
  });

export default function ReleasedMovieList({movieData}) {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <ImageList rowHeight={350} cols={4}>
        {poster_url.map((tile) => {
          var expectedDate = new Date(tile.release_date).toDateString();

          return (
            <ImageListItem key={tile.id}>
              <Link to={"/movie/" + tile.id}>
                <img
                  src={tile.image}
                  alt={tile.title}
                  style={{
                    width: "100%",
                    alignItems: "center",
                    margin: "0px",
                  }}
                />
              </Link>
              <ImageListItemBar
                title={tile.title}
                subtitle={<span>Release Date: {expectedDate}</span>}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.title}`}
                    className={classes.icon}
                  />
                }
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </div>
    
        // <div cursor='pointer'>
        //     <ImageList rowHeight={250} cols={3} style={{ width: 900, height: 400 }}>
        //         {poster_url.map((data) => (
        //             <ImageListItem key={data.id}>
        //                 <img src={data.image} alt={data.title} />
        //                 <ImageListItemBar
        //                     title={data.title}
        //                 />
        //             </ImageListItem>
        //         ))}
        //     </ImageList >
        // </div>
    );
}