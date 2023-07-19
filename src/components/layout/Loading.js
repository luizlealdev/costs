//Loading svg icon
import loading from "../../img/loading.svg";

//Styles
import styles from "./Loading.module.css";

function Loading() {
   return (
      <div className={styles.loaderContainer}>
         <img className={styles.loader} src={loading} alt="Carregando..." />
      </div>
   );
}
export default Loading;
