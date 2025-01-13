import React from "react";
import Discussion from "../Components/Discussion/Discussion";
import DiscussionGoHome from "../Components/Discussion/DiscussionGoHome";
import DiscussionHeader from "../Components/Discussion/DiscussionHeader";
import DiscussionContextComponent from "../Components/Discussion/_DiscussionContext";

const DiscussionPage = () => {
  return (
    <DiscussionContextComponent>
      <div className="bg-[#0a0f24] text-[#f5f3f0] relative min-h-screen">
        <DiscussionHeader />
        <DiscussionGoHome />
        <Discussion />
      </div>
    </DiscussionContextComponent>
  );
};

export default DiscussionPage;
