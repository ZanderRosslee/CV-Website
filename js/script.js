const words = ['Software Engineer', 'SRC Vice President', 'Innovator', 'Ambitious', 'Creative Problem Solver', 'Visionary'];
let i = 0;
let j = 0;
let isDeleting = false;
let text = '';

function type() {
  const current = i % words.length;
  const fullText = words[current];
  
  if (isDeleting) {
    text = fullText.substring(0, j - 1);
    j--;
  } else {
    text = fullText.substring(0, j + 1);
    j++;
  }
  
  document.getElementById('text').innerHTML = text;
  
  if (!isDeleting && j === fullText.length) {
    isDeleting = true;
    setTimeout(() => type(), 1500);
  } else if (isDeleting && text === '') {
    isDeleting = false;
    i++;
    setTimeout(() => type(), 500);
  } else {
    setTimeout(() => type(), 100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => type(), 500);
});

// Select the about-me-section element
const aboutMeSection = document.querySelector('.about-me-section'); 

// Add an event listener to the about-me-card element
document.querySelector('.about-me-card').addEventListener('click', () => { 
  // When the about-me-card element is clicked, scroll to the about-me-section element
  aboutMeSection.scrollIntoView({ behavior: "smooth", block: "start" }); 
});

// Select the about-me-section element
const SkillsSection = document.querySelector('.skills-section'); 

// Add an event listener to the about-me-card element
document.querySelector('.skills-card').addEventListener('click', () => { 
// When the about-me-card element is clicked, scroll to the about-me-section element
  SkillsSection.scrollIntoView({ behavior: "smooth", block: "start" }); 
});

// Select the about-me-section element
const ExperienceSection = document.querySelector('.experience-section'); 

// Add an event listener to the about-me-card element
document.querySelector('.experience-card').addEventListener('click', () => { 
// When the about-me-card element is clicked, scroll to the about-me-section element
  ExperienceSection.scrollIntoView({ behavior: "smooth", block: "start" }); 
});

// Select the about-me-section element
const contactMeSection = document.querySelector('.contact-me-section'); 

// Add an event listener to the about-me-card element
document.querySelector('.contact-me-card').addEventListener('click', () => { 
// When the about-me-card element is clicked, scroll to the about-me-section element
  contactMeSection.scrollIntoView({ behavior: "smooth", block: "start" }); 
});

// Get timeline years
const timelineYears = document.querySelectorAll(".experience-year");

// Handle click event on year block
timelineYears.forEach(yearBlock => {
  yearBlock.addEventListener("click", () => {
    timelineYears.forEach(yb => yb.classList.remove("active"));
    yearBlock.classList.add("active");
    const year = yearBlock.getAttribute("data-year");
    createEventBlocks(year);
  });
});

// Create event blocks for a given year
function createEventBlocks(year) {
// Get experience events container and clear its content
  const eventsContainer = document.getElementById("experience-events");
  eventsContainer.innerHTML = "";

// Get experience events data for the given year
  const eventsData = getEventsData(year);

// Create event blocks for each event data and append to the events container
  eventsData.forEach(eventData => {
    const eventBlock = createEventBlock(eventData);
    eventsContainer.appendChild(eventBlock);
  });
}

