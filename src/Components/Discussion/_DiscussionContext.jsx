import { createContext } from "react";
import useNotification from "../../Hooks/useNotification";
import useUserData from "../../Hooks/useUserData";

export const DiscussionContext = createContext();

const DiscussionContextComponent = ({children}) =>
{
    const user = useUserData();
    const investments = useNotification(user?.userType);
    const value = {investments, user}

    return(
        <DiscussionContext.Provider value={value}>
            {children}
        </DiscussionContext.Provider>
    )
}

export default DiscussionContextComponent;