import styled, { css } from "styled-components";
const mainColor = "#f00000";

const stateComponent = {
  loading: css`
    animation: skeleton-progress 2.8s ease infinite, progress 1.4s ease-out;
    stroke-dasharray: 100, 100;
  `,
  ready: css`
    stroke: ${mainColor};
    stroke-dasharray: ${({ percent }) => percent || 2}, 100;
    animation: progress-reverse 1s ease-out, progress 1s ease-out 1s;
  `,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .connect-progress__img {
    max-height: 70%;
    max-width: 70%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .connect-progress__text {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5rem;
    letter-spacing: 0em;
    color: ${mainColor};
    margin: 0 auto;
  }

  .connect-progress__text--loading {
    width: 100%;
    max-width: 1.7rem;
    height: 0.875rem;
    margin-top: 5px;
    margin-bottom: 6px;
    color: transparent;
  }

  .connect-progress__container {
    position: relative;
  }

  .connect-progress__circular-chart {
    display: block;
    max-width: 76px;
    max-height: 76px;
    width: 100%;
    height: 100%;
  }

  .connect-progress__circle {
    fill: none;
    stroke-width: 3.2;
    ${({ loading }) =>
      !!loading ? stateComponent.loading : stateComponent.ready}
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  @keyframes progress-reverse {
    0% {
      stroke-dasharray: 100 100;
    }
    0% {
      stroke-dasharray: 0 100;
    }
  }

  @keyframes skeleton-progress {
    0% {
      stroke: #f2f2f2;
      opacity: 0;
    }
    50% {
      stroke: #e6e6e6;
      opacity: 1;
    }
    100% {
      stroke: #f2f2f2;
      opacity: 0;
    }
  }
`;
