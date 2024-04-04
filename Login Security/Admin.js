document.addEventListener('DOMContentLoaded', function() {
    // Retrieve user data from JSON (simulate server-side storage)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Display user data in the table
    const userList = document.getElementById('userList');
    users.forEach(function(user) {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${user.username}</td><td>${user.password}</td>`;
      userList.appendChild(row);
    });
  });
  