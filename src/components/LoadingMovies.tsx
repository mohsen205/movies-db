import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
const LoadingMovies = () => {
  return (
    <Box
      sx={{
        display: { xs: "unset", md: "flex" },
      }}
    >
      <Box>
        <Skeleton
          variant="rectangular"
          sx={{
            width: { md: "300px" },
            height: { xs: "100vh", md: "444px" },
          }}
        />
      </Box>
      <Box
        sx={{
          marginLeft: { xs: "0rem", md: "5rem" },
          width: "100%",
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            fontSize: "2rem",
            marginTop: { xs: "1rem", md: "0rem" },
          }}
        />
        <Box marginY="1.5rem">
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1rem",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1rem",
            }}
          />
          <Skeleton
            variant="text"
            sx={{
              fontSize: "1rem",
              width: "50%",
            }}
          />
        </Box>
        <Skeleton
          variant="rounded"
          sx={{
            width: "8rem",
            height: "2.5rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default LoadingMovies;
