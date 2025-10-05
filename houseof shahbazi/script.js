function submitForm(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = "Thank you. We'll get back to you shortly.";
  e.target.reset();
}
document.getElementById('year').textContent = new Date().getFullYear();