const fetchAndDisplayData  = document.getElementById('fetchingApi');

const Datafech = async() =>{
    try{
        const res =  await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        console.log(data)

        data.forEach(user => {
            fetchAndDisplayData.innerHTML += `
            <div>
            <h2>${user.name}</h2>
            <p>${user.email}<p>

            </div>
            `
            
        });
    }catch(error){
        console.error(error)
    }
}
Datafech()