// sw.js
self.addEventListener('install', () => {
    console.log('설치완료')
})

self.addEventListener('activate', () => {
    console.log('서비스워커 동작 시작되고 있음...')
})

self.addEventListener('fetch', () => {
    console.log('데이터 요청시 처리....')
})


self.addEventListener('message', (event) => {
    console.log('메세지가?....', event.data);
    const option = {
        body: event.data.message,
        icon: '1.png',
        image: '2.png', // 내용 썸네일
        badge: '3.png',
        vibrate: [200, 100, 300],
        actions: [
            { action: 'open', title: '자세히보기' },
            { action: 'close', title: '닫기' },
        ]
    }
    self.registration.showNotification('title', option);
})


self.addEventListener('notificationclick', (event) => {
    event.waitUntil(
        self.clients.matchAll().then(function (clientList) {
            if (event.action == 'open') {
                return self.clients.openWindow('https://www.naver.com');
            } else {//닫기
                return event.notification.close();
            }
        })
    )
})