const projects = 
{
    "Question Generation" :
    {
        "Description" :
        [
            "Developed a Question-Answer Flashcard generation program in Python",
            "Trained a T5 Question Generation model and BERT Question Answering model to work in tandem",
            "Integrated models into web application's backend server using Flask"
        ],
        "Dates" : "June 2022 - August 2022",
        "Link" : "https://showcase.codeday.org/project/cl5bfupps1021975faj5xmfcsgel",
        "Skills" :
        [
            "Natural Language Processing",
            "PyTorch",
            "JavaScript",
            "Flask",
            "Text-to-Text Generation",
            "Neural Network Architecture",
            "Transformer Training"
        ]
    },
    "Personal Website" :
    {
        "Description" :
        [
            "Developing a website to document personal and professional growth",
            "Hosting personal blog and showcasing art portfolio",
            "Continuous development makes this an everlasting work in progress"
        ],
        "Dates" : "July 2022 - Present",
        "Link" : "(you are here)",
        "Skills" :
        [
            "Javascript",
            "P5.JS"
        ]
    },
    "WordPress Vulnerability Testing with Kali Linux" :
    {
        "Description" :
        [
            "Built and deployed dummy Wordpress Servers for testing",
            "Researched common risks and vulnerabilities found in Wordpress websites",
            "Implemented a variety of exploits, including XSS, SQL Injections, CSRF, Privilege Escalation, and combinations",
            "Prepared detailed writeups and reports of each vulnerability found and identified insecure source code involved"
        ],
        "Dates" : "January 2022 - May 2022",
        "Link" : "N/A",
        "Skills" :
        [
            "Penetration Testing",
            "Cryptography",
            "Kali Linux Fundamentals",
            "Injection and RCE",
            "Documentation Practices"
        ]
    },
    "DreamBoard" :
    {
        "Description" :
        [
            "Part of 40 chosen from pool of 500 applicants for the Fall 2021 cohort of 'ACM UTD Projects'",
            "Worked on backend team to match users with furniture from various vendors based on color and style preferences",
            "Implemented using Node.js, Express for communication with Frontend, and MongoDB for user database",
            "Aggregated data from a variety of external APIs and custom built Web Scrapers and filtered by preferences"
        ],
        "Dates" : "September 2021 - November 2021",
        "Link" : "https://github.com/acm-projects/DreamBoard",
        "Skills" :
        [
            "Web Development",
            "Node.js",
            "Express",
            "MongoDB",
            "APIs",
            "Postman",
            "Web Scraping"
        ]
    },
    "Interpreting Historical Data Using Text-Mining Extraction" :
    {
        "Description" :
        [
            "Part of ACM UTD's Research program, working with a team of peers under a faculty advisor and graduate student",
            "Analyzed 150+ civilian accounts from the Civil War to interpret social patterns and changes by demographics",
            "Extracted various scores including author sentiment, reading ease, topics in the text, and relevant n-grams",
            "Collected and visualized extracted findings using Matplotlib",
            "Presented research methodology and findings via research poster for judging by professors in the field"
        ],
        "Dates" : "February 2021 - May 2021",
        "Link" : "https://github.com/ACM-Research/text-mining-extraction",
        "Skills" :
        [
            "Natural Language Processing",
            "Web Scraping",
            "Data Visualization",
            "Git",
            "Research Design and Presentation"
        ]
    },
    "Digital Simon Game" :
    {
        "Description" :
        [
            "Developed a digital implementation of the Simon Light and Sound Memory Game",
            "Built as part of pre-work for CodePath SITE Internship Application Pre-Work and worked on after as personal project"
        ],
        "Dates" : "April 2022",
        "Link" : "https://glitch.com/~gentle-periodic-moose",
        "Skills" :
        [
            "Javascript",
            "HTML/CSS",
            "Sound and Image processing in the Web"
        ]
    },
    "CLI Maze Generator" :
    {
        "Description" :
        [
            "Simple command line maze generator written in Java",
            "Implemented using Disjoint Sets"
        ],
        "Dates" : "October 2021",
        "Link" : "N/A",
        "Skills" :
        [
            "Data Structures and Algorithms",
            "Java"
        ]
    }
}

function createCards()
{
    for (const projectname in projects)
    {
        var currItem = projects[projectname]
        var result = createCard(name=projectname, link=currItem['Link'], date=currItem['Dates'], description=currItem['Description'], skills=currItem['Skills'])
        document.getElementById('ProjectsList').insertAdjacentHTML("beforeend",result)
    }
}

function createCard(name, link, date, description, skills)
{
    var mainDiv = "<div class=\"Project\">"
    var nameDiv = "<div id=\"Name\">"
    var linkDiv = "<div id=\"Link\">"
    var dateDiv = "<div id=\"Date\">"
    var descDiv = "<div id=\"Description\"> <ul>"
    var skilDiv = "<div id=\"Skills\"> <b>skills:</b> "
    var closeDiv = "</div>"
    var closeDescDiv = "</ul> </div>"

    for (var i = 0; i < description.length; i++)
    {
        var currStr = "<li>" + description[i] + "</li>"
        descDiv += currStr
    }
    descDiv += closeDescDiv

    for (var i = 0; i < skills.length; i++)
    {
        var currStr = skills[i] + ", "
        skilDiv += currStr
    }
    skilDiv += closeDiv

    nameDiv += name
    nameDiv += closeDiv

    linkDiv += link
    linkDiv += closeDiv

    dateDiv += date
    dateDiv += closeDiv


    var returnstr = (mainDiv + nameDiv + linkDiv + dateDiv + descDiv + skilDiv + closeDiv)
    return returnstr
}

createCards(projects)