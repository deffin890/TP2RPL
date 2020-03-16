const DB_USER = [
    {
        username: "deffin",
        password: "deffinad",
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputKPassword = document.querySelector("#kpassword");
const buttonSubmit = document.querySelector("#submitForm");
const warningMsg = document.querySelector(".warning");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const valueInputUsername = inputUsername.value;
    const valueInputPassword = inputPassword.value;
    const valueInputKPassword = inputKPassword.value;

    if (valueInputPassword === valueInputKPassword) {
        //Hide Warning Text
        warningMsg.classList.add("warning");

        const data = {
            username: valueInputUsername,
            password: valueInputPassword
        }

        DB_USER.push(data);

        // Response Success
        console.log("Registrasi Berhasil, Terimakasih!");
        console.log(DB_USER);
        alert("Registrasi Berhasil, Terimakasih!");
    }else{
        // Respons When Password is Different
        warningMsg.className = "alert bg-danger text-white text-center mb-5";
    }

})