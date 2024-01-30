window.location.replace('#about');
inviteButton = document.getElementById('dealerInvite')
githubLogo = document.getElementById('logo1')
linkedinLogo = document.getElementById('logo2')
emailLogo = document.getElementById('logo3')
githubName = document.getElementById('logoDescription1')
linkedinName = document.getElementById('logoDescription2')
emailName = document.getElementById('logoDescription3')

// inviteButton.addEventListener('click', () => {
//     window.open("https://discord.com/oauth2/authorize?client_id=866733937115922443&permissions=0&scope=bot", "_blank")
// })

githubLogo.addEventListener('mouseover', () => {
    githubName.classList.add("showElement")
})
githubLogo.addEventListener('mouseout', () => {
    githubName.classList.remove("showElement")
})

linkedinLogo.addEventListener('mouseover', () => {
    linkedinName.classList.add("showElement")
})
linkedinLogo.addEventListener('mouseout', () => {
    linkedinName.classList.remove("showElement")
})

emailLogo.addEventListener('mouseover', () => {
    emailName.classList.add("showElement")
})
emailLogo.addEventListener('mouseout', () => {
    emailName.classList.remove("showElement")
})

