// import React from 'react'

import { Button, TextField } from "@mui/material";
import { addNew, deleteSvg } from "./svg";

const Content = () => {
  return (
    <>
      <div className="pt-[37px] pl-20 flex flex-col gap-8 max-w-[600px] w-full">
        <p className="text-base leading-4 font-medium">Categories</p>
        <div className="flex items-center gap-3">
          <TextField
            required
            id="outlined-basic"
            label="Print Only"
            className="max-w-[452px] w-full"
          />
          <div className=" w-9 h-9 hover:bg-[#F0F0F0] flex items-center justify-center rounded-full">
            {" "}
            {deleteSvg}
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <Button
            variant="contained"
            className="!bg-[#F0F0F0] max-w-[452px] w-full"
          >
            {addNew}
          </Button>
          <div className="flex justify-end max-w-[452px]">
            <Button
              variant="outlined"
              className="!text-black hover:!border-gray-500 !border-black  max-w-[38px] !flex !content-end !normal-case !text-base !font-bold !tracking-[0.16px]"
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
