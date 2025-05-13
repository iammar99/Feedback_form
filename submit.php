<?php
// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Collect and sanitize all inputs
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $ag = isset($_POST['ag']) ? trim($_POST['ag']) : '';
    $degree = isset($_POST['degree']) ? trim($_POST['degree']) : '';
    $discipline = isset($_POST['discipline']) ? trim($_POST['discipline']) : '';

    $environment = isset($_POST['environment']) ? trim($_POST['environment']) : '';
    $administrative = isset($_POST['administrative']) ? trim($_POST['administrative']) : '';
    $availability = isset($_POST['availability']) ? trim($_POST['availability']) : '';
    $faculty = isset($_POST['faculty']) ? trim($_POST['faculty']) : '';
    $cleanliness = isset($_POST['cleanliness']) ? trim($_POST['cleanliness']) : '';
    $facilities = isset($_POST['facilities']) ? trim($_POST['facilities']) : '';
    $curriculum = isset($_POST['curriculum']) ? trim($_POST['curriculum']) : '';
    $encourages = isset($_POST['encourages']) ? trim($_POST['encourages']) : '';
    $internships = isset($_POST['internships']) ? trim($_POST['internships']) : '';
    $overall = isset($_POST['overall']) ? trim($_POST['overall']) : '';

    // Check for any missing required fields
$missingFields = [];

if (empty($name)) $missingFields[] = 'name';
if (empty($ag)) $missingFields[] = 'ag';
if (empty($degree)) $missingFields[] = 'degree';
if (empty($discipline)) $missingFields[] = 'discipline';

if (empty($environment)) $missingFields[] = 'environment';
if (empty($administrative)) $missingFields[] = 'administrative';
if (empty($availability)) $missingFields[] = 'availability';
if (empty($faculty)) $missingFields[] = 'faculty';
if (empty($cleanliness)) $missingFields[] = 'cleanliness';
if (empty($facilities)) $missingFields[] = 'facilities';
if (empty($curriculum)) $missingFields[] = 'curriculum';
if (empty($encourages)) $missingFields[] = 'encourages';
if (empty($internships)) $missingFields[] = 'internships';
if (empty($overall)) $missingFields[] = 'overall';

if (!empty($missingFields)) {
    echo "Missing field(s): " . implode(', ', $missingFields);
    exit;
}


    // Connect to database (update with your DB credentials)
    $host = "localhost";
    $user = "root";
    $pass = "";
    $dbname = "form_db"; 


    $conn = new mysqli($host, $user, $pass, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert data into a table (make sure this table exists)
    $stmt = $conn->prepare("INSERT INTO feedback (
        name, ag, degree, discipline,
        environment, administrative, availability, faculty,
        cleanliness, facilities, curriculum, encourages,
        internships, overall
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->bind_param("ssssssssssssss",
        $name, $ag, $degree, $discipline,
        $environment, $administrative, $availability, $faculty,
        $cleanliness, $facilities, $curriculum, $encourages,
        $internships, $overall
    );

    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request method.";
}
?>
