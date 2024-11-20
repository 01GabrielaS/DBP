using Xamarin.Forms;

namespace Forms_to_CV
{
    public partial class CVPage : ContentPage
    {
        public CVPage(string nombre, string apellido, string pais, string correo, string celular, string idiomas, string lenguajes)
        {
            InitializeComponent();

            var titleLabel = new Label
            {
                Text = "Currículum Vitae",
                FontSize = 24,
                FontAttributes = FontAttributes.Bold,
                HorizontalOptions = LayoutOptions.Center,
                TextColor = Color.White,
                BackgroundColor = Color.DarkSlateBlue,
                Padding = new Thickness(10)
            };

            var detailLabel = new Label
            {
                Text = $"Nombre: {nombre}",
                FontSize = 18,
                TextColor = Color.Black
            };

            var detailLabelStyle = new Style(typeof(Label))
            {
                Setters = {
                    new Setter { Property = Label.FontSizeProperty, Value = 18 },
                    new Setter { Property = Label.TextColorProperty, Value = Color.DarkSlateGray },
                    new Setter { Property = Label.PaddingProperty, Value = new Thickness(0, 5) },
                }
            };


            var background = new BoxView
            {
                Color = Color.LightGray,
                Opacity = 0.1
            };

            var stackLayout = new StackLayout
            {
                Padding = new Thickness(20),
                Spacing = 10,
                Children = {
                    background,
                    titleLabel,
                    new Label { Text = $"Nombre: {nombre}", Style = detailLabelStyle },
                    new Label { Text = $"Apellido: {apellido}", Style = detailLabelStyle },
                    new Label { Text = $"País: {pais}", Style = detailLabelStyle },
                    new Label { Text = $"Correo: {correo}", Style = detailLabelStyle },
                    new Label { Text = $"Celular: {celular}", Style = detailLabelStyle },
                    new Label { Text = $"Idiomas: {idiomas}", Style = detailLabelStyle },
                    new Label { Text = $"Lenguajes de Programación: {lenguajes}", Style = detailLabelStyle },
                }
            };

            Content = stackLayout;

        }
    }
}
