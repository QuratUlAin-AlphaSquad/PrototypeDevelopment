// import React from 'react'

import { Button, TextField } from "@mui/material";

const SizeName = () => {
  return (
    <>
      <div className="pt-9 pl-10 max-w-[452px] w-full">
        <p className="text-base leading-4 font-medium"> Size Name</p>
        <TextField
          placeholder="11 x 8.5 One sided "
          className="max-w-[452px] w-full !pt-6"
        ></TextField>
        <div className="flex justify-end gap-3 pt-7">
          <Button
            variant="outlined"
            className="!normal-case !text-black !text-base !font-bold hover:!border-gray-500 !border-black"
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            className="!normal-case !text-black !text-base !font-bold hover:!border-gray-500 !border-black"
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default SizeName;
