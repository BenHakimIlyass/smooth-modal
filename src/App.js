import React from "react";
import "./styles.css";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import Modal from "./modal";

export default function App() {
  const [modalState, toggleModal] = React.useState(false);
  const spring = useSpring({
    filter: modalState ? "blur(4px)" : "blur(0px)"
  });
  return (
    <>
      <Modal modalState={modalState}>
        <div>
          <img
            src={url}
            alt=""
            style={{
              height: 300,
              width: "100%",
              borderRadius: 4,
              margin: "0 auto"
            }}
          />
          <h1>Im a modal</h1>
          <h2>Click outside to toggle me</h2>
        </div>
        <Button
          onClick={() => toggleModal(false)}
          style={{ width: 200, height: 60 }}
        >
          Close modal
        </Button>
      </Modal>
      <Container
        style={spring}
        onClick={() => modalState && toggleModal(false)}
      >
        <Button
          onClick={() => toggleModal(true)}
          style={{ margin: "40vh auto" }}
        >
          Open modal
        </Button>
      </Container>
    </>
  );
}
const Container = styled(animated.div)`
  width: 100%;
  height: ${window.innerHeight}px;
  background-image: url("https://images.unsplash.com/photo-1594508464266-cf9932737a8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2123&q=80");
  background-size: cover;
  text-align: center;
`;
const Button = styled.button`
  border: 4px solid white;
  width: 140px;
  height: 140px;
  border-radius: 100px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  background: linear-gradient(
    60deg,
    rgba(40, 175, 137, 1) 0%,
    rgba(38, 145, 143, 1) 5%,
    rgba(35, 106, 152, 1) 100%
  );
`;
const url =
  "https://images.unsplash.com/photo-1593642632505-1f965e8426e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80";
