import axios from "axios"

const apiurl ='https://covid19.mathdro.id/api'

export const fetchData = async(country) =>{
  let changableUrl = apiurl

  if(country !== undefined){
  changableUrl=`${apiurl}/countries/${country}`
  }

  try{
    const response = await axios.get(changableUrl)
    
    const ModifiedData = {
      confirmed:response.data.confirmed,
      recovered:response.data.recovered,
      deaths:response.data.deaths,
      lastUpdate:response.data.lastUpdate
    }
    return ModifiedData

  }catch(e){
    console.log(e)
  }
}


export const fetchDailyData = async()=>{
  try{
      const {data} = await axios.get(`${apiurl}/daily`)
    
    const modifiedData = data.map((dailyData)=>({
      confirmed:dailyData.confirmed.total,
      deaths:dailyData.deaths.total,
      date:dailyData.reportDate,
    }))

    return modifiedData
    }
  catch(e){
    console.log(e)
  }
}

export const fetchCountryData = async()=>{
  try{
    const {data:{countries}} = await axios.get(`${apiurl}/countries`)

    return countries.map((country)=>country.name)
  }
  catch(e){
    console.log(e)
  }
}