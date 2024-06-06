import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RefundList } from "./refund/RefundList";
import { RefundCreate } from "./refund/RefundCreate";
import { RefundEdit } from "./refund/RefundEdit";
import { RefundShow } from "./refund/RefundShow";
import { PaymentIntentList } from "./paymentIntent/PaymentIntentList";
import { PaymentIntentCreate } from "./paymentIntent/PaymentIntentCreate";
import { PaymentIntentEdit } from "./paymentIntent/PaymentIntentEdit";
import { PaymentIntentShow } from "./paymentIntent/PaymentIntentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"StripeIntegrationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Refund"
          list={RefundList}
          edit={RefundEdit}
          create={RefundCreate}
          show={RefundShow}
        />
        <Resource
          name="PaymentIntent"
          list={PaymentIntentList}
          edit={PaymentIntentEdit}
          create={PaymentIntentCreate}
          show={PaymentIntentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
