import { useDrop } from 'react-dnd';
import Card from './Card';

const List = ({ list, disableDnd = false }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({ listId: list.id }),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: () => !disableDnd
  });

  return (
    <div 
      ref={drop}
      className={`min-h-20 ${isOver ? 'bg-blue-50' : ''} ${disableDnd ? 'opacity-60' : ''}`}
    >
      {list.cards.map((card) => (
        <Card key={card.id} card={card} disableDnd={disableDnd} />
      ))}
    </div>
  );
};

export default List;