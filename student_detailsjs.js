

frappe.ui.form.on('Student Details', {
  // Triggered when the form is refreshed
  refresh: function(frm) {
      // Add a custom button to the form
      frm.add_custom_button(__('Store Email Value'), function(){
          // Get the email value from the form field
          var email = frm.doc.student_email_address;
          // Call a function to store the email value
          storeEmailValue(email);
      }, __("Custom Button")); // Set the button label
  }
});

// Function to store the email value
function storeEmailValue(email) {
  // Call the backend to update the Student Details document with the email value
  frappe.call({
      method: 'frappe.client.set_value',
      args: {
          'doctype': 'Student Details', // Specify the doctype
          'filters': {'name': frm.doc.name}, // Filter by document name
          'fieldname': 'student_email_address', // Field name to update
          'value': email // Email value to store
      },
      callback: function(response) {
          if (!response.exc) {
              // Display success message
              frappe.msgprint('Email value stored successfully in Student Details: ' + email);
          } else {
              // Display error message
              frappe.msgprint('Failed to store email value in Student Details.');
          }
      }
  });
}

