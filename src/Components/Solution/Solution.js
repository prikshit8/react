import TabPane from "./TabPane";
import Tabs from "./Tabs";

const Solution = () => {
  return (
    <div>
      <Tabs defaultActionKey={"1"}>
        <TabPane key={1} tab={"tab 1"}>
          content of tab1
        </TabPane>
        <TabPane key={2} tab={"tab 2"}>
          content of tab2
        </TabPane>
        <TabPane key={3} tab={"tab 3"}>
          content of tab3
        </TabPane>
        <TabPane key={4} tab={"tab 4"}>
          content of tab4
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Solution;
