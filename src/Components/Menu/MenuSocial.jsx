import React from "react";
import { GITHUB_URL, LINKEDIN_URL } from "../../Utils/constants";
import { BsGithub } from "react-icons/bs";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const MenuSocial = () => 
{
  return (
    <div className="flex h-[50px] justify-center items-center gap-4 mt-4">
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-3 hover:bg-[#11162d] hover:text-[#e2bf65] transition-all duration-300"
      >
        <TbBrandLinkedinFilled className="text-2xl" />
      </a>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-3 hover:bg-[#11162d] hover:text-[#e2bf65] transition-all duration-300"
      >
        <BsGithub className="text-2xl" />
      </a>
    </div>
  );
};

export default MenuSocial;
