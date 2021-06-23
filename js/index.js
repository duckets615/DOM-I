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
//------------------------------------------

// const sc = siteContent;


// Navigation Sequence //
const navList = document.querySelectorAll('nav a');
navList.forEach((tag,idx) => {
  let i = idx + 1;
  tag.innerText = siteContent.nav[`nav-item-${i}`]
})
//---------------------------

// CTA section //

const ctaHeader = document.querySelector('.cta-text h1')
const formatHeader= siteContent['cta']['h1'].split(' ')

ctaHeader.innerHTML = `${formatHeader[0]}<br>${formatHeader[1]}<br>${formatHeader[2]}`;
document.querySelector('button').innerText = siteContent['cta']['button']

const ctaImg = document.querySelector('#cta-img')
ctaImg.src = siteContent.cta['img-src']
//---------------------------

//   Main Content   //
//top-content//
const header4 = document.querySelectorAll('.text-content h4')
const mainPara = document.querySelectorAll('.main-content p')
const midImg = document.querySelector('.middle-img')

header4[0].innerText = siteContent['main-content'][`features-h4`]
header4[1].innerText = siteContent['main-content'][`about-h4`]
mainPara[0].innerText = siteContent['main-content']['features-content']
mainPara[1].innerText = siteContent['main-content']['about-content']
document.querySelector('.middle-img').src = siteContent['main-content']['middle-img-src'];
//---------------------------
//bottom-content//

header4[2].innerText = siteContent['main-content']['services-h4'];
header4[3].innterText = siteContent['main-content']['product-h4'];
header4[4].innerText = siteContent['main-content']['vision-h4'];
mainPara[2].innerText = siteContent['main-content'][`services-content`];
mainPara[3].innerText = siteContent['main-content'][`product-content`];
mainPara[4].innerText = siteContent['main-content'][`vision-content`];
//---------------------------

//  Contact   //
document.querySelector('.contact h4').innerText = siteContent['contact']['contact-h4']
document.querySelector('.contact p').innerHTML = `${siteContent['contact']['address']},<br>${siteContent['contact']['phone']},<br>${siteContent['contact']['email']}`

  // "footer": {
    //   "copyright" : "Copyright Great Idea! 2018"
    // }