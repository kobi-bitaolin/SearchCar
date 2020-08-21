import React from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import LoaderSvg from '../loader/LoaderSvg';
import TableRow from '@material-ui/core/TableRow';
// import SearchIcon from '@material-ui/icons/Search';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import FormGroup from '@material-ui/core/FormGroup';
import { Button } from '@material-ui/core';
import './cars.css';

const useStyles = makeStyles({
  tableContainer: {
    width: 1000,
    margin: 'auto',
    padding: 10,
    boxShadow: "0px 0px 8px rgb(0, 0, 0)",
    marginTop: 30
  },
  head: {
    backgroundColor: '#3f51b5;',
  },
  headText: {
    color: '#FAEBD7',
  },
  formGroup: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  }
});

const CarsTable = (props) => {

  const {searchCars, getInputValue, cars, loading} = props;
  const classes = useStyles();
  return (
    <div className="cars-table">
      <FormGroup className={classes.formGroup}>
      <Input
        type="text"
        name='name'
        placeholder="Enter car name"
        onChange={getInputValue}
      />
      <Input
        type="text"
        name='year'
        placeholder="Enter car year"
        onChange={getInputValue}
      /> 
      <Button onClick={searchCars} >Search</Button>
      </FormGroup> 
      {
      cars.length === 0 ? 
        <div className="erorr-message">
          <h1 className="erorr" >car not found!</h1>
          <p>Try another car/year ?</p> 
        </div>
        :
        loading ? 
        <LoaderSvg />
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
              {cars.map((car, id) => (
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
