const chkbx = document.getElementById('chkbx')

//troca de tema
const themes ={
    't-dark': 't-light',
    't-light': 't-dark',
}

//defini um tema default para a página começar
function setDefaultTheme() {
    const savedTheme = localStorage.getItem('theme');
    const defaultTheme = savedTheme || 't-light';
    document.body.setAttribute('data-theme', defaultTheme);


}
//troca o tema quando clica no checkbox
chkbx.addEventListener('click', () => {
    const currentTheme = document.body.dataset.theme
    

    document.body.setAttribute('data-theme',themes[currentTheme] || 't-light')
    
    localStorage.setItem('theme', newTheme);
})


setDefaultTheme();
