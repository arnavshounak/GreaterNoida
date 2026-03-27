function addCard() {
  const grid = document.getElementById("grid");

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <label class="upload-btn">Upload
      <input type="file" accept="image/*" style="display:none">
    </label>
    <img src="https://via.placeholder.com/400x200">
    <textarea placeholder="Write issue details here..."></textarea>
  `;

  const fileInput = card.querySelector("input");
  const img = card.querySelector("img");

  fileInput.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  grid.appendChild(card);
}

function submitIssue() {
  const input = document.getElementById("userInput").value;
  const response = document.getElementById("response");

  if (input.trim() === "") {
    response.style.color = "red";
    response.innerText = "Please write something.";
    return;
  }

  response.style.color = "green";
  response.innerText = "Submitted (not stored yet).";

  document.getElementById("userInput").value = "";
}

// Initialize with 3 cards
for (let i = 0; i < 3; i++) addCard();
