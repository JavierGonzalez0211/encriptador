const textToEncrypt = document.querySelector(".text-to-encrypt");
let encryptedMessage = document.querySelector(".encrypted-message");
const noResultArea = document.querySelector(".no-message-encrypted");
const resultArea = document.querySelector(".result-display");

function encrypt(message) {
  let keyValueEncryptor = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  message = message.toLowerCase();

  for (let i = 0; i < keyValueEncryptor.length; i++) {
    if (message.includes(keyValueEncryptor[i][0])) {
      message = message.replaceAll(
        keyValueEncryptor[i][0],
        keyValueEncryptor[i][1]
      );
    }
  }
  return message;
}

function decrypt(message) {
  let keyValueEncryptor = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  message = message.toLowerCase();

  for (let i = 0; i < keyValueEncryptor.length; i++) {
    if (message.includes(keyValueEncryptor[i][1])) {
      message = message.replaceAll(
        keyValueEncryptor[i][1],
        keyValueEncryptor[i][0]
      );
    }
  }
  return message;
}

function btnEncrypt() {
  const textEncrypted = encrypt(textToEncrypt.value);
  encryptedMessage.value = textEncrypted;
  noResultArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
}
function btnDecrypt() {
  const textDecrypted = decrypt(textToEncrypt.value);
  encryptedMessage.value = textDecrypted;
  noResultArea.classList.add("hidden");
  resultArea.classList.remove("hidden");
}

function btnCopy() {
  navigator.clipboard.writeText(encryptedMessage.value);
}
