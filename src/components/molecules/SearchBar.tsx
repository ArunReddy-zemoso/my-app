import Search from "../atoms/Search";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

export default function SearchBar() {
  return (
    <TextField
      id="standard-search"
      type="search"
      variant="standard"
      placeholder="Search by title or author"
      sx={{
        maxWidth:"50%",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
}
