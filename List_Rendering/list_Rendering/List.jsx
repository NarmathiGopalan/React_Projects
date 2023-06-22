import React from "react";
import Data from "./Data";

export default function List() {
    const Profile = [
        {
            id:1,
            uname:'ram',
            job:'designer'

        },
        {
            id:1,
            uname:'ram',
            job:'designer'

        },
        {
            id:1,
            uname:'ram',
            job:'designer'

        }
    ];
    const nameList = Profile.map((Profile) => <Data Profile = {Profile}/>)
    return (
        <div>{nameList}</div>
    )
}