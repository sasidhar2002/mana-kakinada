function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username === 'sasi' && password === '1234') {
      alert('Login successful!');
      window.location.href = ".html"; // ✅ Redirects to home.html
      return false; // prevent form submission since we're using JS redirect
    } else {
      alert('Invalid username or password.');
      return false;
    }
  }
  
