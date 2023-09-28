const container = document.querySelector('.container');
const title = document.getElementById('title');
const textarea = document.querySelector('.custom-textarea');
const buttonContainer = document.querySelector('.button-container');

title.addEventListener('click', () => {
    title.style.transform = 'translateY(0)';
    setTimeout(() => {
        textarea.style.display = 'block';
        buttonContainer.style.display = 'block';
        textarea.style.animation = 'fade-in 1s forwards';
        buttonContainer.style.animation = 'fade-in 1s forwards';
        container.classList.add('show-elements');
    }, 500); 
});
function convertText() {
    const inputText = document.getElementById("inputText").value;
    const resultDiv = document.getElementById("result");
    const messageElement = document.getElementById("message");
    const xhr = new XMLHttpRequest();

     if (inputText.trim() === "") {
        messageElement.textContent = "Masukkan link nya dulu goblok";
        setTimeout(function() {
            messageElement.textContent = "";
        }, 4000);
        resultDiv.innerHTML = "";
        return;
    }

    xhr.open("POST", "convert.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resultDiv.innerHTML = "";

            const resultLink = document.createElement("a");
            resultLink.textContent = xhr.responseText; 
            resultLink.href = xhr.responseText; 
            resultLink.target = "_blank"; 

            resultDiv.appendChild(resultLink);

            resultLink.style.margin = "10px 0";

            const copyIcon = document.createElement("span");
            copyIcon.innerHTML = '&#x2398;'; 
            copyIcon.style.cursor = "pointer"; 

            copyIcon.addEventListener("click", function() {
                const tempTextarea = document.createElement("textarea");
                tempTextarea.value = xhr.responseText;
                document.body.appendChild(tempTextarea);
                tempTextarea.select();
                document.execCommand("copy");
                document.body.removeChild(tempTextarea);

                messageElement.textContent = "Teks sudah disalin tinggal di bagikan";
                setTimeout(function() {
                    messageElement.textContent = "";
                }, 4000);
            });

            resultDiv.appendChild(copyIcon);
        }
    };
    xhr.send("inputText=" + inputText);
}


