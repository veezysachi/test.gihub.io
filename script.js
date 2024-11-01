function saveContact() {
  const firstName = "John";
  const lastName = "Doe";
  const phoneNumber = "+123456789";
  const email = "johndoe@example.com";
  const birthday = "1990-01-01"; 

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${firstName} ${lastName}
TEL:${phoneNumber}
EMAIL:${email}
BDAY:${birthday}
END:VCARD`;

  const blob = new Blob([vCardData], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "contact.vcf"; 
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
