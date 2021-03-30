import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ExerciseTable } from './table'
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export function ExerciseAccordion() {
  const classes = useStyles();
 const [data, setData] = useState([{"id": 1, "employee_id": 6298, "employee_name":"Ryan", "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}, {"id": 2, "employee_id": 6299,"employee_name":"Nick", "month": "January", "exercise_time": 224, "social_interaction_time": 60, "work_time": 2220, "sleep_time": 2100}]);
  


//   const [dataJan, setDataJan] = useState([])
//     const [dataLoadJan, setDataLoadJan] = useState(false)
//   const urlJan = 'http://localhost:5000/exerciselowjan'
//   useEffect(async () => {
//     const resultJan =  await axios({
//       url: urlJan,
//       method: 'GET',
//       headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//       },
//       responseType: 'json',
//       })
 
//     setDataJan(resultJan.data)
//     console.log(dataJan)
//     setDataLoadJan(true);
//   },[dataLoadJan]);

//    const [datafeb, setDatafeb] = useState([])
//       const [dataLoadfeb, setDataLoadfeb] = useState(false)
//     const urlfeb = 'http://localhost:5000/exerciselowfeb'
//     useEffect(async () => {
//       const resultfeb =  await axios({
//         url: urlfeb,
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//         },
//         responseType: 'json',
//         })
   
//       setDatafeb(resultfeb.data)
//       console.log(datafeb)
//       setDataLoadfeb(true);
//     },[dataLoadfeb]);

//     const [datamar, setDatamar] = useState([])
//     const [dataLoadmar, setDataLoadmar] = useState(false)
//   const urlmar = 'http://localhost:5000/exerciselowmar'
//   useEffect(async () => {
//     const resultmar =  await axios({
//       url: urlmar,
//       method: 'GET',
//       headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*'
//       },
//       responseType: 'json',
//       })
 
//     setDatamar(resultmar.data)
//     console.log(datamar)
//     setDataLoadmar(true);
//   },[dataLoadmar]);

//   const [dataapr, setDataapr] = useState([])
//   const [dataLoadapr, setDataLoadapr] = useState(false)
// const urlapr = 'http://localhost:5000/exerciselowapr'
// useEffect(async () => {
//   const resultapr =  await axios({
//     url: urlapr,
//     method: 'GET',
//     headers: {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'
//     },
//     responseType: 'json',
//     })

//   setDataapr(resultapr.data)
//   console.log(dataapr)
//   setDataLoadapr(true);
// },[dataLoadapr]);

// const [datamay, setDatamay] = useState([])
// const [dataLoadmay, setDataLoadmay] = useState(false)
// const urlmay = 'http://localhost:5000/exerciselowmay'
// useEffect(async () => {
// const resultmay =  await axios({
//   url: urlmay,
//   method: 'GET',
//   headers: {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*'
//   },
//   responseType: 'json',
//   })

// setDatamay(resultmay.data)
// console.log(datamay)
// setDataLoadmay(true);
// },[dataLoadmay]);

// const [datajun, setDatajun] = useState([])
// const [dataLoadjun, setDataLoadjun] = useState(false)
// const urljun = 'http://localhost:5000/exerciselowjun'
// useEffect(async () => {
// const resultjun =  await axios({
//   url: urljun,
//   method: 'GET',
//   headers: {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*'
//   },
//   responseType: 'json',
//   })

// setDatajun(resultjun.data)
// console.log(datajun)
// setDataLoadjun(true);
// },[dataLoadjun]);

// const [datajul, setDatajul] = useState([])
// const [dataLoadjul, setDataLoadjul] = useState(false)
// const urljul = 'http://localhost:5000/exerciselowjul'
// useEffect(async () => {
// const resultjul =  await axios({
//   url: urljul,
//   method: 'GET',
//   headers: {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*'
//   },
//   responseType: 'json',
//   })

// setDatajul(resultjul.data)
// console.log(datajul)
// setDataLoadjul(true);
// },[dataLoadjul]);

// const [dataaug, setDataaug] = useState([])
// const [dataLoadaug, setDataLoadaug] = useState(false)
// const urlaug = 'http://localhost:5000/exerciselowaug'
// useEffect(async () => {
// const resultaug =  await axios({
//   url: urlaug,
//   method: 'GET',
//   headers: {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*'
//   },
//   responseType: 'json',
//   })

// setDataaug(resultaug.data)
// console.log(dataaug)
// setDataLoadaug(true);
// },[dataLoadaug]);

// const [datasep, setDatasep] = useState([])
// const [dataLoadsep, setDataLoadsep] = useState(false)
// const urlsep = 'http://localhost:5000/exerciselowsep'
// useEffect(async () => {
// const resultsep =  await axios({
//   url: urlsep,
//   method: 'GET',
//   headers: {
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Origin': '*'
//   },
//   responseType: 'json',
//   })

// setDatasep(resultsep.data)
// console.log(datasep)
// setDataLoadsep(true);
// },[dataLoadsep]);


//     const [dataoct, setDataoct] = useState([])
//       const [dataLoadoct, setDataLoadoct] = useState(false)
//     const urloct = 'http://localhost:5000/exerciselowoct'
//     useEffect(async () => {
//       const resultoct =  await axios({
//         url: urloct,
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//         },
//         responseType: 'json',
//         })
   
//       setDataoct(resultoct.data)
//       console.log(dataoct)
//       setDataLoadoct(true);
//     },[dataLoadoct]);

//     const [datanov, setDatanov] = useState([])
//       const [dataLoadnov, setDataLoadnov] = useState(false)
//     const urlnov = 'http://localhost:5000/exerciselownov'
//     useEffect(async () => {
//       const resultnov =  await axios({
//         url: urlnov,
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//         },
//         responseType: 'json',
//         })
   
//       setDatanov(resultnov.data)
//       console.log(datanov)
//       setDataLoadnov(true);
//     },[dataLoadnov]);

      
//     const [datadec, setDatadec] = useState([])
//       const [dataLoaddec, setDataLoaddec] = useState(false)
//     const urldec = 'http://localhost:5000/exerciselowdec'
//     useEffect(async () => {
//       const resultdec =  await axios({
//         url: urldec,
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*'
//         },
//         responseType: 'json',
//         })
   
//       setDatadec(resultdec.data)
//       console.log(datadec)
//       setDataLoaddec(true);
//     },[dataLoaddec]);



  return (
    <div className={classes.root}>

    <Typography variant="h4">
        Low Movers:
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>January</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>February</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        > 
          /<Typography className={classes.heading}>March</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>April</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>May</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>June</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>July</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>August</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>September</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>October</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>November</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>December</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ExerciseTable data={data}/>
          </Typography>
        </AccordionDetails>
      </Accordion>

    
    </div>
  );
}