
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Page</title>
  <style>
    /* Dark Theme and Modern Styling */
    body {
      font-family: Arial, sans-serif;
      background-color: #121212;
      color: #e0e0e0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      perspective: 1000px;
    }

    /* Contact Card Styling with 3D Pop and Transition */
    .card {
      background-color: #1e1e1e;
      border-radius: 15px;
      width: 340px;
      padding: 25px;
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);
      text-align: center;
      transform: rotateY(0);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
    .card:hover {
      transform: rotateY(10deg);
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

    /* Save Button Styling with Hover Effects */
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
    .icon-save {
      margin-right: 8px;
    }
  </style>
</head>
<body>

<div class="card">
  <!-- Profile Image -->
  <img src="profile.jpg" alt="Profile Image" class="profile-img">

  <!-- Static Contact Info -->
  <div class="contact-info"><strong>Name:</strong> John Doe</div>
  <div class="contact-info"><strong>Mobile:</strong> +123456789</div>
  <div class="contact-info"><strong>WhatsApp:</strong> +123456789</div>
  <div class="contact-info"><strong>Email:</strong> johndoe@example.com</div>
  <div class="contact-info"><strong>Website:</strong> <a href="https://example.com" target="_blank" style="color:#4CAF50; text-decoration:none;">example.com</a></div>

  <!-- Save Contact Button -->
  <button class="button-save" onclick="saveContact()">
    <span class="icon-save">💾</span> Save Contact
  </button>
</div>

<script>
  function saveContact() {
    // Static contact details
    const firstName = "John";
    const lastName = "Doe";
    const mobile = "+123456789";
    const whatsapp = "+123456789";
    const email = "johndoe@example.com";
    const website = "https://example.com";

    // vCard format
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName};;;
FN:${firstName} ${lastName}
TEL;TYPE=CELL:${mobile}
TEL;TYPE=WHATSAPP:${whatsapp}
EMAIL:${email}
URL:${website}
END:VCARD
    `.trim();

    // Create a blob from the vCard data
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${firstName}_${lastName}_contact.vcf`;

    // Auto-click the download link
    link.click();

    // Confirm save with an alert
    alert("Click 'Open in Contacts' to save contact on Android/iPhone!");
  }
</script>

</body>
</html>
