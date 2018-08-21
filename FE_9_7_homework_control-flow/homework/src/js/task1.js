let login, passwd, current_hours
login = prompt(`Enter your login`)
if (login === null || !isNaN(login)) {
    alert(`"Canceled"`)
} else if (login.length < 4){
    alert(`“I don't know any users having name length less than 4 symbols”`)
} else if (login.length > 4){
    alert(`“I don’t know you”`)
} else if (login === 'User') {
    passwd = prompt(`Enter password`)
    if (passwd === null || !isNaN(passwd)) {
        alert(`"Canceled"`)
    } else if (passwd === 'SuperUser') {
        current_hours = new Date().getHours()
        if (current_hours < 20) {
            alert(`“Good day!”`)
        } else {
            alert(`“Good evening!”`)
        }
    } else {
        alert(`“Wrong password”`)
    }
}