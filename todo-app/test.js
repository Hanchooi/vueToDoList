const axios = require('axios');

function getOld() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3').then(data => {
        console.log(data);
    })
    console.log("Second")
}
async function getNew() {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3');
    console.log(data)
    console.log("First");
    console.log("Second")
}

getOld();