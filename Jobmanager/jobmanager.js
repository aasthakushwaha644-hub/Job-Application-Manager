// Get form
let form = document.getElementById("applicationForm");


// ===============================
// PROFILE PHOTO
// ===============================

let photoButton = document.getElementById("photoButton");
let profilePhoto = document.getElementById("profilePhoto");
let photoName = document.getElementById("photoName");

photoButton.onclick = function () {
    profilePhoto.click();
};

profilePhoto.onchange = function () {

    if (profilePhoto.files.length > 0) {
        photoName.innerText = profilePhoto.files[0].name;
    } else {
        photoName.innerText = "No photo selected";
    }

};


// ===============================
// RESUME
// ===============================

let resumeButton = document.getElementById("resumeButton");
let resume = document.getElementById("resume");
let resumeName = document.getElementById("resumeName");

resumeButton.onclick = function () {
    resume.click();
};

resume.onchange = function () {

    if (resume.files.length > 0) {
        resumeName.innerText = resume.files[0].name;
    } else {
        resumeName.innerText = "No resume selected";
    }

};


// ===============================
// FORM SUBMIT
// ===============================

form.onsubmit = function (event) {

    // Stop page refresh
    event.preventDefault();


    // Get values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let dob = document.getElementById("dob").value;
    let interviewTime = document.getElementById("interviewTime").value;
    let role = document.getElementById("role").value;
    let experience = document.getElementById("experience").value;
    let coverLetter = document.getElementById("coverLetter").value;

    let terms = document.getElementById("terms");


    // ===============================
    // GET GENDER
    // ===============================

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );


    // ===============================
    // GET SKILLS
    // ===============================

    let skillInputs = document.querySelectorAll(
        'input[name="skills"]:checked'
    );

    let skills = [];

    for (let i = 0; i < skillInputs.length; i++) {
        skills.push(skillInputs[i].value);
    }


    // ===============================
    // VALIDATION
    // ===============================

    let valid = true;


    // Name
    if (name == "") {
        document.getElementById("nameError").innerText =
            "Please enter your name";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }


    // Email
    if (email == "") {
        document.getElementById("emailError").innerText =
            "Please enter your email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }


    // Phone
    if (phone == "") {
        document.getElementById("phoneError").innerText =
            "Please enter your phone number";
        valid = false;
    } else if (phone.length != 10) {
        document.getElementById("phoneError").innerText =
            "Phone number must be 10 digits";
        valid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }


    // Password
    if (password == "") {
        document.getElementById("passwordError").innerText =
            "Please enter a password";
        valid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }


    // DOB
    if (dob == "") {
        document.getElementById("dobError").innerText =
            "Please select your date of birth";
        valid = false;
    } else {
        document.getElementById("dobError").innerText = "";
    }


    // Interview time
    if (interviewTime == "") {
        document.getElementById("timeError").innerText =
            "Please select interview time";
        valid = false;
    } else {
        document.getElementById("timeError").innerText = "";
    }


    // Gender
    if (gender == null) {
        document.getElementById("genderError").innerText =
            "Please select gender";
        valid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }


    // Role
    if (role == "") {
        document.getElementById("roleError").innerText =
            "Please select a job role";
        valid = false;
    } else {
        document.getElementById("roleError").innerText = "";
    }


    // Experience
    if (experience == "") {
        document.getElementById("experienceError").innerText =
            "Please enter experience";
        valid = false;
    } else {
        document.getElementById("experienceError").innerText = "";
    }


    // Skills
    if (skills.length == 0) {
        document.getElementById("skillsError").innerText =
            "Please select at least one skill";
        valid = false;
    } else {
        document.getElementById("skillsError").innerText = "";
    }


    // Cover letter
    if (coverLetter == "") {
        document.getElementById("coverLetterError").innerText =
            "Please write a cover letter";
        valid = false;
    } else {
        document.getElementById("coverLetterError").innerText = "";
    }


    // Profile photo
    if (profilePhoto.files.length == 0) {
        document.getElementById("photoError").innerText =
            "Please select a profile photo";
        valid = false;
    } else {
        document.getElementById("photoError").innerText = "";
    }


    // Resume
    if (resume.files.length == 0) {
        document.getElementById("resumeError").innerText =
            "Please select your resume";
        valid = false;
    } else {
        document.getElementById("resumeError").innerText = "";
    }


    // Terms
    if (!terms.checked) {
        document.getElementById("termsError").innerText =
            "Please accept the terms";
        valid = false;
    } else {
        document.getElementById("termsError").innerText = "";
    }


    // ===============================
    // STOP IF FORM IS INVALID
    // ===============================

    if (!valid) {
        return;
    }


    // ===============================
    // CREATE APPLICATION CARD
    // ===============================

    let application = document.createElement("div");

    application.className = "application-card";


    application.innerHTML = `

        <h3>${name}</h3>

        <p><b>Email:</b> ${email}</p>

        <p><b>Phone:</b> ${phone}</p>

        <p><b>Job Role:</b> ${role}</p>

        <p><b>Experience:</b> ${experience} years</p>

        <p><b>Gender:</b> ${gender.value}</p>

        <p><b>Interview Time:</b> ${interviewTime}</p>

        <p><b>Skills:</b> ${skills.join(", ")}</p>

        <p><b>Cover Letter:</b> ${coverLetter}</p>

        <p><b>Resume:</b> ${resume.files[0].name}</p>

        <button onclick="deleteApplication(this)">
            Delete
        </button>

    `;


    // Add card
    document
        .getElementById("applicationContainer")
        .appendChild(application);


    // ===============================
    // RESET FORM
    // ===============================

    form.reset();

    photoName.innerText = "No photo selected";
    resumeName.innerText = "No resume selected";


    alert("Application submitted successfully!");

};


// ===============================
// DELETE APPLICATION
// ===============================

function deleteApplication(button) {

    button.parentElement.remove();

}