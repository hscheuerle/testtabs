import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/auth">
          <IonPage>
            <IonContent>
              <IonButton routerLink={"/tabs/tab2"}>Tab2</IonButton>
            </IonContent>
          </IonPage>
        </Route>
        <Route path="/tabs">
          <IonTabs>
            <IonRouterOutlet>
              <Route exact path="tabs/tab1">
                <IonPage>
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Tab 1</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent fullscreen>
                    <IonHeader collapse="condense">
                      <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                      </IonToolbar>
                    </IonHeader>
                  </IonContent>
                </IonPage>
              </Route>
              <Route exact path="tabs/tab2">
                <IonPage>
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Tab 1</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent fullscreen>
                    <IonHeader collapse="condense">
                      <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                      </IonToolbar>
                    </IonHeader>
                  </IonContent>
                </IonPage>
              </Route>
              <Route exact path="tabs/tab3">
                <IonPage>
                  <IonHeader>
                    <IonToolbar>
                      <IonTitle>Tab 1</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  <IonContent fullscreen>
                    <IonHeader collapse="condense">
                      <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                      </IonToolbar>
                    </IonHeader>
                  </IonContent>
                </IonPage>
              </Route>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="tab1" href="/tabs/tab1">
                <IonIcon icon={triangle} />
                <IonLabel>Tab 1</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tabs/tab2">
                <IonIcon icon={ellipse} />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tabs/tab3">
                <IonIcon icon={square} />
                <IonLabel>Tab 3</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
