function post() {
    axios.post("/", { burgerName: document.getElementById("burger-input").value })
        .then((response) => {
            console.log(response);
        });
}
function put(value) {
    axios.put("/", { id: value })
        .then((response) => {
            console.log(response);
        });
    window.location.reload();
}
