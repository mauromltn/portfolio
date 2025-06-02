export interface ProjectCardProps {
  index: number;
  title: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
}