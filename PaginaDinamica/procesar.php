<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formsDin";

// Conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Procesar el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $experiencia = $_POST["experiencia"];
    $formacion = $_POST["formacion"];
    $idiomas = $_POST["idiomas"];
    $aptitudes = $_POST["aptitudes"];

    // Verificar si se seleccionaron idiomas
    if (is_array($idiomas)) {
        $idiomas_str = implode(", ", $idiomas);
    } else {
        $idiomas_str = $idiomas;
    }

    // Insertar los datos en la base de datos
    $sql = "INSERT INTO respuestas (experiencia, formacion, idiomas, aptitudes) VALUES ('$experiencia', '$formacion', '$idiomas_str', '$aptitudes')";

    if ($conn->query($sql) === TRUE) {
        echo "Datos guardados correctamente";
    } else {
        echo "Error al guardar los datos: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>