const scriptURL = "https://script.google.com/macros/s/AKfycbwJBY6fnuM_xnzLBPbEg6lLWLWqbpc2CCJtTSNIy5AJAeLJhmI2lk71jjckJ9KTp8PD/exec"

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your request has been registered. The assigned staff will answer your question shortly!"))
    .then(() => { window.location.reload(); })
    .catch (error => console.error('Error!', error.message))
})