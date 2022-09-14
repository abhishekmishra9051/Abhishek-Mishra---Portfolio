import Layout from '../../hoc/layout'
import sh1 from "../../assets/images/sh1.jpg";
import sh2 from "../../assets/images/sh2.jpg";
import sh3 from "../../assets/images/sh3.jpg";
import sh4 from "../../assets/images/sh4.jpg";
import sh5 from "../../assets/images/sh5.jpg";
import sh6 from "../../assets/images/sh6.jpg";
import sh7 from "../../assets/images/sh7.jpg";
import sh8 from "../../assets/images/sh8.jpg";

export default function Product() {
  return (
    <Layout headerTitle='Reebok Store' headerText='Welcome to reebok store' activePage='product'>
      <h1>New Arrivals</h1>

      <div className="row">
        <div className="col-3 mb-3">
          <img src={sh1} height="200" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh2} height="200" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh3} height="200" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh4} height="200" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh5} height="200" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh6} height="200" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh7} height="200" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh8} height="200" className="w-100" alt='...'/>
        </div>
      </div>
    </Layout>
  );
}
