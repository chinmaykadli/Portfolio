// ===== PORTFOLIO CONTENT — SINGLE SOURCE OF TRUTH =====
// Edit any text here. Save. Re-deploy. Done.
// No need to touch HTML files.

const CONTENT = {

  // ===== SITE META =====
  meta: {
    title: "Chinmay Kadli — Operations & Project Manager",
    description: "Chinmay Kadli — Operations & Project Manager based in Dublin, Ireland. Stamp 1G work authorisation. MSc Engineering Management, UCD. Strategy, delivery, and process design.",
    ogImage: "og-image.png",
    url: "https://chinmaykadli.com",
  },

  // ===== HERO =====
  hero: {
    name: "Chinmay Kadli",
    role: "Operations & Project Manager — Dublin, Ireland",
    tagline: "Drop me into chaos. I'll build the playbook.",
    anchor: ["Project Management", "Operations", "Strategy & Delivery", "Process Design"],
    stamp: "Stamp 1G — Full work authorisation, no sponsorship required",
    ctaDownload: "Download CV",
    ctaContact: "Contact Me",
    ctaLinkedin: "LinkedIn",
    linkedinUrl: "https://linkedin.com/in/chinmay-kadli",
  },

  // ===== METRICS =====
  metrics: [
    { label: "Revenue Growth", value: "4x", context: "in 4 months" },
    { label: "States Scaled", value: "5", context: "from 1 court" },
    { label: "Seed Round", value: "$2M", context: "3one4 Capital" },
    { label: "Thesis Grade", value: "A-", context: "Analog Devices" },
  ],

  // ===== PROOF WALL =====
  proofWall: {
    sectionLabel: "I Build From Zero",
    items: [
      {
        label: "NyayaNidhi",
        before: "1 court, no processes, employee #3",
        after: "5 states, $24K/month, $2M funded, team of 9",
        highlight: "5 states",
      },
      {
        label: "What The Froot",
        before: "An idea, $340, and the zeal to build during COVID",
        after: "$27K revenue, team of 8, 10+ brand marketplace",
        highlight: "$27K revenue",
      },
      {
        label: "ADI Thesis",
        before: "A research question about fab shutdowns",
        after: "9 fabs simulated, dual-model framework, graded A-",
        highlight: "9 fabs simulated",
      },
    ],
  },

  // ===== ABOUT =====
  about: {
    sectionLabel: "About",
    paragraphs: [
      `<strong>I'm Chinmay Kadli.</strong> I keep walking into "no playbook" situations and building one. I've scaled a legal-tech operation from one court to five Indian states, built a hub-and-spoke delivery model, and grew revenue from $6K to $24K/month in four months.`,
      `I also co-founded a D2C food brand from scratch and modelled semiconductor supply chain disruptions with Analog Devices for my MSc thesis at UCD.`,
      `I navigate ADHD, which means I've had to build real systems for focus, prioritisation, and execution earlier than most. That discipline is now how I work — and it's why I'm drawn to turning messy environments into something that runs.`,
      `I'm in Dublin now — looking for a team with real problems to solve and zero fear of messy starts.`,
    ],
  },

  // ===== CASE STUDIES (cards on index) =====
  caseStudies: [
    {
      ref: "NN-2025",
      hook: "One court to five states — without quality falling apart.",
      skillTags: ["Operations", "Agile", "AI/ML", "Process Design", "Stakeholder Mgmt"],
      metaTags: ["11 months", "Team: 5→9", "Legal-Tech"],
      desc: "Built a hub-and-spoke operating model to scale legal translation and drafting services across Indian states. Grew revenue 4x, redesigned AI architecture, and secured a ~$29K government tender.",
      link: "case-study-nn.html",
      linkText: "Read full case study →",
    },
    {
      ref: "WTF-2021",
      hook: "An idea, a pandemic, and a pivot — built into a 10-brand marketplace.",
      skillTags: ["Supply Chain", "E-commerce", "P&L", "Vendor Mgmt", "Co-founder"],
      metaTags: ["13 months", "Team: 8", "D2C / FMCG"],
      desc: "Co-founded a D2C health food brand during COVID. Managed end-to-end operations from supply chain to Shopify, cut costs 20%, and pivoted from single-brand to multi-brand marketplace with 10+ partners.",
      link: "case-study-wtf.html",
      linkText: "Read full case study →",
    },
    {
      ref: "ADI-2025",
      hook: "Nine fabs, two models — how shutdowns turn into backlogs.",
      skillTags: ["Simulation", "Supply Chain", "Data Analysis", "Risk Modelling", "Excel Solver"],
      metaTags: ["3 months", "Team: 4", "Semiconductor"],
      desc: "Built a dual-model decision support framework (Excel Solver + AnyLogic DES) to quantify semiconductor supply chain disruption impact across 9 fabrication plants and 4 disruption scenarios.",
      link: "case-study-adi.html",
      linkText: "Read full case study →",
    },
  ],

  // ===== CASE STUDY FULL PAGES =====
  caseStudyPages: {
    nn: {
      title: "NyayaNidhi — Scaling Legal-Tech Operations Across India",
      hook: "One court to five states — without quality falling apart.",
      metadata: {
        duration: "March 2025 – February 2026 (11 months)",
        role: "Associate Project Manager (Founder's Office)",
        team: "Started solo with 2 co-founders → grew to team of 9",
        industry: "Legal-Tech / AI",
        tools: "Notion, Jira, Power BI, LeadSquared, Google Workspace",
      },
      tags: ["Operations", "Agile", "AI/ML", "Process Design", "Stakeholder Mgmt", "Team Building", "Sprint Planning", "SOP Development"],
      before: {
        heading: "The Before",
        text: "NyayaNidhi was a 3-person AI legal-tech startup operating in one High Court in Bangalore. There were no standard processes, no SOPs, no sprint structure. The AI translation engine existed but had an 80% accuracy rate — not good enough for legal documents where a single error can change a court ruling. Revenue was $6K/month. I joined as employee #3.",
        metric: { value: "$6K", label: "monthly revenue", context: "1 court, 0 SOPs, 80% accuracy" },
      },
      messyMiddle: {
        heading: "The Messy Middle",
        paragraphs: [
          "The first thing I did was build a hub-and-spoke operating model. The hub handled quality control, training, and AI oversight. Each spoke was a state-level delivery team — translators, proofreaders, and a local coordinator who understood regional court formats and legal terminology.",
          "I hired and trained 5 proofreaders, built onboarding SOPs, created error taxonomies for legal translations, and set up a QC process that sampled 10% of pages (100% for new translators). This pushed AI-assisted accuracy from 80% to 90%.",
          "Simultaneously, I was doing court visits — physically going to High Courts in Maharashtra, Gujarat, and other states to pitch the translation and drafting services to lawyers and judges. Each state had different formats, different legal conventions, different stakeholder expectations.",
          "I redesigned the AI architecture from a single-agent system to a multi-agent pipeline — separating translation, proofreading, formatting, and QC into distinct stages. This enabled 90% automation while maintaining the accuracy standards.",
          "I launched a new drafting service across 10 district courts with sub-3-hour turnaround. Built sprint boards in Notion, ran weekly ops reviews, set up KPI dashboards in Power BI, and managed the DC/AC government pilot that scaled from 30 to 100 cases/month.",
          "I also supported the $2M seed round from 3one4 Capital — building the operational traction slides, maintaining MIS analysis, and demonstrating scalable unit economics to investors.",
          "And through all of this, I was building the BFSI pipeline — identifying 20+ potential enterprise targets for legal document processing in banking and financial services.",
        ],
      },
      after: {
        heading: "The After",
        metrics: [
          { before: "$6K/month", after: "$24K/month", label: "Revenue" },
          { before: "1 court", after: "5 states", label: "Coverage" },
          { before: "80%", after: "90%", label: "AI Accuracy" },
          { before: "0", after: "~$29K", label: "Govt Tender" },
          { before: "3 people", after: "Team of 9", label: "Team Size" },
          { before: "$0", after: "$2M", label: "Seed Round" },
        ],
      },
      takeaway: "Give me chaos, and I'll leave a working system.",
      challenge: {
        question: "Alright — what did you actually change that drove the 4x jump?",
        context: "This is the question I want you to ask me in an interview.",
      },
    },

    wtf: {
      title: "What The Froot — Building a D2C Brand From Zero",
      hook: "An idea, a pandemic, and a pivot — built into a 10-brand marketplace.",
      metadata: {
        duration: "August 2020 – September 2021 (13 months)",
        role: "Co-founder & Chief of Operations",
        team: "Built and managed team of 8",
        industry: "D2C / FMCG / E-commerce",
        tools: "Shopify, Instagram, Google Sheets, Canva, WhatsApp Business",
      },
      tags: ["Supply Chain", "E-commerce", "P&L", "Vendor Mgmt", "Co-founder", "Brand Building", "Team Building"],
      before: {
        heading: "The Before",
        text: "COVID lockdown in India and all across the globe. My co-founder Chakshu had an idea for a health food brand. We had $340 (₹20,000), zero industry experience, and the drive to build something rather than sit idle. No supply chain, no brand, no customers, no team.",
        metric: { value: "$340", label: "starting capital", context: "0 customers, 0 team, 0 supply chain" },
      },
      messyMiddle: {
        heading: "The Messy Middle",
        paragraphs: [
          "We started by sourcing healthy snack products from third-party vendors — negotiating with 5 suppliers to get SKUs on credit terms because we couldn't afford upfront inventory. I built the entire supply chain: vendor selection, quality checks, packaging specifications, delivery logistics.",
          "I set up the Shopify store with automated order workflows — from purchase to dispatch tracking. Managed the P&L end-to-end: revenue forecasting, COGS tracking, margin analysis, and cash flow management on a spreadsheet that I lived in daily.",
          "We grew Instagram from zero to 2,500 followers organically. No paid ads — we couldn't afford them. Content strategy, engagement, partnerships with micro-influencers, all done by a team I was simultaneously hiring and training.",
          "Built the team to 8 people across design, content, sales, and business development. Managed vendor relationships, negotiated payment terms, dealt with packaging failures, delivery delays, and the constant chaos of running a physical product business during a pandemic.",
          "Cut costs by 20% through supplier renegotiation and logistics optimisation. Reduced waste by 15% by improving demand forecasting and storage processes.",
          "The pivot came when we realised single-brand D2C had a ceiling. We repositioned as a multi-brand health food marketplace, onboarding 10+ partner brands. This changed the unit economics entirely — we became a platform, not just a brand.",
        ],
      },
      after: {
        heading: "The After",
        metrics: [
          { before: "$340", after: "$27K", label: "Revenue" },
          { before: "0", after: "8", label: "Team Size" },
          { before: "0", after: "10+", label: "Partner Brands" },
          { before: "—", after: "20%", label: "Cost Reduction" },
          { before: "—", after: "15%", label: "Waste Reduction" },
          { before: "0", after: "2,500", label: "Instagram" },
        ],
      },
      takeaway: "I don't need a budget to build something that works.",
      challenge: {
        question: "What was the worst constraint, and how did you work around it?",
        context: "This is the question I want you to ask me in an interview.",
      },
    },

    adi: {
      title: "ADI Thesis — Semiconductor Supply Chain Resilience",
      hook: "Nine fabs, two models — how shutdowns turn into backlogs.",
      metadata: {
        duration: "May 2025 – August 2025 (3 months)",
        role: "Research Team Member (MEngSc Applied Research Project)",
        team: "Team of 4 under Dr. Vincent Hargaden",
        industry: "Semiconductor / Supply Chain",
        tools: "Excel (Solver LP), AnyLogic DES, Scenario Analysis, KPI Design",
      },
      tags: ["Simulation", "Supply Chain", "Data Analysis", "Risk Modelling", "Excel Solver", "AnyLogic", "Scenario Planning"],
      before: {
        heading: "The Problem",
        text: "When a semiconductor fabrication plant shuts down unexpectedly, managers face cascading failures: die bank inventories drain, order backlogs spike, and recovery timelines remain unclear. Existing tools offered no fast, quantitative way to test which mitigation levers — buffers, capacity reallocation, surge production — actually work, and at what cost. This project built two decision-support tools to give managers quantitative answers.",
        metric: { value: "9 fabs", label: "modelled", context: "3 chip types, 4 disruption scenarios" },
      },
      messyMiddle: {
        heading: "The Approach",
        paragraphs: [
          "We built a dual-model framework. The first model was an Excel Solver-based linear programme that minimised total cost across 9 fabrication plants and 3 chip types. It compared two allocation modes: fixed-mix (rule-based) versus minimum-cost (Solver-optimised), enabling instant what-if scenarios for cost attribution and capacity redistribution.",
          "The second model was an AnyLogic discrete-event simulation modelling 9 fabs, 3 product families, die bank inventories, and order fulfilment over time. It captured week-by-week backlog dynamics, inventory depletion, and recovery trajectories — the things a spreadsheet can't show you.",
          "We ran four categories of disruption scenarios: varying shutdown durations, critical node failures, multi-fab simultaneous shutdowns, and different restart production rates. Each scenario produced quantifiable fulfilment rates, cost impacts, and recovery timelines.",
          "The team of 4 worked collaboratively — I contributed to both models and all scenario analysis. We presented findings directly to Analog Devices operations leadership.",
        ],
      },
      after: {
        heading: "Key Findings",
        metrics: [
          { before: "—", after: "98%", label: "Fulfilment (high restart)" },
          { before: "—", after: "58%", label: "Fulfilment (low restart)" },
          { before: "—", after: "~12%", label: "Cost Saved (optimised)" },
          { before: "—", after: "2-3 wk", label: "Optimal Buffer" },
        ],
        insights: [
          "Fab 3 and Fab 5 identified as critical vulnerability nodes — their loss caused structural shortages the network couldn't compensate for.",
          "Simultaneous outages at two fabs proved worse than a single longer shutdown — simultaneity matters more than duration.",
          "Simply restarting a fab is insufficient. The rate of post-restart production determines whether recovery occurs at all (98% vs 58%).",
          "Inventory buffers provide non-linear protection. Optimal sizing is 2-3 weeks of demand coverage — beyond that, diminishing returns.",
        ],
      },
      takeaway: "I can model the problem before it becomes a crisis.",
      challenge: {
        question: "Which assumption worried you most — and how did you sanity-check it?",
        context: "This is the question I want you to ask me in an interview.",
      },
      recommendations: [
        "Size die bank buffers at 2-3 weeks of demand coverage.",
        "Pre-qualify backup capacity for critical nodes (Fab 3, Fab 5).",
        "Plan surge production rates post-restart — higher than baseline.",
        "Stress-test for simultaneous multi-fab disruptions.",
        "Deploy fab-specific control towers for real-time visibility.",
      ],
    },
  },

  // ===== DUBLIN FIT MATRIX =====
  fitMatrix: {
    sectionLabel: "Where I Fit",
    rows: [
      {
        sector: "Pharma / MedTech",
        bring: "Scaling ops across regions, process design, SOP development, stakeholder management",
        learn: "Regulatory compliance, GxP frameworks, quality management systems",
      },
      {
        sector: "Semiconductor",
        bring: "Supply chain resilience modelling, simulation, data-driven decision support",
        learn: "Fab operations at scale, capacity planning, MRP systems",
      },
      {
        sector: "Tech / Enterprise",
        bring: "Startup speed, cross-functional execution, building teams and processes from zero",
        learn: "Enterprise-scale programme management, global operations",
      },
      {
        sector: "Consulting",
        bring: "End-to-end delivery, strategy-to-operations translation, founder-level ownership",
        learn: "Client delivery frameworks, structured problem-solving at scale",
      },
      {
        sector: "Startups / Scale-ups",
        bring: "Founder's office experience — built teams, processes, and revenue from zero, twice",
        learn: "Scaling past product-market fit, operational playbooks for growth stage",
      },
    ],
  },

  // ===== CONTACT =====
  contact: {
    sectionLabel: "Get In Touch",
    heading: "Let's talk.",
    text: "I'm actively looking for Operations, Project Management, and Strategy roles in Dublin. If you think there's a fit — or even if you're not sure — I'd rather have the conversation than not.",
    responseTime: "I respond within 24 hours.",
    email: "chinmay.kadli@gmail.com",
    linkedin: "https://linkedin.com/in/chinmay-kadli",
    linkedinDisplay: "linkedin.com/in/chinmay-kadli",
  },

  // ===== CV DOWNLOAD =====
  cvDownload: {
    title: "Download my CV",
    subtitle: "What role are you considering me for?",
    options: [
      { id: "pm", title: "Project Management", desc: "PM, Associate PM, Junior PM roles", file: "Chinmay_Kadli_CV_PM.pdf" },
      { id: "ops", title: "Operations", desc: "Operations Associate, Coordinator, Analyst roles", file: "Chinmay_Kadli_CV_Ops.pdf" },
      { id: "strategy", title: "Strategy & Operations", desc: "Strategy, consulting, cross-functional roles", file: "Chinmay_Kadli_CV_PM_Ops.pdf" },
      { id: "founders", title: "Founder's Office / Chief of Staff", desc: "Startup, scale-up, founder-adjacent roles", file: "Chinmay_Kadli_CV_Founders_Office.pdf" },
    ],
  },

  // ===== PEAK END =====
  peakEnd: {
    statement: "I build the playbook when there isn't one.",
    sub: "Every role I've walked into started with nothing — no team, no process, no playbook. I built all three.",
  },

  // ===== FOOTER =====
  footer: {
    line: "Built from scratch, not from a template. That's kind of my thing.",
    copy: "© 2026 Chinmay Kadli. Operator's Field Manual.",
  },

  // ===== 404 =====
  notFound: {
    heading: "This page isn't here yet.",
    text: "Give me a week — I'll build the missing system and pretend it was always planned.",
    cta: "Back to the field manual →",
  },

  // ===== SPEED TOGGLE =====
  speedLabels: {
    "30s": "30 seconds",
    "3min": "3 minutes",
    "deep": "Deep dive",
  },
};

// ===== CONFIG =====
const CONFIG = {
  animateMetrics: false,   // true = count-up animation, false = static
  defaultSpeed: '3min',    // '30s' | '3min' | 'deep'
  defaultTheme: 'system',  // 'light' | 'dark' | 'system'
  noiseOpacityLight: 0.38,
  noiseOpacityDark: 0.35,
};
