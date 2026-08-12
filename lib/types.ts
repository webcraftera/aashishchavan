export interface Project {
  name: string;
  description: string;
  technologies: string[];
  category: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactMessageDoc extends ContactMessage {
  _id?: string;
  createdAt?: Date;
  status?: "new" | "read" | "archived";
}
