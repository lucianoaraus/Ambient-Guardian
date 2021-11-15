import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

function Layout({ children, ...res }) {
  return (
    <div className="column">
      <div {...res}>
        <Header />
        <div className="container ">{children}</div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
