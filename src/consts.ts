// Waymark - IT Security & Consultancy
// Global site configuration

export const SITE_TITLE = "Waymark";
export const SITE_DESCRIPTION = "Enterprise-grade security, Microsoft, AI, cloud and digital delivery — productised for small and medium businesses.";
export const SITE_TAGLINE = "Security. Simplified.";

export const COMPANY_INFO = {
  name: "Waymark",
  tagline: "IT Security & Consultancy",
  email: "hello@waymark.io",
  phone: "+1 (555) 123-4567",
  address: "123 Security Lane, Tech District",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions/ai", label: "AI" },
  { href: "/solutions/security", label: "Security" },
  { href: "/solutions/microsoft-365", label: "Microsoft 365" },
  { href: "/solutions/endpoints", label: "Endpoints" },
  { href: "/solutions/infrastructure", label: "Infrastructure" },
  { href: "/solutions/websites", label: "Websites" },
  { href: "/products", label: "All Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/waymark",
  twitter: "https://twitter.com/waymark",
  github: "https://github.com/waymark",
};

// =============================================================================
// PRODUCT CATALOGUE - 6 Categories, 50+ Products
// Enterprise-grade productised for SMBs - clear, fixed-scope, outcome-led
// =============================================================================

export interface Product {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  outcome: string;
  includes?: string[];
  deliverables: string[];
  category: string;
  type: "assessment" | "implementation" | "managed";
  featured?: boolean;
}

export interface ProductCategory {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  href: string;
  products: Product[];
}

// =============================================================================
// 1. AI ENABLEMENT & AI SECURITY
// =============================================================================
export const AI_PRODUCTS: Product[] = [
  {
    id: "ai-readiness-strategy",
    title: "AI Readiness and Strategy",
    shortTitle: "AI Strategy",
    description: "A practical plan for adopting AI in your business without chaos.",
    outcome: "AI roadmap, prioritised use-case list, pilot plan, success metrics.",
    includes: [
      "Identify high-value use cases (sales, ops, finance, admin, customer support)",
      "Decide what tools fit (Microsoft-first where possible)",
      "Define what data AI can and cannot touch",
    ],
    deliverables: ["AI roadmap", "Prioritised use-case list", "Pilot plan", "Success metrics"],
    category: "ai",
    type: "assessment",
    featured: true,
  },
  {
    id: "ai-governance",
    title: "AI Governance and Safe Usage Controls",
    shortTitle: "AI Governance",
    description: "Put guardrails in place so AI doesn't leak sensitive data or create compliance risk.",
    outcome: "AI governance pack, controls backlog, rollout comms pack.",
    includes: [
      "AI usage policy + staff guidelines",
      "Permissions and data access review (where AI can 'see' content)",
      "Monitoring approach for AI usage and risk",
    ],
    deliverables: ["AI governance pack", "Controls backlog", "Rollout comms pack"],
    category: "ai",
    type: "implementation",
  },
  {
    id: "copilot-readiness",
    title: "Copilot Readiness for Microsoft 365",
    shortTitle: "Copilot Ready",
    description: "Make Copilot useful and safe by fixing the common blockers first.",
    outcome: "Copilot readiness report, remediation actions list, pilot rollout plan.",
    includes: [
      "Over-sharing and permission clean-up plan",
      "Sensitivity and confidential data handling approach",
      "Pilot rollout design to prove value fast",
    ],
    deliverables: ["Copilot readiness report", "Remediation actions list", "Pilot rollout plan"],
    category: "ai",
    type: "assessment",
    featured: true,
  },
  {
    id: "ai-workflow-automation",
    title: "AI Workflow Automation",
    shortTitle: "AI Automation",
    description: "Replace repetitive work with AI-assisted workflows.",
    outcome: "Implemented workflows, documentation, handover and training.",
    includes: [
      "Document summarisation and classification",
      "Automated responses, templates and internal knowledge workflows",
      "Approval flows and structured business processes",
    ],
    deliverables: ["Implemented workflows", "Documentation", "Handover and training"],
    category: "ai",
    type: "implementation",
  },
  {
    id: "ai-pilot-program",
    title: "AI Pilot Program",
    shortTitle: "AI Pilot",
    description: "A controlled, measurable AI rollout for a defined team or department.",
    outcome: "Pilot delivery, results report, scale-up plan.",
    includes: [
      "Pilot group, policies, training, feedback loop",
      "Measured outcomes: time saved, quality improvements, adoption rate",
    ],
    deliverables: ["Pilot delivery", "Results report", "Scale-up plan"],
    category: "ai",
    type: "implementation",
  },
  {
    id: "ai-training",
    title: "AI Training for Teams",
    shortTitle: "AI Training",
    description: "Practical training that changes how people work.",
    outcome: "Training session, prompt playbook, safe-use guide.",
    includes: [
      "How to use AI safely",
      "Prompt patterns for real business tasks",
      "Do's and don'ts for confidential info",
    ],
    deliverables: ["Training session", "Prompt playbook", "Safe-use guide"],
    category: "ai",
    type: "implementation",
  },
];

// =============================================================================
// 2. CYBER SECURITY & RISK PROTECTION
// =============================================================================
export const SECURITY_PRODUCTS: Product[] = [
  {
    id: "security-foundations",
    title: "Security Foundations Package",
    shortTitle: "Security Baseline",
    description: "A clean, modern security baseline for SMBs.",
    outcome: "Security baseline, prioritised improvements, implementation checklist.",
    includes: [
      "Identity, MFA, admin hygiene, device posture, email protections",
      "Practical policies that match reality",
    ],
    deliverables: ["Security baseline", "Prioritised improvements", "Implementation checklist"],
    category: "security",
    type: "assessment",
    featured: true,
  },
  {
    id: "vulnerability-management",
    title: "Vulnerability and Exposure Management",
    shortTitle: "Vuln Management",
    description: "Know what's vulnerable, fix it, and track improvement month to month.",
    outcome: "Monthly report, risk register, 'risk trend' dashboard view.",
    includes: [
      "External vulnerability scanning",
      "Monthly reporting and prioritised remediation tracking",
      "Retest of remediated items and trend reporting",
    ],
    deliverables: ["Monthly report", "Risk register", "Risk trend dashboard view"],
    category: "security",
    type: "managed",
  },
  {
    id: "attack-surface-management",
    title: "Attack Surface Protection (ASM)",
    shortTitle: "ASM",
    description: "Find and secure what your business unintentionally exposes.",
    outcome: "Asset inventory, exposure findings, fix plan, monthly drift option.",
    includes: [
      "Discover exposed services, forgotten subdomains, DNS sprawl",
      "Identify weak entry points and harden the edge (DNS/WAF posture)",
    ],
    deliverables: ["Asset inventory", "Exposure findings", "Fix plan", "Monthly drift option"],
    category: "security",
    type: "managed",
  },
  {
    id: "bec-protection",
    title: "Business Email Compromise (BEC) Protection",
    shortTitle: "BEC Protection",
    description: "Reduce invoice fraud and impersonation attacks dramatically.",
    outcome: "Configured controls, BEC playbook, staff micro-guide.",
    includes: [
      "Mailbox rules and risky forwarding controls",
      "Executive impersonation protections",
      "DMARC monitoring and enforcement plan",
      "Practical 'payment change verification' process",
    ],
    deliverables: ["Configured controls", "BEC playbook", "Staff micro-guide"],
    category: "security",
    type: "implementation",
    featured: true,
  },
  {
    id: "phishing-simulations",
    title: "Phishing Simulations and Human Risk Program",
    shortTitle: "Phishing Tests",
    description: "Test, measure, improve — without blame.",
    outcome: "Campaign results report, improvement plan, optional quarterly cadence.",
    includes: [
      "Realistic phishing simulations",
      "Reporting process improvements",
      "Targeted training recommendations",
    ],
    deliverables: ["Campaign results report", "Improvement plan", "Optional quarterly cadence"],
    category: "security",
    type: "managed",
  },
  {
    id: "dark-web-monitoring",
    title: "Dark Web and Credential Exposure Monitoring",
    shortTitle: "Dark Web Monitor",
    description: "Spot leaked credentials before they become a breach.",
    outcome: "Exposure reports, response playbook, ongoing monitoring option.",
    includes: [
      "Monitor exposed accounts (via reputable monitoring)",
      "Response workflow and remediation actions",
    ],
    deliverables: ["Exposure reports", "Response playbook", "Ongoing monitoring option"],
    category: "security",
    type: "managed",
  },
  {
    id: "incident-readiness",
    title: "Incident Readiness and Response",
    shortTitle: "IR Readiness",
    description: "Be ready before you need it.",
    outcome: "IR plan + runbooks + tabletop outcomes and action list.",
    includes: [
      "Incident response plan (simple, usable)",
      "Tabletop exercise (ransomware/BEC scenario)",
      "Rapid response option if something happens",
    ],
    deliverables: ["IR plan", "Runbooks", "Tabletop outcomes", "Action list"],
    category: "security",
    type: "assessment",
  },
  {
    id: "soc-lite",
    title: "Security Monitoring Foundations (SOC-lite)",
    shortTitle: "SOC-lite",
    description: "Get meaningful security visibility without building a SOC.",
    outcome: "Alert catalogue, triage runbooks, weekly security report template.",
    includes: [
      "What logs to retain, what alerts to enable",
      "Who reviews what weekly, and what to do when alerts fire",
    ],
    deliverables: ["Alert catalogue", "Triage runbooks", "Weekly security report template"],
    category: "security",
    type: "managed",
  },
  {
    id: "backup-recovery",
    title: "Secure Backup and Recovery Assurance",
    shortTitle: "Backup Assurance",
    description: "Backups aren't real until you've tested recovery.",
    outcome: "Recovery plan, test results, gaps and recommendations.",
    includes: [
      "Backup coverage review (M365, endpoints, websites)",
      "Restore testing (sample restore and validation)",
      "Ransomware recovery checklist",
    ],
    deliverables: ["Recovery plan", "Test results", "Gaps and recommendations"],
    category: "security",
    type: "assessment",
  },
  {
    id: "vendor-security-review",
    title: "Vendor and Third-Party Security Review",
    shortTitle: "Vendor Review",
    description: "Quickly assess supplier risk with a repeatable method.",
    outcome: "Vendor risk summary + recommended requirements list.",
    includes: [
      "Vendor questionnaire + red flags",
      "Minimum security requirements guidance",
    ],
    deliverables: ["Vendor risk summary", "Recommended requirements list"],
    category: "security",
    type: "assessment",
  },
];

// =============================================================================
// 3. MICROSOFT 365 PLATFORM SERVICES
// =============================================================================
export const MICROSOFT_365_PRODUCTS: Product[] = [
  {
    id: "m365-tenant-management",
    title: "Microsoft 365 Tenant Management",
    shortTitle: "Tenant Management",
    description: "We run the platform so you can run the business.",
    outcome: "Monthly report, change log, quarterly roadmap refresh.",
    includes: [
      "Security posture upkeep",
      "Controlled changes and governance",
      "Reporting and improvement roadmap",
    ],
    deliverables: ["Monthly report", "Change log", "Quarterly roadmap refresh"],
    category: "microsoft-365",
    type: "managed",
    featured: true,
  },
  {
    id: "m365-security-hardening",
    title: "Microsoft 365 Security Hardening",
    shortTitle: "M365 Hardening",
    description: "Make your tenant resilient against modern threats.",
    outcome: "Hardened configuration + clear operational guidance.",
    includes: [
      "Secure Score improvements",
      "Access controls, admin protection, safer collaboration",
      "Logging and visibility baseline",
    ],
    deliverables: ["Hardened configuration", "Operational guidance"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "entra-id-hardening",
    title: "Entra ID Identity Hardening",
    shortTitle: "Identity Hardening",
    description: "Lock down identity — the number one attack route.",
    outcome: "Identity hardening plan + implemented controls.",
    includes: [
      "MFA and access strategy",
      "Secure sign-in policies and admin controls",
      "Risky app access and consent controls",
    ],
    deliverables: ["Identity hardening plan", "Implemented controls"],
    category: "microsoft-365",
    type: "implementation",
    featured: true,
  },
  {
    id: "conditional-access",
    title: "Conditional Access Buildout",
    shortTitle: "Conditional Access",
    description: "Practical Conditional Access policies that don't break productivity.",
    outcome: "Policy set, documentation, rollout plan.",
    includes: [
      "Baseline policies, ring rollout, break-glass protections",
    ],
    deliverables: ["Policy set", "Documentation", "Rollout plan"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "pam-admin-hygiene",
    title: "PAM and Admin Hygiene (Privileged Access)",
    shortTitle: "PAM Setup",
    description: "Reduce the blast radius of admin accounts.",
    outcome: "Privileged access model + operating procedure.",
    includes: [
      "Break-glass accounts and testing",
      "Separate admin identities and least privilege",
      "PIM rollout (where licensed)",
    ],
    deliverables: ["Privileged access model", "Operating procedure"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "email-domain-protection",
    title: "Email Security and Domain Protection",
    shortTitle: "Email Protection",
    description: "Stop spoofing, reduce phishing, protect your brand.",
    outcome: "DNS plan + enforcement roadmap + monitoring setup.",
    includes: [
      "SPF/DKIM/DMARC alignment and rollout",
      "Microsoft email security policy tuning",
    ],
    deliverables: ["DNS plan", "Enforcement roadmap", "Monitoring setup"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "defender-office-365",
    title: "Defender for Office 365",
    shortTitle: "Defender O365",
    description: "Turn on what you're already paying for — properly.",
    outcome: "Policy baseline + tuning notes.",
    includes: [
      "Anti-phish, safe links/attachments, impersonation protection",
    ],
    deliverables: ["Policy baseline", "Tuning notes"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "defender-endpoint",
    title: "Defender for Endpoint",
    shortTitle: "Defender Endpoint",
    description: "Complete endpoint protection with proper onboarding and response workflow.",
    outcome: "Config + triage playbook.",
    includes: [
      "Onboarding + endpoint protection baseline + response workflow",
    ],
    deliverables: ["Configuration", "Triage playbook"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "defender-cloud-apps",
    title: "Defender for Cloud Apps",
    shortTitle: "Cloud Apps",
    description: "Shadow IT discovery and OAuth app control guidance.",
    outcome: "Findings + controls plan.",
    includes: [
      "Shadow IT discovery, OAuth app control guidance (license-dependent)",
    ],
    deliverables: ["Findings", "Controls plan"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "teams-sharepoint-governance",
    title: "Teams, SharePoint and OneDrive Governance",
    shortTitle: "Collaboration Gov",
    description: "Collaboration without sprawl.",
    outcome: "Governance pack + templates + rollout guide.",
    includes: [
      "Structure, naming, ownership, lifecycle rules",
      "Safer external sharing and guest controls",
    ],
    deliverables: ["Governance pack", "Templates", "Rollout guide"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "sharepoint-sharing-controls",
    title: "SharePoint and OneDrive Sharing Controls",
    shortTitle: "Sharing Controls",
    description: "Stop accidental exposure while staying easy to use.",
    outcome: "Cleaned-up sharing posture + action list.",
    includes: [
      "External sharing review",
      "Permissions hygiene and owner accountability",
    ],
    deliverables: ["Cleaned-up sharing posture", "Action list"],
    category: "microsoft-365",
    type: "implementation",
  },
  {
    id: "audit-logging-alerting",
    title: "Audit, Logging and Alerting Baseline",
    shortTitle: "Logging Setup",
    description: "Make investigation possible.",
    outcome: "Logging baseline + alert map + incident checklist.",
    includes: [
      "Audit settings, alerting, retention approach",
    ],
    deliverables: ["Logging baseline", "Alert map", "Incident checklist"],
    category: "microsoft-365",
    type: "implementation",
  },
];

// =============================================================================
// 4. ENDPOINT & DEVICE MANAGEMENT
// =============================================================================
export const ENDPOINT_PRODUCTS: Product[] = [
  {
    id: "intune-device-management",
    title: "Intune Device Management (Core)",
    shortTitle: "Intune Core",
    description: "Centralised control of company devices.",
    outcome: "A stable, secure device platform.",
    includes: [
      "Enrollment, compliance, security policies",
      "Updates, encryption, app management",
    ],
    deliverables: ["Stable, secure device platform"],
    category: "endpoints",
    type: "implementation",
    featured: true,
  },
  {
    id: "endpoint-hardening",
    title: "Endpoint Hardening (Windows and Mobile)",
    shortTitle: "Device Hardening",
    description: "Reduce device-based compromise risk.",
    outcome: "Hardening baseline + deployment plan.",
    includes: [
      "Local admin reduction strategy",
      "Encryption, firewall posture, patching",
      "Mobile device protection approach",
    ],
    deliverables: ["Hardening baseline", "Deployment plan"],
    category: "endpoints",
    type: "implementation",
  },
  {
    id: "zero-trust-device",
    title: "Zero Trust Device Access",
    shortTitle: "Zero Trust",
    description: "Only compliant, trusted devices access business data.",
    outcome: "Zero Trust baseline + rollout guidance.",
    includes: [
      "Device compliance tied to access",
      "Clear exceptions handling for real-world needs",
    ],
    deliverables: ["Zero Trust baseline", "Rollout guidance"],
    category: "endpoints",
    type: "implementation",
  },
  {
    id: "endpoint-operations",
    title: "Ongoing Endpoint Operations",
    shortTitle: "Endpoint Ops",
    description: "Keep devices compliant and policies healthy.",
    outcome: "Monthly endpoint posture report + improvement backlog.",
    includes: [
      "Monitoring, reporting, tuning, change control",
    ],
    deliverables: ["Monthly endpoint posture report", "Improvement backlog"],
    category: "endpoints",
    type: "managed",
  },
];

// =============================================================================
// 5. CLOUD & NETWORK INFRASTRUCTURE
// =============================================================================
export const INFRASTRUCTURE_PRODUCTS: Product[] = [
  {
    id: "azure-security-governance",
    title: "Azure Security and Governance",
    shortTitle: "Azure Security",
    description: "Secure cloud foundations without enterprise complexity.",
    outcome: "Secure Azure baseline + governance approach.",
    includes: [
      "Identity and access controls, RBAC hygiene",
      "Logging/monitoring guidance",
      "Cost visibility and guardrails",
    ],
    deliverables: ["Secure Azure baseline", "Governance approach"],
    category: "infrastructure",
    type: "implementation",
  },
  {
    id: "azure-landing-zone",
    title: "Azure Foundations ('Landing Zone Lite')",
    shortTitle: "Azure Foundations",
    description: "A clean structure that supports growth.",
    outcome: "Azure foundation blueprint + setup plan.",
    includes: [
      "Subscription structure guidance",
      "RBAC, naming, tagging, policy approach",
    ],
    deliverables: ["Azure foundation blueprint", "Setup plan"],
    category: "infrastructure",
    type: "implementation",
  },
  {
    id: "cloud-monitoring",
    title: "Cloud Monitoring and Alerting Foundations",
    shortTitle: "Cloud Monitoring",
    description: "Know what's happening in your environment.",
    outcome: "Monitoring map + alert playbooks.",
    includes: [
      "Monitoring approach, alerting, response runbooks",
    ],
    deliverables: ["Monitoring map", "Alert playbooks"],
    category: "infrastructure",
    type: "implementation",
  },
  {
    id: "unifi-network",
    title: "Ubiquiti Network Solutions (UniFi)",
    shortTitle: "UniFi Networks",
    description: "Business-grade networking designed and deployed properly.",
    outcome: "Network design, secure deployment, documentation and handover.",
    includes: [
      "Wi-Fi, switching, routing, segmentation",
      "Guest network + IoT isolation",
      "Secure remote access",
    ],
    deliverables: ["Network design", "Secure deployment", "Documentation and handover"],
    category: "infrastructure",
    type: "implementation",
    featured: true,
  },
  {
    id: "unifi-site-tech",
    title: "UniFi Full Site Technology Delivery",
    shortTitle: "Site Tech",
    description: "One partner for site technology deployment.",
    outcome: "Installed and documented site tech, with managed option.",
    includes: [
      "Networking, Wi-Fi, cameras, access control, phones (UniFi suite)",
      "Secure configuration + documentation",
    ],
    deliverables: ["Installed and documented site tech", "Managed option"],
    category: "infrastructure",
    type: "implementation",
  },
  {
    id: "managed-network",
    title: "Managed Network Operations",
    shortTitle: "Network Ops",
    description: "Keep your network stable and supported.",
    outcome: "Monthly health report + change log.",
    includes: [
      "Monitoring, backups, firmware strategy",
      "Changes and improvements",
    ],
    deliverables: ["Monthly health report", "Change log"],
    category: "infrastructure",
    type: "managed",
  },
];

// =============================================================================
// 6. WEBSITES & DIGITAL PLATFORMS
// =============================================================================
export const WEBSITE_PRODUCTS: Product[] = [
  {
    id: "website-delivery",
    title: "Enterprise-Grade Website Delivery",
    shortTitle: "Website Build",
    description: "A modern website built like a product.",
    outcome: "Live website + handover docs + maintenance option.",
    includes: [
      "Clean design and build",
      "Secure hosting and deployment",
      "Fast performance, SEO-ready, reliable",
    ],
    deliverables: ["Live website", "Handover docs", "Maintenance option"],
    category: "websites",
    type: "implementation",
    featured: true,
  },
  {
    id: "website-security",
    title: "Website Security and Protection",
    shortTitle: "Web Security",
    description: "Protect your public-facing systems.",
    outcome: "Hardened posture + monitoring setup.",
    includes: [
      "WAF and edge security approach (Cloudflare)",
      "TLS, security headers, rate limiting",
      "Monitoring and recovery readiness",
    ],
    deliverables: ["Hardened posture", "Monitoring setup"],
    category: "websites",
    type: "implementation",
  },
  {
    id: "website-performance",
    title: "Website Performance and Reliability",
    shortTitle: "Performance",
    description: "Make your site fast and dependable.",
    outcome: "Performance improvements + reliability monitoring.",
    includes: [
      "Core Web Vitals improvements",
      "Caching and optimisation",
      "Uptime monitoring and alerting",
    ],
    deliverables: ["Performance improvements", "Reliability monitoring"],
    category: "websites",
    type: "implementation",
  },
  {
    id: "website-migration",
    title: "Secure Website Migration",
    shortTitle: "Site Migration",
    description: "Move host/platform without downtime headaches.",
    outcome: "Migration completed + post-cutover checklist.",
    includes: [
      "Cutover plan, rollback plan, staged testing",
    ],
    deliverables: ["Migration completed", "Post-cutover checklist"],
    category: "websites",
    type: "implementation",
  },
  {
    id: "web-app-security-review",
    title: "Web Application Security Review",
    shortTitle: "Web App Test",
    description: "Identify real risks in web apps and CMS systems.",
    outcome: "Findings report + prioritised fixes + retest option.",
    includes: [
      "OWASP-style testing, auth/session checks, common exposures",
    ],
    deliverables: ["Findings report", "Prioritised fixes", "Retest option"],
    category: "websites",
    type: "assessment",
  },
];

// =============================================================================
// PRODUCT CATEGORIES - 6 Horizontals
// =============================================================================
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "ai",
    title: "AI Enablement & AI Security",
    shortTitle: "AI",
    description: "Practical AI strategy, governance, and implementation — not hype. Safe adoption with real business outcomes.",
    icon: "sparkles",
    color: "purple",
    href: "/solutions/ai",
    products: AI_PRODUCTS,
  },
  {
    id: "security",
    title: "Cyber Security & Risk Protection",
    shortTitle: "Security",
    description: "Modern security baseline, continuous monitoring, and incident readiness. Protection that matches reality.",
    icon: "shield",
    color: "blue",
    href: "/solutions/security",
    products: SECURITY_PRODUCTS,
  },
  {
    id: "microsoft-365",
    title: "Microsoft 365 Platform Services",
    shortTitle: "Microsoft 365",
    description: "Complete M365 security from assessment to managed operations — your entire Microsoft estate secured.",
    icon: "grid",
    color: "cyan",
    href: "/solutions/microsoft-365",
    products: MICROSOFT_365_PRODUCTS,
  },
  {
    id: "endpoints",
    title: "Endpoint & Device Management",
    shortTitle: "Endpoints",
    description: "Centralised device control with Intune. Secure, compliant, and Zero Trust ready.",
    icon: "laptop",
    color: "emerald",
    href: "/solutions/endpoints",
    products: ENDPOINT_PRODUCTS,
  },
  {
    id: "infrastructure",
    title: "Cloud & Network Infrastructure",
    shortTitle: "Infrastructure",
    description: "Azure foundations, UniFi networking, and site technology. Enterprise-grade without enterprise complexity.",
    icon: "server",
    color: "orange",
    href: "/solutions/infrastructure",
    products: INFRASTRUCTURE_PRODUCTS,
  },
  {
    id: "websites",
    title: "Websites & Digital Platforms",
    shortTitle: "Websites",
    description: "Modern websites built like products. Fast, secure, and reliable from day one.",
    icon: "globe",
    color: "rose",
    href: "/solutions/websites",
    products: WEBSITE_PRODUCTS,
  },
];

// =============================================================================
// WAYMARK BUNDLES - 3 Packages for Easy Purchase
// =============================================================================
export interface Bundle {
  id: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  color: string;
  featured?: boolean;
}

export const BUNDLES: Bundle[] = [
  {
    id: "core",
    name: "Waymark Core",
    tagline: "Essential protection",
    description: "Microsoft 365 + device + email protections baseline + reporting.",
    includes: [
      "Microsoft 365 Security Hardening",
      "Endpoint device baseline",
      "Email security configuration",
      "Monthly security reporting",
    ],
    color: "blue",
  },
  {
    id: "secure",
    name: "Waymark Secure",
    tagline: "Comprehensive security",
    description: "Core + vulnerability/exposure management + phishing + incident readiness.",
    includes: [
      "Everything in Core",
      "Vulnerability management program",
      "Attack surface monitoring",
      "Phishing simulations",
      "Incident response readiness",
    ],
    color: "purple",
    featured: true,
  },
  {
    id: "complete",
    name: "Waymark Complete",
    tagline: "Full managed security",
    description: "Secure + AI governance + network/cloud oversight + managed operations.",
    includes: [
      "Everything in Secure",
      "AI governance and Copilot readiness",
      "Network/cloud managed operations",
      "Quarterly business reviews",
      "Priority support",
    ],
    color: "emerald",
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================
export function getAllProducts(): Product[] {
  return PRODUCT_CATEGORIES.flatMap(cat => cat.products);
}

export function getFeaturedProducts(): Product[] {
  return getAllProducts().filter(p => p.featured);
}

export function getProductsByCategory(categoryId: string): Product[] {
  const category = PRODUCT_CATEGORIES.find(c => c.id === categoryId);
  return category ? category.products : [];
}

export function getProductById(productId: string): Product | undefined {
  return getAllProducts().find(p => p.id === productId);
}

export function getCategoryById(categoryId: string): ProductCategory | undefined {
  return PRODUCT_CATEGORIES.find(c => c.id === categoryId);
}

// =============================================================================
// STATS & SOCIAL PROOF
// =============================================================================
export const SITE_STATS = [
  { value: "6", label: "Solution Areas" },
  { value: "50+", label: "Productised Services" },
  { value: "100%", label: "Fixed Pricing" },
  { value: "SMB", label: "Focused" },
];

export const TRUST_BADGES = [
  "Microsoft Partner",
  "UniFi Certified",
  "Cloudflare Partner",
];

export const PARTNERS = [
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Ubiquiti", logo: "/logos/ubiquiti.svg" },
  { name: "Cloudflare", logo: "/logos/cloudflare.svg" },
  { name: "Azure", logo: "/logos/azure.svg" },
];
