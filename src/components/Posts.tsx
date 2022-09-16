import Grid from "@mui/material/Grid";
import Post from "./Post";
import { PostProps } from "./types";
const Posts = ({ search }: { search: PostProps[] }) => {
  return (
    <Grid container spacing={2} marginTop={1}>
      {search.map((s) => {
        return (
          <Post
            key={s.imdbID}
            Poster={s.Poster}
            Title={s.Title}
            Type={s.Type}
            Year={s.Year}
            imdbID={s.imdbID}
          />
        );
      })}
    </Grid>
  );
};

export default Posts;
