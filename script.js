const switchModes = document.querySelector('.switch')
const menuToggler = document.querySelector('.menu_toggle')
const main = document.querySelector('main')
const mainContent = document.querySelector('.main_section')
const navBar = document.querySelector('.navbar')
const mobNav = document.querySelector('.mobile-navbar')

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



switchModes.addEventListener('click', () => {
  switchModes.classList.toggle('active')
  main.classList.toggle('active')
  sideBar.classList.toggle('active')
  mainContent.classList.toggle('active')
  navBar.classList.toggle('active')
})

menuToggler.addEventListener('click', () => {
  menuToggler.classList.toggle('active')
  mobNav.classList.toggle('active')

})

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


// portfolioBtn.addEventListener('click', () => {
//   portfolioSection.classList.add('active')
//   portfolioBtn.classList.add('active')
//   aboutBtn.classList.remove('active')
//   aboutSection.classList.remove('active')
//   resumeSection.classList.remove('active')
//   resumeBtn.classList.remove('active')
//   contactSection.classList.remove('active')
//   contactBtn.classList.remove('active')
//   check()
// })

// resumeBtn.addEventListener('click', () => {
//   portfolioSection.classList.remove('active')
//   resumeBtn.classList.add('active')
//   portfolioBtn.classList.remove('active')
//   aboutBtn.classList.remove('active')
//   contactBtn.classList.remove('active')
//   aboutSection.classList.remove('active')
//   resumeSection.classList.add('active')
//   contactSection.classList.remove('active')
//   // portfolioSection.classList.add('active')
// })

// aboutBtn.addEventListener('click', () => {
//   aboutSection.classList.add('active')
//   portfolioSection.classList.remove('active')
//   portfolioBtn.classList.remove('active')
//   resumeBtn.classList.remove('active')
//   contactBtn.classList.remove('active')
//   aboutBtn.classList.add('active')
//   resumeSection.classList.remove('active')
//   contactSection.classList.remove('active')
//   // portfolioSection.classList.add('active')
// })



expandBtn.addEventListener('click', () => {
    contactDetails.classList.toggle('active')
})

