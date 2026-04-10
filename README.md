# COS30043---Lab06

## Internal

```
School of Science, Computing and Emerging Technologies
```
## COS30043 Interface Design and Development

## Lab 0 6. Forms

# Overview

```
In this lab, we will practice using forms and form data validation.
```
# Requirements

```
Create a form that validates user input and displays appropriate error messages. The form
must not be submitted if there are any validation errors. Group related input fields using
<fieldset> where appropriate.
```
```
Required Fields:
```
1. First Name – Letters only, required
2. Last Name – Letters only, required
3. Username – Minimum 3 characters, required
4. Password – Minimum 8 characters, must include at least one special character such
    as ($, %, ^, &, *), required
5. Confirm Password – Must match the Password
6. Email – Must be in a valid email format, required
7. Street Address – Optional, maximum 40 characters
8. Suburb – Optional, maximum 20 characters
9. Postcode – Exactly 4 digits, required (some postcodes may start with 0)
10. Mobile Number – Exactly 10 digits and must start with 04
11. Date of Birth – Required, must be a valid date, and the applicant must be at least 16
    years old
12. Preferred Job Category – Required, must be selected from a dropdown list (e.g., AI,
    Data Science, Web Development)
13. Submit Button
14. Terms and Conditions Button – Toggles the visibility of a brief terms and conditions
    text (any placeholder text is acceptable)

```
Use the following attributes in the <form> tag to submit your form data for testing:
<form method="post" action="http://mercury.swin.edu.au/it000000/formtest.php">
Upon submission, all form data should be displayed with its corresponding values on the
server response page.
```

## Internal

# Submission

```
Submit your source code to Canvas and demonstrate your work to the tutor.
```

