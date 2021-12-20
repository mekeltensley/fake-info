const axios = require('axios');


axios.get('https://reqres.in/api/users?page=2')
.then(function(response) {
    //displays data in the terminal as an array of objects
    // console.log(response.data.data);

    //API data is stored in an object 
    const myJSON = response.data.data;
    //THEN the data is converted to JSON
    console.log(JSON.stringify(myJSON));
})
.catch(function(err){
    console.log(err);
});