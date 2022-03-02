import * as React from 'react';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const rows = [
  { Name: "John", Age: "26", Course: "MERN", Batch: "October", Change: <Link to="/student-add">Edit</Link> },
  { Name: "Doe", Age: "25", Course: "MERN", Batch: "November", Change: <Link to="/student-add" >Edit</Link> },
  { Name: "Biden", Age: "26", Course: "MERN", Batch: "September", Change: <Link to="/student-add" >Edit</Link> },
  { Name: "Barar", Age: "22", Course: "MERN", Batch: "September", Change: <Link to="/student-add" >Edit</Link> },
  { Name: "Choel", Age: "23", Course: "MERN", Batch: "December", Change: <Link to="/student-add" >Edit</Link> },
  { Name: "Barack", Age: "24", Course: "MERN", Batch: "October", Change: <Link to="/student-add" >Edit</Link> }
];

const Student = () => {
  return (
    <div className='student-det'>
      <h1 className="descrip left-disp">Student Details</h1>
      {/* <button>Add Details</button> */}
      <div className='table'>
        <TableContainer className='student-table' component={Paper}>
          <Table sx={{ width: 1550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell  className='head-row' align="left">Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="right">Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='left'>
                    {row.Name}
                  </TableCell>
                  <TableCell align="right">{row.Age}</TableCell>
                  <TableCell align="right">{row.Course}</TableCell>
                  <TableCell align="right">{row.Batch}</TableCell>
                  <TableCell align="right">{row.Change}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Student;