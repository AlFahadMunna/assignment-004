let currentTab = "all";
const tabActive = ["bg-blue-500", "text-white"];
const tabInactive = ["bg-white", "text-black"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
console.log(allContainer, interviewContainer, rejectedContainer);
const emptyState = document.getElementById("empty-state");

function switchTab(tab) {
  const tabs = ["all", "interview", "rejected"];
  currentTab = tab;

  for (const t of tabs) {
    const tabName = document.getElementById("tab-" + t);
    if (t === tab) {
      tabName.classList.remove(...tabInactive);
      tabName.classList.add(...tabActive);
    } else {
      tabName.classList.remove(...tabActive);
      tabName.classList.add(...tabInactive);
    }
  }
  const pages = [allContainer, interviewContainer, rejectedContainer];
  for (section of pages) {
    section.classList.add("hidden");
  }
  emptyState.classList.add("hidden");
  if (tab == "all") {
    allContainer.classList.remove("hidden");
    if (allContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else if (tab == "interview") {
    interviewContainer.classList.remove("hidden");
    if (interviewContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  } else {
    rejectedContainer.classList.remove("hidden");
    if (rejectedContainer.children.length < 1) {
      emptyState.classList.remove("hidden");
    }
  }
  updateStat();
}

const totalState = document.getElementById("total");
const interviewState = document.getElementById("interview-count");
const rejectState = document.getElementById("rejected-count");
const availableState = document.getElementById("available");

totalState.innerText = allContainer.children.length;

switchTab(currentTab);

document
  .getElementById("jobs-container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if (clickedElement.classList.contains("interview-btn")) {
      status.innerText = "INTERVIEWED";
      interviewContainer.appendChild(card);
      updateStat();
    }
    if (clickedElement.classList.contains("rejected-btn")) {
      status.innerText = "REJECTED";
      rejectedContainer.appendChild(card);
      updateStat();
    }
    if (clickedElement.classList.contains("delete-btn")) {
      parent.removeChild(card);
      updateStat();
    }
  });

function updateStat() {
  const counts = {
    all: allContainer.children.length,
    interview: interviewContainer.children.length,
    rejected: rejectedContainer.children.length,
  };
  totalState.innerText = counts["all"];
  interviewState.innerText = counts["interview"];
  rejectState.innerText = counts["rejected"];

  availableState.innerText = counts[currentTab];
  if (counts[currentTab] < 1) {
    emptyState.classList.remove("hidden");
  } else {
    emptyState.classList.add("hidden");
  }
}
updateStat();
