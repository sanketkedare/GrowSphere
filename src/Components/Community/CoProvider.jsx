import { createContext } from "react";
import useUserData from "../../Hooks/useUserData";

export const CommunityContext = createContext(null);

const CommunityProvider = ({children}) =>
{
    const myData = useUserData();

    const value = {myData}
    return (
        <CommunityContext.Provider value={value}>
            {children}
        </CommunityContext.Provider>
    )
}

export default CommunityProvider;