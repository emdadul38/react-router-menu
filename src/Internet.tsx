import { useState, useEffect } from "react";

function Internet({ status }: any) {
  console.log(status);
  const [isConnected, setIsConnected] = useState(status);

  const toggleCOnnection = () => {
    setIsConnected(!isConnected);
  };

  useEffect(() => {
    console.log(`UseEffect has been called`, isConnected);
  });

  return (
    <div>
      <div> {`Internet Connected: ${isConnected}`}</div>
      <button onClick={toggleCOnnection}> Toggle Connection </button>
    </div>
  );
}

export default Internet;
