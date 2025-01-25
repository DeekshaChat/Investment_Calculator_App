import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({userInput}) {

  const results = calculateInvestmentResults(userInput);
  const initialInvestment =  results?.length > 0 && results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;
  return (
    <>
    <p className="center">Results</p>
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {results.map((result) => {
        const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestment;
        const totalAmountInvested = result.valueEndOfYear - totalInterest;
        return (
          <tbody key={result.year}>
          <tr>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        </tbody>
        );
      })
      }
    </table>
    </>

  )
}