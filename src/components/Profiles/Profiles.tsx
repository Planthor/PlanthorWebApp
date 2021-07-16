import React from "react";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import ProfileGoals from "./ProfileGoals/ProfileGoals";

function Profiles() {
    return (
        <div>
            <h2>Profile Component</h2>
            <PersonalInformation />
            <ProfileGoals />
        </div>
    );
}

export default Profiles;
