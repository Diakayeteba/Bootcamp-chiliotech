function handleResponse (response){
    return response.json();
}

const handleData = (data) => {
    console.log(data);
    let tablelines = "";
    for (let index = 0; index < Array.length; index++){
        const user = data[index];
        const tableLine = `
        <tr>
            <th>${user.name}</th>
            <th>${user.phone}</th>
            <th>${user.email}</th>
        </tr>
       `;
       tableLines = tableLines + tableLine;

    }

    const userAsTable = users.map(
        user => (
        `
        <tr>
            <th>${user.name}</th>
            <th>${user.phone}</th>
            <th>${user.email}</th>
        </tr>
       `

    ))
    document.getElementById("users-body").innerHTML = tableLines;
};

function fetchUsers(){
     fetch ("https://jsonplaceholder.typicode.com/users")
     .then((response) => handleResponse(response))
     .then((data) => handleData(data));
       // JSON -> javascript object notation
        

       

}

