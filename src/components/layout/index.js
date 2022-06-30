import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, ...res }) {
  return (
    <div className="drop-shadow">
      <div {...res}>
        <Header />
        <div className="container ">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
