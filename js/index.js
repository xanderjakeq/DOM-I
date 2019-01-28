const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// Nav
let nav = Array.from(document.getElementsByTagName('nav')[0].children)
const navContentKeys = Object.keys(siteContent.nav)
nav.forEach((link, index) => {
  link.innerHTML = siteContent.nav[navContentKeys[index]]
})

// Images
let images = Array.from(document.getElementsByTagName('img'))

images.forEach(img => {
  if(img.id === 'cta-img'){
    img.src = siteContent.cta["img-src"]
  }else if(img.id === 'middle-img'){
    img.src = siteContent["main-content"]["middle-img-src"]
  }
})

// header
const ctaContent = siteContent.cta
const header = Array.from(document.querySelector('.cta-text').children)



header.forEach(element => {
  if(element.tagName === 'h1'){
    element.innerHTML = ctaContent.h1
  }else{
    element.innerHTML = ctaContent.button
    element.addEventListener('click', function(){
      this.innerHTML = 'clicked'
    })
  }
})

// main 

const mainContent = Object.values(siteContent["main-content"])
mainContent.splice(mainContent.indexOf('img/mid-page-accent.jpg'),1)

const main = Array.from(document.getElementsByClassName('main-content')[0].querySelectorAll('h4,p'))

main.forEach((element, index) => {
  element.innerHTML = mainContent[index]
})

// contact

const contactContent = Object.values(siteContent["contact"])

const contact = Array.from(document.getElementsByClassName('contact')[0].children)

contact.forEach((element, index) => {
  element.innerHTML = contactContent[index]
})

document.getElementsByTagName('footer')[0].children[0].innerHTML = siteContent.footer.copyright
