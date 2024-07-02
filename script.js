const btnGenerate = document.getElementById("btn-generate");
const qr = document.getElementById("qrcode");
const generatedElement = document.getElementById("generated");
const savebtn = document.getElementById("save-img");

// ******************************************************************************************

// to made qr code
function generateQrCode(inputUrl) {
  const size = document.getElementById("size").value;
  const qrcode = new QRCode(qr, {
    text: inputUrl,
    width: +size,
    height: +size,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });

  saveImage(qr.querySelector("img"));
}

// ******************************************************************************************

// to make (a) element and download qr code
function saveImage(url) {
  // setTimeOut to sure img have src
  setTimeout(function () {
    const aTag = document.createElement("a");
    aTag.innerText = "Save Image";
    aTag.href = url.src;
    aTag.classList =
      "block bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
    aTag.download = "QrCode";
    savebtn.append(aTag);
  }, 5);
}

// ******************************************************************************************

function loaded(inputUrl) {
  let spinner = document.getElementById("spinner");

  spinner.innerHTML = "Loading...";

  setTimeout(() => {
    spinner.innerHTML = "";

    generateQrCode(inputUrl);
  }, 1500);
}

// ******************************************************************************************

// event click to show qr code
btnGenerate.addEventListener("click", (e) => {
  e.preventDefault();

  qr.innerHTML = "";

  savebtn.innerHTML = "";

  const inputUrl = document.getElementById("url").value;

  if (inputUrl) {
    loaded(inputUrl);
  } else {
    alert("input is emty");
  }
});
