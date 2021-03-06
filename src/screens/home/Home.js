import React from "react";
import Header from '../../common/header/Header';
import UpcomingMovieList from './UpcomingMovieList';
import ReleasedMovieList from './ReleasedMovieList';
import MovieFilterCard from './MovieFilterCard';

export default function Home () {

    return (
        <div>
            <div><Header /></div>
            <div className="upcomingmovie">
                Upcoming Movies
            </div>
            <div>
                <UpcomingMovieList /><br></br>
            </div>
            <div className="flex-container">                
                <ReleasedMovieList />&nbsp;&nbsp;&nbsp;&nbsp;
                <MovieFilterCard/>
            </div> 
        </div>
    );

}