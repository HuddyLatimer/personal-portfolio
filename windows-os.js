// Windows 10 OS Easter Egg
document.addEventListener("DOMContentLoaded", function() {
  const pagePeel = document.getElementById("pagePeel");
  const windowsOS = document.getElementById("windowsOS");
  const winCloseBtn = document.getElementById("winCloseBtn");
  const startButton = document.getElementById("startButton");
  const startMenu = document.getElementById("startMenu");
  const terminalIcon = document.getElementById("terminalIcon");
  const winTerminal = document.getElementById("winTerminal");
  const terminalClose = document.getElementById("terminalClose");
  const terminalInput = document.getElementById("terminalInput");
  const terminalOutput = document.getElementById("terminalOutput");

  // Terminal commands database
  const commands = {
    help: {
      desc: "Display all available commands",
      output: `Available Commands:

  help          - Display this help menu
  about         - Learn about Hudson
  skills        - View technical skills
  projects      - List featured projects
  contact       - Get contact information
  education     - View educational background
  experience    - View work experience
  github        - Open GitHub profile
  linkedin      - Open LinkedIn profile
  email         - Get email address
  resume        - View resume
  clear         - Clear terminal screen
  joke          - Get a random dev joke
  quote         - Get an inspirational quote
  time          - Display current time
  weather       - Check Halifax weather
  crypto        - View cryptocurrency prices
  matrix        - Enter the Matrix...
  hack          - Initialize hacking sequence
  exit          - Return to portfolio`
    },
    about: {
      desc: "Learn about Hudson",
      output: `Hudson Latimer - Full-Stack Web Developer

  Location: Halifax, Nova Scotia
  Focus: Building modern web applications with AI integration
  Currently: Exploring DevOps, and the future of AI

  "Building the future, one line at a time."

  Type 'skills' to see what I work with.`
    },
    skills: {
      desc: "View technical skills",
      output: `Technical Skills:

  Languages:
    - JavaScript/TypeScript (Expert)
    - Python, C++, SQL

  Frontend:
    - React, Next.js, Vite
    - TailwindCSS, Bootstrap, ShadCN UI

  Backend:
    - Node.js, Express
    - Supabase, Firebase

  Database:
    - PostgreSQL, MongoDB

  Cloud & DevOps:
    - AWS, Docker, Kubernetes
    - Vercel, Netlify, Cloudflare

  Tools:
    - Git, GitHub, VS Code
    - Postman, Figma`
    },
    projects: {
      desc: "List featured projects",
      output: `Featured Projects:

  1. WealthTrackPro (✓ Complete)
     AI-powered personal finance management
     Tech: React, TypeScript, Supabase
     Live: wealthtrackpro.netlify.app

  2. Fridgeo AI (✓ Complete)
     Smart recipe generator with image recognition
     Tech: Next.js, Gemini AI, Supabase
     Live: fridgeo.app

  3. BlogCraft AI (In Planning)
     AI-powered blog post writer with SEO
     Tech: Next.js, Gemini, Lexical Editor

  4. CodeExplainAI (✓ Complete)
     Code-to-plain-English converter
     Tech: Next.js, Gemini, Netlify Functions
     Live: codeexplainai.vercel.app

  Type 'github' to view all projects.`
    },
    contact: {
      desc: "Get contact information",
      output: `Contact Information:

  Email:    hudsonlatimer4@gmail.com
  GitHub:   github.com/huddylatimer
  LinkedIn: linkedin.com/in/hudson-latimer-585277343
  Twitter:  @HuddyGLatimer
  LeetCode: leetcode.com/u/HuddyLatimer

  Location: Halifax, Nova Scotia

  Type 'email' to send me a message.`
    },
    education: {
      desc: "View educational background",
      output: `Education:

  Currently pursuing Computer Science & Software Development

  Focus Areas:
    - Full-Stack Web Development
    - Data Structures & Algorithms
    - AI/ML Integration
    - Cloud Architecture

  Continuous Learning:
    - LeetCode problem solving
    - Open source contributions
    - Building side projects`
    },
    experience: {
      desc: "View work experience",
      output: `Experience:

  Full-Stack Developer
    - Building modern web applications
    - React, Node.js, TypeScript
    - AI integration with Gemini API
    - Cloud deployment (AWS, Vercel, Netlify)

  Open Source Contributor
    - Active on GitHub
    - Contributing to web development projects

  Current Focus:
    - AI-powered applications
    - Web3 and blockchain technology
    - SaaS platforms`
    },
    github: {
      desc: "Open GitHub profile",
      action: () => window.open("https://github.com/huddylatimer", "_blank")
    },
    linkedin: {
      desc: "Open LinkedIn profile",
      action: () => window.open("https://www.linkedin.com/in/hudson-latimer-585277343", "_blank")
    },
    email: {
      desc: "Get email address",
      output: `Email: hudsonlatimer4@gmail.com

  Feel free to reach out for:
    - Project collaborations
    - Job opportunities
    - Technical discussions
    - Networking

  I typically respond within 24-48 hours.`
    },
    resume: {
      desc: "View resume",
      output: `Opening resume...

  [Resume would open here]

  For the latest version, please contact me directly.`
    },
    clear: {
      desc: "Clear terminal screen",
      action: () => {
        terminalOutput.innerHTML = '';
      }
    },
    joke: {
      desc: "Get a random dev joke",
      action: () => {
        const jokes = [
          "Why do programmers prefer dark mode? Because light attracts bugs!",
          "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
          "Why do Java developers wear glasses? Because they don't C#.",
          "A SQL query walks into a bar, walks up to two tables and asks... 'Can I join you?'",
          "Why did the programmer quit his job? Because he didn't get arrays.",
          "There are 10 types of people in this world: those who understand binary and those who don't.",
          "Why do programmers always mix up Halloween and Christmas? Because Oct 31 == Dec 25.",
          "What's a programmer's favorite hangout place? Foo Bar."
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
      }
    },
    quote: {
      desc: "Get an inspirational quote",
      action: () => {
        const quotes = [
          '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
          '"First, solve the problem. Then, write the code." - John Johnson',
          '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
          '"In order to be irreplaceable, one must always be different." - Coco Chanel',
          '"The only way to do great work is to love what you do." - Steve Jobs',
          '"Simplicity is the soul of efficiency." - Austin Freeman',
          '"Make it work, make it right, make it fast." - Kent Beck',
          '"If you sleep on a win, you\'ll wake up with a loss." - Hudson Latimer'
        ];
        return quotes[Math.floor(Math.random() * quotes.length)];
      }
    },
    time: {
      desc: "Display current time",
      action: () => {
        const now = new Date();
        const halifaxTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Halifax" }));
        return `Current Time in Halifax, NS:

  ${halifaxTime.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })}

  Timezone: AST (Atlantic Standard Time) GMT-4`;
      }
    },
    weather: {
      desc: "Check Halifax weather",
      output: `Halifax, Nova Scotia Weather:

  [Weather data would be fetched from an API]

  For real-time weather, visit:
  weather.gc.ca or weather.com`
    },
    crypto: {
      desc: "View cryptocurrency prices",
      output: `Cryptocurrency Prices:

  Loading prices from portfolio...
  Check the crypto tickers in the terminal card above!

  Supported: BTC, ETH, LTC
  Updates: Every 60 seconds`
    },
    matrix: {
      desc: "Enter the Matrix...",
      action: () => {
        const chars = '0123456789ABCDEFアイウエオカキクケコサシスセソタチツテト';
        let output = '\n';
        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 50; j++) {
            output += chars[Math.floor(Math.random() * chars.length)];
          }
          output += '\n';
        }
        output += '\nWake up, Hudson...\nThe Matrix has you...';
        return output;
      }
    },
    hack: {
      desc: "Initialize hacking sequence",
      action: () => {
        return `[INITIALIZING HACK SEQUENCE]

  Connecting to mainframe... ████████████ 100%
  Bypassing firewall... ████████████ 100%
  Accessing database... ████████████ 100%
  Extracting data... ████████████ 100%

  [ACCESS GRANTED]

  Just kidding! I'm a developer, not a hacker 😄
  Building things > Breaking things

  Type 'projects' to see what I actually build.`;
      }
    },
    exit: {
      desc: "Return to portfolio",
      action: () => {
        windowsOS.classList.remove("active");
      }
    }
  };

  // Update Windows clock
  function updateWindowsClock() {
    const now = new Date();
    const timeEl = document.getElementById("winClockTime");
    const dateEl = document.getElementById("winClockDate");

    if (timeEl && dateEl) {
      timeEl.textContent = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
      dateEl.textContent = now.toLocaleDateString('en-US', {
        month: 'numeric',
        day: 'numeric',
        year: 'numeric'
      });
    }
  }

  // Update clock every second
  setInterval(updateWindowsClock, 1000);
  updateWindowsClock();

  // Window Dragging Functionality
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  const titleBar = document.querySelector('.win-title-bar');
  const terminal = document.querySelector('.win-terminal');

  if (titleBar && terminal) {
    titleBar.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
  }

  function dragStart(e) {
    if (e.target === titleBar || titleBar.contains(e.target)) {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;
      isDragging = true;
    }
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      xOffset = currentX;
      yOffset = currentY;

      terminal.style.transform = `translate(calc(-50% + ${currentX}px), calc(-50% + ${currentY}px))`;
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
  }

  // Page peel click - open Windows OS
  if (pagePeel) {
    pagePeel.addEventListener("click", () => {
      windowsOS.classList.add("active");
      pagePeel.style.display = "none";
    });
  }

  // Close Windows OS
  if (winCloseBtn) {
    winCloseBtn.addEventListener("click", () => {
      windowsOS.classList.remove("active");
      pagePeel.style.display = "block";
      startMenu.classList.remove("active");
      winTerminal.classList.remove("active");
    });
  }

  // Start button toggle
  if (startButton) {
    startButton.addEventListener("click", (e) => {
      e.stopPropagation();
      startMenu.classList.toggle("active");
    });
  }

  // Close start menu when clicking outside
  document.addEventListener("click", (e) => {
    if (startMenu && !startMenu.contains(e.target) && e.target !== startButton) {
      startMenu.classList.remove("active");
    }
  });

  // Open terminal from desktop icon
  if (terminalIcon) {
    terminalIcon.addEventListener("dblclick", () => {
      winTerminal.classList.add("active");
      startMenu.classList.remove("active");
      terminalInput.focus();
    });
  }

  // Open terminal with 'projects' command from Projects desktop icon
  const projectsIcon = document.getElementById("projectsIcon");
  if (projectsIcon) {
    projectsIcon.addEventListener("dblclick", () => {
      winTerminal.classList.add("active");
      startMenu.classList.remove("active");
      terminalInput.focus();
      // Auto-run the 'projects' command
      setTimeout(() => {
        processCommand("projects");
      }, 100);
    });
  }

  // Open terminal with 'about' command from About Me desktop icon
  const aboutIcon = document.getElementById("aboutIcon");
  if (aboutIcon) {
    aboutIcon.addEventListener("dblclick", () => {
      winTerminal.classList.add("active");
      startMenu.classList.remove("active");
      terminalInput.focus();
      // Auto-run the 'about' command
      setTimeout(() => {
        processCommand("about");
      }, 100);
    });
  }

  // Open terminal from start menu
  const terminalStartApp = document.querySelector('.start-app[data-app="terminal"]');
  if (terminalStartApp) {
    terminalStartApp.addEventListener("click", () => {
      winTerminal.classList.add("active");
      startMenu.classList.remove("active");
      terminalInput.focus();
    });
  }

  // Close terminal
  if (terminalClose) {
    terminalClose.addEventListener("click", () => {
      winTerminal.classList.remove("active");
    });
  }

  // Terminal input handler
  if (terminalInput) {
    terminalInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const command = terminalInput.value.trim().toLowerCase();
        processCommand(command);
        terminalInput.value = "";
      }
    });
  }

  // Process terminal commands
  function processCommand(command) {
    // Add command to output
    const commandLine = document.createElement("div");
    commandLine.className = "terminal-line";
    commandLine.innerHTML = `<span style="color: #00FF00;">C:\\Hudson&gt;</span> ${command}`;
    terminalOutput.appendChild(commandLine);

    // Process the command
    if (command === "") {
      // Empty command, do nothing
    } else if (commands[command]) {
      const cmd = commands[command];
      if (cmd.action) {
        const result = cmd.action();
        if (result) {
          addOutput(result);
        }
      } else if (cmd.output) {
        addOutput(cmd.output);
      }
    } else {
      addOutput(`'${command}' is not recognized as an internal or external command.

Type 'help' to see available commands.`);
    }

    // Add blank line
    const blankLine = document.createElement("div");
    blankLine.className = "terminal-line";
    blankLine.innerHTML = "&nbsp;";
    terminalOutput.appendChild(blankLine);

    // Scroll to bottom
    terminalOutput.parentElement.scrollTop = terminalOutput.parentElement.scrollHeight;
  }

  // Add output to terminal
  function addOutput(text) {
    const lines = text.split('\n');
    lines.forEach(line => {
      const outputLine = document.createElement("div");
      outputLine.className = "terminal-line";
      outputLine.textContent = line;
      terminalOutput.appendChild(outputLine);
    });
  }
});
