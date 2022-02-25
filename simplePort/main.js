const toggleLanguage = document.querySelector('#toggleLanguage')

toggleLanguage.addEventListener('click',()=>{
    toggleLanguage.classList.toggle('active')
        if(toggleLanguage.className==='active'){
            const h1 = document.querySelector('header h1')
            const h2 = document.querySelector('header h2')
            const currBulma = document.querySelector('#currBulma')
            const liveChat = document.querySelector('#liveChat')
            h1.innerHTML='Olá, seja bem vindo ao meu portifólio!'
            h2.innerHTML='Aqui você consegue acessar todos meus projetos em andamento com as stacks utilizadas e que tenho conhecimento, espero que goste :)'
            currBulma.innerHTML='Currículo com Bulma'
            liveChat.innerHTML='CoffeBreak Chat em Tempo real'
            
        } else {
            const h1 = document.querySelector('header h1')
            const h2 = document.querySelector('header h2')
            const currBulma = document.querySelector('#currBulma')
            const liveChat = document.querySelector('#liveChat')
            h1.innerHTML='Hi, this website creator is Vinicius de Andrade!'
            h2.innerHTML='Here you can find all my projects with the stacks im currently working, hope you enjoy :)'
            currBulma.innerHTML='Curriculum with Bulma'
            liveChat.innerHTML='CoffeBreak RealTime Chat'
        }
    }
)

const toggle = document.querySelector('#toggle')
const body = document.querySelector('body')
toggle.addEventListener('click',()=>{
    body.classList.toggle('whiteTheme')
    toggle.classList.toggle('whiteTheme')
})