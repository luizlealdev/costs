//Styles
import styles from "./NewProject.module.css";

//Hooks
import { useNavigate } from "react-router-dom";

//Components
import ProjectForm from "../project/ProjectForm";

function NewProject() {
   const history = useNavigate();

   function createPost(project) {
      //Initialize cost and services
      project.costs = 0;
      project.services = [];

      fetch("http://localhost:5000/projects", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(project),
      })
         .then((resp) => resp.json())
         .then((data) => {
            history("/projects", {
               state: { message: "Projeto criado com sucesso" },
            });
         })
         .catch((err) => console.log(err));
   }

   return (
      <div className={styles.newProjectContainer}>
         <h1>Criar projeto</h1>
         <p>Crie seu projeto para depois adicionar os serviços</p>
         <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
      </div>
   );
}
export default NewProject;
