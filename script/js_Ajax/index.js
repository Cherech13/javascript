const API = 'https://jsonplaceholder.typicode.com';
const btn = document.querySelector("button");
const wraper = document.getElementsByClassName("wraper");

btn.addEventListener("click", () => {
    fetch(`${API}/users`)
    .then(response => response.json())
        .then(users => {
            const divUSer = document.createElement('DIV');
            const User_name = document.createElement('P');
            const name = document.createElement('P');
            const mail = document.createElement('P');

            User_name.innerHTML = users.username;
            name.innerHTML = users.name;
            mail.innerHTML = users.email;

            divUSer.append(User_name);
            divUSer.append(name);
            divUSer.append(mail);
            console.log(users);
            
        })
        .catch(error => console.log(error));
})
