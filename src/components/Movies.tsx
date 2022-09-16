import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import axios from "axios";
import { MoviesProps } from "./types";
import LoadingMovies from "./LoadingMovies";

const Movies = () => {
  const [resulat, setResulat] = useState<MoviesProps | undefined | any>(
    undefined
  );
  const [error, setError] = useState<boolean>(false);
  const { pathname } = useLocation();
  const id = pathname.slice(8, pathname.length);
  const url = "https://www.omdbapi.com/?apikey=c24c2c7d&i=";
  useEffect(() => {
    axios
      .get(`${url}${id}`)
      .then((response) => {
        const { Response } = response.data;
        if (Response) {
          setResulat(response.data);
        } else {
          setError(true);
        }
      })
      .catch((error) => (!error ? setError(true) : setError(false)));
  }, [id]);
  return (
    <Container sx={{ marginY: "5rem" }}>
      {error || resulat === undefined ? (
        <LoadingMovies />
      ) : (
        <Card
          sx={{
            display: { xs: "unset", md: "flex" },
            backgroundColor: "transparent",
          }}
          elevation={0}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginRight: { md: "5rem" },
            }}
          >
            <CardMedia
              sx={{
                width: { xs: "100%", md: "300px" },
                height: { xs: "auto", md: "444px" },
              }}
              component="img"
              image={resulat?.Poster}
              alt={resulat?.Title}
            />
          </Box>
          <Box>
            <CardContent>
              <Typography variant="h4">{resulat?.Title}</Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: "35em",
                  fontSize: "1.2rem",
                  marginTop: "1.5rem",
                  lineHeight: "1.8",
                }}
              >
                {resulat?.Plot}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {resulat?.Year}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/" className="text-decoration-none">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#49a6e9",
                    textTransform: "capitalize",
                    marginTop: ".5rem",
                    borderRadius: "0.25rem",
                    textDecoration: "none",
                    padding: ".25rem .5rem",
                    "&:hover": {
                      backgroundColor: "#49a6e9",
                    },
                  }}
                >
                  Back To Movies
                </Button>
              </Link>
            </CardActions>
          </Box>
        </Card>
      )}
    </Container>
  );
};

export default Movies;
