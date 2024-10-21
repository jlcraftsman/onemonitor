import Header from "./component/HeaderComponent.js";
import InstructionInstallation from "./component/InstructionInstallationComponent.js";
import Footer from "./component/FooterComponent.js";

const app = document.getElementById('app');

m.mount(app, {
  view: function () {
    return [
      Header.view(),
      InstructionInstallation.view(),
      Footer.view()
    ]
  }
});