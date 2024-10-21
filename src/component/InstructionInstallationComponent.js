import Faq from "./FaqComponent.js";

const InstructionInstallation = {
  view: function () {
    return m('main', { class: 'installation-steps' }, [
      m('h2', { class: 'installation-steps-title' }, [
        m('i', { class: 'fa-solid fa-circle-info' }),
        'Installation Guide'
      ]),
      m('ul', { class: 'installation-list-steps', itemtype: 'http://schema.org/ItemList' }, [
        m('li', 'Click on the download button where you will be redirected to mega.nz.'),
        m('li', 'After downloading the file from mega.nz, go to the extension settings.'),
        m('li', 'Enable developer mode on the extensions page.'),
        m('li', 'Drag the onemonitor-extension.crx file to the extensions screen.')
      ]),
      Faq.view()
    ])
  }
}

export default InstructionInstallation;