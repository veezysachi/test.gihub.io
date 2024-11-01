<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Veezy Contact Card</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* General reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        /* Body styling */
        body {
            background-color: #121212;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }

        /* Card styling */
        .card {
            width: 350px;
            background-color: #222;
            background-image: url('path-to-your-background-image.jpg'); /* Update with actual path */
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
            text-align: center;
            transition: transform 0.3s ease;
        }

        /* Veezy logo styling */
        .veezy-logo {
            text-align: center;
            margin-bottom: 20px;
        }

        .logo-img {
            width: 150px; /* Adjust logo size */
            height: auto;
            transition: transform 0.3s ease;
        }

        .logo-img:hover {
            transform: scale(1.1);
        }

        .visit-text {
            color: #4CAF50;
            font-size: 14px;
            margin-top: 5px;
            text-decoration: underline;
            cursor: pointer;
        }

        .visit-text:hover {
            color: #76d275;
        }

        /* Profile image styling */
        .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 20px;
            margin-bottom: 10px;
            border: 3px solid #4CAF50;
            object-fit: cover;
        }

        /* Contact information styling */
        .contact-info {
            font-size: 18px;
            margin: 10px 0;
        }

        .contact-info a {
            color: #4CAF50;
            text-decoration: none;
        }

        /* Button styling */
        .save-btn, .edit-btn {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 5px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .save-btn {
            background-color: #4CAF50;
            color: #fff;
        }

        .save-btn:hover {
            background-color: #76d275;
        }

        .edit-btn {
            background-color: #555;
            color: #fff;
        }

        .edit-btn:hover {
            background-color: #777;
        }
    </style>
</head>
<body>
    <div class="card">
        <!-- Veezy logo and link -->
        <div class="veezy-logo">
            <a href="https://www.veezy.com" target="_blank">
                <img src="path-to-your-logo.png" alt="Veezy Logo" class="logo-img">
            </a>
            <p class="visit-text">Click and Go to Website</p>
        </div>

        <!-- Profile image -->
        <img src="path-to-your-profile-photo.jpg" alt="Profile Photo" class="profile-img">

        <!-- Contact details -->
        <div class="contact-info">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Job Position:</strong> UI/UX Designer</p>
            <p><strong>Birthday:</strong> January 1, 1990</p>
            <p><strong>Email:</strong> <a href="mailto:john.doe@example.com">john.doe@example.com</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/1234567890">+1 (234) 567-890</a></p>
            <p><strong>Mobile:</strong> +1 (234) 567-890</p>
        </div>

        <!-- Social media links -->
        <div class="social-links">
            <a href="https://www.facebook.com/yourprofile" target="_blank">
                <img src="path-to-facebook-icon.png" alt="Facebook" width="30" style="margin: 5px;">
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank">
                <img src="path-to-instagram-icon.png" alt="Instagram" width="30" style="margin: 5px;">
            </a>
        </div>

        <!-- Buttons -->
        <button class="save-btn">Save Contact</button>
        <button class="edit-btn">Edit Details</button>
    </div>
</body>
</html>
