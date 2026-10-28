export const profile = {
  name: "Yash Vinod Sawant",
  title: "Full Stack Software Developer",
  tagline:
    "Web Developer with 2.5+ years of experience building high-performance web applications with JavaScript, TypeScript, React, and Node.js.",
  summary:
    "Skilled in developing responsive user interfaces, reusable components, and end-to-end features, with a track record of improving performance and reliability across production systems. Experienced in debugging complex issues, translating ambiguous requirements into working solutions, and collaborating across engineering, design, and product teams.",
  email: "yashsawant123910@gmail.com",
  phone: "+91 9420383629",
  github: "https://github.com/yashVSawant",
  linkedin: "https://www.linkedin.com/in/yash-sawant",
  resumeUrl: "#",
};

export const currentProjects = [
  {
    id: "vlocity-dashboard-apis",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Restaurant Dashboard Analytics APIs",
    type: "feature",
    problem:
      "ClickBacon needed a way to surface actual vs. budget financial data across every category and subcategory for a restaurant, but no backend existed to aggregate and serve this data.",
    solution:
      "Designed and built the backend APIs powering the dashboard, aggregating category/subcategory-level actual and budget values per restaurant.",
    impact:
      "Became one of the first major backend features I owned — the foundation for ClickBacon's core financial dashboard.",
    techStack: ["Node.js", "NestJS", "Prisma", "MySQL", "REST APIs"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-email-template-system",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Centralized Email Template Engine",
    type: "feature",
    problem:
      "50+ transactional emails existed as scattered, unstructured code with no single source of truth — making updates error-prone and inconsistent.",
    solution:
      "Migrated all email logic into a structured database table storing subject, body, variables, and purpose for each template, replacing hardcoded email code with a single reusable system. Later enhanced the email body design as a follow-up improvement.",
    impact:
      "Created one centralized source of truth for 50+ automated emails, making future updates and design changes fast and consistent.",
    techStack: ["Node.js", "NestJS", "MySQL", "TypeScript"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-column-visibility",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Column Visibility Controls",
    type: "feature",
    problem:
      "Users had no way to customize which table columns they wanted to view, leading to cluttered, one-size-fits-all table views.",
    solution:
      "Built full-stack column visibility controls, letting users show/hide specific table columns based on preference.",
    impact:
      "Gave users a more personalized, decluttered view of dense data tables across the platform.",
    techStack: ["React", "TypeScript", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-hide-comments-toggle",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Partner Comment Visibility Toggle",
    type: "feature",
    problem:
      "Partner users needed a way to keep certain notes-section comments private from normal users, but no visibility control existed.",
    solution:
      "Implemented a toggle allowing partner users to hide their comments in the notes section from normal users.",
    impact:
      "Enabled more controlled, role-aware communication within the notes/comments workflow.",
    techStack: ["React", "TypeScript", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-transaction-edit-lock",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Transaction Section Edit Protection",
    type: "bugfix",
    problem:
      "Transaction sections opened directly in an editable state, causing users to accidentally modify financial data while simply reading it.",
    solution:
      "Added an explicit edit button/mode so transactions open read-only by default and require deliberate action to edit.",
    impact:
      "Eliminated accidental edits to sensitive transaction data, improving data integrity.",
    techStack: ["React", "TypeScript"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-quickbooks-centralization",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Centralized QuickBooks Data Mapping",
    type: "bugfix",
    problem:
      "QuickBooks account data was being mapped independently on every new page, causing inconsistencies like unstable account ordering across the app.",
    solution:
      "Built a single centralized function to fetch and map QuickBooks account data, replacing duplicated per-page mapping logic.",
    impact:
      "Fixed inconsistent account ordering and made future QuickBooks-related features faster to build on a shared foundation.",
    techStack: ["Node.js", "NestJS", "QuickBooks API", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-upsell-trials",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Billing-Aware Upsell & Free Trial Flow",
    type: "feature",
    problem:
      "There was no mechanism to surface unlocked/premium features to restaurants based on their current billing plan, leaving upsell opportunities untapped.",
    solution:
      "Built a feature that checks a restaurant's billing state and shows relevant locked features, with integrated free-trial activation.",
    impact:
      "Directly supported product growth by surfacing upgrade opportunities to restaurants at the right moment.",
    techStack: ["React", "TypeScript", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-restaurant-data-copy",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Automated Restaurant Onboarding Data Copy",
    type: "feature",
    problem:
      "Onboarding a new restaurant required manually copying settings and account data from an existing restaurant — a slow, error-prone process. An interim 'extract accounts from sheets' workaround was also in use.",
    solution:
      "Built an automated copy-data feature to transfer settings and account data to newly onboarded restaurants, which fully replaced the manual sheet-extraction workaround.",
    impact:
      "Removed a manual onboarding bottleneck and eliminated a redundant workaround feature entirely.",
    techStack: ["Node.js", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-terms-conditions",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Terms & Conditions Acceptance Flow",
    type: "feature",
    problem:
      "There was no consistent way to capture and re-confirm terms and conditions acceptance across signup, existing users, and payment flows.",
    solution:
      "Built a T&C modal shown at signup, re-shown to existing users post-login, and again during payment flows.",
    impact:
      "Ensured consistent legal/compliance coverage across all major user touchpoints.",
    techStack: ["React", "TypeScript", "NestJS"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-cron-document-emails",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Automated Daily Document Reminder Emails",
    type: "feature",
    problem:
      "Partner admins had no automated way to know which documents were pending review or needed attention.",
    solution:
      "Wrote a scheduled cron job that sends daily emails to partner admins summarizing pending and outstanding documents.",
    impact:
      "Kept partner admins proactively informed without manual follow-up, reducing missed document reviews.",
    techStack: ["Node.js", "NestJS", "Cron", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-upload-notification-management",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Document Upload Notification Management",
    type: "feature",
    problem:
      "There was no configurable way to control who got notified when a document upload succeeded or failed.",
    solution:
      "Added UI toggles for enabling/disabling upload notifications and allowing users to add new recipient emails, with matching backend logic to handle recipient management.",
    impact:
      "Gave teams fine-grained control over document-upload alerting instead of a fixed, hardcoded recipient list.",
    techStack: ["React", "TypeScript", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-deployment-banners",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Deployment Alert Banner System",
    type: "feature",
    problem:
      "Users had no visibility into ongoing deployments, and there was no clean way to dismiss outdated alerts.",
    solution:
      "Built a banner system to alert users during deployments, with version-based logic to control when a dismissed banner should reappear for new releases.",
    impact:
      "Improved transparency around deployments while avoiding repeat/stale alert fatigue for users.",
    techStack: ["React", "TypeScript"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-account-data-transfer",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Cross-Table Account Data Transfer",
    type: "feature",
    problem:
      "There was no way to transfer one account's data to another, especially when the accounts spanned different tables and carried large volumes of budget/actual data.",
    solution:
      "Built a data transfer feature capable of moving account data — including budget and actual figures — across differing table structures.",
    impact:
      "Enabled a previously impossible operational workflow for merging/reassigning account data safely.",
    techStack: ["Node.js", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-vendor-document-replace",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Vendor Document Replacement Portal",
    type: "feature",
    problem:
      "Vendors accessing shared upload pages via email could only upload new documents, so fixing a blurry/incorrect invoice required a full re-upload instead of a simple replace.",
    solution:
      "Added the ability for vendors to directly replace an already-uploaded document (e.g. a blurry invoice) within their limited-access share page.",
    impact:
      "Simplified the vendor document-correction workflow and removed unnecessary duplicate uploads.",
    techStack: ["React", "TypeScript", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-table-search-enhancement",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "Full-Column Table Search",
    type: "feature",
    problem:
      "Table search existed but only worked on a subset of columns, so users couldn't reliably find data visible on screen.",
    solution:
      "Enhanced the search functionality to cover all visible table columns consistently across modules.",
    impact:
      "Made table search reliable and predictable — if data is visible, it's now searchable.",
    techStack: ["React", "TypeScript", "NestJS"],
    videoUrl: "",
    date: "2024",
  },
  {
    id: "vlocity-bug-fixes",
    company: "Vlocity.ai",
    role: "Full Stack Software Developer",
    title: "400+ Production Bug Fixes",
    type: "bugfix",
    problem:
      "As the platform scaled across modules, a continuous stream of production issues needed rapid triage and resolution to maintain reliability.",
    solution:
      "Diagnosed and resolved 400+ bugs across frontend and backend modules alongside ongoing feature work.",
    impact:
      "Maintained platform stability and reliability at scale across ClickBacon's growing feature set.",
    techStack: ["React", "TypeScript", "Node.js", "NestJS", "MySQL"],
    videoUrl: "",
    date: "2024 - Present",
  },
];

export const personalProjects = [
  {
    id: "project-flow-maker",
    title: "AI-Powered Project Flow Maker",
    description:
      "AI-powered web application that generates and manages visual project workflows from natural language requirements.",
    problem:
      "Manual project planning and visual diagramming is repetitive, time-consuming, and difficult to manage for multi-tier projects.",
    solution:
      "Created an AI workflow generator with a nested component system supporting unlimited depth, live preview synchronization (30+ reusable components), 15+ configurable properties, and 4+ user role collaboration (RBAC, contributor/viewer permissions). Deployed on AWS EC2 with Nginx, SSL, and Vercel.",
    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "AWS EC2",
      "AWS S3",
      "Nginx",
      "SSL",
      "Vercel",
    ],
    githubUrl: "https://github.com/yashVSawant/AI_project_maker-FE",
    liveUrl: "https://github.com/yashVSawant/AI_project_maker-FE",
    videoUrl: "",
    featured: true,
  },
  {
    id: "cricket-scoreboard-app",
    title: "Cricket Team & Tournament Management Platform",
    description:
      "A multi-role cricket platform where organizations run tournaments and live scorecards, and players manage their own profiles and match stats.",
    problem:
      "Casual and semi-professional cricket organizations lacked an accessible way to manage teams and tournaments, while players and fans had no central place to follow live scores, schedules, or personal match performance.",
    solution:
      "Built a full-stack platform supporting three roles: players can create accounts, join teams, and view their personal match statistics from their profile; organizations can create teams, schedule and manage tournaments, and update live scorecards during matches; and general users can browse live scores, upcoming matches, and tournament schedules in real time.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "MySQL",
      "WebSockets",
    ],
    githubUrl: "",
    liveUrl: "",
    videoUrl: "",
    featured: true,
  },
  {
    id: "realtime-group-chat-app",
    title: "Real-Time Group Chat Application",
    description:
      "A group messaging app with instant, bidirectional message delivery across multiple chat rooms.",
    problem:
      "Wanted hands-on experience building real-time, bidirectional communication systems beyond typical request/response REST APIs.",
    solution:
      "Built a group chat application using WebSockets for real-time message delivery, supporting multiple concurrent chat rooms with live message updates across connected users.",
    techStack: ["React", "Node.js", "WebSockets", "Express.js", "MySQL"],
    githubUrl: "",
    liveUrl: "",
    videoUrl: "",
    featured: false,
  },
  {
    id: "telegram-broadcast-tool",
    title: "Telegram Group Broadcast Tool",
    description:
      "A custom web UI integrated with the Telegram Bot API to send messages directly into a Telegram group without opening Telegram.",
    problem:
      "Sending updates or information to a Telegram group required manually switching to the Telegram app, adding friction for quick, frequent broadcasts.",
    solution:
      "Integrated the Telegram Bot API with a lightweight custom UI, allowing any message or piece of information to be composed and sent directly from the browser into a connected Telegram group.",
    techStack: ["React", "Node.js", "Express.js", "Telegram Bot API"],
    githubUrl: "",
    liveUrl: "",
    videoUrl: "",
    featured: false,
  },
];

export const nowLearning = [
  {
    id: "nl-1",
    title: "Event-Driven Systems & Message Queues",
    description:
      "Learning to decouple backend services using message brokers (Kafka / BullMQ) for async processing, retries, and event-driven workflows beyond direct REST calls.",
    link: "https://kafka.apache.org/",
  },
  {
    id: "nl-2",
    title: "Automated Testing & CI/CD Pipelines",
    description:
      "Building unit and integration test coverage with Jest, and setting up automated CI/CD pipelines with GitHub Actions for safer, faster deployments.",
    link: "https://jestjs.io/",
  },
  {
    id: "nl-3",
    title: "Caching Strategies with Redis",
    description:
      "Applying Redis for query caching, session storage, and rate limiting to push API and database performance further at scale.",
    link: "https://redis.io/",
  },
  {
    id: "nl-4",
    title: "Docker & Container Orchestration",
    description:
      "Moving from manual EC2/Nginx deployments toward containerized services with Docker, with early exploration of Kubernetes for orchestration.",
    link: "https://www.docker.com/",
  },
];
