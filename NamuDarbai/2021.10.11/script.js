let userInfoOutput = document.getElementById("main");

let user = {
    name: "Gytis",
    surname: "Juodeikis",

};

userInfoOutput.innerHTML = `<h2>
User Information
</h2>
<p>
The users name is ${user.name} and their surname is ${user.surname}
</p>`;
