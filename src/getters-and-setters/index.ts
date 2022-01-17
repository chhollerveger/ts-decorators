import Login from "./login";

const login = new Login("teste@teste.com", "102030");

for (let key in login) {
    console.log("key", key);
    console.log("value", login[key]);
}