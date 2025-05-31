export interface ImpactArea {
  directBeneficiaries: string;
  indirectBeneficiaries: string;
  schools: string;
  communities: string;
}

export interface Stat {
  icon: string;
  value: string;
  label: string;
}

export interface Outcome {
  title: string;
  icon: string;
  content: string;
}

export interface IActivity {
  slug: string;
  title: string;
  bannerImage: string;
  location: string;
  impactArea: ImpactArea;
  summary: string;
  stats: Stat[];
  objectives: string[];
  outcomes: Outcome[];
  createdAt?: Date;
  updatedAt?: Date;
}
