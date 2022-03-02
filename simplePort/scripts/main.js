const toggleLanguage = document.querySelector('#toggleLanguage')

toggleLanguage.addEventListener('click',()=>{
    toggleLanguage.classList.toggle('active')
        if(toggleLanguage.className.includes('active')){
            const h1 = document.querySelector('header h1')
            const h2 = document.querySelector('header h2')
            const currBulma = document.querySelector('#currBulma')
            const liveChat = document.querySelector('#liveChat')
            const socialMedia = document.querySelector('.userMedia p')
            h1.innerHTML='Olá, seja bem vindo ao meu portifólio!'
            h2.innerHTML='Aqui você consegue acessar todos meus projetos em andamento com as stacks utilizadas e que tenho conhecimento, espero que goste :)'
            currBulma.innerHTML='Currículo com Bulma'
            liveChat.innerHTML='CoffeBreak Chat em Tempo real'
            socialMedia.innerHTML='Redes sociais:'
            
        } else {
            const h1 = document.querySelector('header h1')
            const h2 = document.querySelector('header h2')
            const currBulma = document.querySelector('#currBulma')
            const liveChat = document.querySelector('#liveChat')
            const socialMedia = document.querySelector('.userMedia p')
            h1.innerHTML='Hi, Welcome to my portifolio!'
            h2.innerHTML='Here you can find all my projects with the stacks im currently working, hope you enjoy :)'
            currBulma.innerHTML='Curriculum with Bulma'
            liveChat.innerHTML='CoffeBreak RealTime Chat'
            socialMedia.innerHTML='Social Media:'
    }}
)




const toggleTheme = document.querySelector('#toggleTheme')
const toggleThemeLanguage = document.querySelector('#toggleLanguage')
const body = document.querySelector('body')
const linkedinIcon = document.querySelector('.fa-linkedin')
const githubIcon = document.querySelector('.fa-github')

toggleTheme.addEventListener('click',()=>{
    body.classList.toggle('whiteTheme')
    
    linkedinIcon.classList.toggle('whiteTheme')
    githubIcon.classList.toggle('whiteTheme')
    
    toggleTheme.classList.toggle('whiteTheme')    
    toggleThemeLanguage.classList.toggle('whiteTheme')    


    const toggleIcon=()=>{
        const toggleIcon = document.querySelector('#toggleIcon')
        if(toggleIcon.classList =='gg-sun'){
            toggleIcon.classList.remove('gg-sun')
            toggleIcon.classList.add('gg-moon')
        }
        else if(toggleIcon.classList == 'gg-moon') {
            toggleIcon.classList.remove('gg-moon')
            toggleIcon.classList.add('gg-sun')
        }
    }
    toggleIcon()
})