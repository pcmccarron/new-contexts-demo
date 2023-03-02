import React, { useState, useEffect, FC } from "react";
import { useFlags } from "launchdarkly-react-client-sdk";

// Clock Component
export default function Clock() {
  const {date, clockFormat} = useFlags();

  const [clock, setClock] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const clock = setInterval(
      (): void => setClock(new Date().toLocaleTimeString(`${clockFormat}`)),
      1000
    );

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
        <div>
          <h1 className="display-1" style={{ fontSize: "4rem" }}>
            {clock}
          </h1>
          { date ? <h1 className="display-4" style={{ fontSize: "2rem" }}>
             {new Date().toLocaleDateString('en-US', {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            })}
          </h1> : 
          <h1 className="display-4" style={{ fontSize: "2rem" }}>
             {new Date().toLocaleDateString('en-GB', {
              year: "numeric",
              day: "numeric",
              month: "numeric",
            })}
          </h1> }
        </div>
  );
};

