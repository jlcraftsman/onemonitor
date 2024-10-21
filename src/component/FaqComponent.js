const Faq = {
  view: function () {
    return m('div', { class: 'faq' }, [
      m('h2', { class: 'faq-title' }, [
        m('i', { class: 'fa-solid fa-circle-question' }),
        'Frequently Asked Questions'
      ]),
      m('ul', { class: 'faq-questions', itemtype: 'http://schema.org/ItemList' }, [
        m('li', { class: 'faq-question', itemtype: 'http://schema.org/Question' }, [
          m('b', 'Is OneMonitor safe to install?'),
          m('p', 'Absolutely! OneMonitor is committed to protecting your privacy. We only collect window IDs to ensure the app functions properly. No sensitive data is collected.')
        ]),
        m('li', { class: 'faq-question' }, [
          m('b', 'Is OneMonitor free?'),
          m('p', 'Yes, OneMonitor is free to use. No credit card is required.')
        ]),
        m('li', { class: 'faq-question' }, [
          m('b', 'Does it work on any browser?'),
          m('p', 'No, OneMonitor is built on a Chromium-based browser, meaning Google Chrome, Brave, Microsoft Edge, Opera, Vivaldi, Yandex and others can support its use.')
        ])
      ])
    ])
  }
}

export default Faq;