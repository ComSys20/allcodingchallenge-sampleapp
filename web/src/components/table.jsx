import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableContainer from '@material-ui/core/TableContainer';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: '90%',
  },
  container: {
    maxHeight: 440,
    margin: '8px',
  },
});

export function BasicTable(props) {
  const classes = useStyles();

  const columns = (props) => {
    const data = props.data
    return (
      data.map((row) => (
        <StyledTableRow key={row.employee_name}>
          <StyledTableCell component="th" scope="row">
            {row.employee_name}
          </StyledTableCell>
          <StyledTableCell align="right">{row.exercise_time}</StyledTableCell>
          <StyledTableCell align="right">{row.sleep_time}</StyledTableCell>
          <StyledTableCell align="right">{row.social_interaction_time}</StyledTableCell>
          <StyledTableCell align="right">{row.work_time}</StyledTableCell>
          <StyledTableCell align="right">{row.month}</StyledTableCell>
        </StyledTableRow>)))
        
  }

  const loading = () => {
    return (
      <div>Loading</div>
    )
  }

   const loadColumns = (props) => {
    if (props.data && props.data.length) {
      return columns(props)
    }
    else { return loading() }
  }

  return (
    <Paper className={classes.root}>
    <TableContainer className={classes.container}>
    <Table stickyHeader aria-label="sticky table">
      <TableHead>
        <StyledTableRow>
          <StyledTableCell>Name</StyledTableCell>
          <StyledTableCell align="right">Exercise time</StyledTableCell>
          <StyledTableCell align="right">Sleep</StyledTableCell>
          <StyledTableCell align="right">Social</StyledTableCell>
          <StyledTableCell align="right">Working time</StyledTableCell>
          <StyledTableCell align="right">Month</StyledTableCell>
        </StyledTableRow>
      </TableHead>

      <TableBody>
        {loadColumns(props)}
      </TableBody>
      
    </Table>
    </TableContainer>
    <TablePagination
    component="div"
  />
  </Paper>
  );
}
