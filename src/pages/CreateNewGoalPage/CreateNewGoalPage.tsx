import React from "react";

export default function CreateNewGoalPage() {
    return (
        <div>
            <h1>This is the Create New Goal Page</h1>
            <form>
                <label>
                    Goal Name
                    <input type="text"></input>
                </label>
                <br />
                <label>
                    Goal Description
                    <textarea></textarea>
                </label>
                <br />
                <label>
                    Goal current progress
                    <input></input>
                </label>
                <br />
                <label>
                    Goal Number
                    <input type="text"></input>
                </label>
                <br />
                <label>
                    Goal Deadline
                    <input></input>
                </label>
                <br />
                <input type="submit" value="Save" />
            </form>
        </div>
    );
}
