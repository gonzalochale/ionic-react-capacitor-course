import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import { Redirect, Route, Router } from "react-router";
import List from "./List";
import Settings from "./Settings";
import { logOutOutline, newspaper, settings } from "ionicons/icons";
import "./Menu.css";

const Menu: React.FC = () => {
  const paths = [
    { name: "Notas", url: "/app/list", icon: newspaper },
    { name: "Configuración", url: "/app/settings", icon: settings },
  ];
  const router = useIonRouter();
  return (
    <IonPage>
      <IonSplitPane contentId="main">
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Dear Diary</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent class="side">
            <button
              className="submit-btn"
              onClick={() => router.push("/app/list")}
            >
              Mis notas
            </button>
          </IonContent>
          <button className="btn-exit" onClick={() => router.push("/", "root")}>
            Salir
          </button>
        </IonMenu>

        <IonRouterOutlet id="main">
          <Route exact path="/app/list" component={List} />
          <Route path="/app/settings" component={Settings} />
          <Route exact path="/app">
            <Redirect to="/app/list" />
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonPage>
  );
};

export default Menu;
