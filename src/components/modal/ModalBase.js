import React from "react";
import Portal from "../dropdown/Portal";
import { CSSTransition } from "react-transition-group";

const ModalBase = ({ visible, onClose, children, bodyClassName = "" }) => {
  return (
    <>
      <CSSTransition in={visible} timeout={250} unmountOnExit classNames="zoom">
        {(status) => (
          <Portal
            visible={status !== "exited"}
            onClose={onClose}
            containerClassname="fixed inset-0 z-[9999] flex items-center justify-center"
            bodyStyle={{ transition: "all 250ms" }}
            bodyClassName={`content relative z-10 ${bodyClassName}`}
          >
            {children}
          </Portal>
        )}
      </CSSTransition>
    </>
  );
};

export default ModalBase;
