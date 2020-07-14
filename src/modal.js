import React from "react";
import "./styles.css";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";

export default function Modal({ modalState, children }) {
  const transitions = useTransition(modalState, null, {
    from: { position: "fixed", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedDiv key={key} style={props}>
          {children}
        </AnimatedDiv>
      )
  );
}

const AnimatedDiv = styled(animated.div)`
  box-sizing: border-box;
  height: auto;
  padding: 8px;
  text-align: center;
  width: 500px;
  border-radius: 4px;
  z-index: 99;
  position: fixed;
  background-color: #fff;
  left: 50%;
  margin-left: -250px;
  top: 50%;
  margin-top: -250px;
`;
