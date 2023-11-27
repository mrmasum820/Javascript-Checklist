let form = document.getElementById('form')

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // console.log(this.length); //to see the form element length
    // console.log(this.elements[0]);  //to get the form first element
    // console.log(this['email']);  //get the element using name array notation

    let formData = {};

    [...this.elements].forEach(element => {
        // console.log(element.type, element.name, element.value); //we will get all element type, name and value

        if (element.type !== "submit") {
            formData[element.name] = element.value
        }
    })
    console.log(formData);
    this.reset()
})