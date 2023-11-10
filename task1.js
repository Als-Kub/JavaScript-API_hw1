// Отслеживание изменения ориентации экрана:
// Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) и выводит сообщение об этом на веб-странице.

const messageEl = document.querySelector(".message");

const checkScreenPosition = () => {
  window.innerWidth > window.innerHeight
    ? (messageEl.textContent = "Screen orientation has changed to landscape")
    : (messageEl.textContent = "Screen orientation has changed to portrait");
};

window.addEventListener("resize", checkScreenPosition);
