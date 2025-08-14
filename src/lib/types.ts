import { StaticImageData } from 'next/image';

export interface ProjectModalProps {
  modal: { active: boolean; index: number };
  projectsData: Array<{
    src: string;
    color: string;
  }>;
}
export interface ProjectDetails {
  index: number;
  mockup: StaticImageData;
  title: string;
  type: string;
  link: string;
}