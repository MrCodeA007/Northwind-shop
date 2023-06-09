fetch(`http://localhost:8081/api/categories`)
.then((response) => response.json())
.then((data) => { 
    console.log(data);
})