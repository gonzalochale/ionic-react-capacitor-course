import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React from "react";
import "./Register.css";

const Register: React.FC = () => {
  const router = useIonRouter();

  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("doRegister");
    router.goBack();
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar class="tool">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={false}>
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <IonCard>
                <IonCardContent>
                  <form onSubmit={doRegister}>
                    <IonInput
                      labelPlacement="floating"
                      label="Primer Nombre"
                      type="text"
                      placeholder="Miguel"
                    ></IonInput>
                    <IonInput
                      labelPlacement="floating"
                      label="Primer Apellido"
                      type="text"
                      placeholder="Chale"
                    ></IonInput>
                    <IonInput
                      labelPlacement="floating"
                      label="Usuario"
                      type="text"
                      placeholder="MiUsuario"
                    ></IonInput>
                    <IonInput
                      labelPlacement="floating"
                      label="Correo Electronico"
                      type="email"
                      placeholder="miguel@gmail.com"
                    ></IonInput>
                    <IonInput
                      labelPlacement="floating"
                      label="Contraseña"
                      type="password"
                      placeholder="123456"
                    ></IonInput>
                    <button type="submit" className="submit-btn">
                      Crear Cuenta
                    </button>
                  </form>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
