  //get modal imformation
const {image,title,description:descother,technologies,liveLink,sourceLink} = modalImfo1;

//start to building the modals
const modalOther = document.createElement('section');
modalOther.classList.add('.modalOtherParent');
body.append(modalOther);

//add to the other modal
//other modal child section
const modalChild = document.createElement('section');
modalChild.classList.add('modalSection');
modalOther.appendChild(modalChild);

//top modal heading section
const modalHeading = document.createElement('article');
modalHeading.classList.add('heading-section');

//modal heading text
const heading = document.createElement('h2');
heading.classList.add('modalH2');
heading.innerHTML = title;

//modal X button
const Xbutton = document.createElement('span');
Xbutton.classList.add('Xbutton');
Xbutton.innerHTML = `&times;`

//appending everything from heading&button => article => topmodalchild
modalHeading.append(heading,Xbutton);
modalChild.append(modalHeading); 

//adding technologies to modal
const topModallistCreate = document.createElement('ul');
topModallistCreate.classList.add('modalListHold');
(technologies).forEach((item) => {
 const li = document.createElement('li');
 li.setAttribute('class', 'modalListItem');
 li.textContent = item;
 topModallistCreate.append(li);
 modalChild.append(topModallistCreate);
});

//adding section for rest of page
const modalRestSection = document.createElement('section');
modalRestSection.classList.add('rest-section');

//create the modal image
const modalImage = document.createElement('img');
modalImage.classList.add('modalImageOther');
modalImage.src = image;

//add description and buttons holder
const modalDesc = document.createElement('article');
modalDesc.classList.add('restArticle');

//create a buttons holder as well.
const modalButtons = document.createElement('section');
modalButtons.classList.add('modalbuttonsholder');

//add a description text
const description = document.createElement('p');
description.classList.add('modalDescription');
description.textContent = descother;

//add buttons
const modalButtons1 = document.createElement('button');
modalButtons1.classList.add('modalbutton1');
const modalTopLinkLive = document.createElement('a');
modalTopLinkLive.href = liveLink;
modalTopLinkLive.innerHTML =
`
<h3 class="modallivebutton-text">see live</h3>
<img src="liveIcon.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
const modalButtons2 = document.createElement('button');
modalButtons2.classList.add('modalbutton2');
const modalTopSourceLive = document.createElement('a');
modalTopSourceLive.href = sourceLink;
modalTopSourceLive.innerHTML = 
`
<h3 class="modalsourcebutton-text">see source</h3>
<img src="github.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
modalButtons2.append(modalTopSourceLive);
modalButtons.append(modalButtons1,modalButtons2);
modalDesc.append(description,modalButtons);
modalRestSection.append(modalImage, modalDesc);
modalChild.append(modalRestSection);

 //connecting the button to the modal
// //selecting the opening modal button
// const clickButtonOpen = document.querySelector('.sec-item-5');
// clickButtonOpen.addEventListener('click', () =>{
//    modalOther.style.display = "block";
//    modalChild.style.display = "block";
//    //modalOther.style.backgroundColor = "#0000004f";
// });

// //selecting the closing modal button
// const clickButtonClose = Xbutton;
// clickButtonClose.addEventListener('click', () =>{
//    modalOther.style.display = "none";
//    modalChild.style.display = "none";
// });

// const spacingModalClick = modalOther;
// spacingModalClick.addEventListener('click', (e) =>{
//  if (e.target.className == "modalOtherParent") {
//      modalOther.style.display = "none";
//      modalChild.style.display = "none";
//  }
// });
};

//add the pop up modals

//start to building the modals
const modalOther = document.createElement('section');
modalOther.classList.add('.modalOtherParent');
body.append(modalOther);

//add to the other modal
//other modal child section
const modalChild = document.createElement('section');
modalChild.classList.add('modalSection');
modalOther.appendChild(modalChild);

//top modal heading section
const modalHeading = document.createElement('article');
modalHeading.classList.add('heading-section');

//modal heading text
const heading = document.createElement('h2');
heading.classList.add('modalH2');
heading.innerHTML = title;

//modal X button
const Xbutton = document.createElement('span');
Xbutton.classList.add('Xbutton');
Xbutton.innerHTML = `&times;`

//appending everything from heading&button => article => topmodalchild
modalHeading.append(heading,Xbutton);
modalChild.append(modalHeading);

//adding technologies to modal
const topModallistCreate = document.createElement('ul');
topModallistCreate.classList.add('modalListHold');
(technologies).forEach((item) => {
 const li = document.createElement('li');
 li.setAttribute('class', 'modalListItem');
 li.textContent = item;
 topModallistCreate.append(li);
 modalChild.append(topModallistCreate);
});

//adding section for rest of page
const modalRestSection = document.createElement('section');
modalRestSection.classList.add('rest-section');

