const projectList = [
  {
    id: 1,
    number: "01",
    title: "Calculator",
    description: "A simple and responsive calculator built using HTML and JavaScript that performs basic arithmetic operations like addition, subtraction, multiplication, and division.",
    techStack: ["HTML", "JavaScript"],
    image: "assets/projects/Calculator.png",
    livelink: "https://calculator-kappa-puce-74.vercel.app/",
    githublink: "https://github.com/Mangal9101/calculator"
  },
  {
    id: 2,
    number: "02",
    title: "React Shopping Cart",
    description: "A responsive shopping cart application built using React that allows users to add, remove, and manage products with dynamic state management and real-time updates.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    image: "assets/projects/React_shopping_cart.png",
    livelink: "https://react-shopping-cart-two-mauve.vercel.app/",
    githublink: "https://github.com/Mangal9101/React_Shopping_Cart"
  },
  {
    id: 3,
    number: "03",
    title: "Mini School Management System",
    description: "A full stack web application built using FastAPI and MySQL to manage student records, attendance, and basic school operations with an organized database system.",
    techStack: ["HTML", "CSS", "FastAPI", "Python", "MySQL"],
    image: "assets/projects/mini_school.png",
    livelink: "https://mini-school.onrender.com",
    githublink: "https://github.com/Mangal9101/mini_school"
  },
  {
    id: 4,
    number: "04",
    title: "ORM Project",
    description: "A Python-based ORM system built with Django that simplifies database operations by mapping objects to database tables, improving code efficiency and maintainability.",
    techStack: ["Django", "Python", "MySQL"],
    image: "assets/projects/project_orm.webp",
    livelink: "#",
    githublink: "https://github.com/Mangal9101/orm_project"
  }
];

const projects = document.querySelector('.projects');

let currentIndex = 0;

const renderProject = (index) =>{
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length-1;

    projects.innerHTML = `
      <div class="project-info">   
                    <h3>${projectContent?.number}</h3>
                    <h4>${projectContent?.title}</h4>
                    <p>${projectContent?.description}</p>

                    <div class="tech-stack">
                        ${projectContent?.techStack?.map((tech, i) =>{
                            return`
                            <span key=${i}>${tech} </span>
                            `
                        }).join(",")}
                    </div>
                    <hr />

                    <div class="links">
                        <a href=${projectContent?.livelink}><i class="ph ph-arrow-right"></i></a>
                        <a href=${projectContent?.githublink}><i class="ph ph-github-logo"></i></a>

                    </div>
                </div>
                
                <div class="carousel">
                    <img src=${projectContent?.image} alt="${projectContent?.title}">

                    <div class="arrows">
                        <a href="#" id = "previous" class = ${previousDisabled ? 'disabled-btn' : ''}><i class="ph ph-caret-left" ></i></a>
                        <a href="#" id = "next" class = ${nextDisabled ? 'disabled-btn' : ''}><i class="ph ph-caret-right"></i></a>
                    </div>
                </div>
    `;

    document.getElementById('previous').addEventListener('click', (e) => {
       e.preventDefault() ;

       if (currentIndex > 0) {
           currentIndex--;
           renderProject(currentIndex);
       }
    });

    document.getElementById('next').addEventListener('click', (e) => {
       e.preventDefault() ;

       if (currentIndex < projectList.length - 1) {
           currentIndex++;
           renderProject(currentIndex);
       }
    });
};

renderProject(currentIndex);
