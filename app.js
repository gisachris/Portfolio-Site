document.addEventListener('DOMContentLoaded',()=>{
  const navToggle = document.querySelector('#menuToggle');
const navIcon = document.querySelectorAll('#menuToggle .bar');
const nav = document.querySelector('.navigation');
const logo = document.querySelector('.logo-text');
const navItem = document.querySelectorAll('.navigation li .nav-text');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  logo.classList.toggle('logo-dis');
  (navIcon).forEach((icon) => {
    icon.classList.toggle('hidden');
  });
});

(navItem).forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.toggle('open');
    logo.classList.remove('logo-dis');
    (navIcon).forEach(() => {
      navIcon[0].classList.remove('hidden');
      navIcon[1].classList.add('hidden');
    });
  });
});
window.addEventListener('scroll', () => {
  logo.classList.remove('logo-dis');
  nav.classList.remove('open');
  navIcon.forEach(() => {
    navIcon[0].classList.remove('hidden');
    navIcon[1].classList.add('hidden');
  });
});
//=================end of homepage============================
//placing sections on the page
const body = document.querySelector('body');
const docHold = document.querySelector('.doc-container');
const homeHold = document.querySelector('.homepage-container');
const portfolioHold = document.querySelector('#portfolio');
const aboutHold = document.querySelector('#About');
const contactHold = document.querySelector('#Contact');
const footHold = document.querySelector('#Footer');
docHold.append(homeHold,portfolioHold,aboutHold,contactHold,footHold);
body.append(docHold);
//start adding to portfolio
portfolioHold.classList.add('work-section-container');
const workHeader = document.createElement('article');
workHeader.innerHTML = 
`
<h2 class="title-1" >My Recent Works</h2> 
      <figure class="line-pos">
        <img src="line-top.svg" alt="line" class="line-top">
      </figure>
`;
workHeader.classList.add('heading');
portfolioHold.appendChild(workHeader);

