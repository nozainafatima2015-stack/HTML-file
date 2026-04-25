function validate(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass= document.getElementById("password").value;
    const age = document.getElementById('age').value;
  const msgBox = document.getElementById('message');

  let message = '';
  if (email === '') {
    message = 'Please enter an email.';
    msgBox.style.color = 'red';
  } else if (pass === '') {
    message = 'Please enter a password.';
    msgBox.style.color = 'red';
  } else if (age === '') {
    message = 'Please enter your age.';
    msgBox.style.color = 'red';
  } else {
    message = 'Login successful!';
    msgBox.style.color = 'green';
  }
  msgBox.innerHTML = message;
}

document.getElementById("loginForm").onsubmit = validate;

document.getElementById("email").oninput = () => validate({ preventDefault: () => {} });
document.getElementById("password").oninput = () => validate({ preventDefault: () => {} });
document.getElementById("age").oninput = () => validate({ preventDefault: () => {} });
document.getElementById("message").onblur = () => validate({ preventDefault: () => {} });