import React, { useState } from "react";
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonModal,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import "./List.css";

const List: React.FC = () => {
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const [newNoteContent, setNewNoteContent] = useState("");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [notes, setNotes] = useState<
    Array<{ id: number; title: string; content: string; date: string }>
  >([]);
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [showValidationAlert, setShowValidationAlert] = useState(false);

  const openAddNoteModal = () => {
    setShowAddNoteModal(true);
  };

  const closeAddNoteModal = () => {
    setShowAddNoteModal(false);
  };

  const addNote = () => {
    if (!newNoteTitle || !newNoteContent || !selectedDate) {
      setShowValidationAlert(true);
      return;
    }

    const newNote = {
      id: notes.length + 1,
      title: newNoteTitle,
      content: newNoteContent,
      date: selectedDate,
    };

    setNotes([...notes, newNote]);
    closeAddNoteModal();
    setNewNoteTitle("");
    setNewNoteContent("");
    setSelectedDate(null);
  };

  const deleteNote = () => {
    if (selectedNote !== null) {
      const updatedNotes = notes.filter((note) => note.id !== selectedNote);
      setNotes(updatedNotes);
      setSelectedNote(null);
    }
  };

  const groupedNotes: { [key: string]: any[] } = {};
  notes.forEach((note) => {
    const month = note.date.split("-")[1];
    if (!groupedNotes[month]) {
      groupedNotes[month] = [];
    }
    groupedNotes[month].push(note);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Mis notas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonRefresher slot="fixed" onIonRefresh={(ev) => ev.detail.complete()}>
          <IonRefresherContent />
        </IonRefresher>
        {Object.entries(groupedNotes).map(([month, monthNotes]) => (
          <div key={month}>
            <h2>{getMonthName(month)}</h2>
            {monthNotes.map((note) => (
              <IonCard key={note.id}>
                <IonCardContent>
                  <h3>{note.title}</h3>
                  <p>{note.content}</p>
                  <p>{note.date}</p>
                  <IonButton
                    color="danger"
                    expand="full"
                    onClick={() => setSelectedNote(note.id)}
                  >
                    Eliminar
                  </IonButton>
                </IonCardContent>
              </IonCard>
            ))}
          </div>
        ))}

        <IonModal
          isOpen={showAddNoteModal}
          onDidDismiss={closeAddNoteModal}
          class="container"
        >
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="end">
                <IonButton onClick={closeAddNoteModal}>Cerrar</IonButton>
              </IonButtons>
              <IonTitle>Nueva Nota</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent class="modal">
            <div className="input">
              <IonLabel position="floating">Título:</IonLabel>
              <IonInput
                type="text"
                value={newNoteTitle}
                onIonChange={(e) => setNewNoteTitle(e.detail.value!)}
              />
            </div>

            <div className="input">
              <IonLabel position="floating">Contenido:</IonLabel>
              <IonTextarea
                value={newNoteContent}
                onIonChange={(e) => setNewNoteContent(e.detail.value!)}
              />
            </div>
            <div className="input">
              <IonLabel position="stacked">Fecha:</IonLabel>
              <IonDatetime
                display-format="YYYY-MM-DDTHH:mm:ss"
                value={selectedDate}
                onIonChange={(e) => {
                  const value = e.detail.value;
                  setSelectedDate((prevDate) => {
                    const newValue = Array.isArray(value) ? value[0] : value;
                    return newValue || prevDate;
                  });
                }}
              ></IonDatetime>
            </div>

            <button onClick={addNote} className="btn">
              Agregar
            </button>

            <button onClick={closeAddNoteModal} className="btn-exit">
              Cancelar
            </button>
          </IonContent>
        </IonModal>

        <IonAlert
          isOpen={selectedNote !== null}
          onDidDismiss={() => setSelectedNote(null)}
          header="Eliminar Nota"
          message="¿Estás seguro de que quieres eliminar esta nota?"
          buttons={[
            {
              text: "Cancelar",
              role: "cancel",
              handler: () => setSelectedNote(null),
            },
            {
              text: "Eliminar",
              handler: deleteNote,
            },
          ]}
        />

        <IonAlert
          isOpen={showValidationAlert}
          onDidDismiss={() => setShowValidationAlert(false)}
          header="Campos Vacíos"
          message="Por favor, completa tanto el título, el contenido como la fecha."
          buttons={[
            {
              text: "OK",
              handler: () => setShowValidationAlert(false),
            },
          ]}
        />
      </IonContent>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={openAddNoteModal}>
          <IonIcon icon={addOutline} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

const getMonthName = (month: string) => {
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  return monthNames[parseInt(month, 10) - 1];
};

export default List;
