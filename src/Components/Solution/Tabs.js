import { useState } from "react";

const Tabs = ({ children, defaultActionKey }) => {
  const [render, setRender] = useState(defaultActionKey);
  const tabs = children.map((obj) => obj.props.tab);
  const renderElement = children.filter((obj) => Number(obj.key) === Number(render));
  return (
    <>
      {tabs.map((tab, index) => (
        <button
          key={tab}
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => setRender(index + 1)}
        >
          {tab}
        </button>
      ))}
      {renderElement}
    </>
  );
};
export default Tabs;
