import React,{useState, useEffect} from "react"
import {NativeSelect, FormControl} from "@material-ui/core"
import styles from "./CountryPicker.module.css"
import {fetchCountryData} from "../../api/index"

const CountryPicker = ({handleCountryChange})=>{
  const [fetchedCountries,setFetchedCountries]=useState([])
  useEffect(()=>{
    const fetchApi = async()=>{
      setFetchedCountries(await fetchCountryData())
    }
    fetchApi()
  },[setFetchedCountries])


  return(
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue='' onChange={(e)=>handleCountryChange(e.target.value)}>
        <option value=''>Gobal</option>
        {fetchedCountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker