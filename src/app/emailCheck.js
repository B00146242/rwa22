const validateForm = (event) => {
    let errorMessage = '';
    const data = new FormData(event.currentTarget);
// get the email
    let email = data.get('email')
// pull in the validator
    var validator = require("email-validator");
// run the validator
    let emailCheck = validator.validate(email);
// print the status true or false
    console.log("email status" +emailCheck);
// if it is false, add to the error message.
    if(emailCheck == false){
        errorMessage += 'Incorrect email';
    }
    return errorMessage;
}
const handleSubmit = (event) => {
    console.log("handling submit");
    event.preventDefault();
// call out custom validator
    let errorMessage = validateForm(event);
// save the mesage
    setErrorHolder(errorMessage)
// if we have an error
    if(errorMessage.length > 0){
        setOpen(true);
    } else {
// if we do not get an error
        const data = new FormData(event.currentTarget);
        let email = data.get('email')
        let pass = data.get('pass')
        console.log("Sent email:" + email)
        console.log("Sent pass:" + pass)
        console.log("calling db");
        runDBCallAsync(`api/login?email=${email}&pass=${pass}`)
    }// error message if
}; // end handler
