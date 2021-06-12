import React from "react";
import PersonalInformationComponent from "./PersonalInformationComponent/PersonalInformationComponent";
import ProfileGoalsComponent from "./ProfileGoalsComponent/ProfileGoalsComponent";

function ProfileComponent() {
    return (
        <div>
            <h2>Profile Component</h2>
            <PersonalInformationComponent />
            <ProfileGoalsComponent />
        </div>
    );
}

export default ProfileComponent;
