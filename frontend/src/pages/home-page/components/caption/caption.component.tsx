import * as React from "react"

const style = require("./caption.style.scss");


export const CaptionComponent = () => (
  <div className={style.caption}>
    <b><p className={style.title}>Letters revealed.</p></b>
    <b><p className={style.subtitle}>Let's find out how it all happened.</p></b>
  </div>
);