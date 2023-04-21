document.addEventListener('DOMContentLoaded', () => {
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
  //= ================end of homepage============================
  // placing sections on the page
  const body = document.querySelector('body');
  const docHold = document.querySelector('.doc-container');
  const homeHold = document.querySelector('.homepage-container');
  const portfolioHold = document.querySelector('#portfolio');
  const aboutHold = document.querySelector('#About');
  const contactHold = document.querySelector('#Contact');
  const footHold = document.querySelector('#Footer');
  docHold.append(homeHold, portfolioHold, aboutHold, contactHold, footHold);
  body.append(docHold);
  // start adding to portfolio
  portfolioHold.classList.add('work-section-container');
  const workHeader = document.createElement('article');
  workHeader.innerHTML = `
<h2 class="title-1" >My Recent Works</h2> 
      <figure class="line-pos">
        <img src="line-top.svg" alt="line" class="line-top">
      </figure>
`;
  workHeader.classList.add('heading');
  portfolioHold.appendChild(workHeader);

  // make the array that holds all imformation
  const projectsArray = [
    {
      imageTop: 'img-place-1.png',
      titleTop: 'Multi-Post Stories',
      descTop: "A daily selection of privately personalized reads; no accounts or sign-ups required.has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      techTop: ['css', 'Html', 'Bootstrap', 'Ruby'],
      liveTop: 'https://gisachris.github.io/week1_portfolio/',
      sourceTop: 'https://github.com/gisachris/week1_portfolio',
    },
    {
      id: 1,
      image: 'Img Place rest.png',
      title: 'Profesional Art <br> Printing Data',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      liveLink: 'https://gisachris.github.io/week1_portfolio/',
      sourceLink: 'https://github.com/gisachris/week1_portfolio',
    },
    {
      id: 2,
      image: 'project2Image.png',
      title: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      liveLink: 'https://gisachris.github.io/week1_portfolio/',
      sourceLink: 'https://github.com/gisachris/week1_portfolio',
    },
    {
      id: 3,
      image: 'project3Image.png',
      title: 'WebSite <br> Portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      liveLink: 'https://gisachris.github.io/week1_portfolio/',
      sourceLink: 'https://github.com/gisachris/week1_portfolio',
    },
    {
      id: 4,
      image: 'Img Place rest.png',
      title: 'Data Dashboard Healthcare',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      liveLink: 'https://gisachris.github.io/week1_portfolio/',
      sourceLink: 'https://github.com/gisachris/week1_portfolio',
    },
    {
      id: 5,
      image: 'project2Image.png',
      title: 'Profesional Art <br> Printing Data',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      liveLink: 'https://gisachris.github.io/week1_portfolio/',
      sourceLink: 'https://github.com/gisachris/week1_portfolio',
    },
    {
      id: 6,
      image: 'project3Image.png',
      title: 'WebSite <br> Portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      technologies: ['HTML', 'Bootstrap', 'Ruby'],
      liveLink: 'https://gisachris.github.io/week1_portfolio/',
      sourceLink: 'https://github.com/gisachris/week1_portfolio',
    },
  ];
  // create project holders
  const project1 = document.createElement('section');
  project1.classList.add('work-grid-container');
  portfolioHold.append(project1);
  const otherProjects = document.createElement('section');
  otherProjects.classList.add('all-sec-container');
  portfolioHold.append(otherProjects);
  // select all imfo for project_1
  for (let i = 0; i < projectsArray.length; i += 1) {
    const projectMob1 = projectsArray[0];
    // eslint-disable-line camelcase

    if (projectsArray[i] === projectMob1) { // the top project
      // grab all the properties
      const project = projectsArray[0];
      const {
        imageTop, titleTop, descTop, techTop,
      } = project;

      // create the image element
      const imageCreate = document.createElement('img');
      imageCreate.src = imageTop;
      imageCreate.classList.add('gridItem1');

      // create the article element
      const articleCreate = document.createElement('article');
      articleCreate.classList.add('placer');

      // create the h2 element
      const h2Create = document.createElement('h2');
      h2Create.classList.add('grid-item-2');
      h2Create.innerHTML = titleTop;
      articleCreate.append(h2Create);

      // create the description
      const descCreate = document.createElement('p');
      descCreate.classList.add('grid-item-3');
      descCreate.innerHTML = descTop;

      // create the list of technologies
      const listCreate = document.createElement('ul');
      listCreate.classList.add('grid-item-4');
      (techTop).forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('class', 't-b-stack t-stack');
        li.textContent = item;
        listCreate.append(li);
      });

      // create the button for project 1
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
    } else if (projectsArray.length > 1) { // other small project sections
      const projectOther = projectsArray[i];
      const {
        image, title, description, technologies,
      } = projectOther;

      // create the holding element
      const sectionCreateOther = document.createElement('section');
      sectionCreateOther.classList.add('sec-container');
      sectionCreateOther.setAttribute('data-id', i);
      otherProjects.appendChild(sectionCreateOther);

      const imageCreateOther = document.createElement('img');
      imageCreateOther.src = image;
      imageCreateOther.setAttribute('class', 'background background-d-1');
      sectionCreateOther.appendChild(imageCreateOther);

      // creating the header text
      const h2CreateOther = document.createElement('h2');
      h2CreateOther.classList.add('sec-item-1');
      h2CreateOther.innerHTML = title;
      sectionCreateOther.append(h2CreateOther);

      // create the description
      const descCreateOther = document.createElement('p');
      descCreateOther.classList.add('sec-item-2');
      descCreateOther.innerHTML = description;
      sectionCreateOther.append(descCreateOther);

      // create the list of technologies
      const listCreateOther = document.createElement('ul');
      listCreateOther.classList.add('sec-item-3');
      sectionCreateOther.append(listCreateOther);
      if (technologies) {
        (technologies).forEach((item) => {
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
      // create the button for other projects
      const buttonCreateOther = document.createElement('button');
      buttonCreateOther.classList.add('sec-item-5', `order${i}`);

      const buttonlink = document.createElement('a');
      buttonlink.classList.add('see-project');
      buttonlink.textContent = 'see project';
      buttonCreateOther.appendChild(buttonlink);
      sectionCreateOther.append(buttonCreateOther);
    }
    if (projectsArray[i] === projectMob1) { // top pop up
      // start to building the modals
      const modalTop = document.createElement('section');
      modalTop.classList.add('modalTopParent');
      body.append(modalTop);

      // get top modal imformation
      const modalTopImfo = projectsArray[0];
      const {
        imageTop, titleTop, descTop, techTop, liveTop, sourceTop,
      } = modalTopImfo;

      // add to the top modal
      // top modal child section
      const modalTopChild = document.createElement('section');
      modalTopChild.classList.add('modalSection');
      modalTop.appendChild(modalTopChild);

      // top modal heading section
      const modalHeading = document.createElement('article');
      modalHeading.classList.add('heading-section');

      // top modal heading text
      const heading = document.createElement('h2');
      heading.classList.add('modalH2');
      heading.innerHTML = titleTop;

      // top modal X button
      const Xbutton = document.createElement('span');
      Xbutton.classList.add('Xbutton');
      Xbutton.innerHTML = '&times;';

      // appending everything from heading&button => article => topmodalchild
      modalHeading.append(heading, Xbutton);
      modalTopChild.append(modalHeading);

      // adding technologies to modal
      const topModallistCreate = document.createElement('ul');
      topModallistCreate.classList.add('modalListHoldTop');
      (techTop).forEach((item) => {
        const li = document.createElement('li');
        li.setAttribute('class', 'modalListItem');
        li.textContent = item;
        topModallistCreate.append(li);
        modalTopChild.append(topModallistCreate);
      });

      // adding section for rest of page
      const modalRestSection = document.createElement('section');
      modalRestSection.classList.add('rest-section');

      // create the modal image
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
      modalTopLinkLive.innerHTML = `
<h3 class="modallivebutton-text">see live</h3>
<img src="liveIcon.svg" alt="live icon" class="live-icon">
`;
      modalButtons1.append(modalTopLinkLive);
      const modalButtons2 = document.createElement('button');
      modalButtons2.classList.add('modalbutton2');
      const modalTopSourceLive = document.createElement('a');
      modalTopSourceLive.href = sourceTop;
      modalTopSourceLive.innerHTML = `
<h3 class="modalsourcebutton-text">see source</h3>
<img src="github.svg" alt="live icon" class="live-icon">
`;
      modalButtons1.append(modalTopLinkLive);
      modalButtons2.append(modalTopSourceLive);
      modalButtons.append(modalButtons1, modalButtons2);
      modalDesc.append(description, modalButtons);
      modalRestSection.append(modalImage, modalDesc);
      modalTopChild.append(modalRestSection);

      // connecting the button to the modal
      // selecting the opening modal button
      const clickButtonOpen = document.querySelector('.grid-item-5');
      clickButtonOpen.addEventListener('click', () => {
        modalTop.style.display = 'block';
        modalTopChild.style.display = 'block';
        modalTop.style.backgroundColor = '#0000004f';
      });

      // selecting the closing modal button
      const clickButtonClose = Xbutton;
      clickButtonClose.addEventListener('click', () => {
        modalTop.style.display = 'none';
        modalTopChild.style.display = 'none';
      });

      const spacingModalClick = modalTop;
      spacingModalClick.addEventListener('click', (e) => {
        if (e.target.className === 'modalTopParent') {
          modalTop.style.display = 'none';
          modalTopChild.style.display = 'none';
        }
      });
    }// eslint-disable-line camelcase
  }
  const clickbuttonPop1 = document.querySelector('.order1');
  clickbuttonPop1.addEventListener('click', (event) => {
    event.preventDefault();
    const modalOther = document.querySelector('.modalOtherParent');
    const modalChild = document.querySelector('.modalSection');
    modalOther.style.display = 'block';
    modalChild.style.display = 'block';
    modalOther.style.backgroundColor = '#0000004f';

    const modalH2 = document.querySelector('.modalH2');
    const modalListHold = document.querySelector('.modalListHold');
    const modalImageOther = document.querySelector('.modalImageOther');
    const modalDescription = document.querySelector('.modalDescription');
    const modallivebutton1 = document.querySelector('.see-live');
    const modallivebutton2 = document.querySelector('.see-source');
    // eslint-disable-next-line no-restricted-syntax
    for (const key in projectsArray) {
      if (Object.hasOwnProperty.call(projectsArray, key)) {
        const { title } = projectsArray[1];
        modalH2.innerHTML = title;

        const { technologies } = projectsArray[1];
        (technologies).forEach((item) => {
          const li = document.createElement('li');
          li.setAttribute('class', 'modalListItem');
          li.innerHTML = item;
          modalListHold.append(li);
        });

        const { image } = projectsArray[1];
        modalImageOther.src = image;

        const { description } = projectsArray[1];
        modalDescription.textContent = description;

        const { liveLink } = projectsArray[1];
        modallivebutton1.href = liveLink;

        const { sourceLink } = projectsArray[1];
        modallivebutton2.href = sourceLink;
      }
    }

    const clickButtonClose = document.querySelector('.Xbutton');
    clickButtonClose.addEventListener('click', () => {
      modalOther.style.display = 'none';
      modalChild.style.display = 'none';
    });

    const spacingModalClick = modalOther;
    spacingModalClick.addEventListener('click', (e) => {
      if (e.target.className === 'modalOtherParent') {
        modalOther.style.display = 'none';
        modalChild.style.display = 'none';
      }
    });
  });

  const clickbuttonPop4 = document.querySelector('.order4');
  clickbuttonPop4.addEventListener('click', (event) => {
    event.preventDefault();
    const modalOther = document.querySelector('.modalOtherParent');
    const modalChild = document.querySelector('.modalSection');
    modalOther.style.display = 'block';
    modalChild.style.display = 'block';
    modalOther.style.backgroundColor = '#0000004f';

    const modalH2 = document.querySelector('.modalH2');
    const modalListHold = document.querySelector('.modalListHold');
    const modalImageOther = document.querySelector('.modalImageOther');
    const modalDescription = document.querySelector('.modalDescription');
    const modallivebutton1 = document.querySelector('.see-live');
    const modallivebutton2 = document.querySelector('.see-source');

    // eslint-disable-next-line no-restricted-syntax
    for (const key in projectsArray) {
      if (Object.hasOwnProperty.call(projectsArray, key)) {
        const { title } = projectsArray[1];
        modalH2.innerHTML = title;

        const { technologies } = projectsArray[1];
        (technologies).forEach((item) => {
          const li = document.createElement('li');
          li.setAttribute('class', 'modalListItem');
          li.innerHTML = item;
          modalListHold.append(li);
        });

        const { image } = projectsArray[1];
        modalImageOther.src = image;

        const { description } = projectsArray[1];
        modalDescription.textContent = description;

        const { liveLink } = projectsArray[1];
        modallivebutton1.href = liveLink;

        const { sourceLink } = projectsArray[1];
        modallivebutton2.href = sourceLink;
      }
    }

    const clickButtonClose = document.querySelector('.Xbutton');
    clickButtonClose.addEventListener('click', () => {
      modalOther.style.display = 'none';
      modalChild.style.display = 'none';
    });

    const spacingModalClick = modalOther;
    spacingModalClick.addEventListener('click', (e) => {
      if (e.target.className === 'modalOtherParent') {
        modalOther.style.display = 'none';
        modalChild.style.display = 'none';
      }
    });
  });

  const clickbuttonPop2 = document.querySelector('.order2');
  clickbuttonPop2.addEventListener('click', (event) => {
    event.preventDefault();
    const modalOther = document.querySelector('.modalOtherParent');
    const modalChild = document.querySelector('.modalSection');
    modalOther.style.display = 'block';
    modalChild.style.display = 'block';
    modalOther.style.backgroundColor = '#0000004f';

    const modalH2 = document.querySelector('.modalH2');
    const modalListHold = document.querySelector('.modalListHold');
    const modalImageOther = document.querySelector('.modalImageOther');
    const modalDescription = document.querySelector('.modalDescription');
    const modallivebutton1 = document.querySelector('.see-live');
    const modallivebutton2 = document.querySelector('.see-source');

    // eslint-disable-next-line no-restricted-syntax
    for (const key in projectsArray) {
      if (Object.hasOwnProperty.call(projectsArray, key)) {
        const { title } = projectsArray[2];
        modalH2.innerHTML = title;

        const { technologies } = projectsArray[2];
        (technologies).forEach((item) => {
          const li = document.createElement('li');
          li.setAttribute('class', 'modalListItem');
          li.innerHTML = item;
          modalListHold.append(li);
        });

        const { image } = projectsArray[2];
        modalImageOther.src = image;

        const { description } = projectsArray[2];
        modalDescription.textContent = description;

        const { liveLink } = projectsArray[2];
        modallivebutton1.href = liveLink;

        const { sourceLink } = projectsArray[2];
        modallivebutton2.href = sourceLink;
      }
    }

    const clickButtonClose = document.querySelector('.Xbutton');
    clickButtonClose.addEventListener('click', () => {
      modalOther.style.display = 'none';
      modalChild.style.display = 'none';
    });

    const spacingModalClick = modalOther;
    spacingModalClick.addEventListener('click', (e) => {
      if (e.target.className === 'modalOtherParent') {
        modalOther.style.display = 'none';
        modalChild.style.display = 'none';
      }
    });
  });

  const clickbuttonPop5 = document.querySelector('.order5');
  clickbuttonPop5.addEventListener('click', (event) => {
    event.preventDefault();
    const modalOther = document.querySelector('.modalOtherParent');
    const modalChild = document.querySelector('.modalSection');
    modalOther.style.display = 'block';
    modalChild.style.display = 'block';
    modalOther.style.backgroundColor = '#0000004f';

    const modalH2 = document.querySelector('.modalH2');
    const modalListHold = document.querySelector('.modalListHold');
    const modalImageOther = document.querySelector('.modalImageOther');
    const modalDescription = document.querySelector('.modalDescription');
    const modallivebutton1 = document.querySelector('.see-live');
    const modallivebutton2 = document.querySelector('.see-source');

    // eslint-disable-next-line no-restricted-syntax
    for (const key in projectsArray) {
      if (Object.hasOwnProperty.call(projectsArray, key)) {
        const { title } = projectsArray[2];
        modalH2.innerHTML = title;

        const { technologies } = projectsArray[2];
        (technologies).forEach((item) => {
          const li = document.createElement('li');
          li.setAttribute('class', 'modalListItem');
          li.innerHTML = item;
          modalListHold.append(li);
        });

        const { image } = projectsArray[2];
        modalImageOther.src = image;

        const { description } = projectsArray[2];
        modalDescription.textContent = description;

        const { liveLink } = projectsArray[2];
        modallivebutton1.href = liveLink;

        const { sourceLink } = projectsArray[2];
        modallivebutton2.href = sourceLink;
      }
    }

    const clickButtonClose = document.querySelector('.Xbutton');
    clickButtonClose.addEventListener('click', () => {
      modalOther.style.display = 'none';
      modalChild.style.display = 'none';
    });

    const spacingModalClick = modalOther;
    spacingModalClick.addEventListener('click', (e) => {
      if (e.target.className === 'modalOtherParent') {
        modalOther.style.display = 'none';
        modalChild.style.display = 'none';
      }
    });
  });

  const clickbuttonPop3 = document.querySelector('.order3');
  clickbuttonPop3.addEventListener('click', (event) => {
    event.preventDefault();
    const modalOther = document.querySelector('.modalOtherParent');
    const modalChild = document.querySelector('.modalSection');
    modalOther.style.display = 'block';
    modalChild.style.display = 'block';
    modalOther.style.backgroundColor = '#0000004f';

    const modalH2 = document.querySelector('.modalH2');
    const modalListHold = document.querySelector('.modalListHold');
    const modalImageOther = document.querySelector('.modalImageOther');
    const modalDescription = document.querySelector('.modalDescription');
    const modallivebutton1 = document.querySelector('.see-live');
    const modallivebutton2 = document.querySelector('.see-source');

    // eslint-disable-next-line no-restricted-syntax
    for (const key in projectsArray) {
      if (Object.hasOwnProperty.call(projectsArray, key)) {
        const { title } = projectsArray[3];
        modalH2.innerHTML = title;

        const { technologies } = projectsArray[3];
        (technologies).forEach((item) => {
          const li = document.createElement('li');
          li.setAttribute('class', 'modalListItem');
          li.innerHTML = item;
          modalListHold.append(li);
        });

        const { image } = projectsArray[3];
        modalImageOther.src = image;

        const { description } = projectsArray[3];
        modalDescription.textContent = description;

        const { liveLink } = projectsArray[3];
        modallivebutton1.href = liveLink;

        const { sourceLink } = projectsArray[3];
        modallivebutton2.href = sourceLink;
      }
    }

    const clickButtonClose = document.querySelector('.Xbutton');
    clickButtonClose.addEventListener('click', () => {
      modalOther.style.display = 'none';
      modalChild.style.display = 'none';
    });

    const spacingModalClick = modalOther;
    spacingModalClick.addEventListener('click', (e) => {
      if (e.target.className === 'modalOtherParent') {
        modalOther.style.display = 'none';
        modalChild.style.display = 'none';
      }
    });
  });

  const clickbuttonPop6 = document.querySelector('.order6');
  clickbuttonPop6.addEventListener('click', (event) => {
    event.preventDefault();
    const modalOther = document.querySelector('.modalOtherParent');
    const modalChild = document.querySelector('.modalSection');
    modalOther.style.display = 'block';
    modalChild.style.display = 'block';
    modalOther.style.backgroundColor = '#0000004f';

    const modalH2 = document.querySelector('.modalH2');
    const modalListHold = document.querySelector('.modalListHold');
    const modalImageOther = document.querySelector('.modalImageOther');
    const modalDescription = document.querySelector('.modalDescription');
    const modallivebutton1 = document.querySelector('.see-live');
    const modallivebutton2 = document.querySelector('.see-source');

    // eslint-disable-next-line no-restricted-syntax
    for (const key in projectsArray) {
      if (Object.hasOwnProperty.call(projectsArray, key)) {
        const { title } = projectsArray[3];
        modalH2.innerHTML = title;

        const { technologies } = projectsArray[3];
        (technologies).forEach((item) => {
          const li = document.createElement('li');
          li.setAttribute('class', 'modalListItem');
          li.innerHTML = item;
          modalListHold.append(li);
        });

        const { image } = projectsArray[3];
        modalImageOther.src = image;

        const { description } = projectsArray[3];
        modalDescription.textContent = description;

        const { liveLink } = projectsArray[3];
        modallivebutton1.href = liveLink;

        const { sourceLink } = projectsArray[3];
        modallivebutton2.href = sourceLink;
      }
    }

    const clickButtonClose = document.querySelector('.Xbutton');
    clickButtonClose.addEventListener('click', () => {
      modalOther.style.display = 'none';
      modalChild.style.display = 'none';
    });

    const spacingModalClick = modalOther;
    spacingModalClick.addEventListener('click', (e) => {
      if (e.target.className === 'modalOtherParent') {
        modalOther.style.display = 'none';
        modalChild.style.display = 'none';
      }
    });
  });

  const email = document.getElementById('email');
  const emailError = document.querySelector('.emailError');
  const form = document.querySelector('.cont_button');

  // adding an event listener
  form.addEventListener('click', (event) => {
    const emailValue = email.value.trim();

    // check if email is lowercase
    if (emailValue !== emailValue.toLowerCase()) {
      emailError.style.display = 'block';
      emailError.innerHTML = 'Email must be lowercase!';
      event.preventDefault();
    }
  });

  // add an event listener to the email itself
  email.addEventListener('input', () => {
    emailError.style.display = 'none';
  });

  //add local storage for forma data

  //initialising form content
  const formSt = document.querySelector('#form');
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputTextArea = document.querySelector('#comment_text');

  //get stored data values from the local storage if they exist
  const savedData = JSON.parse(localStorage.getItem('formData')) || {};

  //fill in the inputs
  if (savedData.inputName) {
    inputName.value = savedData.inputName;
  }
  if (savedData.inputEmail) {
    inputEmail.value = savedData.inputEmail;
  }
  if (savedData.inputTextArea) {
    inputTextArea.value = savedData.inputTextArea;
  }

  //add an event listener to update the input fields if they change 
  inputName.addEventListener('input',(event) =>{
    savedData.inputName = event.target.value;
    localStorage.setItem('formData', JSON.stringify(savedData));
  });

  inputEmail.addEventListener('input',(event) =>{
    savedData.inputEmail = event.target.value;
    localStorage.setItem('formData', JSON.stringify(savedData));
  });

  inputTextArea.addEventListener('input',(event) =>{
    savedData.inputTextArea = event.target.value;
    localStorage.setItem('formData', JSON.stringify(savedData));
  });

  // Add event listener to clear the saved data from local storage when the form is submitted
  
});
