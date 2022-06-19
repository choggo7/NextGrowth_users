let users = [
    {
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
]

const myTable = document.createElement("table");

const rows = (user, table) => {

    var table = document.getElementById("table-users");
    var row = table.insertRow(-1);
    user.createdDate = dateForma(user.createdDate)

    Object.values(user).map((item, index) => {
        let cell = row.insertCell(index)
        cell.innerHTML = item

    })
    validation(row)

}

const dateForma = date => {
    date = new Date(date)
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}
const validation = row => {
    let cell = row.cells[2]
    let span = document.createElement("span")
    //console.log(cell)
    switch (cell.innerHTML) {
        case "En validation":
            span.className = "on-validation"
            span.innerText = "En validation"
            break;
        case "Validé":
            span.className = "valide"
            span.innerText = "Validé"
            break;
        case "Rejeté":
            span.className = "rejected"
            span.innerText = "Rejeté"
            break;
        default:
            console.log("status none")
            break;
    }
    cell.innerText = ""
    cell.appendChild(span)
}

users.forEach(user => {
    rows(user)
})