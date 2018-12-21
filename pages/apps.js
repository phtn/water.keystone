import Layout from "../components/Layout";
import Trailer from "../components/Trailer"
import Card from "../components/Card";

const apps = [{ title: "Palette Picker" }, { title: "Wikilite" }];

const Apps = () => (
  <Layout title="Apps">
    <Trailer items={apps}/>
  </Layout>
)
export default Apps
