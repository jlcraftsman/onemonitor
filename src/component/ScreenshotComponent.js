const Screenshot = {
  view: function() {
    return m('div', { style: 'border-bottom: 1px solid #cccc; padding-bottom: 10px;', class: 'screenshot-extension'}, [
      m('h2', { style: 'margin-bottom: 10px; margin-top: 10px;'}, 'Extension Screenshot'),
      m('img', { width: 300, src: 'assets/images/extension.png' })
    ])
  }
}

export default Screenshot;