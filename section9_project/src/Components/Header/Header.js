import logo from "../../assets/investment-calculator-logo.png";
import styled from './Header.module.css';

export default function Header() {
  return (
    <header className={styled.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
