export interface ProjectCardProps {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
}

export interface ProjectModalProps {
  modal: { active: boolean; index: number };
  projectsData: Array<{
    title: string;
    src: string;
    color: string;
  }>;
}