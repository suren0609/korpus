import Layout from "../Layout";
import RoutesComponent from "../RoutesComponent";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Layout>
        <RoutesComponent />
      </Layout>
    </div>
  );
}

export default App;
