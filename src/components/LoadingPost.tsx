import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const LoadingPost = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Grid container spacing={2} marginTop={1}>
      {array.map((i) => {
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
              width: "100%",
            }}
          >
            <Skeleton variant="rectangular" height={400} width="100%" />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default LoadingPost;
