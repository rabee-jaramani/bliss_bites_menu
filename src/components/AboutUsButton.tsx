import React, { useState } from "react";
import { Button } from "@mui/material";

const AboutUsButton = () => {
  const handleClick = () => {
    window.open(
      "https://apparelgroupapps.com/bliss-bites-menu/about-us/pdf.pdf",
      "_blank"
    );
  };

  return (
    <div className="about-us-div">
      <Button size="small" onClick={handleClick}>
        About Us
      </Button>
    </div>
  );
};

export default AboutUsButton;
