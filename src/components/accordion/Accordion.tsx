import React, { ReactNode, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Accordion.scss";

interface AccordionProps {
  headerTitle: String;
  contentChildren: ReactNode;
}

const Accordion = ({ headerTitle, contentChildren }: AccordionProps) => {
  const [showBody, setShowBody] = useState<boolean>(false);
  return (
    <div className="flexSettings">
      <div className={`headingTitle ${showBody ? "" : "hide"}`}>
        {headerTitle}
        <span
          onClick={() => setShowBody(!showBody)}
          className={`icon ${showBody ? "Up" : "Down"}`}
        >
          {showBody ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <div className={`contentChildren ${showBody ? "" : "hide"}`}>
        {contentChildren}
      </div>
    </div>
  );
};

export default Accordion;
