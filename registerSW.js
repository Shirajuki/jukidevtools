if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/jukidevtools/sw.js', { scope: '/jukidevtools/' })})}