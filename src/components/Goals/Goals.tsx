import React from "react";
import CreateGoalBox from "./CreateGoalBox/CreateGoalBox";
import EveryoneGoals from "./EveryoneGoals/EveryoneGoals";
import MyGoalsComponent from "./MyGoals/MyGoals";

const Goals = () => {
  return (
    <div>
      <h2>Goal Component</h2>
      <CreateGoalBox />
      <MyGoalsComponent />
      <EveryoneGoals />
    </div>
  );
};

export default Goals;
