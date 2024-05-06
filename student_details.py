# Copyright (c) 2024, ankita  and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class StudentDetails(Document):
	def before_save(self):
		self.full_name =  f'{self.first_name} {self.middle_name} {self.last_name}'




import frappe

def create_student_email_role():
    # Check if the role already exists
    if not frappe.db.exists("Role", "Student Email Manager"):
        # Create a new Role document
        role = frappe.get_doc({
            "doctype": "Role",
            "role_name": "Student Email Manager",
            "desk_access": [{'module': 'Student'}],  # Set appropriate desk access permissions
            # Define additional permissions as needed
        })
        # Save the role document
        role.insert(ignore_permissions=True)

# Call the function to create the role
create_student_email_role()
