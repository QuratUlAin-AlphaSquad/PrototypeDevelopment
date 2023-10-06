// import * as React from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, MenuItem, Select } from "@mui/material";
import Layout from "./Layout";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(124124, "11 x 8.5 One sided", "..."),
  createData(124124, "11 x 8.5 Two sided", "..."),
  createData(124124, "6.5 x 8", "..."),
];

export default function CustomizedTables() {
  return (
    <>
    <Layout>
      <div className="flex flex-col">
        <div className="px-16 pt-4">
          <div className=" flex justify-end pt-7">
            <Button
              variant="outlined"
              className="!text-black !border-black !normal-case !font-bold !text-base tracking-[-0.16px] hover:!border-gray-500"
            >
              Add New
            </Button>
          </div>
          <div className="pt-4">
            <TableContainer
              component={Paper}
              className="!border-[1px] !rounded-none border-black"
            >
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell className="!bg-[#D9D9D9] !text-black !font-bold">
                      ID
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      className="!bg-[#D9D9D9] !text-black !font-bold"
                    >
                      Size Name
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      className="!bg-[#D9D9D9] !text-black !font-bold"
                    >
                      Actions
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {row.calories}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.fat}
                        <Select variant="standard" disableUnderline>
                          <MenuItem>Edit</MenuItem>
                          <MenuItem>Delete</MenuItem>
                        </Select>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}
