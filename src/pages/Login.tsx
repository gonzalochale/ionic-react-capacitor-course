import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import logo from "/logo.png";
import "./Login.css";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present("Ingresando...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };

  return (
    <>
      <IonPage>
        <IonContent scrollY={false}>
          <div className="container">
            <div className="login-card">
              <img src={logo} alt="FCC Logo" width={"200px"} />
              <form onSubmit={doLogin}>
                <IonInput
                  mode="md"
                  fill="outline"
                  labelPlacement="floating"
                  label="Usuario"
                  type="text"
                  placeholder="miusuario"
                ></IonInput>
                <IonInput
                  mode="md"
                  className="ion-margin-top"
                  fill="outline"
                  labelPlacement="floating"
                  label="Contraseña"
                  type="password"
                  placeholder="123456"
                ></IonInput>
                <div className="register">
                  <span>¿No tienes cuenta aún?</span>
                  <button
                    onClick={() => router.push("/register", "root")}
                    type="button"
                    className="link-btn"
                  >
                    Registrate
                  </button>
                </div>
                <button type="submit" className="submit-btn">
                  Entrar
                </button>
              </form>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Login;
