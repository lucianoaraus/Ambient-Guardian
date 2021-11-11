import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, ...res }) {
  return (
    <div {...res}>
      <Header />
      <div className="container ">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
