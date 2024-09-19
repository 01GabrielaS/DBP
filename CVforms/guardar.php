<?php
/** CONEXIÓN A LA BASE DE DATOS **/
$servername = "localhost";
$username = "mi_usuario";
$password = "mi_contraseña";
$dbname = "mi_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

/** NOMBRES DE VARIABLES DE DATOS **/
$nombre = $_POST['nombre'];
$fecha_nacimiento = $_POST['fecha_nacimiento'];
$ocupacion = $_POST['ocupacion'];
$contacto = $_POST['contacto'];
$nacionalidad = $_POST['nacionalidad'];
$nivel_ingles = $_POST['nivel_ingles'];
$lenguajes = $_POST['lenguajes'];
$aptitudes = $_POST['aptitudes'];
$habilidades = $_POST['habilidades'];
$perfil = $_POST['perfil'];

$sql = "INSERT INTO tu_tabla (nombre, fecha_nacimiento, ocupacion, contacto, nacionalidad, nivel_ingles, lenguajes, aptitudes, habilidades, perfil)
VALUES ('$nombre', '$fecha_nacimiento', '$ocupacion', '$contacto', '$nacionalidad', '$nivel_ingles', '" . implode(", ", $lenguajes) . "', '$aptitudes', '" . implode(", ", $habilidades) . "', '$perfil')";

if ($conn->query($sql) === TRUE) {
    echo "Datos guardados correctamente";
} else {
    echo "Error al guardar datos: " . $sql . "<br>" . $conn->error;
}

$conn->close();

/** GUARDAR DATOS EN ARCHIVO TXT **/
if (!file_exists("datos.txt")) {
    touch("datos.txt"); // crea el archivo si no existe
}
$FI = fopen("datos.txt", "a");
if ($FI) {
    fwrite($FI, "---Registro---\n");
    fwrite($FI, "Nombre: " . $_POST["nombre"] . "\n");
    fwrite($FI, "Fecha de Nacimiento: " . $_POST["fecha_nacimiento"] . "\n");
    fwrite($FI, "Ocupación: " . $_POST["ocupacion"] . "\n");
    fwrite($FI, "Contacto: " . $_POST["contacto"] . "\n");
    fwrite($FI, "Nacionalidad: " . $_POST["nacionalidad"] . "\n");
    fwrite($FI, "Nivel de inglés: " . $_POST["nivel_ingles"] . "\n");
    fwrite($FI, "Lenguajes de programación: " . implode(", ", $_POST["lenguajes"]) . "\n");
    fwrite($FI, "Aptitudes: " . $_POST["aptitudes"] . "\n");
    fwrite($FI, "Habilidades: " . implode(", ", $_POST["habilidades"]) . "\n");
    fwrite($FI, "Perfil: " . $_POST["perfil"] . "\n");
    fwrite($FI, "\n");
    fclose($FI);
    echo "<H3>Los datos fueron grabados correctamente.</H3>";
} else {
    echo "Error al abrir el archivo";
}
?>