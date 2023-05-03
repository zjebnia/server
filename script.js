document.getElementById("copy-link").addEventListener("click", function() {
    const textToCopy = "zjebnia.ddns.net"; // Replace this with the text you want to copy
    const newText = document.createElement("p");
    newText.innerText = "ZKOPIOWANE!";
    newText.style.color = "lime";
    newText.style.textAlign = "center";
    newText.id = "copied-text";
    document.body.appendChild(newText);
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard");
        // You can also add an alert or other feedback message here
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  });
  
  document.getElementById("copy-link").addEventListener("mouseleave", function() {
    const newText = document.getElementById("copied-text");
    if (newText) {
      newText.remove();
    }
  });
