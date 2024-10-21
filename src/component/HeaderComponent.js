const Header = {
  view: function () {
    return m('header', { class: 'header' }, [
      m('h1', 'OneMonitor'),
      m('p', 'An extension focused on the focus and productivity of those who suffer from attention deficit while working or studying on the internet.'),
      m('div', { class: 'options' }, [
        m('a', { class: 'link-download', href: 'https://mega.nz/file/eJcX3LAY#5GiVZhJ3bftXsWCG2bmFHbpjZy7XWpaBfm397wG3c9E' }, [
          m('button', { class: 'download-onemonitor' }, [
            m('i', { class: 'fa-solid fa-download' }),
            'Download'
          ])
        ]),
        m('a', { class: 'link-github', href: 'https://github.com/asusfornothing/onemonitor' }, [
          m('i', { class: 'fa-solid fa-star' }),
          'Leave a star to support the project.'
        ]),
      ])
    ])
  }
};

export default Header;