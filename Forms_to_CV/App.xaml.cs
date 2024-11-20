using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Forms_to_CV
{
    public partial class App : Application
    {
        public App()
        {
            InitializeComponent();

            // Establecer la página principal dentro de un NavigationPage
            MainPage = new NavigationPage(new MainPage());
        }

        protected override void OnStart() { }

        protected override void OnSleep() { }

        protected override void OnResume() { }
    }
}