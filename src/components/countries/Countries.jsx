import { useEffect, useState } from "preact/hooks";
import Country from "../country/Country";
import './Countries.css'
import { addToLs, getStoredCart, removeFromLocalStorage } from "../../utilities/localStorage";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    const handleSelectCountries = country =>{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        addToLs(country.region)
    }

    const handleRemoveFromLs = id => {
        removeFromLocalStorage(id)
        const setRemaining = cart.filter(idx => idx !== id);
        // setCountries(setRemaining)
    }
   
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    useEffect(()=>{
        if(countries.length){
            // console.log(countries)
            const storedCart = getStoredCart();
            const savedCart = [];

            for(const id of storedCart){
                console.log(id)
                const country = countries.find(country => country.id === id)
                if(country){
                    savedCart.push(country)
                }
            }
            
            // setCart(savedCart)
        }
    },[countries])


    const handleFlags = flags =>{
        const newVisitedFlag = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlag)
    }
    return (
        <div>
            <h3>Total countries: {countries.length} </h3>
            <p>Visited Countries: <big>{visitedCountries.length}</big></p>
            {
                visitedFlags.map(flag => <img className="img-size" src={flag}></img>)
            }
           
            <div className="cart-container">
                {
                    countries.map(country => <Country 
                        handleSelectCountries={handleSelectCountries}
                        handleRemoveFromLs={handleRemoveFromLs}
                        handleFlags={handleFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;