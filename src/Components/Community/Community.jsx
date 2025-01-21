import React, { useContext } from "react";
import CoMyProfile from "./CoMyProfile";
import { CommunityContext } from "./CoProvider";
import SearchComponent from "./Search/SearchComponent";

const Community = () => 
{
    const data = useContext(CommunityContext);
    console.log(data);
  return (
    <div>
      <CoMyProfile />

      {/* Search Compoenent */}
      <SearchComponent/>
    </div>
  );
};

export default Community;
