import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { PostProps } from "./types";
import { useNavigate } from "react-router-dom";
const Post = ({ Poster, Title, Type, Year, imdbID }: PostProps) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("movies");
  };
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      onClick={handleNavigation}
    >
      <div className="container">
        <img src={Poster} alt={Title} className="image" />
        <div className="overlay">
          <Typography
            variant="h6"
            sx={{
              lineHeight: 1,
              fonSize: "1rem",
              marginBottom: ".25rem",
              letterSpacing: "0.1rem",
              textTransform: "capitalize",
            }}
          >
            {Title}
          </Typography>
          <Typography variant="body1" component="p">
            {Year}
          </Typography>
        </div>
      </div>
    </Grid>
  );
};

export default Post;
