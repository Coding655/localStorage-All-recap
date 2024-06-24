import { useState } from 'preact/hooks';
import './Country.css'
const Country = ({country, handleSelectCountries, handleFlags, handleRemoveFromLs}) => {
    const {name, capital, flags,cca3} = country;
   const [visited, setVisited] = useState(false);
   const handleVisitedCountry = ()=>{
    setVisited(!visited)
   } 
   const handleParams = () =>{
    handleSelectCountries(country)
   }
   const handleFlag = ()=>{
    handleFlags(country.flags.png)
   }
    return (
        <div className={`border ${visited ? 'conditional' : 'normal'}`}>
            <p>Name: {name.common}</p>
            <p>Capital: {capital}</p>
            <img src={flags.png} alt="" />
            <p>Code: {cca3}</p>
            <hr />
            <button onClick={handleVisitedCountry} >{visited ? 'Visited' : 'Lets Visit'}</button> 
            <p>{visited ? 'visited' : 'i want to visit'}</p>
            <hr />

            <div className='flex-btn'>
                <button onClick={handleParams}>SELECT</button>
                <button onClick={()=> handleRemoveFromLs(country.region)}>Remove</button>

                <button onClick={handleFlag}>Add</button>
            </div>
          
            
          
            
        </div>
    );
};

export default Country;