//create the modal image
const modalImage = document.createElement('img');
modalImage.classList.add('modalImageOther');
modalImage.src = image;

//add description and buttons holder
const modalDesc = document.createElement('article');
modalDesc.classList.add('restArticle');

//create a buttons holder as well.
const modalButtons = document.createElement('section');
modalButtons.classList.add('modalbuttonsholder');

//add a description text
const descriptionModalOther= document.createElement('p');
descriptionModalOther.classList.add('modalDescription');
descriptionModalOther.textContent = description;

//add buttons
const modalButtons1 = document.createElement('button');
modalButtons1.classList.add('modalbutton1');
const modalTopLinkLive = document.createElement('a');
modalTopLinkLive.href = liveLink;
modalTopLinkLive.innerHTML =
`
<h3 class="modallivebutton-text">see live</h3>
<img src="liveIcon.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
const modalButtons2 = document.createElement('button');
modalButtons2.classList.add('modalbutton2');
const modalTopSourceLive = document.createElement('a');
modalTopSourceLive.href = sourceLink;
modalTopSourceLive.innerHTML = 
`
<h3 class="modalsourcebutton-text">see source</h3>
<img src="github.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
modalButtons2.append(modalTopSourceLive);
modalButtons.append(modalButtons1,modalButtons2);
modalDesc.append(descriptionModalOther,modalButtons);
modalRestSection.append(modalImage, modalDesc);
modalChild.append(modalRestSection);

//connecting the button to the modal

//selecting the opening modal button
const clickButtonOpen = document.querySelectorAll('.sec-item-5');

