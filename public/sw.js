// sw.js
self.addEventListener('install', (a) => {
    console.log('서비스워커 설치 완료')
})

self.addEventListener('activate', (a) => {
    console.log('서비스워커 동작 시작')
})

self.addEventListener('fetch', (a) => {
    console.log('데이터 요청시 처리')
})

self.addEventListener('message', (e) => {
    console.log('메시지', e.data);
    self.registration.showNotification('title', {
        body: e.data.message
    });
})