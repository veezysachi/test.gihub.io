<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Save Page with 3D Background</title>
  <style>
    /* Body and Background Styles */
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #1e1e1e, #343434);
      color: #e0e0e0;
      margin: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      perspective: 1000px;
    }

    /* 3D Background Animation */
    .background-animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(58, 58, 58, 0.8), rgba(18, 18, 18, 0.9) 60%);
      animation: animateBg 10s infinite linear;
      z-index: -1;
      filter: blur(15px);
      opacity: 0.8;
      pointer-events: none;
    }
    @keyframes animateBg {
      0% { transform: translateX(-5%) translateY(-5%) scale(1.1); }
      50% { transform: translateX(5%) translateY(5%) scale(1.05); }
      100% { transform: translateX(-5%) translateY(-5%) scale(1.1); }
    }

    /* Veezy Logo Styling */
    .logo {
      width: 150px;
      margin-bottom: 20px;
      transition: transform 0.3s;
    }
    .logo:hover {
      transform: scale(1.1);
    }

    /* Contact Card Styling */
    .card {
      background-color: rgba(30, 30, 30, 0.95);
      border-radius: 15px;
      width: 340px;
      padding: 25px;
      box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.7);
      text-align: center;
      transform: rotateY(0);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      animation: cardLoad 0.8s ease forwards;
    }

    /* Initial Card Load Animation */
    @keyframes cardLoad {
      0% { opacity: 0; transform: translateY(50px) scale(0.9); }
      100% { opacity: 1; transform: translateY(0) scale(1); }
    }
    .card:hover {
      transform: scale(1.05) rotateY(3deg);
      box-shadow: 0px 20px 50px rgba(0, 255, 100, 0.3);
    }

    /* Profile Image Styling */
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 3px solid #4CAF50;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
      transition: transform 0.3s;
    }
    .profile-img:hover {
      transform: scale(1.05);
    }

    /* Contact Information Styling */
    .contact-info {
      margin: 12px 0;
      font-size: 1em;
      color: #ccc;
      transition: color 0.3s;
    }

    /* Social Media Links Styling */
    .social-links {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-top: 15px;
    }
    .social-links a {
      display: inline-block;
      width: 36px;
      height: 36px;
      transition: transform 0.3s ease;
    }
    .social-links a:hover {
      transform: scale(1.1);
    }

    /* Save Button Styling */
    .button-save {
      width: 100%;
      padding: 12px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
      margin-top: 15px;
      transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    }
    .button-save:hover {
      background-color: #45a049;
      transform: translateY(-3px);
      box-shadow: 0px 8px 20px rgba(0, 255, 100, 0.6);
    }
  </style>
</head>
<body>

<!-- 3D Background Animation Layer -->
<div class="background-animation"></div>

<!-- Veezy Logo -->
<img src="your-logo-url.png" alt="Veezy Logo" class="logo">

<div class="card">
  <!-- Profile Image -->
  <img src="profile.jpg" alt="Profile Image" class="profile-img">

  <!-- Static Contact Info -->
  <div class="contact-info"><strong>Name:</strong> John Doe</div>
  <div class="contact-info"><strong>Job Position:</strong> Software Engineer</div>
  <div class="contact-info"><strong>Birthday:</strong> January 1, 1990</div>
  <div class="contact-info"><strong>Mobile:</strong> +123456789</div>
  <div class="contact-info"><strong>WhatsApp:</strong> +123456789</div>
  <div class="contact-info"><strong>Email:</strong> johndoe@example.com</div>
  <div class="contact-info"><strong>Website:</strong> <a href="https://example.com" target="_blank" style="color:#4CAF50; text-decoration:none;">example.com</a></div>

  <!-- Social Media Links with Icons -->
  <div class="social-links">
    <a href="https://facebook.com/yourprofile" target="_blank" title="Facebook">
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo">
    </a>
    <a href="https://instagram.com/dilakshana_graphic" target="_blank" title="Instagram">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo">
    </a>
  </div>

  <!-- Save Contact Button -->
  <button class="button-save" onclick="saveContact()">
    Save Contact
  </button>
</div>

<!-- JavaScript for saving contact -->
<script>
  function saveContact() {
    const firstName = "John";
    const lastName = "Doe";
    const phoneNumber = "+123456789";
    const email = "johndoe@example.com";
    const birthday = "1990-01-01"; // Use YYYY-MM-DD format

    // Create the vCard data
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
TEL:${phoneNumber}
EMAIL:${email}
BDAY:${birthday}
END:VCARD`;

    // Create a Blob from the vCard data
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);

    // Create a temporary anchor element for downloading
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf"; // File name
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
</script>

</body>
</html>
