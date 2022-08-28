const main = document.querySelector('main')
const mainContent = document.querySelector('.main_section')
const navBar = document.querySelector('.navbar')
const menuToggler = document.querySelector('.menu_toggle')
const mobNav = document.querySelector('.mobile-navbar')
const switchBtns = document.querySelectorAll('.switch')

// sidebar
const sideBar = document.querySelector('.sidebar')
const contactDetails = document.querySelector('.contact-details')
const expandBtn = document.querySelector('.expand-btn')

// page sections
const aboutSection = document.querySelector('.about-section')
const resumeSection = document.querySelector('.resume-section')
const portfolioSection = document.querySelector('.portfolio-section')
const contactSection = document.querySelector('.contact-section')

// navbar buttons
const aboutBtn = document.querySelectorAll('.about-btn')
const resumeBtn = document.querySelectorAll('.resume-btn')
const contactBtn = document.querySelectorAll('.contact-btn')
const portfolioBtn = document.querySelectorAll('.portfolio-btn')


switchBtns.forEach(switch_btn => {
    switch_btn.addEventListener('click', () => {
        switch_btn.classList.toggle('active')
        main.classList.toggle('active')
        sideBar.classList.toggle('active')
        mainContent.classList.toggle('active')
        navBar.classList.toggle('active')
      })
})

menuToggler.addEventListener('click', () => {
  menuToggler.classList.toggle('active')
  mobNav.classList.toggle('active')
})

// expand button on mobile screen
expandBtn.addEventListener('click', () => {
    contactDetails.classList.toggle('active')
    sideBar.classList.toggle('mob-active')
})

//page sections
aboutBtn.forEach(about_btn => {

    about_btn.addEventListener('click', () => {
        aboutSection.classList.add('active')
        about_btn.classList.add('active')
        portfolioSection.classList.remove('active')
        resumeSection.classList.remove('active')
        contactSection.classList.remove('active')

        portfolioBtn.forEach(portfolio_btn => {
          portfolio_btn.classList.remove('active')
        })
        contactBtn.forEach(contact_btn => {
            contact_btn.classList.remove('active')
            })
        resumeBtn.forEach(resume_btn => {
            resume_btn.classList.remove('active')
            })
      })
      
});

resumeBtn.forEach(resume_btn => {

    resume_btn.addEventListener('click', () => {
        resumeSection.classList.add('active')
        resume_btn.classList.add('active')
        portfolioSection.classList.remove('active')
        aboutSection.classList.remove('active')
        contactSection.classList.remove('active')
        aboutBtn.forEach(about_btn => {
            about_btn.classList.remove('active')
            })
        portfolioBtn.forEach(portfolio_btn => {
          portfolio_btn.classList.remove('active')
        })
        contactBtn.forEach(contact_btn => {
            contact_btn.classList.remove('active')
            })
      })
      
});

portfolioBtn.forEach(portfolio_btn => {

    portfolio_btn.addEventListener('click', () => {
        portfolioSection.classList.add('active')
        portfolio_btn.classList.add('active')
        aboutSection.classList.remove('active')
        resumeSection.classList.remove('active')
        contactSection.classList.remove('active')
        aboutBtn.forEach(about_btn => {
          about_btn.classList.remove('active')
        })
        resumeBtn.forEach(resume_btn => {
          resume_btn.classList.remove('active')
        })
        contactBtn.forEach(contact_btn => {
          contact_btn.classList.remove('active')
        })
      })
      
});

contactBtn.forEach(contact_btn => {

    contact_btn.addEventListener('click', () => {
        portfolioSection.classList.remove('active')
        contact_btn.classList.add('active')
        aboutSection.classList.remove('active')
        resumeSection.classList.remove('active')
        contactSection.classList.add('active')
        aboutBtn.forEach(about_btn => {
            about_btn.classList.remove('active')
        })
        resumeBtn.forEach(resume_btn => {
          resume_btn.classList.remove('active')
        })
        portfolioBtn.forEach(portfolio_btn => {
            portfolio_btn.classList.remove('active')
        })
      })
      
});


