import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Redirect, Route } from "react-router";
import { ellipse, triangle } from "ionicons/icons";

const Settings: React.FC = () => {
  return (
    <IonTabs>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/app/settings/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/app/settings/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
      </IonTabBar>

      <IonRouterOutlet>
        <Route exact path="/app/settings">
          <Redirect to="/app/settings/tab1" />
        </Route>
      </IonRouterOutlet>
    </IonTabs>
  );
};

export default Settings;
