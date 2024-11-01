<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Contact Card</title>
  <style>
    /* Dark Mode Styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #121212;
      color: #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .card {
      background-color: #1e1e1e;
      border-radius: 10px;
      width: 300px;
      padding: 20px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
      text-align: center;
    }
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 10px auto;
      display: block;
      border: 2px solid #4CAF50;
    }
    .name {
      font-size: 1.5em;
      font-weight: bold;
      margin: 10px 0;
    }
    .contact-info {
      margin: 20px 0;
      font-size: 1em;
    }
    .contact-info p {
      margin: 5px 0;
    }
    .social-links {
      display: flex;
      justify-content: center;
      margin: 15px 0;
    }
    .social-links a {
      margin: 0 10px;
      color: #e0e0e0;
      text-decoration: none;
      font-size: 1.2em;
    }
    .social-links a:hover {
      color: #4CAF50;
    }
    .save-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      margin-top: 20px;
      transition: background-color 0.3s ease;
    }
    .save-button:hover {
      background-color: #45a049;
    }
  </style>
</head>
<body>

<div class="card">
  <!-- Profile Image -->
  <img src="profile.jpg" alt="Profile Image" class="profile-img">

  <!-- Name -->
  <div class="name">John Doe</div>

  <!-- Contact Details -->
  <div class="contact-info">
    <p>📱 Mobile: +123456789</p>
    <p>📞 WhatsApp: +123456789</p>
    <p>📧 Email: johndoe@example.com</p>
    <p>🌐 Website: <a href="https://www.example.com" target="_blank" style="color: #4CAF50;">example.com</a></p>
  </div>

  <!-- Social Media Links -->
  <div class="social-links">
    <a href="https://www.facebook.com/YourPage" target="_blank">Facebook</a>
    <a href="https://www.instagram.com/YourPage" target="_blank">Instagram</a>
  </div>

  <!-- Save Contact Button -->
  <a href="contact.vcf" download="contact.vcf" class="save-button">Save Contact</a>
</div>

</body>
</html>
