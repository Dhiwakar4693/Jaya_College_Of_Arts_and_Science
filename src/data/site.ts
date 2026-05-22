export const siteConfig = {
  name: "Jaya College of Arts & Science",
  shortName: "JCAS",
  tagline: "Your Success Is Our Service",
  location: {
    address: "C.T.H Road, Thiruninravur - 602024",
    district: "Thiruvallur District",
    state: "Tamil Nadu, India",
    full: "C.T.H Road, Thiruninravur - 602024, Thiruvallur District, Tamil Nadu, India",
  },
  contact: {
    phone: "+91 44 26340953",
    email: "info@jcas.ac.in",
    website: "www.jcas.ac.in",
  },
  affiliation: "Affiliated to University of Madras",
  trust: "A Unit of Jaya Group of Institutions",
  accreditation: "Accredited by NAAC with B++ Grade",
  established: "1992-1993",
  founder: "Prof. Dr. A. Kanagaraj",
  motto: "Your success is our service.",
};

export const stats = [
  { label: "Years of Excellence", value: 32, suffix: "+" },
  { label: "Students Enrolled", value: 3500, suffix: "+" },
  { label: "Library Volumes", value: 1000, suffix: "+" },
  { label: "Departments", value: 6, suffix: "" },
  { label: "UG & PG Programs", value: 40, suffix: "+" },
  { label: "Placement Partners", value: 50, suffix: "+" },
];

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About JCAS", href: "/about" },
      { label: "Administration", href: "/administration" },
      { label: "Chairman Message", href: "/chairman-message" },
      { label: "Principal Message", href: "/principal-message" },
      { label: "Vision & Mission", href: "/vision-mission" },
    ],
  },
  {
    label: "Academics",
    href: "/departments",
    mega: true,
    children: [
      { label: "Departments", href: "/departments" },
      { label: "Courses", href: "/courses" },
      { label: "UG Courses", href: "/ug-courses" },
      { label: "PG Courses", href: "/pg-courses" },
      { label: "Examination", href: "/examination" },
      { label: "Research", href: "/research" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admissions", href: "/admissions" },
      { label: "Scholarships", href: "/scholarships" },
    ],
  },
  { label: "Placements", href: "/placements" },
  {
    label: "Quality",
    href: "/iqac",
    children: [
      { label: "IQAC", href: "/iqac" },
      { label: "Committees", href: "/committees" },
    ],
  },
  { label: "Alumni", href: "/alumni" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];
