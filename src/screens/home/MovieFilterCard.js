import React, { useState, useEffect } from "react";
import axios from "axios";
//import { makeStyles } from "@material-ui/core/styles";
//import { createTheme } from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    FormControl,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Input,
    Checkbox,
    Button,
} from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 240,
        },
    },
};

// const useStyles = makeStyles(theme => ({
//     root: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     form: {
//         width: 800,
//         display: "flex"
//     },
//     container: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center"
//     },
//     text: {
//         minWidth: 240
//     },
//     type: {
//         fontWeight: 600
//     },
//     formControl: {
//         marginRight: theme.spacing(1),
//         [theme.breakpoints.down("xs")]: {
//             minWidth: "100%",
//             marginRight: theme.spacing(0),
//             marginBottom: theme.spacing(1)
//         }
//     },
//     input: {
//         padding: "10px 14px"
//     },
//     select: {
//         maxWidth: 240
//     },
//     search: {
//         maxWidth: 180
//     },
//     submitBtn: {
//         [theme.breakpoints.down("xs")]: {
//             width: "100%"
//         }
//     },
//     textField: {
//         marginLeft: theme.spacing(1),
//         marginRight: theme.spacing(1),
//         width: 200,
//     },
// }));

function MovieFilterCard() {

    //const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);
    const [genreChoice, setGenreChoice] = useState([]);
    //const [checked, setChecked] = useState(false);
    const [artists, setArtists] = useState([]);
    const [artistChoice, setArtistChoice] = useState([]);


    //const classes = useStyles();

    useEffect(() => {

        axios
            .get("http://localhost:8085/api/v1/genres")
            .then((response) => setGenres(response.data.genres));

        axios
            .get("http://localhost:8085/api/v1/artists")
            .then((response) => setArtists(response.data.artists));
    }, []);


    const handleChangeOfGener = (event) => {
        setGenreChoice(event.target.value);
    };

    const handleArtistChange = (event) => {
        setArtistChoice(event.target.value);
    };

    return (
        <div className="filter-form">
            <Card>
                <CardContent>
                    <InputLabel style={{ color: "#4791db" }}>
                        FIND MOVIES BY:
                    </InputLabel>
                    <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField id="standard-basic" label="Movie Name" />
                    </FormControl>
                    <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <InputLabel id="demo-mutiple-name-label">Genres</InputLabel>
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            multiple
                            value={genreChoice}
                            onChange={handleChangeOfGener}
                            input={<Input />}
                            MenuProps={MenuProps}
                        >
                            {genres.map((genre) => (
                                <MenuItem key={genre.id} value={genre.genre}>
                                    <Checkbox color="primary" />
                                    {genre.genre}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <InputLabel id="demo-mutiple-name-label">Artists</InputLabel>
                        <Select
                            labelId="demo-mutiple-name-label"
                            id="demo-mutiple-name"
                            multiple
                            value={artistChoice}
                            onChange={handleArtistChange}
                            input={<Input />}
                            MenuProps={MenuProps}
                        >
                            {artists.map((artist) => (
                                <MenuItem
                                    key={artist.id}
                                    value={artist.first_name + " " + artist.last_name}
                                >
                                    <Checkbox color="primary" />
                                    {artist.first_name + " " + artist.last_name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                            name="Release Date Start"
                            id="standard-basic"
                            type="date"
                            label="Release Date Start"
                            InputLabelProps={{ shrink: true }}
                        />
                    </FormControl>
                    <FormControl style={{ width: "100%", marginTop: "20px" }}>
                        <TextField
                            name="Release Date End"
                            id="standard-basic"
                            type="date"
                            label="Release Date End"
                            InputLabelProps={{ shrink: true }}
                        />
                    </FormControl>
                    <div>
                        <FormControl style={{ width: "100%", marginTop: "20px" }}>
                            <Button variant="contained" name="Apply" color="primary">
                                Apply
                            </Button>
                        </FormControl>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

// const theme = createTheme({
//     palette: {
//         primary: {
//             light: '#757de8',
//             main: '#757de8',
//             dark: '#757de8',
//             contrastText: '#fff',
//         }
//     },
// });

// const GenresList = [
//     'Action',
//     'Comedy',
//     'Drama',
// ];

// const ArtistList = [
//     { first_name: 'Johnny', last_name: 'Depp' },
//     { first_name: 'Al', last_name: 'Pacino' },
//     { first_name: 'Robert', last_name: 'Niro' },
//     { first_name: 'Kevin', last_name: 'Spacey' },
//     { first_name: 'Denzel', last_name: 'Washington' },
//     { first_name: 'Russell', last_name: 'Crowe' },
//     { first_name: 'Brad', last_name: 'Pitt' },
//     { first_name: 'Angelina', last_name: 'Jolie' },
//     { first_name: 'Leonardo', last_name: 'DiCaprio' },
//     { first_name: 'Tom', last_name: 'Cruise' },
// ];

export default MovieFilterCard;