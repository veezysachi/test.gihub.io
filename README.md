<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Save Page</title>
  <style>
    /* Body Styles */
    body {
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, #1e1e1e, #343434);
      color: #e0e0e0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      perspective: 1000px;
    }

    /* Veezy Logo Styles */
    .logo {
      width: 150px; /* Adjust the width as needed */
      margin-bottom: 20px; /* Spacing between logo and card */
      transition: transform 0.3s;
    }
    .logo:hover {
      transform: scale(1.05);
    }

    /* Contact Card Styling */
    .card {
      background-color: rgba(30, 30, 30, 0.9);
      border-radius: 15px;
      width: 340px;
      padding: 25px;
      box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.6);
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
      transform: scale(1.05) rotateY(5deg);
      box-shadow: 0px 25px 60px rgba(0, 255, 100, 0.3);
    }

    /* Profile Image Styling */
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 3px solid #4CAF50;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
      display: block;
      margin-left: auto;
      margin-right: auto;
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
      width: 36px; /* Adjusted size for social icons */
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

    /* Instagram Gallery Styles */
    .gallery {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      flex-wrap: wrap;
      gap: 15px;
    }
    .gallery-item {
      width: 150px; /* Increased size for larger photos */
      height: 150px; /* Increased size for larger photos */
      border-radius: 10px;
      overflow: hidden;
      transition: transform 0.3s ease;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    }
    .gallery-item:hover {
      transform: scale(1.1);
    }
    .gallery img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    /* Responsive Design */
    @media (max-width: 600px) {
      .card {
        width: 90%;
      }
      .gallery-item {
        width: 120px;
        height: 120px;
      }
    }
  </style>
</head>
<body>

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
    <span class="icon-save">💾</span> Save Contact
  </button>
</div>

<!-- Instagram Gallery -->
<div class="gallery">
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/1" target="_blank">
      <img src="https://via.placeholder.com/150" alt="Instagram Photo 1">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/2" target="_blank">
      <img src="https://via.placeholder.com/150" alt="Instagram Photo 2">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/3" target="_blank">
      <img src="https://via.placeholder.com/150" alt="Instagram Photo 3">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/4" target="_blank">
      <img src="https://via.placeholder.com/150" alt="Instagram Photo 4">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/5" target="_blank">
      <img src="https://via.placeholder.com/150" alt="Instagram Photo 5">
    </a>
  </div>
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
