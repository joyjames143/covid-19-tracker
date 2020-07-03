import React from "react";
import styles from "./App.module.css";
import {Cards,Chart,CountryPicker} from "./components"
import {fetchData} from "./api/index"
import coronaimage from "./images/image.png"


class App extends React.Component {
  state = {
    data:{},
    country:'',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async(country) =>{
    if(country === ''){
      const fetchedData = await fetchData();
      this.setState({data:fetchedData ,country:''})
    }else{
    const fetchedData = await fetchData(country);
    this.setState({data:fetchedData ,country:country})
    }
  }

  render(){
    const {data,country} = this.state
    console.log(data)
    return (
      <div className={styles.container}>
        <img className={styles.img} src={coronaimage} alt='covid-19'/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  } 
}

export default App