
  const chatBody = document.getElementById("chat-body");
  const userInput = document.getElementById("userInput");

function startChat() {
  chatBody.innerHTML = `
    <p><b>Neo:</b> Hi 👋 I’m Neo, the AI assistant at NeuraEdge. I can help you find the right AI solution for your business.</p>
    <p><b>Neo:</b> What are you looking for?</p>

    <div class="options">
      <button onclick="handleOption('support')">Customer Support</button>
      <button onclick="handleOption('hr')">Hiring / HR</button>
      <button onclick="handleOption('analytics')">Business Analytics</button>
      <button onclick="handleOption('learning')">Just learning about AI</button>
    </div>
  `;
}

startChat();

function handleOption(type) {
  let response = "";

  if (type === "support") {
    response = `
      <p><b>Neo:</b> AI Chatbots can automate customer support 24/7, reduce response time, and improve customer satisfaction.</p>
      <p><b>Neo:</b> ✅ Recommended Solution: <b>AI Chatbots</b></p>
    `;
  } 
  else if (type === "hr") {
    response = `
      <p><b>Neo:</b> Resume Screening AI helps shortlist candidates based on skills and job relevance.</p>
      <p><b>Neo:</b> ✅ Recommended Solution: <b>Resume Screening AI</b></p>
    `;
  } 
  else if (type === "analytics") {
    response = `
      <p><b>Neo:</b> Business Analytics AI converts raw data into insights for better decision-making.</p>
      <p><b>Neo:</b> ✅ Recommended Solution: <b>Business Analytics AI</b></p>
    `;
  } 
  else if (type === "learning") {
    response = `
      <p><b>Neo:</b> AI helps automate tasks, analyze data, and improve efficiency across industries.</p>
    `;
  }

  response += `
    <p><b>Neo:</b> Would you like to contact our team for a demo?</p>
    <div class="options">
      <button onclick="showContact()">Yes</button>
      <button onclick="startChat()">Restart</button>
    </div>
  `;

  chatBody.innerHTML += response;
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Handle typed messages
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && userInput.value.trim() !== "") {
    const msg = userInput.value.toLowerCase();
    chatBody.innerHTML += `<p><b>You:</b> ${userInput.value}</p>`;

    let reply = "Can you please choose one of the options above?";

    if (msg.includes("support") || msg.includes("customer")) {
      handleOption("support");
      userInput.value = "";
      return;
    } 
    else if (msg.includes("hr") || msg.includes("resume") || msg.includes("hiring")) {
      handleOption("hr");
      userInput.value = "";
      return;
    } 
    else if (msg.includes("analytics") || msg.includes("data")) {
      handleOption("analytics");
      userInput.value = "";
      return;
    } 
    else if (msg.includes("ai")) {
      handleOption("learning");
      userInput.value = "";
      return;
    }

    chatBody.innerHTML += `<p><b>Neo:</b> ${reply}</p>`;
    userInput.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
});

// Contact info
function showContact() {
  chatBody.innerHTML += `
    <p><b>Neo:</b> 📧 Email: contact@neuraedge.ai</p>
    <p><b>Neo:</b> 📞 Phone: +91 98765 43210</p>
    <p><b>Neo:</b> Our team will get back to you shortly.</p>

    <div class="options">
      <button onclick="startChat()">Start Over</button>
    </div>
  `;
  chatBody.scrollTop = chatBody.scrollHeight;
}



  function openChat() {
    document.getElementById("chat-overlay").style.display = "flex";
    document.getElementById("userInput").focus();
  }

  function closeChat() {
    document.getElementById("chat-overlay").style.display = "none";
  }

 
  function subscribe() {
    const email = document.getElementById("emailInput").value;
    if (email) {
      document.getElementById("successMsg").style.display = "block";
      document.getElementById("emailInput").value = "";
    }
  }

