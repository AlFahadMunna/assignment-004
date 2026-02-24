let interviewList = [];
let rejectedList = [];

let total = document.getElementById("total");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
const filteredSection = document.getElementById("filtered-section");

const allFilterBtn = document.getElementById("all-btn");
const interviewFilterBtn = document.getElementById("interview-btn");
const rejectedFilterBtn = document.getElementById("rejected-btn");

const allCardsSection = document.getElementById("cards");

const mainContainer = document.querySelector("main");

function calculateCount() {
  total.innerText = allCardsSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}
calculateCount();

function toggleStyle(id) {
  allFilterBtn.classList.remove("bg-blue-500", "text-white");
  interviewFilterBtn.classList.remove("bg-white", "text-white");
  rejectedFilterBtn.classList.remove("bg-white", "text-white");

  allFilterBtn.classList.add("bg-white", "text-black");
  interviewFilterBtn.classList.add("bg-white", "text-black");
  rejectedFilterBtn.classList.add("bg-white", "text-black");

  const selected = document.getElementById(id);
  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-blue-500", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  console.log(event.target.classList.contains("interview-btn"));
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobDescription = parentNode.querySelector(".job-des");
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;

    const cardInfo = {
      jobName,
      jobTitle,
      jobDescription,
      jobStatus,
      jobType,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }
    renderedInterview();
  }
});
function renderedInterview() {
  filteredSection.innerHTML = "";
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className = "card flex justify-between mt-4 bg-white rounded-md p-6";
    div.innerHTML = ``;
  }
}
