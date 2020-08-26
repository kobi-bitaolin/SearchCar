import React from 'react';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Table from '@material-ui/core/Table';
import LoaderSvg from '../loader/LoaderSvg';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import FormGroup from '@material-ui/core/FormGroup';
import { Button, Container } from '@material-ui/core';
import './cars.css';


const useStyles = makeStyles({
  tableContainer: {

    boxShadow: "0px 0px 8px rgb(0, 0, 0)",
  
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

  const { searchCars, getInputValue, cars, loading } = props;
  const classes = useStyles();
  return (
    <div className="cars-table">
      <Container>
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
              <TableContainer id="table" className={classes.tableContainer} aria-label="simple table" component={Paper}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow className={classes.head}>
                      <TableCell className={classes.headText} >Image</TableCell>
                      <TableCell className={classes.headText}>Name</TableCell>
                      <TableCell className={classes.headText} >Country</TableCell>
                      <TableCell className={classes.headText} >Year</TableCell>
                      <TableCell className={classes.headText} >Color</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cars.map((car, id) => (
                      <TableRow key={id}>
                        <TableCell > <img src={car.image} alt={car.name} /></TableCell>
                        <TableCell>
                          {car.name}
                        </TableCell>
                        <TableCell >{car.made_in}</TableCell>
                        <TableCell>{car.year}</TableCell>
                        <TableCell >{car.color}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
        }
      </Container>
    </div>
  );
}

export default CarsTable;
