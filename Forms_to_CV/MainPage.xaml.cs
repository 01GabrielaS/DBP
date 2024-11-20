using System;
using System.Collections.Generic;
using Xamarin.Forms;

namespace Forms_to_CV
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent(); // Esto conecta el archivo XAML con el código C#
        }

        private void OnAddIdiomaClicked(object sender, EventArgs e)
        {
            // Crear un nuevo campo Entry para idioma
            var newIdiomaEntry = new Entry
            {
                Placeholder = "Ingrese un idioma",
                HorizontalOptions = LayoutOptions.FillAndExpand
            };

            // Agregarlo al StackLayout
            IdiomasLayout.Children.Add(newIdiomaEntry);
        }

        // Evento para agregar un lenguaje dinámico
        private void OnAddLenguajeClicked(object sender, EventArgs e)
        {
            // Crear un StackLayout para cada lenguaje con un checkbox
            var lenguajeLayout = new StackLayout
            {
                Orientation = StackOrientation.Vertical,
                Spacing = 10
            };

            var lenguajesOpciones = new List<string>
            {
                "C#","Java","Python", "JavaScript", "C++"
            };

            foreach (var lenguaje in lenguajesOpciones)
            {
                var checkboxLayout = new StackLayout
                {
                    Orientation = StackOrientation.Horizontal,
                    Spacing = 10,
                };

                var lenguajeCheckbox = new CheckBox
                {
                    VerticalOptions = LayoutOptions.Center

                };
                var lenguajeLabel = new Label
                {
                    Text = lenguaje,
                    VerticalOptions = LayoutOptions.Center
                };

                checkboxLayout.Children.Add(lenguajeCheckbox);
                checkboxLayout.Children.Add(lenguajeLabel);

                lenguajeLayout.Children.Add(checkboxLayout);
            }

            LenguajesLayout.Children.Add(lenguajeLayout);
        }

        // Evento para generar el CV
        private async void OnGenerateCVClicked(object sender, EventArgs e)
        {
            // Obtener los datos del formulario
            string nombre = NombreEntry.Text;
            string apellido = ApellidoEntry.Text;
            string pais = PaisPicker.SelectedItem?.ToString();
            string correo = CorreoEntry.Text;
            string celular = CelularEntry.Text;

            // Idiomas
            var idiomas = string.Empty;
            foreach (var child in IdiomasLayout.Children)
            {
                if (child is Entry entry)
                {
                    idiomas += $"{entry.Text}, ";
                }
            }

            // Obtener los lenguajes seleccionados
            string lenguajes = "";

            // Recorrer los hijos del LenguajesLayout
            foreach (var child in LenguajesLayout.Children)
            {
                if (child is StackLayout stackLayout)
                {
                    foreach (var item in stackLayout.Children)
                    {
                        if (item is StackLayout checkboxLayout)
                        {
                            var checkbox = checkboxLayout.Children[0] as CheckBox;
                            var label = checkboxLayout.Children[1] as Label;

                            if (checkbox != null && checkbox.IsChecked) // Validar si el checkbox está marcado
                            {
                                lenguajes += $"{label.Text}, ";
                            }
                        }
                    }
                }
            }


            // Quitar la última coma y espacio, si hay lenguajes seleccionados
            if (!string.IsNullOrEmpty(lenguajes))
                lenguajes = lenguajes.TrimEnd(',', ' ');
            else
            {
                lenguajes = "Ninguno";
            }
               
           

            // Generar un mensaje para mostrar el CV
            string cv = $"Nombre: {nombre}\n" +
                        $"Apellido: {apellido}\n" +
                        $"País: {pais}\n" +
                        $"Correo: {correo}\n" +
                        $"Celular: {celular}\n" +
                        $"Idiomas: {idiomas.TrimEnd(',', ' ')}\n" +
                        $"Lenguajes: {lenguajes.TrimEnd(',', ' ')}";

            // Navegar a la página CVPage
            await Navigation.PushAsync(new CVPage(nombre, apellido, pais, correo, celular, idiomas, lenguajes));
        }
    }
}
