import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";

export default function Layout({
  headerTitle,
  headerText,
  activePage,
  children,
  hideSideBar = false
}) {
  return (
    <div className="layout-wrapper">
      <Header
        headerTitle={headerTitle}
        headerText={headerText}
        activePage={activePage}
      />

      <section className="container">
        <div className="row pt-4">
          <div className={`col-12 ${ hideSideBar ? "col-md-12 " : "col-md-9"}`}>{children}</div>
          {!hideSideBar && 
            <div className="col-12 col-md-3 px-3">
              <Sidebar />
            </div>
          }
        </div>
      </section>

      <Footer />
    </div>
  );
}
