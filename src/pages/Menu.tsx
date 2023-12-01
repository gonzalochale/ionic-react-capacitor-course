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

const Menu: React.FC = () => {
  const paths = [{ name: "Notas", url: "/app/list", icon: newspaper }];
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
          <IonContent>
            {paths.map((item, index) => (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  detail={true}
                  routerLink={item.url}
                  routerDirection="none"
                >
                  <IonIcon slot="start" icon={item.icon} />
                  {item.name}
                </IonItem>
              </IonMenuToggle>
            ))}

            <IonMenuToggle autoHide={false}>
              <button
                className="submit-btn"
                onClick={() => router.push("/", "root")}
              >
                Salir
              </button>
            </IonMenuToggle>
          </IonContent>
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
