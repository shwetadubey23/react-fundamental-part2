import React, { useEffect } from "react";

export default function CleanUpFunction() {
   useEffect(() => {
    return function () {
        console.log('cleanup function');
    } 
   })

    return (
        <div>
       Hello 
        </div>
    )
}