import { createContext, useEffect, useState } from "react";

export const HiddenPostsContext = createContext({
    hiddenIds: [] as number[],
    hidePost: (id: number) => { },
    restorePost: (id: number) => { }
})

export function HiddenPostsProvider({ children }: { children: React.ReactNode }) {
    const [hiddenIds, setHiddenIds] = useState<number[]>([]);

    const hidePost = (id: number) => {
        setHiddenIds(prev => [...prev, id]);
    };

    const restorePost = (id: number) => {
        setHiddenIds(prev => prev.filter(hiddenId => hiddenId !== id));
    };



    // useEffect 1: load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("hiddenIds")
        if (stored) {
            setHiddenIds(JSON.parse(stored))
        }
    }, [])

    // useEffect 2: save to localStorage
    useEffect(() => {
        localStorage.setItem("hiddenIds", JSON.stringify(hiddenIds))
    }, [hiddenIds])

    return (
        <HiddenPostsContext.Provider value={{ hiddenIds, hidePost, restorePost }}>
            {children}
        </HiddenPostsContext.Provider>
    )

}