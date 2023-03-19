const canvas = document.getElementById('Matrix');
const blackGround = document.getElementById('blackGround')

const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
	rainDrops[x] = 1;
}

const draw = () => {

	if (canvas.classList.contains('whiteTheme')) {
		
		// blackGround.fillStyle = 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7595413165266106) 42%, rgba(0,212,255,0) 54%)'
		context.fillStyle = 'rgba(255, 255, 255, 0.05)';
		context.fillRect(0, 0, canvas.width, canvas.height);
		
		context.fillStyle = 'rgba(0, 0, 0, 0.175)';
		context.font = fontSize + 'px monospace';
		
		for (let i = 0; i < rainDrops.length; i++) {
			const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
			context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

			if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				rainDrops[i] = 0;
			}
			rainDrops[i]++;
		}
		blackGround.style.background='radial-gradient(circle, rgba(255,255,255,0.9051995798319328) 0%, rgba(255,255,255,0.7063200280112045) 41%, rgba(255,255,255,0) 70%)'
	} else {

		// blackGround.fillStyle = 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7595413165266106) 42%, rgba(0,212,255,0) 54%)';
		
		context.fillStyle = 'rgba(0, 0, 0, 0.05)';
		context.fillRect(0, 0, canvas.width, canvas.height);
		
		context.fillStyle = 'rgba(255, 255, 255, 0.475)';
		context.font = fontSize + 'px monospace';
		
		for (let i = 0; i < rainDrops.length; i++) {
			const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
			context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
			
			if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				rainDrops[i] = 0;
			}
			rainDrops[i]++;
		}
		blackGround.style.background='radial-gradient(circle, rgba(0,0,0,0.8603816526610644) 0%, rgba(0,0,0,0.7063200280112045) 41%, rgba(0,212,255,0) 70%)'

	}
};

setInterval(draw, 30);