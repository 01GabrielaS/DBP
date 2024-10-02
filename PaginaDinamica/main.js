document.addEventListener('DOMContentLoaded', function(){
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function(event){
        var formulario = document.getElementById('formulario');
        var campos = formulario.querySelectorAll('input, textarea, select'); // Incluimos select también
        var errores = 0;

        campos.forEach(function(campo){
            // Verificación de los checkboxes
            if(campo.type === 'checkbox'){
                var checkboxes = formulario.querySelectorAll('input[type="checkbox"]');
                var minSeleccionado = Array.from(checkboxes).some(function(checkbox) {
                    return checkbox.checked;
                });

                if (!minSeleccionado){
                    errores++;
                    campo.classList.add('error'); // Add error class to the current checkbox element
                } else {
                    campo.classList.remove('error'); // Remove error class if at least one checkbox is checked
                }
            }

            // Verificación de los campos vacíos
            if(campo.value === ''){
                campo.classList.add('error');
                errores++;
            } else {
                campo.classList.remove('error'); // Elimina la clase de error si está lleno
            }
        });

        // Verificar el select de aptitudes
        var aptitudesCampo = formulario.querySelector('select[name="aptitudes"]');
        if(aptitudesCampo.value === '' || aptitudesCampo.value === 'Programación' || aptitudesCampo.value === null){ // Check if value is not equal to default option value or null
            aptitudesCampo.classList.add('error');
            errores++;
        } else {
            aptitudesCampo.classList.remove('error');
        }

        if(errores > 0){
            alert('Por favor llene todos los campos');
            event.preventDefault(); // Evita que se envíe el formulario si hay errores
        }
    });
});