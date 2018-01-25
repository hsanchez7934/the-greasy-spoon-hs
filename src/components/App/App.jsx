import React, { Component } from 'react';
import './App.css';
import apiKey from '../../apikey.js';
import HomeScreen from '../HomeScreen/HomeScreen.jsx';

class App extends Component {

  componentDidMount() {
    // this.getTables();

    // const newCheck = {tableId: '2644ece3-83dd-4deb-ae02-54f4df083e16'};
    // fetch(`https://check-api.herokuapp.com/checks`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization: apiKey
    //   },
    //   body: JSON.stringify(newCheck),
    //   accept: 'application/json'
    // })
    //   .then(response => response.json())
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));
    // const newItem = {itemId: '92d26789-a296-4910-b7a9-b08e68d9e44d'};
    // fetch(`https://check-api.herokuapp.com/checks/d8d66715-c799-4732-b2c1-8d1b79590a6d/addItem`, {
    //   method: 'PUT',
    //   headers: {
    //    Authorization: apiKey
    //   },
    //   body: JSON.stringify(newItem),
    //   accept: 'application/json'
    // })
    // .then(response => response.json())
    // .then(response => console.log(response))
    // .catch(error => console.log(error))
  }


  // {id: "2644ece3-83dd-4deb-ae02-54f4df083e16", number: 1}
  // {id: "c482731d-19a4-4d1f-90ab-e4dc4ac7d28d", number: 2}
  // {id: "51f719e1-830e-40bb-9c1a-493ccc13cbc0", number: 3}
  // {id: "56fe84ff-0655-4972-b2b0-b097e0a26ca1", number: 4}
  // {id: "f5a3d871-1548-4be5-9f5a-e9a6e2011187", number: 5}
  // {id: "cb336b2a-a16f-4734-8e62-f165d5a2ac03", number: 6}
  // {id: "5d6e6290-a0bb-4aa9-ba3d-9071e5a65a93", number: 7}
  // {id: "b0672e44-b959-4f09-ad7e-6f53a386d815", number: 8}
  // {id: "4cf15df2-c1bf-435f-8e8b-ad6aba48937c", number: 9}
  // {id: "31ccc746-4ade-43ea-add1-3dba513feb85", number: 10}

// {id: "348e706c-ab3b-4a6e-a391-8de96ac7e0a3", name: "PULL-APART BREAD", price: 4.5}
// {id: "92d26789-a296-4910-b7a9-b08e68d9e44d", name: "GREEN SALAD ", price: 8}
// {id: "abae32ec-05e5-4072-ba54-3a46764a5eff", name: "MORTGAGE LIFTER BEANS", price: 6}
// {id: "242b1e7c-c233-4324-8b8c-cbf43723395b", name: "TOMATO TOAST", price: 5.5}
// {id: "35b6c0b0-afdc-4df6-a690-30fbcd4a2a04", name: "MORGANE’S BEEF CHILI", price: 6}
// {id: "3aa7eef8-a37a-4a05-83c5-22e99e531781", name: "CHICKEN CAESAR", price: 13}
// {id: "7fde8abf-0589-4446-9905-9185b4c2b598", name: "THREE SISTERS SALAD", price: 13}
// {id: "cf09ccf2-ece2-4771-81c5-deff1fe08d79", name: "MARINATED STEAK BOWL", price: 15}
// {id: "a34074ea-2949-40f9-94fe-d3404607861b", name: "OUR BURGER", price: 14}
// {id: "4b48707c-619b-42b1-8b8a-3da51feacf95", name: "HAM & CHEESE PRESS", price: 12.5}
// {id: "6b6e59e3-0861-48b1-85c0-778df1126e19", name: "PATTY MELT", price: 12.5}
// {id: "f58948c7-9feb-44ea-b0cc-9013406b9a51", name: "COOKIES & MILK", price: 5}

  getTables = () => {
    fetch(`https://check-api.herokuapp.com/checks`, {
      method: 'DELETE',
      headers: {
        Authorization: apiKey
      }
    })
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <HomeScreen />
      </div>
    );
  }
}

export default App;
