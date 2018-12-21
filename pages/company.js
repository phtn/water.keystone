import Layout from "../components/Layout";
import Trailer from "../components/Trailer"

const items = [{ title: "Our Company" }, { title: "CEO | ThereforeIAm" }];

const Company = () => {
  return (
    <Layout title="Company">
      <Trailer items={items}/>
    </Layout>
  )
}
export default Company
