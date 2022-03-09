function bookNow() {
    let tour = document.getElementById('tour').value
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let NoTravelers = document.getElementById('NoTravelers').value
    let myWindow = window.open("","","width=500,height=500")
    myWindow.document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Answer Customer</title>
    </head>
    <body>
        <h2>Welcome to book ....</h2>
        <div>Tour:${tour}</div>
        <div>YourName:${name}</div>
        <div>Phone:${phone}</div>
        <div>Number of Travelers:${NoTravelers}</div>
    </body>
    </html>`)
}