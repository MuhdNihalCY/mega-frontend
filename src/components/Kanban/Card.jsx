import { useDrag } from 'react-dnd';

const Card = ({ card, disableDnd }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id: card.id },
    canDrag: () => !disableDnd,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`p-3 mb-2 bg-white rounded shadow cursor-move ${isDragging ? 'opacity-50' : ''} ${disableDnd ? 'cursor-default' : ''}`}
    >
      {card.image && (
        <img 
          src={card.image} 
          alt={card.title}
          className="w-full h-24 object-cover rounded mb-2"
        />
      )}
      <h4 className="font-medium">{card.title}</h4>
      <p className="text-sm text-gray-600">{card.description}</p>
    </div>
  );
};

export default Card;