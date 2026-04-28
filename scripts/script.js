const toggle = document.getElementById('menu-toggle');

if (toggle) {
    toggle.addEventListener("change", () => {
        document.body.classList.toggle('no-scroll', toggle.checked);
    });
}


// home

const words = [
    "Web Developer",
    "Frontend Developer",
    "Interface Designer",
    "Code Architect",
    "React Developer",
    "UI/UX Designer",
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay =100;
let earsingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex == currentWord.length){
            isDeleting = true;
            setTimeout(type, nextWordDelay);
        }else{
            setTimeout(type, typingDelay);
        }
    }else{
        typingText.textContent = currentWord.substring(0, charIndex -1);
        charIndex--;

        if(charIndex == 0){
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }else{
            setTimeout(type, earsingDelay);
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    if(words?.length) type();
})

// navigation
const navLinks = document.querySelectorAll('.navlink');

const tabs = document.querySelectorAll('.content');

navLinks.forEach((link) =>{
    link.addEventListener("click", (e) =>{

        e.preventDefault();

         toggle.checked = false;
         document.body.classList.remove('no-scroll');
        
        navLinks.forEach((l) =>{
            if (l === link) {
                l.classList.add('active');
            } else {
                l.classList.remove('active');
            }
        });

        const tabName = link.dataset.tab;

        tabs.forEach((tab) =>{
            if(tab.id == tabName){
                tab.classList.add('active');
            }else{
                tab.classList.remove('active');
            }
        });

        if(tabName === 'services'){
            const serciveList = [{
                id : 1,
                icon: "ph-code",
                text: "Web Development",
                para: "I build modern, responsive, and visually appealing websites tailored to your business needs. My focus is on performance, clean design, and seamless user experience. Every website is optimized for speed and mobile devices. I ensure your online presence looks professional and engaging..",
            }, {
                id : 2,
                icon: "ph-pencil-simple",
                text: "UI/UX Design",
                para: "I design clean, modern, and user-friendly interfaces that enhance user experience. My focus is on usability, accessibility, and visual appeal. Every design is crafted to keep users engaged and improve interaction. I ensure a perfect balance between design and functionality.",
            }, {
                id : 3,
                icon: "ph-database",
                text: "Backend Development",
                para: "I develop secure and scalable backend systems using Django and Flask. From database management to server logic, everything is optimized for performance. I ensure smooth functionality and strong security practices. My backend solutions power reliable and efficient applications.",
            },{
                id:4,
                icon: "ph-share-network",
                text: "REST API Development",
                para: "I create fast, secure, and well-structured REST APIs for seamless system integration. These APIs enable smooth communication between frontend and backend. I focus on scalability, performance, and clean architecture. Perfect for web and mobile applications.",
            }, {
                id:5,
                icon: "ph-shopping-cart",
                text: "E-commerce Solutions",
                para: "I develop complete e-commerce platforms with product management, cart systems, and secure payment integration. My solutions are designed to enhance user experience and boost sales. Admin panels are easy to manage and scalable. I ensure a smooth and secure shopping experience.",
            }, {
                id:6,
                icon: "ph-chart-bar",
                text: "Dashboard & Admin Panels",
                para: "I build interactive dashboards and admin panels for efficient data management. These systems help track performance, analytics, and business insights in real-time. The UI is clean, intuitive, and user-friendly. Everything is designed to simplify complex data.",
            }];

            const services = document.getElementsByClassName("service-list");

            const innerContent = serciveList.map((l) => {
                return `
                                <div class="box" key=${l?.id}>
                    <div class="head-icons">
                        <i class="ph ${l?.icon}"></i>

                        <span>
                            <i class="ph ph-arrow-down-right"></i>
                        </span>
                    </div>

                    <h3> ${l?.text} </h3>
                    
                    <span class="spacer"></span>

                    <p> ${l?.para} </p>
                </div>
                `;
            })
            .join("");

            Array.from(services).forEach((ele) =>{
                ele.innerHTML = innerContent;
            });
        }
        
        toggle.checked = false; 
    });
});




