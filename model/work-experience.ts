export interface Company {
  name: string;
  logoPath: string;
  logoAlt: string;
  website?: string;
}

export interface Description {
  title: string;
  points: string[];
}

export interface Duration {
  start: Date;
  end: Date;
}

export interface WorkExperience {
  title: string;
  company: Company;
  description: Description;
  tags: string[];
  duration: Duration;
}
