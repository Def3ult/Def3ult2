let username = document.getElementById('username');
let options = document.getElementById('options');
let encryption = document.getElementById('encryption');
let result = document.getElementById('result');

// الانتقال للصفحة التالية
function nextPage() {
    let name = document.getElementById('name').value;
    if (name !== '') {
        username.style.display = 'none';
        options.style.display = 'block';
    }
}

// تشفير سيزر
function caesarCipher() {
    options.style.display = 'none';
    encryption.style.display = 'block';
    encryption.innerHTML = `
        <h2>أدخل النص للتشفير</h2>
        <textarea id="text" required></textarea>
        <input type="number" id="shift" placeholder="أدخل عدد التحولات" required />
        <button onclick="caesarEncrypt()">تشفير</button>
        <p id="result"></p>`;
}

// تشفير بلاي فير
function playfairCipher() {
    options.style.display = 'none';
    encryption.style.display = 'block';
    encryption.innerHTML = `
        <h2>أدخل النص للتشفير</h2>
        <textarea id="text" required></textarea>
        <button onclick="playfairEncrypt()">تشفير</button>
        <p id="result"></p>`;
}

// تشفير فيجنير
function vigenereCipher() {
    options.style.display = 'none';
    encryption.style.display = 'block';
    encryption.innerHTML = `
        <h2>أدخل النص للتشفير</h2>
        <textarea id="text" required></textarea>
        <input type="text" id="key" placeholder="أدخل المفتاح" required />
        <button onclick="vigenereEncrypt()">تشفير</button>
        <p id="result"></p>`;
}

// تشفير المصفوفة التبادلية
function transpositionMatrix() {
    options.style.display = 'none';
    encryption.style.display = 'block';
    encryption.innerHTML = `
        <h2>أدخل النص للتشفير</h2>
        <textarea id="text" required></textarea>
        <button onclick="transpositionEncrypt()">تشفير</button>
        <p id="result"></p>`;
}
