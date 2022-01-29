import './App.css';
import React from 'react'
import axios from 'axios';


class App extends React.Component {
  state = {
    details : [],
  }


componentDidMount() {
  let data ;
  axios.get('https://listnr-database.herokuapp.com/')
  .then((res) => {
    data = res.data;
    this.setState({
      details : data
    });
  })
  .catch((err) => {})
}

render() {
  return (
    <div>

    </div>
  );
}
}
export default App;
