<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Contact Save Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <!-- Contact Card -->
  <div class="card">
    <div class="profile-section">
      <img src="profile.jpg" alt="Profile Image" class="profile-img">
      <h1>John Doe</h1>
      <p>Software Engineer</p>
    </div>

    <div class="contact-info">
      <div class="info-item">
        <span class="label">Birthday</span>
        <span class="value">January 1, 1990</span>
      </div>
      <div class="info-item">
        <span class="label">Mobile</span>
        <span class="value">+123456789</span>
      </div>
      <div class="info-item">
        <span class="label">WhatsApp</span>
        <span class="value">+123456789</span>
      </div>
      <div class="info-item">
        <span class="label">Email</span>
        <span class="value">johndoe@example.com</span>
      </div>
    </div>

    <!-- Social Media Links -->
    <div class="social-links">
      <a href="https://facebook.com/yourprofile" class="social-btn facebook">F</a>
      <a href="https://instagram.com/dilakshana_graphic" class="social-btn instagram">I</a>
    </div>

    <!-- Save Button -->
    <button class="button-save" onclick="saveContact()">Save Contact</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
