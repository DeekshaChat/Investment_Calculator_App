export default function UserInput({userInput, handleChange}) {

  return (
    <section id='user-input'>
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            placeholder="$0"
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => handleChange('initialInvestment', e.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            placeholder="$0"
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => handleChange('initialInvestment', e.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            placeholder="$0"
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleChange('expectedReturn', e.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input
            placeholder="$0"
            type="number"
            value={userInput.duration}
            onChange={(e) => handleChange('duration', e.target.value)}/>
        </p>
      </div>
    </section>
  )
}