import { createContext } from "react";
import useNotification from "../../Hooks/useNotification";

export const DiscussionContext = createContext();

const DiscussionContextComponent = ({children}) =>
{
    const Investments = useNotification();

    const value = {Investments}

    return(
        <DiscussionContext.Provider value={value}>
            {children}
        </DiscussionContext.Provider>
    )
}

export default DiscussionContextComponent;