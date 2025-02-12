document.addEventListener("DOMContentLoaded", () => {
    // Menu de navegação responsivo
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    burger.addEventListener("click", () => {
      // Toggle nav
      nav.classList.toggle("nav-active")
  
      // Animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Burger animation
      burger.classList.toggle("toggle")
    })
  
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Formulário de contato
    const form = document.getElementById("contato-form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      alert("Obrigado por entrar em contato! Retornaremos em breve.")
      form.reset()
    })
  })
  
  