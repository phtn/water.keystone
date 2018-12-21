import Layout from "../components/Layout";
import Trailer from "../components/trailer";

const items = [
  { id: 0, title: "Our Company" },
  { id: 1, title: "CEO | ThereforeIAm" }
];

const Company = () => {
  return (
    <Layout title="Company">
      <Trailer items={items} />
    </Layout>
  );
};
export default Company;
