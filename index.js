fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(data =>{
    const table = document.getElementById('students')
    for(let i = 0; i < data.length; i++){
        table.innerHTML +=<tr>
            <td>${data[i].name}</td>
            <td>${data[i].email}</td>
            <td>${data[i].age}</td>
            <td>${data[i].password}</td>
            <td>${data[i].grade}</td>
        </tr>
    }
})
.catch(err => console.log(err))