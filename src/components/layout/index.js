import Header from "./Header";
import Footer from "./Footer";
import BasicModal from "./Modal";

export default function Layout({ children, ...res }) {
  return (
    <div className="drop-shadow">
      <div {...res}>
        <Header />
        <BasicModal />
        <div className="container ">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
