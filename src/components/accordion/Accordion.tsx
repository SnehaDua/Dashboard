import { ReactNode, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Accordion.scss";

interface AccordionProps {
  headerTitle: string;
  contentChildren: ReactNode;
}

const Accordion = ({ headerTitle, contentChildren }: AccordionProps) => {
  const [showBody, setShowBody] = useState<boolean>(false);
  return (
    <div className="accordion">
      <div
        className={`accordion__header ${
          showBody ? "accordion__header--active" : ""
        }`}
        onClick={() => setShowBody(!showBody)}
      >
        <span>{headerTitle}</span>
        <span>{showBody ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      <div
        className={`accordion__content ${
          showBody ? "" : "accordion__content--hidden"
        }`}
      >
        {contentChildren}
      </div>
    </div>
  );
};

export default Accordion;