//make the array that holds all imformation
const projectsArray = [
  {
    imageTop: 'img-place-1.png',
    titleTop: "Multi-Post Stories",
    descTop: "A daily selection of privately personalized reads; no accounts or sign-ups required.<br> has been the industry's standard dummy <br> text ever since the 1500s, when an <br>unknown printer took a standard dummy<br> text.",
    techTop: ["css", "Html", "Bootstrap","Ruby"],
    liveTop: 'https://gisachris.github.io/week1_portfolio/',
    sourceTop: 'https://github.com/gisachris/week1_portfolio'
  },
  {
    id : 1,
    image: 'Img Place rest.png',
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://gisachris.github.io/week1_portfolio/',
    sourceLink: 'https://github.com/gisachris/week1_portfolio'
  },
  {
    id : 2,
    image: 'project2Image.png',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://gisachris.github.io/week1_portfolio/',
    sourceLink: 'https://github.com/gisachris/week1_portfolio'
  },
  {
    id : 3,
    image: 'project3Image.png',
    title: 'WebSite <br> Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://gisachris.github.io/week1_portfolio/',
    sourceLink: 'https://github.com/gisachris/week1_portfolio'
  },
  {
    id : 4,
    image: 'Img Place rest.png',
    title: 'Data Dashboard Healthcare',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://gisachris.github.io/week1_portfolio/',
    sourceLink: 'https://github.com/gisachris/week1_portfolio'
  },
  {
    id : 5,
    image: 'project2Image.png',
    title: 'Profesional Art <br> Printing Data',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://gisachris.github.io/week1_portfolio/',
    sourceLink: 'https://github.com/gisachris/week1_portfolio'
  },
  {
    id : 6,
    image: 'project3Image.png',
    title: 'WebSite <br> Portfolio',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    technologies: ['HTML', 'Bootstrap', 'Ruby'],
    liveLink: 'https://gisachris.github.io/week1_portfolio/',
    sourceLink: 'https://github.com/gisachris/week1_portfolio'
  }
];
//create project holders
const project1 = document.createElement('section');
project1.classList.add('work-grid-container');
portfolioHold.append(project1);
const otherProjects = document.createElement('section');
otherProjects.classList.add('all-sec-container');
portfolioHold.append(otherProjects);
//select all imfo for project_1
for (let i = 0; i < projectsArray.length; i++) {
  const project_1 = projectsArray[0];
  const projectLast = (projectsArray.length-1);
  if(projectsArray[i]==project_1){  
  // grab all the properties
  const project = projectsArray[0];
  const { imageTop, titleTop, descTop, techTop} = project;
  
  // create the image element
  const imageCreate = document.createElement('img');
  imageCreate.src = imageTop;
  imageCreate.classList.add('gridItem1');
  
  // create the article element
  const articleCreate = document.createElement('article');
  articleCreate.classList.add('placer');

  //create the h2 element
  const h2Create = document.createElement('h2');
  h2Create.classList.add('grid-item-2');
  h2Create.innerHTML = titleTop;
  articleCreate.append(h2Create);

  //create the description
  const descCreate = document.createElement('p');
  descCreate.classList.add('grid-item-3');
  descCreate.innerHTML = descTop;

  //create the list of technologies
  const listCreate = document.createElement('ul');
listCreate.classList.add('grid-item-4');
(techTop).forEach((item) => {
  const li = document.createElement('li');
  li.setAttribute('class', 't-b-stack t-stack');
  li.textContent = item;
  listCreate.append(li);
});  

//create the button for project 1
const buttonCreate = document.createElement('button');
buttonCreate.classList.add('grid-item-5');
const buttonlink = document.createElement('a');
buttonlink.classList.add('see-project-t');
buttonlink.textContent = 'see project';
buttonCreate.appendChild(buttonlink);
  
  // append the elements to the container in chronological order.
  project1.append(imageCreate);
  project1.append(articleCreate);
  articleCreate.append(descCreate);
  articleCreate.append(listCreate);
  articleCreate.append(buttonCreate);
}
else if (projectsArray.length>1){
  const projectOther = projectsArray[i];
  const {image,title,description,technologies,liveLink,sourceLink} = projectOther;

  // create the holding element
  const sectionCreateOther = document.createElement('section');
  sectionCreateOther.classList.add('sec-container');
  otherProjects.appendChild(sectionCreateOther);

  const imageCreateOther = document.createElement('img');
  imageCreateOther.src = image;
  imageCreateOther.setAttribute('class','background background-d-1');
  sectionCreateOther.appendChild(imageCreateOther);

  //creating the header text
  const h2CreateOther = document.createElement('h2');
  h2CreateOther.classList.add('sec-item-1');
  h2CreateOther.innerHTML = title;
  sectionCreateOther.append(h2CreateOther);

  //create the description
  const descCreateOther = document.createElement('p');
  descCreateOther.classList.add('sec-item-2');
  descCreateOther.innerHTML = description;
  sectionCreateOther.append(descCreateOther);

  //create the list of technologies
  const listCreateOther = document.createElement('ul');
  listCreateOther.classList.add('sec-item-3');
  sectionCreateOther.append(listCreateOther);
  if(technologies){
    (technologies).forEach((item)=>{
      const li = document.createElement('li');
const button = document.createElement('button');
const link = document.createElement('a');
button.classList.add('button');
link.classList.add('but');
link.textContent = item;
button.appendChild(link);
li.appendChild(button);
listCreateOther.append(li);
sectionCreateOther.append(listCreateOther);
     });
  }
//create the button for other projects 
const buttonCreateOther = document.createElement('button');
buttonCreateOther.classList.add('sec-item-5');
const buttonlink = document.createElement('a');
buttonlink.classList.add('see-project');
buttonlink.textContent = 'see project';
buttonCreateOther.appendChild(buttonlink);
sectionCreateOther.append(buttonCreateOther);
}
// exit the loop after grabbing the properties you need
//break;
};



});