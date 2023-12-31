function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    var submitButton = document.getElementById("submitButton");
    var loadingIcon = document.getElementById("loadingIcon");
    submitButton.disabled = true; // Disable the button when the form is being submitted
    loadingIcon.style.display = "inline-block"; // Show the loading icon
  
    var First_name = document.getElementById("First_name").value;
    var Last_name = document.getElementById("Last_name").value;
    var email = document.getElementById("Email").value;
    var sub = document.getElementById("Subject").value;
    var mess = document.getElementById("Message").value;
  
    // URL of the image to be included in the email
    var imageUrl = "https://i.ibb.co/3r47TNL/Blue-and-Green-Blobs-Modern-Tech-Corporate-X-Frame-Banner.jpg";
  
    // Create an HTML template for the email body
    var body =`
    <h2 style="background-color:#22D334; text-align:center; padding: 20px; border-radius: 10px;width: auto;font-family: 'Arial',sans-serif;color: #ffff;">Message from CeDReCS WebSite Form</h2>
      <p><strong>Name:</strong> ${First_name} ${Last_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${sub}</p>
      <p><strong>Message:</strong></p>
      <pre style="font-family: 'Arial', sans-serif; font-size: 14px; white-space: pre-wrap; background-color: #f7f7f7; padding: 10px;">
        <p>${mess}</p>
      </pre>
      <p style="text-align: center;">
        <img src="${imageUrl}" alt="Image" style="width: 100%; height: auto; max-width: 700px;">
      </p>
    `;
  
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "kevin.kipkurui@interns.dkut.ac.ke",
      Password: "929ECBE9F7A98443C45B57C642AAF8DCF0CA",
      To: 'cedrecs@dkut.ac.ke, george.musumba@dkut.ac.ke, kevin.kipkurui@interns.dkut.ac.ke', // Update the "To" field with the email addresses separated by a comma
      From: "kevin.kipkurui@interns.dkut.ac.ke",
      Subject: sub,
      Body: body,
      isHTML: true // Set this to true to send the email as HTML
    }).then(
      message => {
        submitButton.disabled = false; // Re-enable the button after the email has been sent
        loadingIcon.style.display = "none"; // Hide the loading icon
  
        if (message === 'OK') {
          swal("Success", "Your Message was Successfully Received,  Our team will contact you", "success").then(() => {
            // Reset the form after successful submission
            document.getElementById("contactForm").reset();
          });
        } else {
          swal("Error", "Your Message was not Received", "error");
        }
      }
    );
  }
  