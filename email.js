//get the form by its id
const form = document.getElementById("contact-form");

//1.
const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let data = {};
    data.name = document.querySelector('#name').value
    data.surnam = document.querySelector('#surname').value
    data.to = document.querySelector('#to').value
    data.subject = document.querySelector('#subject').value
    data.text = document.querySelector('#text').value

    console.log(data);
    //3.
    sendMail(data);
})

const sendMail = (mail) => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    //1.
    fetch("https://vote-sys.herokuapp.com/v1/email", {
        method: "post", //2.
        mod: 'cors',
        body: JSON.stringify(mail), //3.
        headers: headers
    }).then((response) => {
        return response.json();
    });
};