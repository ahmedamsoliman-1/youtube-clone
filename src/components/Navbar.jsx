import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    bg="white"
    sx={{
      position: "sticky",
      top: 0,
      backgroud: "#000",
      justifyContent: "space-between",
    }}
  >
    <Link t0="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);
export default Navbar;
