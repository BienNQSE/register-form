import React from "react";
// import HeaderMain from "./components/header/HeaderMain";
import Nav from "./components/Nav";
// import { AuthProvider } from "./contexts/auth-context";
// import { CountProvider, useCount } from "./contexts/countContext";
// import { GalleryProvider } from "./contexts/gallery-context";
// import CardList from "./gallery/CardList";
// import PhotoList from "./gallery/PhotoList";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./components/BlogPage";
import ProfilePage from "./components/ProfilePage";
import BlogPageDetails from "./components/BlogPageDetails";

// function CountDisplay() {
//   const [count] = useCount();
//   return <div>The count is: {count}</div>;
// }

// function Counter() {
//   const [, setCount] = useCount();

//   const increment = () => setCount((c) => c + 1);
//   return (
//     <button
//       className="p-4 rounded-lg text-white font-semibold bg-purple-500"
//       onClick={increment}
//     >
//       Increment count
//     </button>
//   );
// }

const App = () => {
  return (
    // <Fragment>
    //   {/* <div className="p-10 flex items-center justify-center gap-x-5">
    //   <CountProvider>
    //     <CountDisplay></CountDisplay>
    //     <Counter></Counter>
    //   </CountProvider>
    // </div> */}

    //   <AuthProvider>
    //     <GalleryProvider>
    //       <HeaderMain></HeaderMain>
    //       <PhotoList></PhotoList>
    //       <CardList></CardList>
    //     </GalleryProvider>
    //   </AuthProvider>
    // </Fragment>
    <div>
      <Routes>
        <Route path="/" element={<Nav></Nav>}>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
          <Route
            path="/blog/:slug"
            element={<BlogPageDetails></BlogPageDetails>}
          ></Route>
          <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
        </Route>
        <Route path="*" element={<>This is 404 page</>}></Route>
      </Routes>
    </div>
  );
};

export default App;
