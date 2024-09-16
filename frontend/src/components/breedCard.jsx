import cardBg from '../assets/cardBg.jpg';
import paw1 from '../assets/paw1.png';
import paw2 from '../assets/paw2.png';
import defaultPaw from '../assets/defaultPaw.jpg'
import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/globalContext';

function BreedCard({ breed }) {
  const [imgSrc, setImgSrc] = useState('');
  const { activeTab, cardRating, catAttributes } = useContext(GlobalContext);

  const cardBackground = {
    backgroundImage: `url(${cardBg})`,
  };

  const paws = [];
  for (let i = 1; i <= 5; i++) {
    if (activeTab) {
      paws.push(
        Number(breed[cardRating || 'affection_level']) >= i ? (
          <img src={paw1} alt="paw" key={`paw1-${i}`} />
        ) : (
          <img src={paw2} alt="paw" key={`paw2-${i}`} />
        )
      );
    }
  }

  useEffect(() => {
    if (activeTab === 'cats' && breed.reference_image_id) {
        setImgSrc(`https://cdn2.thecatapi.com/images/${breed.reference_image_id}.jpg`);
    } else if (activeTab === 'dogs' && breed.image?.url) {
        setImgSrc(breed.image.url);
    } else {
        setImgSrc(defaultPaw)
    }
  }, [breed, activeTab]);
  
  

  return (
    <div className="breedCard" style={cardBackground} key={breed.id}>
      <p className="breedName">{breed.name}</p>
      <img
        className="cardImage"
        src={imgSrc}
        onError={() =>
          setImgSrc(defaultPaw)
        }
        alt={breed.name}
      />
      <div className="ratingWrapper">
        {activeTab === 'cats' && (
          <>
            <p style={{ color: 'black', fontWeight: 'bold', margin: 0, fontSize: '25px' }}>
              {catAttributes[cardRating || 'affection_level']}
            </p>
            <div className="ratingDiv">{paws}</div>
          </>
        )}
        <button className="button-6" role="button">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default BreedCard;
