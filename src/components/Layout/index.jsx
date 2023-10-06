import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { sideBarIcon } from "../svg";
import Header from "../reuseable/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="h-full flex w-full">
        <div className="border-r-2 border-[#2D3648] w-[260px] min-h-[984px] h-full bg-[#EDF0F7] pt-6">
          <div className="flex items-center px-10 py-3 gap-2.5">
            {sideBarIcon}

            <Button
              variant="text"
              className="!normal-case !text-sm !leading-6 !tracking-[-0.14px] !text-[#717D96]"
            >
              Products
            </Button>
          </div>

          <div className="pr-10">
            <FormControl fullWidth>
              <InputLabel className="!flex !items-center !gap-5 !px-6 !normal-case !text-sm !leading-6 !tracking-[-0.14px] hover:!text-black !font-medium">
                {" "}
                {sideBarIcon}Settings
              </InputLabel>

              <Select
                variant="standard"
                disableUnderline
                className="hover:bg-[#E2E7F0]"
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                //   value={age}
                // label="Age"
                //   onChange={handleChange}
              >
                <MenuItem value={10}>
                  <a href="/">Categories</a>
                </MenuItem>
                <MenuItem value={20}>
                  <a href="/product-type">Product Type</a>
                </MenuItem>
                <MenuItem value={30}><a href="/product-size">Product Size</a></MenuItem>
                <MenuItem value={30}>Attributes</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
