import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";


export default function Layout({ headerTitle, headerText, activePage ,children }) {
  return (
    
      <div className="layout-wrapper">
        <Header headerTitle={ headerTitle} headerText={headerText} activePage={activePage} />

        <section className="container">
          <div className="row pt-4">
            <div className="col-9 pe-5">{children}</div>
            <div className="col-3 px-3">
              <Sidebar />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    
  );
}
