import React from "react";
import useTabs from "../hooks/useTabs";

interface IContent {
  tab: string;
  content: string;
}
const content = [
  {
    tab: "Section 1",
    content: "Content of the Section1",
  },
  {
    tab: "Section 2",
    content: "Content of the Section2",
  },
  {
    tab: "Section 3",
    content: "Content of the Section3",
  },
];

const Tabs = () => {
  const { currentItem, changeItem } = useTabs<IContent>(0, content);

  return (
    <>
      <h1>useTabs Hook value: {currentItem?.tab}</h1>
      {content.map((section, idx) => (
        <button key={idx} onClick={() => changeItem && changeItem(idx)}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem?.content}</div>
    </>
  );
};

export default Tabs;
