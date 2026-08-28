export interface PersonalInfo {
  name: string;
  title: string;
  careerDomain: string;
  email: string;
  phone: string;
  location: string;
  githubUrl: string;
  linkedinUrl: string;
  objective: string;
  resumePdfPath: string;
}

export interface AreaOfInterest {
  category: string;
  topics: string[];
}

export interface Education {
  id: string;
  degree: string;
  fieldOfStudy?: string;
  institution: string;
  location: string;
  boardOrUniversity?: string;
  period: string;
  grade?: string;
}

export interface SkillItem {
  name: string;
  isCore?: boolean;
}

export interface TechnicalSkillGroup {
  category: string;
  skills: (string | SkillItem)[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  features?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  isFeatured?: boolean;
  previewImage?: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type?: string;
  highlights: string[];
  technologies?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category?: string;
  credentialUrl?: string;
}

export interface ExtracurricularActivity {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface Achievement {
  id: string;
  title: string;
  score?: string;
  organization?: string;
  date?: string;
  period?: string;
  description?: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  areasOfInterest: AreaOfInterest[];
  education: Education[];
  technicalSkills: TechnicalSkillGroup[];
  softSkills: string[];
  projects: Project[];
  internships: Internship[];
  certifications: Certification[];
  extracurricular: ExtracurricularActivity[];
  achievements: Achievement[];
}
