document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Retrieve user data from JSON (simulate server-side storage)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if user exists
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      document.getElementById('message').textContent = "Login successful!";
      // Redirect to a different page or perform other actions upon successful login
    } else {
      document.getElementById('message').textContent = "Invalid username or password.";
    }
  });
  