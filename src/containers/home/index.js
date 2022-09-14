import Layout from '../../hoc/layout'
import sh1 from "../../assets/images/sh1.jpg";
import sh2 from "../../assets/images/sh2.jpg";
import sh3 from "../../assets/images/sh3.jpg";
import sh4 from "../../assets/images/sh4.jpg";
import sh5 from "../../assets/images/sh5.jpg";
import sh6 from "../../assets/images/sh6.jpg";
import sh7 from "../../assets/images/sh7.jpg";
import sh8 from "../../assets/images/sh8.jpg";

export default function Home() {
  return (
    <Layout headerTitle='Reebok Store' headerText='Welcome to reebok store' activePage='home'>
      <h1>Welcome to Reebok!!</h1>
      <p>
        Reebok International Limited (/ˈriːbɒk/) is an American fitness footwear
        and clothing manufacturer that is a part of Authentic Brands Group. It
        was established in England in 1958 as a companion company to J.W. Foster
        and Sons, a sporting goods company which had been founded in 1895 in
        Bolton, Lancashire. From 1958 until 1986, the brand featured the flag of
        Great Britain in its logo to signify the origins of the company. The
        company was bought by German sporting goods company Adidas in 2005;
        Adidas then sold Reebok to Authentic Brands Group in 2021. The company's
        global headquarters are located in Boston, Massachusetts, in the Seaport
        District.
      </p>
      <h3>Featured items</h3>
      <div className="row">
        <div className="col-3 mb-3">
          <img src={sh1} height="150" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh2} height="150" className="w-3" alt='...' />
        </div>
        <div className="col-3 mb-3">
          <img src={sh3} height="150" className="w-100" alt='...' />
        </div>
        <div className="col-3 mb-3">
          <img src={sh4} height="150" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh5} height="150" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh6} height="150" className="w-100" alt='...' />
        </div>
        <div className="col-3 mb-3">
          <img src={sh7} height="150" className="w-100" alt='...'/>
        </div>
        <div className="col-3 mb-3">
          <img src={sh8} height="150" className="w-100" alt='...'/>
        </div>
      </div>
    </Layout>
  );
}
