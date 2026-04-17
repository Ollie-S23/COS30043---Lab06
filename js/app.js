const app = Vue.createApp({
    data() {
        return {
            fName: '',
            lName: '',
            dob: '',
            uName: '',
            pwd: '',
            pwdCon: '',
            email: '',
            strAdd: '',
            suburb: '',
            postcode: '',
            phnNum: '',
            jobCat: 'default',
            showTerms: false,
            errors: []
        }
    },
    methods: {
        checkForm: function(e) {
            this.errors = [];
            var result = true;

            // First Name – letters only, required
            if (!this.fName) {
                this.errors.push("First name is required");
                result = false;
            } else if (!/^[A-Za-z]+$/.test(this.fName)) {
                this.errors.push("First name must contain letters only");
                result = false;
            }

            // Last Name – letters only, required
            if (!this.lName) {
                this.errors.push("Last name is required");
                result = false;
            } else if (!/^[A-Za-z]+$/.test(this.lName)) {
                this.errors.push("Last name must contain letters only");
                result = false;
            }

            // Username – minimum 3 characters, required
            if (!this.uName) {
                this.errors.push("Username is required");
                result = false;
            } else if (this.uName.length < 3) {
                this.errors.push("Username must be at least 3 characters");
                result = false;
            }

            // Password – minimum 8 characters, at least one special character, required
            if (!this.pwd) {
                this.errors.push("Password is required");
                result = false;
            } else if (this.pwd.length < 8) {
                this.errors.push("Password must be at least 8 characters");
                result = false;
            } else if (!/[$%^&*]/.test(this.pwd)) {
                this.errors.push("Password must include at least one special character ($, %, ^, &, *)");
                result = false;
            }

            // Confirm Password – must match password
            if (!this.pwdCon) {
                this.errors.push("Please confirm your password");
                result = false;
            } else if (this.pwd !== this.pwdCon) {
                this.errors.push("Passwords do not match");
                result = false;
            }

            // Email – valid format, required
            if (!this.email) {
                this.errors.push("Email is required");
                result = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
                this.errors.push("Email must be a valid email address");
                result = false;
            }

            // Street Address – optional, max 40 characters
            if (this.strAdd && this.strAdd.length > 40) {
                this.errors.push("Street address must not exceed 40 characters");
                result = false;
            }

            // Suburb – optional, max 20 characters
            if (this.suburb && this.suburb.length > 20) {
                this.errors.push("Suburb must not exceed 20 characters");
                result = false;
            }

            // Postcode – exactly 4 digits, required
            if (!this.postcode) {
                this.errors.push("Postcode is required");
                result = false;
            } else if (!/^\d{4}$/.test(this.postcode)) {
                this.errors.push("Postcode must be exactly 4 digits");
                result = false;
            }

            // Mobile Number – exactly 10 digits, must start with 04
            if (!this.phnNum) {
                this.errors.push("Mobile number is required");
                result = false;
            } else if (!/^04\d{8}$/.test(this.phnNum)) {
                this.errors.push("Mobile number must be exactly 10 digits and start with 04");
                result = false;
            }

            // Date of Birth – required, valid date, applicant must be at least 16 years old
            if (!this.dob) {
                this.errors.push("Date of birth is required");
                result = false;
            } else {
                const dobDate = new Date(this.dob);
                const today = new Date();
                const minAge = new Date(today.getFullYear() - 16, today.getMonth(), today.getDate());
                if (dobDate > minAge) {
                    this.errors.push("You must be at least 16 years old to apply");
                    result = false;
                }
            }

            // Preferred Job Category – required
            if (this.jobCat === 'default') {
                this.errors.push("Please select a job category");
                result = false;
            }
            

            if (!result)
                e.preventDefault();
        },
        toggleTerms: function() {
            this.showTerms = !this.showTerms;
        }
    }
});


app.mount('#app');
