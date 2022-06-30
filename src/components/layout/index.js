import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import BasicModal from "./Modal";

export default function Layout({ children, ...res }) {
  return (
    <div className="drop-shadow">
      <div {...res}>
        <Header />
        <Content />
        <BasicModal />
        <div className="container ">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
