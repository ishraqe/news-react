import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "./searchBar";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const onSearchBarTextChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    router.push(`/search/${searchText}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="span" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">News</Link>
          </Typography>

          <Typography
            variant="span"
            component="div"
            sx={{ marginRight: "1rem" }}
          >
            <Link href="/read-later">Read Later</Link>
          </Typography>
          <form
            style={{
              display: "flex"
            }}
            onSubmit={onSubmitSearch}
          >
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
