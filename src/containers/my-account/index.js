import Layout from "../../hoc/layout";
import { getSession } from "../../util/helpers/sessions";
export default function MyAccount() {
    let user = getSession("token")
  return (
    <Layout
      headerTitle="My Account"
      headerText="All information related to me"
      activePage="my-account"
      hideSideBar={true}
    >
      <h1>Profile Information</h1>

      <p>First Name: {user && user.firstName}</p>
      <p>Last Name: {user && user.lastName}</p>
      <p>Email: {user && user.email}</p>
      <p>Phone: {user && user.phone}</p>

    </Layout>
  );
}
