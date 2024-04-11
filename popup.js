document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get('extensions', function (data) {
    const extensions = data.extensions || [];

    const list = document.getElementById('extensions-list');

    extensions.forEach(extension => {
      const li = document.createElement('li');

      const icon = document.createElement('img');
      icon.src = extension.icon;
      icon.alt = extension.name;

      li.appendChild(icon);

      const nameSpan = document.createElement('span');
      nameSpan.textContent = extension.name;

      li.appendChild(nameSpan);

      li.addEventListener('click', function () {
        chrome.tabs.create({ url: extension.url });
      });

      list.appendChild(li);
    });
  });
});
