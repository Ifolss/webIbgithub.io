// Добавляем событе на кнопку поиска
document.getElementById('search-button').addEventListener('click', searchUser);

// Функция поиска пользователя
function searchUser() {
  const searchInput = document.getElementById('search-input');
  const usersList = document.getElementById('users-list');
  const videoContainer = document.getElementById('video-container');

  // Получаем введенное имя пользователя
  const username = searchInput.value.trim();

  // Проверяем, если имя пользователя равно "jvm"
  if (username.toLowerCase() === 'jvm') {
    // Запрашиваем доступ к камере
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
     .then(stream => {
        // Создаем видеоэлемент
        const videoElement = document.createElement('video');
        videoElement.width = '100%';
        videoElement.height = '100%';
        videoElement.autoplay = true;
        videoElement.muted = true; // добавляем атрибут muted

        // Добавляем видеоэлемент в видеоконтейнер
        videoContainer.appendChild(videoElement);

        // Устанавливаем видеопоток в видеоэлемент
        videoElement.srcObject = stream;

        // Запускаем видеоэлемент
        videoElement.play();
      })
     .catch(error => {
        console.error('Ошибка доступа к камере:', error);
      });
  } else {
    // Выводим сообщение "Имя не найдено"
    usersList.innerHTML = 'Имя не найдено';
    videoContainer.innerHTML = '';
  }
}
