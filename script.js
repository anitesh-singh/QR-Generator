// This line gets the element with the ID "qr-content" and assigns it to the variable qrContentInput
let qrContentInput = document.getElementById("qr-content");

// This line gets the element with the ID "qr-generation-form" and assigns it to the variable qrGenerationForm/.
let qrGenerationForm =
    document.getElementById("qr-generation-form");

// This line declares a variable called qrCode and assigns it an initial value of undefined.
let qrCode;


// This is a function that takes a qrContent parameter and returns a new QRCode instance with some configuration options.
// This line creates a new QRCode instance with the element with ID "qr-code" as the target, and some configuration options such as the text, width, height, colorDark, colorLight, and correctLevel.	
function generateQrCode(qrContent) {
    return new QRCode("qr-code", {
        text: qrContent,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
    });
}


// This line adds an event listener to the submit event of the qrGenerationForm element, which is a callback function that handles the form submission.
// Event listener for form submit event
qrGenerationForm.addEventListener("submit", function (event) {

    //This line prevents the default form submission behavior, which would cause the page to reload.
    //Prevent form submission
    event.preventDefault();

    //This line gets the value of the qrContentInput element and assigns it to the variable qrContent.
    let qrContent = qrContentInput.value;

    //This is an if statement that checks if qrCode is null or undefined.
    if (qrCode == null) {


        // This line generates a new QR code with the generateQrCode function and assigns it to the qrCode variable.
        // Generate code initially
        qrCode = generateQrCode(qrContent);
    } else {

        // This line updates the existing QR code with the makeCode method, passing in the new qrContent value.
        // If code already generated then make
        // again using same object
        qrCode.makeCode(qrContent);
    }
});
