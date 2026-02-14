import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import About from './components/About/About'
import ProjectShowcase from './components/ProjectShowcase/ProjectShowcase'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App(){

    //header information 
    const name="Mariem Mdalla";
    const TagLine="Future Cybersecurity Analyst Specializing in Offensive Security";

    // about section 
    const aboutData={
        profileImage: "/src/assets/IMG_6836.JPG",
        bio:"Hi, I’m Mariem, a second-year Software Engineering and Information Systems student at Horizon School of Digital Technologies in Tunisia.I am building a strong foundation in programming, systems, and networking while focusing on cybersecurity and offensive security concepts. I’m particularly interested in vulnerability assessment, ethical hacking, and understanding how systems can be secured against real-world threats.My long-term goal is to become a cybersecurity analyst or penetration tester.",
        skills:[
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Node.js",
            "Python",
            "Figma",
            "Java",
            "C",
            "Networking basics",
            "Linux fundamentals",
            "Basic vulnerability concepts",
            "Understanding of authentication & access control",
            "Git & GitHub",
            "VS Code",
            "Basic terminal usage",

        ]
        
    };

    //Project Information 
    const projectData=[
        {
            id:1,
            name:"Weather app",
            description:"A web-based weather application built to practice API integration and JavaScript fundamentals. This project helped strengthen my understanding of asynchronous data fetching and user interface structuring.",
            technologies:["JavaScript","CSS","HTML","API"]
        },
        {
            id:2,
            name:"this portfolio",
            description:"A personal portfolio built with React to strengthen component-based architecture skills and improve front-end development practices.",
            technologies:["React"]
        }
    ];

    //contact information 
    const contactData={
    email:"mariem.mdalla@horizon-university.tn",
    github:"https://github.com/mariem-99",
    linkedin:"https://www.linkedin.com/in/mariem-mdalla-7a3126384/" 
    };

    //component composition 
    return(
        <div className='App'>
             
            {/*header*/}
            <Header name={name} TagLine={TagLine}/>

            {/*About section*/}
            <About 
            profileImage={aboutData.profileImage}
            bio={aboutData.bio}
            skills={aboutData.skills}
            />
            {/*Project showcase displays all projects(2 XD) */}
            <ProjectShowcase
                projects={projectData}
            />

            <Contact
                email={contactData.email}
                github={contactData.github}
                linkedin={contactData.linkedin}
            />

            {/*Footer at the bottom */}
            <Footer name={name}/>
        </div>
    )
}
export default App;