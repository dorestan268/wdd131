// Product Array
const products = [
    {
      id: "fc-2201",
      name: "Message",
      avg_rating: 4.5
    },
    {
      id: "fc-2050",
      name: "Review",
      avg_rating: 4.7
    },
    {
      id: "fs-1987",
      name: "Product Feedback",
      avg_rating: 3.5
    },
    {
      id: "ac-2000",
      name: "Technical Support",
      avg_rating: 3.9
    },
    {
      id: "jj-1969",
      name: "Service Feedback",
      avg_rating: 5.0
    }
  ];
  



document.getElementById('product-name').addEventListener('change', function() {
    const selectedPurpose = this.value;
    
    const nameField = document.getElementById('name-field');
    const emailField = document.getElementById('email-field');
    const phoneField = document.getElementById('phone-field');
    const messageField = document.getElementById('message-field');
    
    switch (selectedPurpose) {
        case 'Message':
            nameField.placeholder = 'Your Name';
            emailField.placeholder = 'Your Email';
            phoneField.placeholder = 'Phone';
            messageField.placeholder = 'Your Message';
            break;
        case 'Review':
            messageField.placeholder = 'Write your Review';
            break;
        case 'Product Feedback':
            messageField.placeholder = 'Your Feedback';
            break;
        case 'Technical Support':
            messageField.placeholder = 'write your Technical Support';
            break;
        case 'Service Feedback':
            messageField.placeholder = 'Your service feedback';
            break;
        default:
            messageField.placeholder = 'Message';
            break;
    }
});
