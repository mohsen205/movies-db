import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import axios from "axios";
import { PostProps } from "./types";
import Posts from "./Posts";
import LoadingPost from "./LoadingPost";
const StyledInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  width: "25rem",
  padding: "0.5rem",
  borderRadius: "0.25rem",
  fontSize: "1rem",
  marginTop: "1rem",
}));

const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.light,
  display: "block",
  textTransform: "capitalize",
  marginTop: "0.2rem",
}));

const Search = () => {
  const [searchInput, setSearchInput] = useState<string | undefined>("batman");

  const [resulats, setResulats] = useState<PostProps[]>([]);

  const [error, setError] = useState<string | undefined>("");

  const url = "https://www.omdbapi.com/?apikey=c24c2c7d&s=";

  useEffect(() => {
    axios
      .get(`${url}batman`)
      .then((response) => {
        const { Response } = response.data;
        console.log(response.data);
        if (Response === "True") {
          const { Search } = response.data;
          setResulats(Search);
        } else {
          const { Error } = response.data;
          setError(Error);
        }
      })
      .catch((error) => setError(error));
  }, []);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);
    axios
      .get(`${url}${searchInput}`)
      .then((response) => {
        const { Response } = response.data;
        console.log(response.data);
        if (Response === "True") {
          const { Search } = response.data;
          setResulats(Search);
        } else {
          const { Error } = response.data;
          setError(Error);
        }
      })
      .catch((error) => setError(error));
  };
  return (
    <>
      <Box>
        <StyledInput value={searchInput} onChange={handleSearchValue} />
        {error && <ErrorMessage variant="overline">{error}</ErrorMessage>}
      </Box>
      {resulats.length === 0 ? <LoadingPost /> : <Posts search={resulats} />}
    </>
  );
};

export default Search;
