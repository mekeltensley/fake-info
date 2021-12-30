const axios = require('axios');

// Create a function for GET data from API URL
//Then CHANGES THE DATA TO STRING FORMAT FOR PARSING 

// async function getData() {

const getData = async () => {
    try {
        // const response = await axios.get('https://reqres.in/api/users');
        // console.log(response.data.data);
        // const jsonResult = await JSON.stringify(response.data.data);
        // console.log(jsonResult);
        return await axios.get('https://reqres.in/api/users');
    } catch (error) {
        console.log(error);
    }
}

// getData();

const transformData = async () => {
    const response = await getData();
    let data = response.data.data;
    console.log(data);
    if (data) {
        let jsonResult = await JSON.stringify(data);
        console.log(jsonResult);
    }
}

transformData();

const sendData = async () => {
    try {
        const postResponse = await axios.post('https://reqres.in/api/register', {
            email: "eve.holt@reqres.in",
            password: "pistol"
        });
        console.log(postResponse);
    } catch (error) {
        console.log(error);
    }  
};

sendData();

//OR do it this way 
// axios.get('https://reqres.in/api/users')
//     .then(function (response) {
//         //displays data in the terminal as an array of objects
//         console.log(response.data.data);
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     //Convert Javascript Object Literal to JSON String
//     //Use JSON.stringify()
//     .then(function (response) {
//         const jsonResult = JSON.stringify(response);
//         console.log(jsonResult);
//         console.log(typeof jsonResult);
//     });