import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const GalleryContext = createContext();

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1546975490-a79abdd54533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavourite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1612940960267-4549a58fb257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavourite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1628148366072-3337dd316e17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavourite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1600615614799-2cd68cb75705?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavourite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1628558917600-13c89decd56d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    isFavourite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570566998157-0df9e6f8d5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    isFavourite: false,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1549950844-e6a5d47f8324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    isFavourite: false,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1594713110068-373988a737e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    isFavourite: false,
  },
];

function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favouriteList, setFavouriteList] = useState([]);

  function toggleFavourite(photoId) {
    const updateArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavourite: !photo.isFavourite };
      }
      return photo;
    });
    setValue(updateArray);
    setPhotos(updateArray);
  }
  // 1. Vi???t function addToCart
  // 2. Function addToCart truy???n params l?? photo (newItem)
  function addToCart(newItem) {
    // 3. C???p nh???t l???i state gi??? h??ng (cartItems)
    setCartItems((prevItems) => {
      // 4. Ki???m tra s???n ph???m ???? t???n t???i trong gi??? hay ch??a
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      console.log("isExisted: ", isExisted);
      // 5. N???u t???n t???i th?? tr??? v??? danh s??ch tr?????c ????
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // 6. Ch??a t???n t???i th?? th??m v??o gi??? h??ng
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }

  // remove item from cart
  function removeFromCart(id) {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== id);
      setStoredCart(result);
      return result;
    });
  }

  const value = {
    photos,
    cartItems,
    favouriteList,
    setPhotos,
    setCartItems,
    setFavouriteList,
    toggleFavourite,
    addToCart,
    removeFromCart,
  };

  return (
    <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be used within a GalleryProvider");
  return context;
}

export { GalleryProvider, useGallery };
