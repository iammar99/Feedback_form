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


        // -------------- Radio Input --------------
        environment: getRadioValue("environment"),
        administrative: getRadioValue("administrative"),
        availability: getRadioValue("availability"),
        faculty: getRadioValue("faculty"),
        cleanliness: getRadioValue("cleanliness "),
        facilities: getRadioValue("facilities"),
        curriculum: getRadioValue("curriculum"),
        encourages: getRadioValue("encourages"),
        internships: getRadioValue("internships"),
        overall: getRadioValue("Overall")
    };

    for (const key in formData) {
        if (formData[key] === "") {
            const str = key.charAt(0).toUpperCase() + key.slice(1)
            return Swal.fire({
                title: 'Error!',
                text: `Please Enter ${str}`,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }

    console.log("Form Data:", formData);
}


function getRadioValue(name) {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? selected.id : "";
}