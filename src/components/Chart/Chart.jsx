import React,{useEffect,useState} from "react"
import {fetchDailyData} from "../../api/index"
import {Line,Bar} from "react-chartjs-2"
import styles from "./Chart.module.css"


const Chart = ({data ,country})=>{
  const[dailyData, setDailydata] = useState({})
      
    useEffect(()=>{
        const fetchApi = async()=>{
          setDailydata(await fetchDailyData())
        }
      
        fetchApi() 
   },[])
 
 
  const lineChart=(
    dailyData.length   
    ?
    (<Line
      data={{
        labels:dailyData.map((dailyData)=>dailyData.date),
        datasets:[{
          data:dailyData.map((dailyData)=>dailyData.confirmed),
          label:"infected",
          borderColor:'#3333ff',
          fill:true,
        },{
          data:dailyData.map(({deaths})=>deaths),
          label:"deaths",
          borderColor:'red',
          backgroundColor:"rgba(255,0,0,0.5)",
          fill:true,
        }]
      }}
    />) : null
  )


const barChart = (
    data.confirmed 
    ? (
    <Bar
      data={{
        labels:['infected','recovered','deaths'],
        datasets:[{
          label:'people',
          backgroundColor:[
            'rgba(0,0,255,0.5)',
            'rgba(0,255,0,0.5)',
            'rgba(255,0,0,0.5)'
          ],
          data:[data.confirmed.value,data.recovered.value,data.deaths.value]
        }],
       

      }}
      options={{
        legend:{display:false},
        title:{display:true, text:`current country is ${country}` }
      }}
    />
    )
    : null
      )


return(
    
    <div className={styles.container}>
      {console.log(country)}
      {country ? barChart :lineChart}
    </div>
  )
}

export default Chart