clickButtonOpen.forEach((button) =>{
  button.addEventListener('click',(e) =>{
    e.preventDefault(); 
    //if(){
    modalOther.style.display = "block";
    modalChild.style.display = "block";
    modalOther.style.backgroundColor = "#0000004f";
    //}
  });

//selecting the closing modal button
 const clickButtonClose = Xbutton;
 clickButtonClose.addEventListener('click', () =>{
    modalOther.style.display = "none";
    modalChild.style.display = "none";
 });

 const spacingModalClick = modalOther;
 spacingModalClick.addEventListener('click', (e) =>{
  if (e.target.className == "modalOtherParent") {
      modalOther.style.display = "none";
      modalChild.style.display = "none";
  }
 });
});
}
if (projectsArray[i]==project_1) {
  //start to building the modals
const modalTop = document.createElement('section');
modalTop.classList.add('modalTopParent');
body.append(modalTop);

//get top modal imformation
const modalTopImfo = projectsArray[0];
const { imageTop, titleTop, descTop, techTop, liveTop ,sourceTop} = modalTopImfo

//add to the top modal
//top modal child section
const modalTopChild = document.createElement('section');
modalTopChild.classList.add('modalSection');
modalTop.appendChild(modalTopChild);

//top modal heading section
const modalHeading = document.createElement('article');
modalHeading.classList.add('heading-section');

//top modal heading text
const heading = document.createElement('h2');
heading.classList.add('modalH2');
heading.innerHTML = titleTop;

//top modal X button
const Xbutton = document.createElement('span');
Xbutton.classList.add('Xbutton');
Xbutton.innerHTML = `&times;`

//appending everything from heading&button => article => topmodalchild
modalHeading.append(heading,Xbutton);
modalTopChild.append(modalHeading); 

//adding technologies to modal
const topModallistCreate = document.createElement('ul');
topModallistCreate.classList.add('modalListHold');
(techTop).forEach((item) => {
  const li = document.createElement('li');
  li.setAttribute('class', 'modalListItem');
  li.textContent = item;
topModallistCreate.append(li);
modalTopChild.append(topModallistCreate);
});

//adding section for rest of page
const modalRestSection = document.createElement('section');
modalRestSection.classList.add('rest-section');

//create the modal image
const modalImage = document.createElement('img');
modalImage.classList.add('modalImage');
modalImage.src = imageTop;
const modalDesc = document.createElement('article');
modalDesc.classList.add('restArticle');
const modalButtons = document.createElement('section');
modalButtons.classList.add('modalbuttonsholder');
const description = document.createElement('p');
description.classList.add('modalDescription');
description.textContent = descTop;

const modalButtons1 = document.createElement('button');
modalButtons1.classList.add('modalbutton1');
const modalTopLinkLive = document.createElement('a');
modalTopLinkLive.href = liveTop;
modalTopLinkLive.innerHTML =
`
<h3 class="modallivebutton-text">see live</h3>
<img src="liveIcon.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
const modalButtons2 = document.createElement('button');
modalButtons2.classList.add('modalbutton2');
const modalTopSourceLive = document.createElement('a');
modalTopSourceLive.href = sourceTop;
modalTopSourceLive.innerHTML = 
`
<h3 class="modalsourcebutton-text">see source</h3>
<img src="github.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
modalButtons2.append(modalTopSourceLive);
modalButtons.append(modalButtons1,modalButtons2);
modalDesc.append(description,modalButtons);
modalRestSection.append(modalImage, modalDesc);
modalTopChild.append(modalRestSection);

//connecting the button to the modal
//selecting the opening modal button
const clickButtonOpen = document.querySelector('.grid-item-5');
clickButtonOpen.addEventListener('click', () =>{
  modalTop.style.display = "block";
  modalTopChild.style.display = "block";
  modalTop.style.backgroundColor = "#0000004f";
  
});

//selecting the closing modal button
const clickButtonClose = Xbutton;
clickButtonClose.addEventListener('click', () =>{
  modalTop.style.display = "none";
  modalTopChild.style.display = "none";
});

const spacingModalClick = modalTop;
spacingModalClick.addEventListener('click', (e) =>{
  if (e.target.className == "modalTopParent") {
    modalTop.style.display = "none";
    modalTopChild.style.display = "none";
  }
});


======================================================

//selecting the opening modal button
const clickButtonOpen = document.querySelectorAll('.sec-item-5');

clickButtonOpen.forEach((button) =>{
  button.addEventListener('click',(e) =>{
    e.preventDefault(); 
    //if(){
    modalOther.style.display = "block";
    modalChild.style.display = "block";
    modalOther.style.backgroundColor = "#0000004f";
    //}
  });

//selecting the closing modal button
 const clickButtonClose = Xbutton;
 clickButtonClose.addEventListener('click', () =>{
    modalOther.style.display = "none";
    modalChild.style.display = "none";
 });

 const spacingModalClick = modalOther;
 spacingModalClick.addEventListener('click', (e) =>{
  if (e.target.className == "modalOtherParent") {
      modalOther.style.display = "none";
      modalChild.style.display = "none";
  }
 });
});


==========================================================

//add the pop up modals

//start to building the modals
const modalOther = document.createElement('section');
modalOther.classList.add('.modalOtherParent');
body.append(modalOther);

//add to the other modal
//other modal child section
const modalChild = document.createElement('section');
modalChild.classList.add('modalSection');
modalOther.appendChild(modalChild);

//top modal heading section
const modalHeading = document.createElement('article');
modalHeading.classList.add('heading-section');

//modal heading text
const heading = document.createElement('h2');
heading.classList.add('modalH2');
heading.innerHTML = title;

//modal X button
const Xbutton = document.createElement('span');
Xbutton.classList.add('Xbutton');
Xbutton.innerHTML = `&times;`

//appending everything from heading&button => article => topmodalchild
modalHeading.append(heading,Xbutton);
modalChild.append(modalHeading);

//adding technologies to modal
const topModallistCreate = document.createElement('ul');
topModallistCreate.classList.add('modalListHold');
(technologies).forEach((item) => {
 const li = document.createElement('li');
 li.setAttribute('class', 'modalListItem');
 li.textContent = item;
 topModallistCreate.append(li);
 modalChild.append(topModallistCreate);
});

//adding section for rest of page
const modalRestSection = document.createElement('section');
modalRestSection.classList.add('rest-section');

//create the modal image
const modalImage = document.createElement('img');
modalImage.classList.add('modalImageOther');
modalImage.src = image;

//add description and buttons holder
const modalDesc = document.createElement('article');
modalDesc.classList.add('restArticle');

//create a buttons holder as well.
const modalButtons = document.createElement('section');
modalButtons.classList.add('modalbuttonsholder');

//add a description text
const descriptionModalOther= document.createElement('p');
descriptionModalOther.classList.add('modalDescription');
descriptionModalOther.textContent = description;

//add buttons
const modalButtons1 = document.createElement('button');
modalButtons1.classList.add('modalbutton1');
const modalTopLinkLive = document.createElement('a');
modalTopLinkLive.href = liveLink;
modalTopLinkLive.innerHTML =
`
<h3 class="modallivebutton-text">see live</h3>
<img src="liveIcon.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
const modalButtons2 = document.createElement('button');
modalButtons2.classList.add('modalbutton2');
const modalTopSourceLive = document.createElement('a');
modalTopSourceLive.href = sourceLink;
modalTopSourceLive.innerHTML = 
`
<h3 class="modalsourcebutton-text">see source</h3>
<img src="github.svg" alt="live icon" class="live-icon">
`
modalButtons1.append(modalTopLinkLive);
modalButtons2.append(modalTopSourceLive);
modalButtons.append(modalButtons1,modalButtons2);
modalDesc.append(descriptionModalOther,modalButtons);
modalRestSection.append(modalImage, modalDesc);
modalChild.append(modalRestSection);

//connecting the button to the modal

