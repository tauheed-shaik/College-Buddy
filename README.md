# College Buddy - SRIT Virtual Assistant Suite

Welcome to **College Buddy**, a comprehensive virtual assistant suite designed for Srinivasa Ramanujan Institute of Technology (SRIT). This project includes two powerful assistants:

1. **Tara** - A voice-activated virtual assistant for hands-free information access.
2. **College Mantra** - A text-based chat assistant for detailed queries and resource access.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [License](#license)

## Features

### Tara - Voice Assistant (`tara.html`)
- Voice-activated general queries ("Who are you?", "What can you do?")
- Department information (CSE, ECE, Civil, Mechanical, etc.)
- Faculty profiles with direct links to personal websites
- Access to essential services (ECAP portals, examination portals, fee payment)
- Information on clubs, committees, and special interest groups
- Training and placement updates
- Social media links (Instagram, LinkedIn, YouTube, etc.)
- Additional institutional information (management details, notifications)
- Error handling for speech recognition issues
- Visual feedback during voice input

### College Mantra - Chat Assistant (`interface.html`)
- Text-based interaction for detailed queries
- Quick access to campus resources and facilities
- Event updates and academic resources
- Student services (fee payments, exam schedules)
- Faculty and department information
- Club and organization details
- Contact and support information

## Project Structure

```
college-buddy/
├── index.html                 # Landing page
├── tara.html                  # Tara voice assistant
├── interface.html             # College Mantra chat assistant
├── CollegeMantra.html         # Alternative chat interface
├── pages/
│   ├── initialHelp.html       # Main help documentation
│   ├── taraHelp.html          # Tara-specific help
│   ├── collegeMantraHelp.html # College Mantra help
│   ├── contact.html           # Contact page
│   ├── feepayment.html        # Fee payment portal
│   ├── library.html           # Library information
│   ├── examsection.html       # Examination section
│   ├── csehodcabin.html       # CSE HOD cabin
│   ├── ece dept.html          # ECE department
│   ├── eee dept.html          # EEE department
│   ├── civil dept.html        # Civil department
│   ├── csd and csm dept.html  # CSD and CSM departments
│   ├── cblock.html            # C block
│   ├── bblock.html            # B block
│   ├── basketball.html        # Basketball court
│   ├── canteen.html           # Canteen
│   ├── boyshostel.html        # Boys hostel
│   ├── girlshostel.html       # Girls hostel
│   ├── boys washroom.html     # Boys washroom
│   ├── girlswashroom.html     # Girls washroom
│   ├── ground.html            # Ground floor
│   ├── staffroom.html         # Staff room
│   ├── waterfacility.html     # Water facility
│   ├── h and s hod cabin.html # H and S HOD cabin
│   ├── mechanical hod cabin.html # Mechanical HOD cabin
│   ├── principalroom.html     # Principal's room
│   ├── sports and ncc room.html # Sports and NCC room
│   ├── chemistrylab.html      # Chemistry lab
│   ├── physics lab.html       # Physics lab
│   ├── eee lab.html           # EEE lab
│   ├── computer labs.html     # Computer labs
│   ├── ablockseminarhall.html # A block seminar hall
│   ├── bblockseminarhall.html # B block seminar hall
│   └── mainblockseminarhall.html # Main block seminar hall
├── assets/
│   ├── css/
│   │   └── main.css           # Main stylesheet
│   ├── js/
│   │   └── main.js            # Main JavaScript file
│   └── images/                # All project images
├── netlify.toml               # Netlify configuration
├── .gitignore                 # Git ignore file
└── README.md                  # This file
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/tauheed-shaik/College-Buddy.git
   ```
2. Navigate to the project directory:
   ```
   cd college-buddy
   ```
3. Open `index.html` in your browser to start using the application.

## Usage

### Using Tara (Voice Assistant)
1. Open `tara.html` in a supported browser (Chrome/Edge recommended).
2. Click the microphone button to activate Tara.
3. Speak your query clearly (e.g., "Open CSE department").
4. Tara will respond with voice feedback and open relevant pages.

For a full list of supported voice commands, see `pages/taraHelp.html`.

### Using College Mantra (Chat Assistant)
1. Open `interface.html` in your browser.
2. Use the chat interface to type your queries.
3. College Mantra will provide text responses with links to relevant resources.

## Deployment

This project is deployed on Netlify and can be accessed at:
[https://college-buddy-srit.windsurf.build](https://clgbot.netlify.app/)

To deploy your own version:
1. Fork this repository.
2. Connect your GitHub account to Netlify.
3. Select this repository for deployment.
4. Configure the build settings if necessary (should work with default settings).

## Browser Support

This project works in all modern browsers that support:
- CSS Variables
- Flexbox and Grid layouts
- ES6 JavaScript
- Fetch API
- Web Speech API (for Tara's voice recognition)

**Recommended browsers:**
- Google Chrome (latest version)
- Microsoft Edge (latest version)

## License

This project is for educational purposes. Feel free to modify and extend as needed.
