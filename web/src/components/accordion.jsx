import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import FreeBreakfastIcon from '@material-ui/icons/FreeBreakfast';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
      
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4">
        Example Timelines:
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Early Riser</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                      <Timeline align="alternate">
                      <TimelineItem>
                      <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            6:30 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary" variant="outlined">
                            <HotelIcon />
                          </TimelineDot>
                          <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Wake up
                            </Typography>
                            <Typography>Get out of bed</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                          
                          <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            6:30 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <FitnessCenter />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Exercise
                            </Typography>
                            <Typography>Start the day with a sweat</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            8:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FreeBreakfastIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Breakfast
                            </Typography>
                            <Typography>Most important meal of the day</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            9:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <LaptopMacIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Work
                            </Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            12:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FastfoodIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Lunch
                            </Typography>
                            <Typography>Remember take time to eat!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            1:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <LaptopMacIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Work
                            </Typography>
                            <Typography>Because it&apos;s what we pay you for!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            6:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FastfoodIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Dinner
                            </Typography>
                            <Typography>Cook a balanced meal!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            7:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <MenuBookIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                             Relax
                            </Typography>
                            <Typography>Have some you time</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>



                      <TimelineItem>
                      <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            10:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary" variant="outlined">
                            <HotelIcon />
                          </TimelineDot>
                          <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Sleep
                            </Typography>
                            <Typography>Because you need rest</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <RepeatIcon />
                          </TimelineDot>
                        </TimelineSeparator>

                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Repeat
                            </Typography>
                            <Typography>Because this is the life you love!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Night Owl</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Timeline align="alternate">
                      <TimelineItem>
                      <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            8:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary" variant="outlined">
                            <HotelIcon />
                          </TimelineDot>
                          <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Wake up
                            </Typography>
                            <Typography>Get out of bed</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                          
                          

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            8:30 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FreeBreakfastIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Breakfast
                            </Typography>
                            <Typography>Most important meal of the day</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            9:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <LaptopMacIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Work
                            </Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            12:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FastfoodIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Lunch
                            </Typography>
                            <Typography>Remember take time to eat!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            1:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <LaptopMacIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Work
                            </Typography>
                            <Typography>Because it&apos;s what we pay you for!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            6:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FastfoodIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Dinner
                            </Typography>
                            <Typography>Cook a balanced meal!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            7:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <FitnessCenter />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Exercise
                            </Typography>
                            <Typography>Burn off that Dinner!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            8:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <MenuBookIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                             Relax
                            </Typography>
                            <Typography>Have some you time</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>



                      <TimelineItem>
                      <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            12:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary" variant="outlined">
                            <HotelIcon />
                          </TimelineDot>
                          <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Sleep
                            </Typography>
                            <Typography>Because you need rest</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <RepeatIcon />
                          </TimelineDot>
                        </TimelineSeparator>

                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Repeat
                            </Typography>
                            <Typography>Because this is the life you love!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Lunchtime Runner</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Timeline align="alternate">
                      <TimelineItem>
                      <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            8:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary" variant="outlined">
                            <HotelIcon />
                          </TimelineDot>
                          <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Wake up
                            </Typography>
                            <Typography>Get out of bed</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                          
                          

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            8:30 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FreeBreakfastIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Breakfast
                            </Typography>
                            <Typography>Most important meal of the day</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            9:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <LaptopMacIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Work
                            </Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            12:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FastfoodIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Lunch
                            </Typography>
                            <Typography>Remember take time to eat!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            12:30 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <FitnessCenter />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Exercise
                            </Typography>
                            <Typography>Run round the block!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            1:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <LaptopMacIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Work
                            </Typography>
                            <Typography>Because it&apos;s what we pay you for!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            6:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <FastfoodIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Dinner
                            </Typography>
                            <Typography>Cook a balanced meal!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            7:30 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <FitnessCenter />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Exercise
                            </Typography>
                            <Typography>Burn off Dinner!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>

                      <TimelineItem>
                        <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            8:00 pm
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary">
                            <MenuBookIcon />
                          </TimelineDot>
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                             Relax
                            </Typography>
                            <Typography>Have some you time</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>



                      <TimelineItem>
                      <TimelineOppositeContent>
                          <Typography variant="body2" color="textSecondary">
                            12:00 am
                          </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot color="primary" variant="outlined">
                            <HotelIcon />
                          </TimelineDot>
                          <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Sleep
                            </Typography>
                            <Typography>Because you need rest</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineSeparator>
                          <TimelineDot color="secondary">
                            <RepeatIcon />
                          </TimelineDot>
                        </TimelineSeparator>

                        <TimelineContent>
                          <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                              Repeat
                            </Typography>
                            <Typography>Because this is the life you love!</Typography>
                          </Paper>
                        </TimelineContent>
                      </TimelineItem>
                    </Timeline>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}