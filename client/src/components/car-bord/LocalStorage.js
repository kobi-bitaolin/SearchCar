import React,{useState} from 'react';

 const useLocalState = (localItem) => {
    
    const [loc, setState] = useState(localStorage.getItem(localItem));

    const setLoc = (newItme) => {
        localStorage.setItem('cars', JSON.stringify(newItme));
        setState(newItme)
    }
    
    return [loc, setLoc];
}
export default useLocalState;
