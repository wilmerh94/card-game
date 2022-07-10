import './SingleCard.css';
export const SingleCard = ({
  card,
  handleChoice,
  flipped,
  disabled
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card" style={{ position: 'relative' }}>
      <div className={flipped ? 'flipped' : ''}>
        <img
          className="front"
          src={card.src}
          alt="Front Card"
          onClick={handleClick}
          style={{
            width: '100%',
            display: 'block',
            border: '2px solid #fff',
            borderRadius: '6px'
          }}
        />
        <img
          className="back"
          onClick={handleClick}
          src="/image/cover.png"
          alt="Back Card"
          style={{
            width: '100%',
            display: 'block',
            border: '2px solid #fff',
            borderRadius: '6px'
          }}
        />
      </div>
    </div>
  );
};
