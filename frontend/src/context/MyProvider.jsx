import { useState } from "react";
import GlobalContext from "./globalContext";
import { useEffect } from "react";

const MyProvider = ({ children }) => {
  const [breedQuery, setBreedQuery] = useState('');
  const [activeTab, setActiveTab] = useState('cats');
  const [breeds, setBreeds] = useState([]);
  const [cardRating, setCardRating] = useState('');
  const [breedLoading, setBreedLoading] = useState(true);

  const catAttributes = {
    affection_level: 'Affection Level',
    adaptability: 'Adaptability',
    child_friendly: 'Child Friendly',
    dog_friendly: 'Dog Friendly',
    energy_level: 'Energy Level',
    grooming: 'Grooming',
    health_issues: 'Health Issues',
    intelligence: 'Intelligence',
    shedding_level: 'Shedding Level',
    social_needs: 'Social Needs',
    stranger_friendly: 'Stranger Friendly',
    vocalisation: 'Vocalisation',
  };

  useEffect(() => {
    const doFetch = async () => {
      setBreedLoading(true)
      const urlStart = activeTab === 'cats'? '/api/cat': '/api/dog';
      const urlEnd = breedQuery? '?searchTerm=' + breedQuery: '';
      try {
        const res = await fetch(urlStart + urlEnd);
        console.log(urlStart + urlEnd)
        const data = await res.json();
        console.log('data: ', data)
        setBreeds(data)
        setBreedLoading(false)
      } catch (error) {
        console.log(error)
        setBreedLoading(false)
      }
    }

    doFetch()
  }, [activeTab, breedQuery])

  const contextValues = {
    activeTab, setActiveTab, breeds, setBreedQuery, cardRating, breedLoading, catAttributes, setCardRating
  }

    return (
      <GlobalContext.Provider value={contextValues}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export default MyProvider;