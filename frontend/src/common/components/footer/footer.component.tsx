import * as React from "react";
import { LogoMicrosoftComponent } from "../logo-microsoft";
import { cnc } from "../../../util";

const style = require("./footer.style.scss");

const Links = () => (
  <div className={style.linkArea}>
    <a className={style.link} href="https://www.versor.com.au/web_images/Versor%20-%202017%20-%20Terms%20of%20Business.pdf" target="__blank">Terms & Conditions</a>   
  </div>
);

const Statement = () => (
  <div className={style.statementArea}>
    © Versor 2020
  </div>
);

export const FooterComponent = ({className = null}) => {
  return (
    <footer className={cnc(style.footer, className)}>
      <Statement />
      <a href="https://www.versor.com.au" target="__blank">
        <img src="../versor_logo.png" />
      </a> 
      <Links />
    </footer>
  );
}