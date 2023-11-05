import { useEffect, useState, createContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [cartList, setcartList] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let imageSrcKey = "desktop";

  if (windowWidth <= 768) {
    imageSrcKey = "tablet";
  }
  if (windowWidth <= 476) {
    imageSrcKey = "mobile";
  }

  return (
    <MyContext.Provider value={{ cartList, setcartList, imageSrcKey }}>
      {children}
    </MyContext.Provider>
  );
};

function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/home`);
  }, []);

  return (
    <MyProvider>
      <div>
        <ScrollToTop />
        <Nav />

        <Outlet />
        <Footer />
      </div>
    </MyProvider>
  );
}

export default RootLayout;
