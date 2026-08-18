document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const stages = [
    {
      title: "Happy Birthday Dear Ayesha",
      message: ["A beautiful surprise made especially for you. 💗"],
      photo: "./assets/photo1.jpg"
    },
    {
      title: "A Little Memory For You",
      message: ["May every beautiful memory bring a smile to your face and warmth to your heart. 🌸"],
      photo: "./assets/photo2.jpg"
    },
    {
      title: "Best Wishes For You",
      message: ["May your dreams become reality, your days become brighter, and your life be filled with endless happiness. ✨"],
      photo: "./assets/photo3.jpg"
    },
    {
      title: "Your Special Surprise",
      message: ["Keep believing in yourself. Your best chapters are still waiting to be written. Never stop dreaming. 🦋"],
      photo: "./assets/photo4.jpg"
    },
    {
      title: "For You, Ayesha",
      message: ["Keep smiling, keep growing, and keep shining. You deserve beautiful moments, peaceful days and every happiness life can bring. 💕"],
      photo: "./assets/photo5.jpg"
    },
    {
      title: "Happy Birthday Ayesha",
      message: [
        "May this new year of your life bring confidence, success, unforgettable memories and countless reasons to smile.",
        "Keep shining.",
        "Keep believing.",
        "Keep becoming the best version of yourself.",
        "With warmest wishes,<br><strong>Faizan Khokhar ❤️</strong>"
      ],
      photo: "./assets/photo6.jpg"
    }
  ];

  const surpriseCard = document.getElementById("surpriseCard");
  const stageLabel = document.getElementById("stageLabel");
  const stageTitle = document.getElementById("stageTitle");
  const stageMessage = document.getElementById("stageMessage");
  const stagePhoto = document.getElementById("stagePhoto");
  const photoFallback = document.getElementById("photoFallback");
  const nextButton = document.getElementById("nextButton");
  const buttonText = document.getElementById("buttonText");
  const progressDots = Array.from(document.querySelectorAll(".dot"));
  const signature = document.getElementById("signature");
  const confetti = document.getElementById("confetti");

  let currentStage = 0;
  let isAnimating = false;

  if (
    !surpriseCard ||
    !stageLabel ||
    !stageTitle ||
    !stageMessage ||
    !stagePhoto ||
    !photoFallback ||
    !nextButton ||
    !buttonText ||
    !signature ||
    progressDots.length !== stages.length
  ) {
    console.error("Birthday surprise: required HTML elements are missing.");
    return;
  }

  function renderMessage(messages) {
    stageMessage.innerHTML = "";
    messages.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = text;
      stageMessage.appendChild(paragraph);
    });
  }

  function updateProgress() {
    progressDots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentStage);
      dot.setAttribute("aria-current", index === currentStage ? "step" : "false");
    });
  }

  function updateSignature() {
    signature.hidden = currentStage !== 5;
  }

  function setPhoto(path) {
    photoFallback.hidden = true;
    stagePhoto.hidden = false;
    stagePhoto.classList.add("photo-changing");

    const newImage = new Image();

    newImage.onload = () => {
      stagePhoto.src = path;
      stagePhoto.alt = `Birthday memory for Ayesha — stage ${currentStage + 1}`;
      stagePhoto.hidden = false;
      photoFallback.hidden = true;

      requestAnimationFrame(() => {
        stagePhoto.classList.remove("photo-changing");
      });
    };

    newImage.onerror = () => {
      stagePhoto.hidden = true;
      photoFallback.hidden = false;
      stagePhoto.classList.remove("photo-changing");
    };

    newImage.src = path;
  }

  function updateStage() {
    const stage = stages[currentStage];

    stageLabel.textContent = `SURPRISE ${String(currentStage + 1).padStart(2, "0")} OF 06`;
    stageTitle.textContent = stage.title;
    renderMessage(stage.message);
    setPhoto(stage.photo);
    updateProgress();
    updateSignature();

    if (currentStage === stages.length - 1) {
      buttonText.textContent = "Experience Again ↻";
      launchConfetti();
    } else {
      buttonText.textContent = "Open The Next Surprise ➜";
    }
  }

  function animateStageChange(nextStage) {
    if (isAnimating) return;
    isAnimating = true;

    surpriseCard.classList.add("is-changing");

    window.setTimeout(() => {
      currentStage = nextStage;
      updateStage();

      surpriseCard.classList.remove("is-changing");

      const animatedElements = [
        stageTitle,
        stageMessage,
        stageLabel,
        stagePhoto.parentElement.parentElement
      ];

      animatedElements.forEach((element) => {
        if (!element) return;
        element.classList.remove("stage-in");
        void element.offsetWidth;
        element.classList.add("stage-in");
      });

      window.setTimeout(() => {
        animatedElements.forEach((element) => {
          if (element) element.classList.remove("stage-in");
        });
        isAnimating = false;
      }, 650);
    }, 260);
  }

  function handleButtonClick(event) {
    event.preventDefault();

    if (isAnimating) return;

    if (currentStage === stages.length - 1) {
      animateStageChange(0);
    } else {
      animateStageChange(currentStage + 1);
    }
  }

  function launchConfetti() {
    if (!confetti) return;

    confetti.innerHTML = "";

    const pieces = 34;

    for (let i = 0; i < pieces; i += 1) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.animationDelay = `${Math.random() * 0.35}s`;
      piece.style.animationDuration = `${1.2 + Math.random() * 1.1}s`;
      piece.style.setProperty("--drift", `${-100 + Math.random() * 200}px`);
      piece.style.transform = `rotate(${Math.random() * 180}deg)`;
      confetti.appendChild(piece);
    }

    window.setTimeout(() => {
      confetti.innerHTML = "";
    }, 2800);
  }

  stagePhoto.addEventListener("error", () => {
    stagePhoto.hidden = true;
    photoFallback.hidden = false;
    stagePhoto.classList.remove("photo-changing");
  });

  nextButton.addEventListener("click", handleButtonClick);

  updateStage();
});

const photoInput = document.getElementById("photoInput");
const stagePhoto = document.getElementById("stagePhoto");
const uploadContent = document.getElementById("uploadContent");

photoInput.addEventListener("change", function () {
  const file = this.files[0];

  if (!file) return;

  if (!file.type.startsWith("image/")) {
    alert("Please select an image file.");
    return;
  }

  const imageURL = URL.createObjectURL(file);

  stagePhoto.src = imageURL;
  stagePhoto.hidden = false;
  uploadContent.style.display = "none";
});
