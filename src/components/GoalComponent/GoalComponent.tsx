import React from "react";
import CreateGoalBoxComponent from "./CreateGoalBoxComponent/CreateGoalBoxComponent";
import EveryoneGoalsComponent from "./EveryoneGoalsComponent/EveryoneGoalsComponent";
import MyGoalsComponent from "./MyGoalsComponent/MyGoalsComponent";

function GoalComponent() {
    return (
        <div>
            <h2>Goal Component</h2>
            <CreateGoalBoxComponent />
            <MyGoalsComponent />
            <EveryoneGoalsComponent />
        </div>
    );
}

export default GoalComponent;
