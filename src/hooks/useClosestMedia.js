import { useEffect, useState } from "react";
import { findClosest } from "../Utilities/Utility";


export const useClosestMedia = ({queries}) => {
    
    const [closest, setClosest] = useState('xs');


    useEffect(() => {
        const listener = () => setClosest(findClosest(queries));
        listener();
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener); //Cleanup
    }, []);

    
    return closest;
};