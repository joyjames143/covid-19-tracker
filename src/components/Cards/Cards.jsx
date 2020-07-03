import React from "react"
import {Card,CardContent,Typography,Grid} from "@material-ui/core" 
import styles from "./Cards.module.css"
import CountUp from "react-countup"
import cx from "classnames"


const Cards = (props)=>{
  
  if (!props.data.confirmed){
   
    return('loading...')
   
  }
  return(
   
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom >infected</Typography>
            <Typography variant='h5'><CountUp start={0} end={props.data.confirmed.value} duration={1.5} separator=","/></Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant='h5'><CountUp start={0} end={props.data.recovered.value} duration={1.5} separator=","/></Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">number of Recovered cases from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant='h5'><CountUp start={0} end={props.data.deaths.value} duration={1.5} separator=","/></Typography>
            <Typography color="textSecondary">{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">number of Deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards