// ----------------------- Year Handling -----------------------
let year = new Date().getFullYear();
let date = document.getElementById("year");
date.innerHTML = year;

// ----------------------- Form Validation -----------------------
function handleClick() {
    const formData = {
        name: document.getElementById("name").value,
        ag: document.getElementById("ag").value,
        degree: document.getElementById("degree").value,
        discipline: document.getElementById("discipline").value,

        // Radio Inputs
        environment: getRadioValue("environment"),
        administrative: getRadioValue("administrative"),
        availability: getRadioValue("availability"),
        faculty: getRadioValue("faculty"),
        cleanliness: getRadioValue("cleanliness"),
        facilities: getRadioValue("facilities"),
        curriculum: getRadioValue("curriculum"),
        encourages: getRadioValue("encourages"),
        internships: getRadioValue("internships"),
        overall: getRadioValue("overall")
    };

    // Validate the form data
    for (const key in formData) {
        if (formData[key] === "") {
            const str = key.charAt(0).toUpperCase() + key.slice(1);
            return Swal.fire({
                title: 'Error!',
                text: `Please Enter ${str}`,
                icon: 'error',
                confirmButtonText: 'Exit'
            });
        }
    }

    console.log("Form Data:", formData);

    // Show response preview
    // const resultSection = document.getElementById("result");
    // resultSection.innerHTML = `
    //     <h3>Form Responses:</h3>
    //     <table border="1">
    //         <tr><th>Field</th><th>Value</th></tr>
    //         <tr><td>Internships Support Rating</td><td>${formData.internships}</td></tr>
    //         <tr><td>Overall Satisfaction</td><td>${formData.overall}</td></tr>
    //     </table>
    // `;
}

function getRadioValue(name) {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.value : "";
}

// ----------------------- AG Validation -----------------------
function agCheck() {
    console.log("first call");
    let ag = document.getElementById("ag");
    let error = document.getElementById("error");
    const regex = /^\d{4}-ag-\d{4,5}$/;
    if (!regex.test(ag.value) && ag.value !== "") {
        console.log("first");
        error.innerHTML = "Invalid AG format. Please use YYYY-ag-XXXX format.";
        error.style.color = "red";
        ag.style.borderColor = "red";
        ag.value = "";
    } else {
        console.log("second");
        error.innerHTML = "";
        ag.style.borderColor = "";
    }
}
