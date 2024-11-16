const apiUrl = "http://localhost:5000/auth"; // Replace with backend URL if deployed

// Sign Up Form Handler
document.querySelector('#signup-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const response = await fetch(`${apiUrl}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      window.location.href = 'signin.html';
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred. Please try again.');
  }
});

// Sign In Form Handler
document.querySelector('#signin-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const password = e.target.password.value;

  try {
    const response = await fetch(`${apiUrl}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
      alert('Login successful');
      localStorage.setItem('token', data.token);
      window.location.href = 'tasks.html'; // Replace with dashboard page
    } else {
      alert(data.error);
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred. Please try again.');
  }
});