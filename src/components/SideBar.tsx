import { Button } from "./Button";

interface sidebarProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }
  handleClickButton: (id: number) => void
  selectedGenreId: number
}

export function SideBar({genre, handleClickButton, selectedGenreId}: sidebarProps) {
  return (
    <Button
      id={String(genre.id)}
      title={genre.title}
      iconName={genre.name}
      onClick={() => handleClickButton(genre.id)}
      selected={selectedGenreId === genre.id}
    />
  )
}