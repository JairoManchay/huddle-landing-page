const btn_correo = document.getElementById("subscribe__correo");
const email = document.getElementById("email");
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
const respuesta = document.getElementById("value_text");

// Create an instance of Notyf
var notyf = new Notyf({
        position: {
            x: 'right',
            y: 'top',
        },
        ripple: true
});


btn_correo.addEventListener("click", function(e){
    e.preventDefault();

    let email_value = email.value;
    console.log("trim", email_value=="");

    if(email_value==""){
        notyf.open({
            type: 'info',
            message: 'The input of email is empty',
            duration: 5000,
            background: 'blue',
            dismissible: true,
            icon: {
                className: 'material-symbols-outlined',
                tagName: 'i',
                text: 'info',
                color: 'white'
            }

        })

        respuesta.innerHTML="The field is empty";
        setTimeout(()=>{
            respuesta.innerHTML="";
        }, 4000)


    }else if(email_value.length < 3){
        notyf.open({
            type: 'warning',
            message: 'The email is invalid!!!',
            duration: 5000,
            background: 'orange',
            dismissible: true,
            icon: {
                className: 'material-symbols-outlined',
                tagName: 'i',
                text: 'warning',
                color: 'white'
            }
        })

        respuesta.innerHTML="The email is invalid!"
        respuesta.style.color="blue";

        setTimeout(()=>{
            respuesta.innerHTML="";
        }, 4000)

        
    }else if(emailRegex.test(email_value)){
        notyf.success('The email have been successfully saved!');
        respuesta.innerHTML="";
        respuesta.style.display="none"
    }
})