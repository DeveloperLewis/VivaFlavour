const hamburgerMenuButton = document.getElementById("hamburger")
hamburgerMenuButton.addEventListener("click", toggleMobileNavbar);

function toggleMobileNavbar()
{
    document.getElementById("mobile-sidebar").classList.toggle('active')
    document.getElementById("hamburger-open").classList.toggle('hidden')
    document.getElementById("hamburger-close").classList.toggle('hidden')
}