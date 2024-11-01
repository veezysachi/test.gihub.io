<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modern Contact Save Page</title>
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
    }
    .card {
      background-color: #1e1e1e;
      border-radius: 12px;
      width: 320px;
      padding: 25px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
      text-align: center;
    }
    .profile-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-bottom: 15px;
      border: 2px solid #4CAF50;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    input[type="text"], input[type="tel"], input[type="email"], input[type="url"] {
      width: 100%;
      padding: 12px;
      margin: 8px 0;
      background-color: #333;
      color: #e0e0e0;
      border: none;
      border-radius: 5px;
      font-size: 0.95em;
    }
    .button-save {
      width: 100%;
      padding: 12px;
      background-color: #4CAF50;
      color: #fff;
      border: none;
      border-radius: 5px;
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
      margin-top: 15px;
      transition: background-color 0.3s ease;
    }
    .button-save:hover {
      background-color: #45a049;
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

  <!-- Contact Form Fields -->
  <input type="text" id="firstName" placeholder="First Name" value="John">
  <input type="text" id="lastName" placeholder="Last Name" value="Doe">
  <input type="tel" id="mobile" placeholder="Mobile Number" value="+123456789">
  <input type="tel" id="whatsapp" placeholder="WhatsApp Number" value="+123456789">
  <input type="email" id="email" placeholder="Email Address" value="johndoe@example.com">
  <input type="url" id="website" placeholder="Website URL" value="https://example.com">

  <!-- Save Button -->
  <button class="button-save" onclick="saveContact()">
    <span class="icon-save">💾</span> Save Contact
  </button>
</div>

<script>
  function saveContact() {
    // Collect input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobile = document.getElementById("mobile").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;

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
    link.click();

    // Confirm save with an alert
    alert("Contact saved to your downloads as a .vcf file!");
  }
</script>

</body>
</html>
