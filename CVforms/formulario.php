<form action="guardar.php" method="post">
    <label for="nombre">Nombre y Apellidos:</label>
    <input type="text" id="nombre" name="nombre"><br><br>
    <label for="fecha_nacimiento">Fecha de Nacimiento:</label>
    <input type="date" id="fecha_nacimiento" name="fecha_nacimiento"><br><br>
    <label for="ocupacion">Ocupación:</label>
    <input type="text" id="ocupacion" name="ocupacion"><br><br>
    <label for="contacto">Contacto (teléfono, email):</label>
    <input type="text" id="contacto" name="contacto"><br><br>
    <label for="nacionalidad">Nacionalidad:</label>
    <select id="nacionalidad" name="nacionalidad">
        <option value="">Seleccione una opción</option>
        <option value="Peru">Peru</option>
        <option value="Argentina">Argentina</option>
        <option value="Chile">Chile</option>
        <option value="Colombia">Colombia</option>
    </select><br><br>
    <label for="nivel_ingles">Nivel de inglés:</label>
    <input type="radio" id="basico" name="nivel_ingles" value="básico"> Básico
    <input type="radio" id="intermedio" name="nivel_ingles" value="intermedio"> Intermedio
    <input type="radio" id="avanzado" name="nivel_ingles" value="avanzado"> Avanzado
    <input type="radio" id="fluido" name="nivel_ingles" value="fluido"> Fluido<br><br>
    <label for="lenguajes">Lenguajes de programación:</label>
    <select id="lenguajes" name="lenguajes[]" multiple>
        <option value="Java">Java</option>
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="C++">C++</option>
    </select><br><br>
    <label for="aptitudes">Aptitudes:</label>
    <input list="aptitudes" name="aptitudes">
    <datalist id="aptitudes">
        <option value="Análisis de datos">
        <option value="Desarrollo web">
        <option value="Diseño gráfico">
    </datalist><br><br>
    <label for="habilidades">Habilidades:</label>
    <input type="checkbox" id="Resolucion de problemas" name="habilidades[]" value="Resolucion de problemas"> Resolucion de problemas
    <input type="checkbox" id="Conocimiento en OS" name="habilidades[]" value="Conocimiento en OS"> Conocimiento en OS
    <input type="checkbox" id="Comunicacion efectiva" name="habilidades[]" value="Comunicacion efectiva"> Comunicacion efectiva
    <br><br>
    <label for="perfil">Perfil:</label>
    <textarea id="perfil" name="perfil"></textarea><br><br>
    <input type="submit" value="Enviar">
</form>