const axios = require('axios');

//REQUESTS Data from API URL

axios.get('https://reqres.in/api/users?page=2')
.then(function(response) {
    //displays data in the terminal as an array of objects
    // console.log(response.data.data);

    // Returns API data stored in an object form
    const myJSON = response.data.data;
    console.log(myJSON);

    //Checks the data type
    console.log(typeof myJSON );

    //Turns data into a string in JSON format
    let jsonResult = JSON.stringify(myJSON)
    console.log(jsonResult);

    // Turn string data into a dictionary

    // let result = JSON.parse(jsonResult);

    //   //Create a dictionary from JSON Object

    //    let randomNames = {};

    //   for(let i = 0; i < result.length; i++) {
    //       names = result.email[i];
    //       result[ jsonResult.id ] = names;          
    //   }
    //   console.log(jsonResult[12].email);
})
.catch(function(err){
    console.log(err);
});