// Get experience events data for a given year
function getEventsData(year) {
// Example events data for different years
  const eventsData = {
    "2021": [
      {
        title: "SRC Events Department",
        description: "I have a strong foundation in leadership from my experience as deputy head boy in high school. I am passionate about serving people and improving student culture, and I jumped at the chance to join the Events Planning Department of the SRC at Belgium Campus iTversity. This opportunity helped me grow as a person while discovering my place in the ICT field.\n\nDuring my time at the SRC, I learned valuable skills like time management and communication, which have helped me excel in leadership roles. Being part of the SRC was an excellent opportunity to develop my leadership abilities further.\n\nIn conclusion, my experience as deputy head boy and my passion for serving others have given me the drive to create a positive impact on the people around me. Joining the SRC at Belgium Campus iTversity was definitely an exciting opportunity.",
        imageURL: "img/SRC.png"
      },
      {
        title: "Hack The Waste",
        description: "My initial exposure to a Hackathon was through my participation in the Hack the Waste event. My enthusiasm for implementing green technology to address real-world challenges has always been one of my many passions. The primary focus of this Hackathon was to devise ways to encourage individuals to recycle.\n\nI had the privilege of collaborating with students from several international institutions, including Fontys, DOBA, Leaven University, Avans, and the University of Denmark. As a first-year software engineering student, this was a remarkable opportunity to develop a business plan, ICT solution, marketing strategy, and all other aspects of the business and ICT.\n\nOur team's efforts earned us a commendable third place in the competition. Our solutions centered around color-coded bags equipped with a QR code that recycling plants could scan to segregate various recyclable materials. This was an innovative approach to the presented challenge, and we believed that it had significant potential.\n\nParticipating in this Hackathon was an enriching experience that reinforced my decision to study ICT. I was reminded of my aspiration to solve real-world problems through technological interventions.",
        imageURL: "img/HTW.png"
      },
      {
        title: "Academic Top 10",
        description: "My academic performance is a testament to my hard work and dedication towards my studies. I firmly believe in the importance of establishing a positive reputation within my academic community, and I have made it my top priority to do so at Belgium Campus.\n\nIn 2021, I was thrilled to be announced as part of the Top 10 Academia at Belgium Campus. This recognition gave me a renewed sense of drive and motivation to continue working hard towards achieving my academic goals in 2022.\n\nI am committed to upholding my academic standards and to consistently delivering my best work in all my academic endeavors. My performance in the classroom is a reflection of my commitment to excellence, and I am proud to have been recognized for my hard work and dedication.",
        imageURL: "img/BC.png"
      }
    ],
    "2022": [
      {
        title: "SRC Head of Student Relations",
        description: "After getting introduced to the SRC in 2021, I was keen on becoming a part of it for 2022. I wanted to take up a new challenge and was elected as the Head of Student Relations. This role perfectly aligned with my passion for working with people and managing communications.\n\nAs the Head of Student Relations, I had a fulfilling experience. I was able to resolve student queries efficiently and maintain effective communication between the SRC, Management, and students. I have set a benchmark for the upcoming Student Relation SRCs to follow.\n\nMy experience as the Head of Student Relations in the SRC has been incredibly valuable. It has allowed me to utilize my skills in communication and people management, while also setting a high standard of work for future members of the SRC. I am grateful for the opportunity and look forward to seeing the impact that the SRC can have on student life in the future.",
        imageURL: "img/SRC.png"
      },
      {
        title: "Hack The Waste",
        description: "The second season of Hack the Waste had arrived and I was filled with excitement. This time, I came more prepared, armed with a larger knowledge base in web development and programming.\n\n Our task was to find innovative ways to advertise and personalize recyclable products. Our team decided to create a brand named 'The Flemish Orchid,' which specialized in everything recyclable, with a particular focus on leather products using rotten apples. To add a personal touch, we incorporated smart tags into the logo, which provided information about the number of apples used, their origin, the craftsmen who created the bags, and the benefits of using these materials.\n\nOur final product was a web-based business that sold these innovative bags, along with detailed information about the product's origins and benefits.",
        imageURL: "img/HTW.png"
      },
      {
        title: "Hackcellence Fest",
        description: "Hackcellance Fest was an innovative hackathon that I had the pleasure of participating in. I decided to focus on Green Tech, with the goal of creating a solution that combats deforestation while being primarily managed by ICT and requiring minimal human interaction.\n\nOne of my project ideas was a large-scale irrigation system that utilized groundwater beneath the Amazon rainforest. The system would include capsules containing pesticides, native plant seeds, and sensors to detect forest fires.\n\nIn addition, I explored the use of solar power to operate these systems and considered the possibility of creating biofuel for sales to ensure their viability.\n\nAlthough I was unable to take my project much further, the experience was valuable in terms of developing real-world systems that could have a positive impact.",
        imageURL: "img/HF.png"
      }
    ],
    "2023": [
      {
        title: "SRC Vice President",
        description: "Ever since my first year of study, I have been a dedicated member of the SRC, striving tirelessly to achieve one of my top personal goals.\n\nAs the current Vice President, my responsibilities include managing the SRC's three largest departments: Student Relations, Event Planning, and Marketing. Additionally, I prioritize the mental well-being of every member of the SRC, recognizing the crucial importance of this aspect.\n\nBelgium Campus iTversity has experienced significant growth this year, expanding to govern three different campuses: Pretoria, Kempton Park, and Stellenbosch.\n\nMy journey thus far has been incredibly rewarding, and I am confident that this feeling will persist. There is no better feeling than seeing my hard work pay off and my dreams become a reality.",
        imageURL: "img/SRC.png"
      },
      {
        title: "Synthesis Vac Programme",
        description: "One of the most amazing experiences I have had thus far was participating in the Synthesis Vac Programme, which ran from 5 December 2022 to 3 February 2023, with a break from 16 December 2022 to 6 January 2023.\n\nDuring this program, I was introduced to various workspace technologies such as Miro, GitHub, and Git. We were tasked with choosing a project from a list of available options, and I chose to challenge myself by selecting a project that involved working with AI.\n\n\The project I tackled was titled 'Garmin device data modelling for behavioural profiling using AI in real-time.' I set out to prove that depression can be predicted using health statistics and AI. To achieve this, I worked with Python and Firebase to create a real-time application.\n\nThe journey was a major success for me, as I developed my first decision tree model with an accuracy rate that ranged from 73% to 85%. I am extremely grateful for this opportunity and will always remember the valuable skills I gained during this experience.",
        imageURL: "img/Synthesis.png"
      }
    ]
  };

  return eventsData[year] || [];
}

