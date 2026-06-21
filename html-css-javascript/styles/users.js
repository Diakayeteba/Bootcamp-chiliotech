function handleResponse (response){
    return response.json();
}

const handleResponse = (data) => {
    console.log(data);
};

function fetchUsers(){
     fetch ("https://jsonplaceholder.typicode.com/users")
     .then((response) => handleResponse(response))
    
     .then((data) => handleResponse(data));
       // JSON -> javascript object notation
        

       

}

