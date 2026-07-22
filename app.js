// template_hwm3c6p
// service_e92nala
// Me9GJA-jWLlDpEFQD

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            "service_e92nala",
            "template_hwm3c6p",
            event.target
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at Sarahhassweetcheeks@gmail.com
            );
        });

    setTimeout(() => {
    
        console.log('it worked 1')
    }, 1000);
}