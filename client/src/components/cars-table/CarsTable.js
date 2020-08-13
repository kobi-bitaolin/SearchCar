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
import SpinnerIcon from '../loader/SpinnerIcon';




const useStyles = makeStyles({
  tableContainer: {
    width: 1000,
    margin: 'auto',
    padding: 10,
    boxShadow: "0px 0px 8px rgb(0, 0, 0)",
    marginTop: 20
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
  console.log(props.cars);
  return (
    <div>
      <SearchIcon onClick={props.searchCars} />
      <Input
        type="text"
        name='name'
        placeholder="Enter car name"
        onChange={props.changeInputHandler}
      />
      <Input
        type="text"
        name='year'
        placeholder="Enter car year"
        onChange={props.changeInputHandler}
      />

      {props.cars.length === 0 ?
        <div>
          <h1 style={{ color: 'red' }}>car not found !</h1>
          <p>Try another car/year ?</p> 
        </div>
        :
        props.loading === true ? 
        <SpinnerIcon />
        :      
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
      }
    </div>
  );
}

export default CarsTable;
