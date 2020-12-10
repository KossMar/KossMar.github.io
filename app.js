var skillsArr = [
    {
        title: "Languages",
        skills: [
            "Swift",
            "Kotlin",
            "HTML",
            "Javascript",
            "Objective-C",
            "Java",
            "CSS"
        ]
    },
    {
        title: "Frameworks",
        skills: [
            "Core Data",
            "MapKit",
            "WebKit",
            "Core Location",
            "Firebase",
            "GoogleMaps",
            "Keychain",
        ]
    },
    {
        title: "Platforms",
        skills: [
            "XCode",
            "AndroidStudio",
            "Visual Studio",
            "Git/Github",
            "Jira",
            "Target Process",
            "Confluence",
            "AWS",
            "MongoDB"
        ]
    },
    {
        title: "Other",
        skills: [
            "Photoshop",
            "Affinity",
            "Illustrator",
            "Sketch",
            "Ableton Live",
        ]
    },
]

var skillsRowDiv = document.getElementById("skillsRowDiv");

skillsArr.forEach((skillCategory) => {

    // Create Skills Col
    let skillsColDiv = document.createElement("div");
    skillsColDiv.classList.add("container", "skill-section", "col");

    // Create Skills Col Title
    let skillsColTitle = document.createElement("h3");
    skillsColTitle.innerHTML = skillCategory.title;

    // Add Skills Col Title to Skills Col
    skillsColDiv.appendChild(skillsColTitle);

    // Create Skills Col Body Container
    let skillsColBodyContainer = document.createElement("div");
    skillsColBodyContainer.classList.add("container");

    // Create Skills Col Body
    let skillsColBody = document.createElement("div");
    skillsColBody.classList.add("row", "row-cols-1", "skills-col-body");

    // Add Skills Col Body to Skills Col Body Container
    skillsColBodyContainer.appendChild(skillsColBody);

    // Create All Skill Cards
    skillCategory.skills.forEach((skill) => {

        // Create Individual Skill Card
        var skillCardDiv = document.createElement("div");
        skillCardDiv.classList.add("skill-card", "col-lg-4", "col-md-4", "col-sm-6");

        // Create Skill Title
        var skillTitleDiv = document.createElement("div");
        skillTitleDiv.classList.add("skill-title");
        skillTitleDiv.innerHTML = skill;

        // Add Skill Title to Skill Card
        skillCardDiv.appendChild(skillTitleDiv);

        // Add Skill Card to Skills Col Body
        skillsColBody.appendChild(skillCardDiv);
    });

    // Add Skills Col Body Container to Skills Col
    skillsColDiv.appendChild(skillsColBodyContainer)

    // Add Skills Col to Skills Row
    skillsRowDiv.appendChild(skillsColDiv);

});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () { 
        this.classList.toggle("active");

        var content = this.nextElementSibling;
        var container = this.parentNode.parentNode.parentNode;


        if (this.classList.contains("active")) {
            content.style.maxHeight =  content.scrollHeight + "px";
            this.innerHTML = "Less Info"
            container.style.backgroundColor = "#f7fbfc";
        } else {
            content.style.maxHeight = 0;
            this.innerHTML = "More Info"
            container.style.backgroundColor = "white";
        }
    });
}

var navbar = document.getElementById("nav-main");
var experience = document.getElementsByClassName("experience__section-container")[0];

var sticky = navbar.offsetTop;

window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
        experience.classList.add("extra-pad");
      } else {
        navbar.classList.remove("sticky");
        experience.classList.remove("extra-pad");
      }
}

