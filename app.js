// template_hwm3c6p
// service_e92nala
// Me9GJA-jWLlDpEFQD

function contact(event) {
    event.preventDefault();
    emailjs
        .sendForm(
            'service_e92nala',
            'template_hwm3c6p',
            event.target,
            'Me9GJA-jWLlDpEFQD'
        ).then(() => {
            console.log('this worked1')
        })
}