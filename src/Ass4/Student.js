import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StudContext } from "./StudContext";


const Student = () => {

  let navigate = useNavigate();
  let [rows] = useContext(StudContext);
  const addStudentHandler = () => {
    navigate(`/student-add`)
  }

  return (
    <div className='table'>
      <h1 className="descrip left-disp">Student Details</h1>
      <button className="student_add_button" onClick={ addStudentHandler }>+ New Student</button>
      <div className='table'>
        <TableContainer className='student-table' component={Paper}>
          <Table sx={{ width: 1550 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Course</TableCell>
                <TableCell align="right">Batch</TableCell>
                <TableCell align="center">Change</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.Name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='center'>
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.age}</TableCell>
                  <TableCell align="right">{row.course}</TableCell>
                  <TableCell align="right">{row.batch}</TableCell>
                  <TableCell align="center"><Link to={`/student-add/${row.id}`}>EDIT</Link></TableCell>
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