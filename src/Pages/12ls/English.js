import React from "react";
import Navbar from "../../Navbar";
import JsonData from "./12LsMaterial.json";
import TestBTN from "../../Reusable_Components/TestBTN.js";

function English() {
  const data = JsonData[0].English_tests;

  return (
    <>
      <div className="background_classes">
        <Navbar title="English Official Exams" />
      </div>
      <br />
      <div className="classes_page">
        {data.map((test) => {
          return (
            <TestBTN
              path={test.link}
              year={test.year}
              courseNb={test.courseNb}
            />
          );
        })}
      </div>
    </>
  );
}

export default English;
