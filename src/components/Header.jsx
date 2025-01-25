import AppLogo from '/investment-calculator-logo.png'
export default function Header(){
  return (
    <div id="header">
      <img src={AppLogo} alt="logo" />
      <h1>React Investment Calculator</h1>
    </div>
  )
}