import SkeletonParagraph from "../../components/SkeletonParagraph";
import ConnectProgress from "../../components/connect-progress";
import React, { useEffect, useState } from "react";
import TitleConnect from "../../components/title-connect";
import Steps from "../../components/steps";
import { initialState, populateState } from "../../mock/mock-service";
import "./styles.css";

function Onboard() {
  const [onboard, setOnboard] = useState({ ...initialState });

  useEffect(() => {
    setTimeout(() => {
      setOnboard(populateState);
    }, 2000);
  }, []);

  const handleCardClick = (id) => {
    const stepsData = onboard?.steps?.map((step) => {
      if (id === step.id) {
        return { ...step, checked: !step.checked };
      }
      return { ...step };
    });

    const percentSum = stepsData
      ?.filter?.((step) => step.checked)
      ?.reduce((accum, step) => accum + step.weight, 0);
    setOnboard({ ...onboard, steps: [...stepsData], percent: percentSum });
  };
  console.log(onboard);
  return (
    <section className="onboard">
      <div className="onboard__container">
        <TitleConnect
          title="Hello! Pokemon master"
        />
        <div className="onboard__content">
          <div>
            <div className="onboard__progress-container">
              <ConnectProgress
                loading={onboard.loading}
                percent={onboard.percent}
              />
            </div>
            <div className="onboard__paragraph">
              <SkeletonParagraph
                loading={onboard.loading}
                rows={1}
                width="100%"
              >
                <h2 className="onboard__subtitle">{onboard.title}</h2>
                <p className="onboard__description">{onboard.description}</p>
              </SkeletonParagraph>
            </div>
          </div>
        </div>
      </div>
      <Steps onboard={onboard} handleCardClick={handleCardClick} />
    </section>
  );
}

export default Onboard;
