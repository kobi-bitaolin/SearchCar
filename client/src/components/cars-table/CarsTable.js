import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';




const useStyles = makeStyles({
  tableContainer: {
    width: 1000,
    margin: 'auto',
    padding: 10,
  },
  head: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  headText: {
    color: '#FAEBD7',
  }
});



const CarsTable = (props) => {
  const classes = useStyles();

  console.log(props.cars)
  return (
    <div>
      <SearchIcon/>
      <Input type="text" onChange={props.onChange} />
      <TableContainer className={classes.tableContainer} aria-label="simple table" component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.head}>
              <TableCell className={classes.headText}>Name</TableCell>
              <TableCell className={classes.headText} align="right">Country</TableCell>
              <TableCell className={classes.headText} align="right">Year</TableCell>
              <TableCell className={classes.headText} align="right">Color</TableCell>
              <TableCell className={classes.headText} align="right">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.cars.map((car, id) => (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {car.name}
                </TableCell>
                <TableCell align="right">{car.made_in}</TableCell>
                <TableCell align="right">{car.year}</TableCell>
                <TableCell align="right">{car.color}</TableCell>
                <TableCell align="right"> <img src={car.image} alt={car.name} /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CarsTable;
