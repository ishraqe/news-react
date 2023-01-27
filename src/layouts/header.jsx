import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "./searchBar";
import { useRouter } from "next/router";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const onSearchBarTextChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    router.push(`/?query=${searchText}`, undefined, { shallow: true });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <form onSubmit={onSubmitSearch}>
            <SearchBar value={searchText} onChange={onSearchBarTextChange} />
            <button
              type="submit"
              style={{
                opacity: 0
              }}
            ></button>
          </form>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
