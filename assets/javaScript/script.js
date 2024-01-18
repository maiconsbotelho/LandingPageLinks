document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('toggle-theme');
    const root = document.documentElement;
    const fotoPerfil = document.getElementById('foto-perfil');
    const githubIcon = document.querySelector('.icon-github');

    


    themeToggleButton.addEventListener('click', function () {
        root.classList.toggle('light-theme');
        updateFotoPerfil();
    });

    function updateFotoPerfil() {
        const isLightTheme = root.classList.contains('light-theme');
        const fotoPerfilSrc = isLightTheme ? 'assets/images/fotoPerfilClaro.png' : 'assets/images/fotoPerfilEscuro.png';
        const githubIconColor = isLightTheme ? '#000' : '#c7c7c7';
        fotoPerfil.src = fotoPerfilSrc;
        githubIcon.style.color = githubIconColor;
    }
});