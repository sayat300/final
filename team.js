const names = ["John Johnson", "Carlos Hernandez", "Rick White", "Emily Turner"];
const jobTitles = ["Main coach", "Coach", "Coach", "Gym manager",];
const workExperiences = ["10 years", "3 years", "4 years", "2 years"];
const certifications = ["John holds certifications in personal training, nutrition, and group fitness, showcasing her commitment to continuous learning and professional development.", "Carlos specializes in strength and conditioning and has successfully worked with professional athletes to enhance their performance in various sports.", "Rick is known for developing innovative and engaging training programs, incorporating elements of functional fitness and agility training to keep clients motivated and challenged.", "Emily has been managing fitness facilities for over a 2 years, bringing a wealth of experience in operations and customer service."];
const achievements = ["Under John's guidance, numerous clients have achieved significant weight loss and made positive lifestyle changes, earning her recognition for her effective coaching methods. John has trained athletes who have successfully competed in regional fitness competitions, demonstrating her expertise in preparing individuals for high-level events.", "Carlos has authored articles on fitness and training strategies, contributing to reputable fitness magazines and websites, establishing himself as a thought leader in the industry. Carlos is actively involved in community fitness programs, organizing workshops and seminars to promote health and wellness among diverse populations.", "Rick has been instrumental in transforming the lives of clients dealing with health issues such as diabetes and hypertension, using tailored exercise plans to improve overall well-being. Rick's success stories and fitness tips have been featured in local media outlets, showcasing her impact on the community and inspiring others to prioritize their health.", "Successfully implemented new fitness programs resulting in a 20% increase in member participation. Enhanced customer satisfaction by introducing streamlined membership processes."];
const teamImages = ["images/trainerHome.png", "images/trainer1.png", "images/trainer2.png", "images/administrator.png"];

const teamContainer = document.getElementById('team');

for (let index = 0; index < names.length; index++) {
    const card = document.createElement('div');
    card.className = 'card';
    if (index % 2 === 0) {
        card.classList.add('slide-in-left');
    } else {
        card.classList.add('slide-in-right');
    }
    card.style.marginTop = '20px';

    const cardBody = document.createElement('div');
    if (window.innerWidth < 768) {
        cardBody.className = 'card-body grid grid-cols-2 d-flex flex-column';
    } else {
        cardBody.className = 'card-body grid grid-cols-2 d-flex ';
    }
    cardBody.style.padding = '0';

    const imageDiv = document.createElement('div');
    let image = document.createElement('img');
    image.src = teamImages[index];
    if (window.innerWidth < 768) {
        image.setAttribute('width', '100%');
        image.setAttribute('height', 'auto');
    } else {
        image.setAttribute('height', '100%');
        image.setAttribute('width', 'auto');
    }
    image.setAttribute('alt', '');
    imageDiv.appendChild(image);

    const infoDiv = document.createElement('div');
    infoDiv.style.marginLeft = '20px';
    infoDiv.style.marginRight = '20px';

    const trainerName = document.createElement('h2');
    trainerName.className = 'font-g-bold';
    trainerName.textContent = names[index];

    const jobTitle = document.createElement('h2');
    jobTitle.className = 'font-g-bold';
    jobTitle.innerHTML = 'Job title: <span class="font-g-regular">' + jobTitles[index] + '</span>';

    const workExperience = document.createElement('h2');
    workExperience.className = 'font-g-bold';
    workExperience.innerHTML = 'Work experience: <span class="font-g-regular">' + workExperiences[index] + '</span>';

    const certificationsTitle = document.createElement('h2');
    certificationsTitle.className = 'font-g-bold';
    certificationsTitle.textContent = 'Certifications:';

    const certificationsText = document.createElement('p');
    certificationsText.className = 'fs-5';
    certificationsText.textContent = certifications[index];

    const achievementsTitle = document.createElement('h2');
    achievementsTitle.className = 'font-g-bold';
    achievementsTitle.textContent = 'Achievements:';

    const achievementsText = document.createElement('p');
    achievementsText.className = 'fs-5';
    achievementsText.textContent = achievements[index];

    if (index % 2 == 0) {
        infoDiv.appendChild(trainerName);
        infoDiv.appendChild(jobTitle);
        infoDiv.appendChild(workExperience);
        infoDiv.appendChild(certificationsTitle);
        infoDiv.appendChild(certificationsText);
        infoDiv.appendChild(achievementsTitle);
        infoDiv.appendChild(achievementsText);

        cardBody.appendChild(imageDiv);
        cardBody.appendChild(infoDiv);

        card.appendChild(cardBody);

        teamContainer.appendChild(card);
    } else {
        infoDiv.appendChild(trainerName);
        infoDiv.appendChild(jobTitle);
        infoDiv.appendChild(workExperience);
        infoDiv.appendChild(certificationsTitle);
        infoDiv.appendChild(certificationsText);
        infoDiv.appendChild(achievementsTitle);
        infoDiv.appendChild(achievementsText);

        cardBody.appendChild(infoDiv);
        cardBody.appendChild(imageDiv);

        card.appendChild(cardBody);

        teamContainer.appendChild(card);
    }
}

const styleElement = document.createElement('style');

styleElement.insertAdjacentHTML('beforeend', `

    @keyframes slide-in-left {
        0% {
            transform: translateX(-100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slide-in-right {
        0% {
            transform: translateX(100px);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .slide-in-left {
        animation: slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .slide-in-right {
        animation: slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
`);

document.head.appendChild(styleElement);
