import React, { useState } from "react";

import styles from "./SetAppointment.module.scss";
import "antd/dist/antd.css";
import { Steps, Button, message } from "antd";
import AppForm from "../../../Components/AppForm/AppForm";

function SetAppointment() {
  const [current, setCurrent] = useState(0);

  function next() {
    setCurrent(current + 1);
  }

  const prev = () => {
    setCurrent(current - 1);
  };

  const { Step } = Steps;
  const steps = [
    {
      title: "Form Fill Up",
      content: <AppForm bookBtn={next} />,
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </>
    </div>
  );
}

export default SetAppointment;
