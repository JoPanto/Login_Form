document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      document.getElementById('message').textContent = "Password must contain at least 8 characters, 1 special character, and 1 capital letter.";
      return;
    }
    
    // Create user object
    const user = {
      username: username,
      password: password
    };
    
    // Store user data in JSON file (simulate server-side storage)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    
    document.getElementById('message').textContent = "Registration successful!";
    document.getElementById('registrationForm').reset();
  });
  
  // Check password strength and provide feedback
  document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const passwordStrengthText = document.getElementById('passwordStrength');
    
    if (password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[@$!%*?&]/.test(password)) {
      passwordStrengthText.textContent = "Password strength: Strong";
      passwordStrengthText.style.color = "green";
    } else {
      passwordStrengthText.textContent = "Password strength: Weak";
      passwordStrengthText.style.color = "red";
    }
  });
  