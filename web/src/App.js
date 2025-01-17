import React, { useState, useEffect } from 'react';
import './App.css';
import { BasicTable } from './components/table'
import { ButtonAppBar } from "./components//navbar"
import { Example } from "./components//charts"
import { CustomizedTimeline } from './components/timeline'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { SimpleAccordion } from './components/accordion';


function App() {
  // const [data, setData] = useState([{"id": 1, "employee_id": 6298, "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}, {"id": 2, "employee_id": 6299, "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}]);
  
  const useStyles = makeStyles({
    root: { width: '80%', overflowY: "auto" },
    table: {
      minWidth: 650,
      height: '500px',
      overflowY: "hidden",
      top: "100px"
    },
  });
  
  const classes = useStyles();
  
  const [data, setData] = useState([])
  const [dataLoad, setDataLoad] = useState(false)
    const url = 'http://localhost:5000/alldata'
    useEffect(async () => {
      const result =  await axios({
        url: url,
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        },
        responseType: 'json',
        })
   
      setData(result.data)
      console.log(data)
      setDataLoad(true);
    },[dataLoad]);

  

  return (
    <div className="App">
    
    <ButtonAppBar/>
    <Grid container spacing={1}>
    <Grid item xs={12} sm={12} className={classes.table}>
    <Typography variant="h4">
        Employee Metric Data
      </Typography>
    <BasicTable data={data}/>
      </Grid>
        <Grid item xs={12} sm={12}>
        <Typography variant="h4">
        Employee Data - January
      </Typography>
        <Example/>
        </Grid>
        </Grid>
        <SimpleAccordion/>
    </div>
  );
}

export default App;
