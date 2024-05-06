const scriptURL = "https://script.google.com/macros/s/AKfycbwJBY6fnuM_xnzLBPbEg6lLWLWqbpc2CCJtTSNIy5AJAeLJhmI2lk71jjckJ9KTp8PD/exec"

const form = document.forms['contact-form'];



form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Gracias! su solicitud a sido registrada. El personal asignado respondera a su pregunta en brevedad!"))
    .then(() => { window.location.reload(); })
    .catch (error => console.error('Error!', error.message))
})

