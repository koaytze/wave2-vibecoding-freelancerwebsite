
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  impact: string;
  imageUrl: string;
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}