// Create an event block for a given event data
function createEventBlock(eventData) {
  // Create event block container
  const eventBlock = document.createElement("div");
  eventBlock.classList.add("experience-event");

// Add title and description to the event block
  const imageElement = document.createElement("img");
  imageElement.src = eventData.imageURL;
  eventBlock.appendChild(imageElement);

// Add click event listener to show popup with event details
  eventBlock.addEventListener("click", () => {
    showEventDetails(eventData);
  });

  return eventBlock;
}

// Show popup with event details
function showEventDetails(eventData) {
// Get popup container and content elements
  const popupContainer = document.getElementById("experience-details");
  const popupContent = popupContainer.querySelector(".experience-content");

// Set title and description in the popup content
  popupContent.querySelector("h2").textContent = eventData.title;
  const descriptionElement = popupContent.querySelector("p");
  descriptionElement.innerHTML = eventData.description.replace(/\n/g, "<br>");

// Show the popup
  popupContainer.style.visibility = "visible";
}

// Close popup with event details
function closePopup() {
// Get popup container and hide it
  const popupContainer = document.getElementById("experience-details");
  popupContainer.style.visibility = "hidden";
}

// Set target date
const targetDate = new Date("2024-01-01T00:00:00.000Z");

// Update countdown
function updateCountdown() {
  const currentDate = new Date();
  const diff = targetDate - currentDate;

  let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  let hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  let minutes = Math.floor(diff / (1000 * 60)) % 60;

// Handle the case where the target date has already passed
  if (diff < 0) {
    months = days = hours = minutes = 0;
  }

  const countdownTime = document.querySelector(".countdown-time");
  countdownTime.innerText = `${months} months, ${days} days, ${hours} hours, ${minutes} minutes`;
}

// Update countdown every minute
setInterval(updateCountdown, 1000 * 60);
