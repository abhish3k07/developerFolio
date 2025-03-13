/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abhishek P",
  title: "Hey, this is Abhishek",
  subTitle: emoji(
    "Hey, I’m Abhishek — into cloud-native tech, DevOps, and figuring out how distributed systems stay glued together."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1NoTM7yiWMZiAH1Pkz2wdd1FhdR9uTSZi/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abhish3k07",
  linkedin: "https://www.linkedin.com/in/abhishekp1999/",
  gmail: "abhishekprakash3717@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CLOUD & DEVOPS ENTHUSIAST WHO LOVES AUTOMATING AND SCALING SYSTEMS",
  skills: [
    emoji("⚡ Design and manage CI/CD pipelines for efficient software delivery"),
    emoji("⚡ Build and operate cloud-native infrastructure using Docker, Kubernetes, and Terraform"),
    emoji("⚡ Explore distributed systems and improve system reliability through observability and automation")
  ],

  softwareSkills: [
    { skillName: "AWS, GCP, Azure", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "Linux and Networks", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "Docker and Kubernetes", fontAwesomeClassname: "fab fa-sass" },
    { skillName: "CICD - Jenkins, Github Actions, Gitlab", fontAwesomeClassname: "fab fa-js" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Web servers -Apache, Nginx, IIS", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Monitoring- Zabbix, Cloudwatch", fontAwesomeClassname: "fab fa-swift" },
    { skillName: "Pagetduty", fontAwesomeClassname: "fab fa-npm" },
    { skillName: "Databases - MySQL, MSSQL, MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Terraform", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Ansible", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "GitOps", fontAwesomeClassname: "fab fa-python" },
    { skillName: "CloudOps", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SNGIST Arts & Science College",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Applications",
      duration: "July 2018 - March 2021",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Cloud Platforms", progressPercentage: "90%" },
    { Stack: "CICD", progressPercentage: "70%" },
    { Stack: "Kubernetes", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Cloud Platform Engineer",
      company: "Activelobby Information Systems Pvt Ltd",
      companylogo: require("./assets/images/supportlobby_logo.jpeg"),
      date: "April 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Cloud Systems Engineer",
      company: "DhiSigma Systems",
      companylogo: require("./assets/images/dhisigmalogo.png"),
      date: "Sept 2022 – April 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "System Administrator",
      company: "Quadtri technologies",
      companylogo: require("./assets/images/quadtrilogo.png"),
      date: "Jan 2022 – Sep 2022",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications!",
  achievementsCards: [
    {
      title: "Google Cloud Associate Engineer",
      subtitle: "Certified as a GCP associate cloud engineer",
      image: require("./assets/images/gcp-ace.png"),
      imageAlt: "Google Cloud Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1K3Qgrvw2HN7Q8tudmTI7D_5QKOVmdQzP/view?usp=sharing"
        }
      ]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8075505949",
  email_address: "abhishekprakash3717@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job.

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
