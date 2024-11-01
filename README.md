<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Save Page</title>
  <style>
    /* Body Styles */
    body {
      font-family: Arial, sans-serif;
      background: radial-gradient(circle, #000 0%, #333 100%);
      color: #e0e0e0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      perspective: 1000px;
      animation: bodyFade 1s ease-in-out;
    }

    /* 3D Background Animation */
    @keyframes backgroundAnimation {
      0% { background-color: rgba(0, 0, 0, 0.8); }
      50% { background-color: rgba(51, 51, 51, 0.8); }
      100% { background-color: rgba(0, 0, 0, 0.8); }
    }
    body {
      animation: backgroundAnimation 10s infinite alternate;
    }

    /* Contact Card Styling */
    .card {
      background-color: rgba(30, 30, 30, 0.9);
      border-radius: 15px;
      width: 340px;
      padding: 25px;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.7);
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
      transform: rotateY(8deg) scale(1.03);
      box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.8);
    }

    /* Profile Image Styling */
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 2px solid #4CAF50;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
      display: block;
      margin-left: auto;
      margin-right: auto;
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
      width: 32px;
      height: 32px;
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
    }
    .button-save:hover {
      background-color: #45a049;
      transform: translateY(-3px);
      box-shadow: 0px 8px 20px rgba(0, 255, 100, 0.6);
    }

    /* Glowing Effect on Save Button */
    @keyframes glow {
      0% { box-shadow: 0 0 5px #4CAF50, 0 0 15px #4CAF50; }
      50% { box-shadow: 0 0 15px #45a049, 0 0 20px #45a049; }
      100% { box-shadow: 0 0 5px #4CAF50, 0 0 15px #4CAF50; }
    }
    .button-save:hover {
      animation: glow 1s infinite alternate;
    }

    /* Instagram Gallery Styles */
    .gallery {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      flex-wrap: wrap;
      gap: 10px;
    }
    .gallery-item {
      width: 60px;
      height: 60px;
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
  </style>
</head>
<body>

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
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" style="width: 100%; height: 100%;">
    </a>
    <a href="https://instagram.com/dilakshana_graphic" target="_blank" title="Instagram">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" style="width: 100%; height: 100%;">
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
      <img src="https://via.placeholder.com/60" alt="Instagram Photo 1">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/2" target="_blank">
      <img src="https://via.placeholder.com/60" alt="Instagram Photo 2">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/3" target="_blank">
      <img src="https://via.placeholder.com/60" alt="Instagram Photo 3">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/4" target="_blank">
      <img src="https://via.placeholder.com/60" alt="Instagram Photo 4">
    </a>
  </div>
  <div class="gallery-item">
    <a href="https://www.instagram.com/p/5" target="_blank">
      <img src="https://via.placeholder.com/60" alt="Instagram Photo 5">
    </a>
  </div>
</div>

<script>
  function saveContact() {
    // Static contact details
    const firstName = "John";
    const lastName = "Doe";
    const phoneNumber = "+123456789";
    const email = "johndoe@example.com";
    const birthday = "January 1, 1990";

    // Construct the vCard data
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
