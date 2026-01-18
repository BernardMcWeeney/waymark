// Waymark - Enterprise Security Solutions
// Global site configuration

export const SITE_TITLE = "Waymark Security";
export const SITE_DESCRIPTION = "Enterprise-grade cybersecurity solutions. Phishing simulation, dark web monitoring, 24/7 SOC, Microsoft 365 security, and managed network infrastructure.";

export const SITE_TAGLINE = "Enterprise Security. Simplified.";

export const COMPANY_INFO = {
  name: "Waymark Security",
  tagline: "Enterprise Security Solutions",
  email: "contact@waymark.security",
  phone: "+1 (800) SEC-MARK",
  address: "One Security Plaza, Suite 500, San Francisco, CA 94105",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products/phishing-simulation", label: "Products" },
  { href: "/solutions/microsoft-365", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/waymark-security",
  twitter: "https://twitter.com/waymarksecurity",
  github: "https://github.com/waymark-security",
};

// Security Products
export const PRODUCTS = [
  {
    id: "phishing-simulation",
    title: "Phishing Simulation & Training",
    shortTitle: "Phishing Simulation",
    description: "Automated phishing campaigns that test and train your employees against real-world social engineering attacks.",
    features: [
      "Customizable phishing templates",
      "Automated campaign scheduling",
      "Real-time employee tracking",
      "Interactive security training",
      "Detailed analytics & reporting",
      "Compliance documentation"
    ],
    icon: "phishing",
    badge: "Most Popular",
    href: "/products/phishing-simulation",
  },
  {
    id: "dark-web-monitoring",
    title: "Dark Web Monitoring",
    shortTitle: "Dark Web Monitoring",
    description: "24/7 surveillance of dark web marketplaces and forums for your compromised credentials and sensitive data.",
    features: [
      "Credential breach detection",
      "Executive VIP monitoring",
      "Brand impersonation alerts",
      "Data leak intelligence",
      "Instant threat notifications",
      "Monthly threat reports"
    ],
    icon: "darkweb",
    badge: "Enterprise",
    href: "/products/dark-web-monitoring",
  },
  {
    id: "soc",
    title: "Security Operations Center",
    shortTitle: "24/7 SOC",
    description: "Round-the-clock security monitoring, threat detection, and incident response from our expert analysts.",
    features: [
      "24/7/365 monitoring",
      "SIEM integration",
      "Threat hunting",
      "Incident response",
      "Forensic analysis",
      "Executive reporting"
    ],
    icon: "soc",
    badge: "Premium",
    href: "/products/soc",
  },
  {
    id: "vulnerability-assessment",
    title: "Vulnerability Assessment",
    shortTitle: "Vulnerability Scanning",
    description: "Continuous vulnerability scanning and penetration testing to identify weaknesses before attackers do.",
    features: [
      "Automated vulnerability scanning",
      "Manual penetration testing",
      "Web application security",
      "Network security testing",
      "Remediation guidance",
      "Compliance reporting"
    ],
    icon: "vulnerability",
    badge: "Essential",
    href: "/products/vulnerability-assessment",
  },
];

// Trust & Certifications
export const CERTIFICATIONS = [
  { name: "SOC 2 Type II", logo: "/images/certs/soc2.svg" },
  { name: "ISO 27001", logo: "/images/certs/iso27001.svg" },
  { name: "Microsoft Gold Partner", logo: "/images/certs/microsoft.svg" },
  { name: "CREST Certified", logo: "/images/certs/crest.svg" },
];

export const STATS = [
  { value: "500+", label: "Enterprises Protected" },
  { value: "2M+", label: "Threats Blocked" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "<15min", label: "Response Time" },
];
