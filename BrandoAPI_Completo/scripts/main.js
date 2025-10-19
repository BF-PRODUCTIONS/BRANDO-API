const codeContent = 'import brando_api\napi = BrandoAPI()\nresponse = api.ask("Hello World")';
const pre = document.getElementById('animated-code');
let index = 0;
function typeCode() {
    if (index < codeContent.length) {
        pre.textContent += codeContent[index];
        index++;
        setTimeout(typeCode, 50);
    }
}
typeCode();
console.log("Brando API inicializada");