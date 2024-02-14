import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import * as React from "react";

const SheCodesSponsorMail = (props) => {
  const { url } = "https://www.shecodeshacks.com";

  return (
    <>
      <Html lang="en">
        <Button href={url}>Click me</Button>
      </Html>
    </>
  );
};

export default SheCodesSponsorMail;
