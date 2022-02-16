import { useState } from "react";
import Data from "./componets/Data";
import Header from "./componets/Header"
import Result from "./componets/Result";


const App = () => {

  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [interestPayable, setInterestPayable] = useState(0);

  const [resultAvailable, setResultAvailable] = useState(false);


  return (
    <div className="App">
      <Header />
      < Data
        resultAvailable={resultAvailable}
        setResultAvailable={setResultAvailable}
        setEmi={setEmi}
        setInterestPayable={setInterestPayable}
        setTotalPayable={setTotalPayable}
      />
      {resultAvailable && <Result
        emi={emi}
        totalPayable={totalPayable}
        interestPayable={interestPayable}
      />}
    </div>
  );
}

export default App;
