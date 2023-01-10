import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Proptypes from "prop-types";

function createPortalWrapper() {
  const element = document.createElement("div");
  element.id = "portal-wrapper";
  return element;
}

const portalWrapperElm = createPortalWrapper();
const Portal = ({
  containerClassname = "",
  bodyClassName = "",
  onClose = () => {},
  overlay = true,
  containerStyle = {},
  bodyStyle = {},
  children,
}) => {
  useEffect(() => {
    document.body.appendChild(portalWrapperElm);
  }, []);
  const renderContent = (
    <div className={containerClassname} style={containerStyle}>
      {overlay && (
        <div
          className="overlay absolute inset-0 bg-black opacity-20"
          onClick={onClose}
        ></div>
      )}
      <div className={bodyClassName} style={bodyStyle}>
        {children}
      </div>
    </div>
  );
  return createPortal(renderContent, portalWrapperElm);
};

Portal.prototype = {
  containerClassname: Proptypes.string,
  bodyClassName: Proptypes.string,
  onClose: Proptypes.func,
  visible: Proptypes.bool.isRequired,
  containerStyle: Proptypes.object,
  bodyStyle: Proptypes.object,
  children: Proptypes.node,
  overlay: Proptypes.bool,
};

export default Portal;
