inviteButton = document.getElementById('dealerInvite')

inviteButton.addEventListener('click', () => {
    window.open("https://discord.com/oauth2/authorize?client_id=866733937115922443&permissions=0&scope=bot", "_blank")
})