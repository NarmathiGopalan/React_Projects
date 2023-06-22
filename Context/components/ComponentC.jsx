import React from "react";
import { UserConsumer } from "./UserContext";


export default function ComponentA(){
    return(
        <>
        <UserConsumer>
            {
                function userName(userName){
                    return(
                        <>
                       <p>hello {userName}</p>
                        </>
                    )
                }
            }
        </UserConsumer>
        </>
    )
}