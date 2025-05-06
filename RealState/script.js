// Burger Menu

function toggleMenu(){
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}



//Property
function openMenu() {
  const menu = document.getElementById("property-menu");
  const button = document.getElementById("property-open");

  if (menu.classList.contains("open-property")) {
    button.value = "View More";
  } else {
    button.value = "Close"; 
  }
  menu.classList.toggle("open-property");
}

//Agents
const btn = document.getElementById('agents-btn');
const container = document.getElementById('agents-container');
btn.addEventListener('click', ()=>{
  container.classList.toggle('open-agents');
  if (container.classList.contains('open-agents')){
    btn.value = 'Close Tab';
  }else{
    btn.value = 'View All Agents';
  };
});

//Properties Feature

const viewBtn = document.getElementById('property-open');
const propContainer = document.getElementById('properties-container');
viewBtn.addEventListener('click',()=>{
  propContainer.classList.toggle('show-properties');
  if (propContainer.classList.contains('show-properties')){
    viewBtn.value = 'Close Tab';
  }else{
    viewBtn.value = 'More Properties'
  }
})

const searchBtn = document.getElementById('search-open');
const searchInput = document.getElementById('search-input');

searchBtn.addEventListener('click', () => {
  searchInput.classList.toggle('open-search');
  searchBtn.classList.toggle('active'); 
  if (searchInput.classList.contains('open-search')) {
    searchInput.focus();
  }
});

//Go to about use

function goToAbout(){
  const aboutUs = document.getElementById('about-us');

  if(aboutUs){
    aboutUs.scrollIntoView({behavior: "smooth"});
  }

}

// Go to property type

function goToPropertyType(){
  const pType = document.getElementById('property-type');

  if(pType){
    pType.scrollIntoView({behavior: "smooth"});
  }
};


//Open Form

const contactBtn = document.getElementById('contact-with-us');
const form = document.getElementById('form-container');

contactBtn.addEventListener('click', ()=>{
  form.classList.toggle('show-form');
  if (form.classList.contains('show-form')){
    contactBtn.value = 'Close Tab';
  }else{
    contactBtn.value = 'Contact With Us'
  }
});
function goToForm(){
  if(form.classList.contains('show-form')){
    null
  }else{
    form.scrollIntoView({behavior: "smooth"});
  }
};

//Go to about us

function goToAbout2(){
  const callback = document.getElementById('about-us');

  if(callback){
    callback.scrollIntoView({behavior: "smooth"});
  }

} 