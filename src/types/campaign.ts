// Define campaign status types
export type CampaignStatus = 'active' | 'completed' | 'planned';

export interface CampaignFrontmatter {
  title: string;
  description: string;
  startDate: Date;
  image?: string;
  backgroundColor?: string;
  textColor?: string;
  status?: CampaignStatus;
}