// import RegisterFormik from "./components/form/RegisterFormik";
// import RegisterRHF from "./components/form/RegisterRHF";
// import { Fragment, useState } from "react";
// import DropdownPortal from "./components/dropdown/DropdownPortal";
// import Portal from "./components/dropdown/Portal";
// import Tooltip from "./components/dropdown/Tooltip";
// import Modal from "./components/modal/Modal";
import { useState } from "react";
import TooltipAdvanced from "./components/dropdown/TooltipAdvanced";
import ModalAdvance from "./components/modal/ModalAdvance";

import ModalBase from "./components/modal/ModalBase";
import "./index.scss";

function App8() {
  // const [showModal, setShowModal] = useState(false);
  const [openModalBase, setOpenModalBase] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    // <Fragment>
    //   <div>
    //     <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
    //   </div>
    //   <button
    //     className="p-4 bg-blue-500 text-white rounded-lg m-5 "
    //     onClick={() => setShowModal(true)}
    //   >
    //     Show Modal
    //   </button>
    //   <div className="relative z-30">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
    //     quidem id esse minima! Officiis dolore cupiditate laborum tempora est
    //     maiores ipsum, similique iste. Quasi voluptatibus natus doloremque sunt
    //     eius, error quam dolores! Quisquam rem deleniti optio odio voluptas
    //     autem ipsam quod placeat sit voluptatem reiciendis dolore animi eos sunt
    //     dolores voluptates quasi odit, fugit impedit asperiores commodi. Omnis
    //     ipsum aut esse nemo numquam. Suscipit totam aliquid provident obcaecati
    //     voluptas nostrum quaerat ab. Similique doloribus excepturi fugiat
    //     blanditiis, mollitia eveniet odio fugit quod quibusdam placeat aperiam
    //     esse nostrum enim. Veritatis hic facilis aliquid rem ea et pariatur
    //     doloribus optio, nam quibusdam culpa laboriosam eius accusamus qui!
    //     Consequatur iusto dolorum voluptatum distinctio, quod autem velit illum
    //     ea veritatis accusantium nihil. Nam, similique!
    //   </div>

    //   {/* <RegisterRHF></RegisterRHF> */}
    //   {/* <RegisterFormik></RegisterFormik> */}
    //   <div className="overflow-hidden">
    //     <DropdownPortal></DropdownPortal>
    //   </div>
    //   <div className="m-40">
    //     <Tooltip text="Hover me!">this is a tooltip content</Tooltip>
    //   </div>
    // </Fragment>
    <div className="p-5 flex items-center justify-center h-screen">
      <button
        className="p-5 rounded-lg text-white text-center bg-blue-500 mr-5"
        onClick={() => setOpenModalBase(true)}
      >
        Open modal base
      </button>

      <button
        className="p-5 rounded-lg text-white text-center bg-pink-500"
        onClick={() => setOpenModal(true)}
      >
        Open modal
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => setOpenModalBase(false)}
      >
        <div className="bg-white p-10 rounded-lg w-full max-w-[300px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim,
          maiores? Facilis, alias! Mollitia odit, vel sequi dignissimos officia
          reiciendis recusandae?
        </div>
      </ModalBase>
      <ModalAdvance
        visible={openModal}
        onClose={() => setOpenModal(false)}
        heading="Welcome back!"
        bodyClassName="w-full max-w-[400px] bg-white"
      >
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            <TooltipAdvanced title="Email">
              Please enter your email address
            </TooltipAdvanced>
          </label>
          <input
            type="email"
            className=" w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4 mb-5"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="password" className="text-sm cursor-pointer">
            Password
          </label>
          <input
            type="password"
            className=" w-full text-sm leading-normal bg-[#E7ECF3] rounded-lg p-4 mb-5"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full p-4 text-base font-semibold text-white bg-[#31a9ff] rounded-lg"
        >
          Sign in
        </button>
      </ModalAdvance>
      <div className="ml-5 inline-block">
        <TooltipAdvanced title="Tooltip">
          This is a tooltip message
        </TooltipAdvanced>
      </div>
    </div>
  );
}

export default App8;
