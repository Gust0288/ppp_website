const javaButton = document.querySelector("#javah2");
const portButton = document.querySelector("#porth2");
const olesButton = document.querySelector("#olesh2");

const javaContent = document.querySelector("#prj1_all");
const portContent = document.querySelector("#prj2_all");
const olesContent = document.querySelector("#prj3_all");

document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const texts = {
    da: {
      texts: [
        {
          text: "Hej, jeg er Gustav Bøgh",
          location: ".intro_Head",
        },
        {
          text: "En 25-årig multimediedesignstuderende med fokus på webudvikling og digital marketing. Jeg søger en praktikplads, hvor jeg kan kombinere mine tekniske færdigheder inden for Frontend, med min passion for digital markedsføring for at skabe meningsfuld indflydelse.",
          location: ".intro_tekst_1",
        },
        {
          text: "Jeg brænder for at implementere effektive marketing strategier samt webløsninger og er dedikeret til at bidrage til udviklingen af online-profiler, brands og kommunikation.",
          location: ".intro_tekst_2",
        },
        {
          text: "Kompetencer",
          location: ".kompetencer_1",
        },
        {
          text: "Kode",
          location: ".kompetencer_2",
        },
        {
          text: "Sprog",
          location: ".kompetencer_3",
        },
        {
          text: "Dansk - Modersmål",
          location: ".kompetencer_4",
        },
        {
          text: "Engelsk - Flydende",
          location: ".kompetencer_5",
        },
        {
          text: "Nogle af min tidligere projekter",
          location: ".projekter_0",
        },
        {
          text: "Målet var at etablere en stærk online tilstedeværelse for vores lokale guitarreparationsbutik ved at skabe en brugervenlig hjemmeside. I projektet var jeg ansvarlig for git-processen, herunder versionsstyring og samarbejde. Jeg oprettede en omfattende database med guitarinformation ved at hente JSON-elementer. Mit fokus var og på global CSS for en ensartet visuel identitet på hele hjemmesiden. Vi brugte Astro Framework til projektet, hvilket forstærkede vores evne til at levere en moderne weboplevelse.",
          location: ".projekter_1",
        },
        {
          text: "Under dette 1. semesterprojektet havde jeg muligeheden for at udvikle en imponerende portfolio-hjemmeside, der skulle præsentere mit arbejde. Min primære fokus var på CSS, hvor jeg arbejdede fokuseret for at designe og implementere elementer samt tilføje visuelt tiltalende animationer. Målet var ikke kun at organisere projekterne, men også at skabe en hjemmeside med et flot CSS-design og smidige animationer. Dette enmandsprojekt styrkede mine færdigheder inden for CSS og gav mig værdifuld erfaring i selvstændig projektledelse.",
          location: ".projekter_2",
        },
        {
          text: " I projektet, hvor målet var at forbedre Oles Hus' online tilstedeværelse, blev der lagt vægt på at præsentere virksomheden på en engagerende måde for at styrke deres image. Vi arbejdede med flere aspekter, herunder udviklingen af en ny hjemmeside, produktionen af en video og skabelsen af visuelt imponerende billeder. Min rolle var afgørende i denne proces, da jeg havde ansvaret for at overse content creation samt stå for kodningsprocessen af hjemmesiden. Jeg anvendte SCRUM-metoden som et værktøj til at effektivisere arbejdsprocessen og sikre, at vi nåede vores mål inden for de fastsatte rammer. Gennem samarbejdet lykkedes det os at skabe en hjemmeside, der ikke kun teknisk fungerede optimalt, men også afspejlede Oles Hus' identitet på en visuelt tiltalende måde. Den tilhørende video og billedmateriale blev nøje designet for at sætte Oles Hus i det bedst mulige lys og bidrage til en stærkere online tilstedeværelse. Resultatet af vores indsats var ikke blot en opdateret online platform for Oles Hus, men også en styrkelse af deres brand og image, hvilket var det overordnede formål med projektet.",
          location: ".projekter_3",
        },
        {
          text: "Har du lyst til at vide mere om mig?",
          location: ".cta_1",
        },
        {
          text: "Kontakt mig her:",
          location: ".cta_2",
        },
        {
          text: "Telefon +45 4057 3503",
          location: ".cta_3",
        },
      ],
    },
    en: {
      texts: [
        {
          text: "Hello, I am Gustav Bøgh",
          location: ".intro_Head",
        },
        {
          text: "A 25-year-old multimedia design student with a focus on web development and digital marketing. I am looking for an internship where I can combine my technical skills in frontend with my passion for digital marketing to make a meaningful impact.",
          location: ".intro_tekst_1",
        },
        {
          text: "I am passionate about implementing effective marketing strategies as well as web solutions and am dedicated to contributing to the development of online profiles, brands, and communication.",
          location: ".intro_tekst_2",
        },
        {
          text: "Qualifications",
          location: ".kompetencer_1",
        },
        {
          text: "Code",
          location: ".kompetencer_2",
        },
        {
          text: "Languages",
          location: ".kompetencer_3",
        },
        {
          text: "Danish - Native",
          location: ".kompetencer_4",
        },
        {
          text: "English - Fluent",
          location: ".kompetencer_5",
        },
        {
          text: "Some of my earlier projects",
          location: ".projekter_0",
        },
        {
          text: "The goal was to establish a strong online presence for our local guitar repair shop by creating a user-friendly website. In the project, I was responsible for the Git process, including version control and collaboration. I set up a comprehensive database of guitar information by fetching JSON elements. My focus was also on global CSS for a consistent visual identity throughout the website. We used the Astro Framework for the project, enhancing our ability to deliver a modern web experience.",
          location: ".projekter_1",
        },
        {
          text: "During this 1st-semester project, I had the opportunity to develop an impressive portfolio website showcasing my work. My primary focus was on CSS, where I worked diligently to design and implement elements, as well as add visually appealing animations. The goal was not only to organize projects but also to create a website with a beautiful CSS design and smooth animations. This solo project strengthened my CSS skills and provided valuable experience in independent project management.",
          location: ".projekter_2",
        },
        {
          text: "In the project aimed at enhancing Ole's Hus's online presence, emphasis was placed on presenting the business in an engaging way to strengthen their image. We worked on several aspects, including the development of a new website, production of a video, and creation of visually impressive images. My role was crucial in this process, overseeing content creation and leading the coding process of the website. I applied the SCRUM method as a tool to streamline the workflow and ensure we met our goals within the specified framework. Through collaboration, we succeeded in creating a website that not only functioned optimally technically but also reflected Ole's House's identity in a visually appealing manner. The accompanying video and imagery were carefully designed to showcase Ole's House in the best light and contribute to a stronger online presence. The result of our efforts was not just an updated online platform for Ole's House but also a reinforcement of their brand and image, which was the overall purpose of the project.",
          location: ".projekter_3",
        },
        {
          text: "Want to know more about me?",
          location: ".cta_1",
        },
        {
          text: "Contact me here:",
          location: ".cta_2",
        },
        {
          text: "Phone +45 4057 3503",
          location: ".cta_3",
        },
      ],
    },
  };

  let locale = "";
  const selectElement = document.querySelector("#language");

  selectElement.addEventListener("change", () => {
    locale = selectElement.value;
    texts[locale].texts.forEach((each) => {
      const element = document.querySelector(each.location);
      if (element) {
        element.textContent = each.text;
      } else {
        console.error(`Element with selector '${each.location}' not found.`);
      }
    });
    console.log(`This is the selected Language: ${locale}`);
  });
});

javaButton.addEventListener("click", () => {
  toggleContent(javaContent);
});

portButton.addEventListener("click", () => {
  toggleContent(portContent);
});

olesButton.addEventListener("click", () => {
  toggleContent(olesContent);
});

function toggleContent(content) {
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    console.log("Closed");
  } else {
    content.style.maxHeight = "1000px";
    console.log("Opened");
  }
}
document.addEventListener("mousemove", function (e) {
  var cursor = document.getElementById("custom-cursor");

  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
});

const sections = document.querySelectorAll(".fade-in-section");

function handleScroll() {
  const windowHeight = window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const sectionHeight = section.getBoundingClientRect().height;

    const minimumVisibleHeight = 0.5; // Adjust this value as needed

    const isPartiallyVisible =
      sectionTop <= windowHeight - minimumVisibleHeight * sectionHeight &&
      sectionBottom >= minimumVisibleHeight * sectionHeight;

    if (isPartiallyVisible) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  handleScroll(); // Call handleScroll on page load

  setTimeout(() => {
    handleScroll();
  }, 500);
});

window.addEventListener("scroll", handleScroll);

document.addEventListener("mousemove", function (e) {
  var cursor = document.getElementById("custom-cursor");

  cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
  cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
});
