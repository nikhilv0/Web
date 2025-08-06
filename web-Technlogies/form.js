function submitForm() {
    let val = true
    let valueS1 = document.formName.nameName.value;
    let valueS2 = document.formName.passwordName.value;
    let valueS3 = document.formName.emailName.value;
    let valueS4 = document.formName.selectNmae.value;
    let valueS5 = document.formName.radioName.value;
    let valueS6 = document.formName.PhoneName.value;
    let valueS7 = document.formName.AgeName.value;

    if (valueS6.length !== 10) {
        val = false;
        alert("Phone number must be exactly 10 digits.");
    }
    if (valueS1.length <= 3 || valueS1.length >= 20) {
        val = false;
        alert("Name must be between 4 and 19 characters.");
    }
    if (valueS7 >= 18) {
        val = false;
        alert("Age should be 18+");
    }
    alert("Name:" + valueS1)
    alert("Password:"+valueS2)
    alert("email:"+valueS3)
    alert("select:"+valueS4)
    alert("radio:"+valueS5)
    alert("Phone Number:" + valueS6)
    alert("Age:" + valueS7)
    alert("form got submitted")


    return val;
}