const aboutTabs = document.querySelectorAll(".tab");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener('DOMContentLoaded', () =>{
    if(aboutTabs){
        aboutTabs[0].click();
    }
});

aboutTabs.forEach((tab) =>{
    tab.addEventListener('click',(e) =>{
        e.preventDefault();

        aboutTabs.forEach((a) =>{
            a.classList.remove('active');
        });
        tab.classList.add('active');

        aboutContent.forEach((c) =>{
            c.classList.remove('active');
        });

        const activeTab = tab.dataset.section
        document.getElementById(activeTab).classList.add('active');

        if(activeTab === "experience"){
            const experiences = document.querySelector(".experience-list");

        const experienceList = [
            {
                id: 1,
                date: "2025 - Present",
                position: "Python Full Stack Developer (Fresher)",
                company: "Self Projects",
                details: "Developed multiple full stack projects including portfolio websites, REST APIs, and dashboards using Django and Flask. Focused on responsive design, backend logic, and database integration."
            },
            {
                id: 2,
                date: "2025",
                position: "Web Developer",
                company: "Personal Projects",
                details: "Built responsive websites and UI/UX designs with modern frontend technologies. Improved performance, user experience, and mobile compatibility across projects."
            },
            {
                id: 3,
                date: "2025",
                position: "Backend Developer",
                company: "Practice & Learning",
                details: "Worked on backend development using Django and Flask, created REST APIs, handled authentication systems, and managed databases like MySQL."
        }];

        const experienceContent = experienceList.map((ele) =>{
            return `
                         <div class="experience-box" key=${ele?.id}>
                            <h4> ${ele?.date} </h4>
                            <h3>${ele?.position}</h3>
                            <div class="company-name">
                                <span></span>
                                <p>${ele?.company}</p>
                            </div>
                            <p>${ele?.details}</p>
                        
                        </div>
            `;
        }).join("");

       if(experiences){
        experiences.innerHTML = experienceContent;
       }


        }else if(activeTab === "education"){
            const education = document.querySelector(".education-list");
            
           const educationList = [
    {
        id: 1,
        date: "2021 - 2023",
        degree: "B.Sc Computer Science",
        institution: "Vikram University, Ujjain",
        details: "Completed Bachelor of Science in Computer Science with strong foundation in programming, problem-solving, and web development."
    },
    {
        id: 2,
        date: "2019",
        degree: "12th (Mathematics)",
        institution: "CBSE Board",
        details: "Completed higher secondary education with Mathematics stream, building analytical and logical thinking skills."
    },
    {
        id: 3,
        date: "2017",
        degree: "10th",
        institution: "CBSE Board",
        details: "Completed secondary education with a strong academic foundation and overall development."
    }
            ];

            const educationContent = educationList.map((ele) =>{
            return `
             <div class="experience-box" key = ${ele?.id}>
                        <h4>${ele?.date}</h4>
                        <h3>${ele?.degree}</h3>
                        <div class="company-name">
                            <span></span>
                            <p>${ele?.institution}.</p>
                        </div>
                        <p>${ele?.details}</p>

                    </div>
                        
            `;
             }).join("");

            if (education) {
                education.innerHTML = educationContent;
             }
        
        }else if(activeTab === "skills"){
           const skills = document.querySelector('.skill-list');
           
           const skillList = [{
            id:1,
            name:"Python",
            icons: "/assets/skills/python.png"
           },{
            id:2,
            name:"JavaScript",
            icons: "/assets/skills/js.png"
           },{
            id:3,
            name:"React",
            icons: "/assets/skills/react.png"
           },{
            id:4,
            name:"Django",
            icons: "/assets/skills/django.png"
           },{
            id:5,
            name:"DSA",
            icons: "/assets/skills/DSA.png"
           },{
            id:6,
            name:"MongoDB",
            icons: "/assets/skills/mongodb.png"
           },{
            id:7,
            name:"BootStrap",
            icons: "/assets/skills/bootstrap.png"
           },{
            id:8,
            name:"CSS",
            icons: "/assets/skills/css.png" 
           },{
            id:9,
            name:"HTML",
            icons: "/assets/skills/html.png" 
           },{
            id:10,
            name:"FastAPI",
            icons: "/assets/skills/FastAPI.png" 
           }];

        
           const skillContent = skillList.map((ele) =>{
            return `
            <div class="skill-box" key = ${ele?.id}>
                        <img src="${ele?.icons}" alt="${ele?.name}" title="${ele?.name}" loading="lazy">
                    </div>
            `;
           }).join("");
           
           if (skills) {
            skills.innerHTML = skillContent;
           }
        }else if(activeTab === "about-me"){ 
            const myInfo = document.querySelector('.my-info');
            
            const infoList = [{
                id: 1,
                key : "Name :",
                value: "Manglesh Patidar"
            },{
                id: 2,
                key: "Country :",
                value: "India"
            },{
                id: 3,
                key: "Industry :",
                value: "Software & IT"
            },{
                id: 4,
                key: "Experience",
                value: "Fresher (Project-Based Experience)"
            },{
                id:5,
                key:"Address :",
                value: "Indore, Madhya Pradesh"
            }];

            const infoContent = infoList.map((ele) =>{
                return `
                <div class="info-box" key = ${ele?.id}>
                    <span>${ele?.key}</span>
                    <span>${ele?.value}</span>
                </div>
                `;
            }).join("");
            
            if (myInfo) {
                myInfo.innerHTML = infoContent;
            }
        }
    });
} );