/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectn = document.querySelectorAll('section'); 
const ulList = document.getElementById('navbar__list');


//main();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
(function (){
   


// build the nav
   buildMenu();

// Add class 'active' to section when near top of viewport
    const anchorList = document.getElementsByTagName('a');
    const nav= document.getElementsByClassName('page__header');
    const navHeight=nav[0].offsetHeight;
    document.addEventListener('scroll',function addActive(){
        for(let i=0;i<sectn.length;i++){
            let bounding = sectn[i].getBoundingClientRect();
           // if(bounding.top + navHeight > 0 && bounding.top < sectn[i].offsetHeight){
            if(bounding.top + navHeight >= 0 && bounding.bottom <= window.innerHeight){
                sectn[i].classList.add('your-active-class');
                anchorList[i].classList.add('active');
            }
            else{
                sectn[i].classList.remove('your-active-class');
                anchorList[i].classList.remove('active');
            }
        }
    });
    
// Scroll to anchor ID using scrollTO event

  
    for(let a of anchorList){
        a.addEventListener('click', function scrollToSection(data){
            let sectionId = data.target.classList[1];
            let sec = document.getElementById(sectionId)
            const top = sec.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top:top,
                behaviour: 'smooth'
            });
        });

    }
 
}());
/**
 * End Main Functions
 * Begin Events
 * 
*/
    
    
// Build menu 
function buildMenu(){
    for(const sec of sectn){
        const newEle = document.createElement('li');
        const newAnch =  document.createElement('a');
        newAnch.textContent = sec.dataset.nav;
        newAnch.href="#"+sec.id;
        newAnch.classList.add('menu__link');
        newAnch.classList.add(sec.id);
        newEle.appendChild(newAnch);
        ulList.appendChild(newEle);
    }
}

// Scroll to section on link click

 
// Set sections as active
