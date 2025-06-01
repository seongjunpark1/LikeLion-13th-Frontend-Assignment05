import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [state, setState] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}