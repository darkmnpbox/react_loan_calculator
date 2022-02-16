import { useEffect, useState } from "react";

const Data = (
  {
    resultAvailable,
    setResultAvailable,
    setEmi,
    setTotalPayable,
    setInterestPayable
  }
) => {

  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [interestRate, setInterestRate] = useState('');

  useEffect(
    () => {
      if (resultAvailable) {
        let P = parseInt(loanAmount);
        let r = parseInt(interestRate) / (12 * 100);
        let n = parseInt(loanTenure);
        if (!n) {
          setEmi(P);
          setTotalPayable(P);
          setInterestPayable(0);
        } else {
          let emi = r ? P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)) : P / n;
          let totalPayable = emi * n;
          setEmi(Math.round(emi));
          setTotalPayable(Math.round(totalPayable));
          setInterestPayable(Math.round(totalPayable - P));
        }
      } else {
        setLoanAmount('');
        setLoanTenure('');
        setInterestRate('');
      }
    }, [resultAvailable])


  return (
    <div className="data">
      <form onSubmit={(e) => { e.preventDefault(); setResultAvailable(!resultAvailable); }}>
        {/* Loan Amount Component */}
        <div className="row g-3 align-items-center mt-4">
          <div className="col-4">
            <label htmlFor="inputLoanAmout" className="col-form-label">
              Loan Amount
            </label>
          </div>
          <div className="col-6">
            <input
              type="number"
              id="inputLoanAmout"
              className="form-control"
              aria-describedby="loanAmountHelpInline"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
          </div>
          <div className="col-2">
            <span id="loanAmountHelpInline" className="form-text">
              <b>INR</b>
            </span>
          </div>
        </div>
        {/* Loan Tenure Component */}
        <div className="row g-3 align-items-center mt-4">
          <div className="col-4">
            <label htmlFor="inputLoanTenure" className="col-form-label">
              Loan Tenure
            </label>
          </div>
          <div className="col-6">
            <input
              type="number"
              id="inputLoanAmout"
              className="form-control"
              aria-describedby="loanTenureHelpInline"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              required
            />
          </div>
          <div className="col-2">
            <span id="loanTenureHelpInline" className="form-text">
              <b>Months</b>
            </span>
          </div>
        </div>
        {/* Inrest Rate Component */}
        <div className="row g-3 align-items-center mt-4">
          <div className="col-4">
            <label htmlFor="inputIntrestRate" className="col-form-label">
              Intrest Rate
            </label>
          </div>
          <div className="col-6">
            <input
              type="number"
              id="inputIntrestRate"
              className="form-control"
              aria-describedby="intrestRateHelpInline"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              required
            />
          </div>
          <div className="col-2">
            <span id="intrestRateHelpInline" className="form-text">
              <b>%</b>
            </span>
          </div>
        </div>
        {/* Button Controller */}
        <div className="row justify-content mt-5">
          <div className="col-9">
            <button
              type="submit"
              className="btn btn-primary"
            >
              {resultAvailable ? 'Reset' : 'Calulate'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Data;
