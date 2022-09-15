import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Search from "./components/Search";
function App() {
  return (
    <Container sx={{ paddingY: "5rem" }}>
      <Typography variant="h3" color="#102a42">
        Search Movies
      </Typography>
      <Search />
    </Container>
  );
}

export default App;
