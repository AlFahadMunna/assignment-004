let interviewList = [];
let rejectedList = [];
let currentStatus = "all";

let total = document.getElementById("total");
let total1 = document.getElementById("total1");
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
  total1.innerText = allCardsSection.children.length;
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
  currentStatus = id;

  selected.classList.remove("bg-white", "text-black");
  selected.classList.add("bg-blue-500", "text-white");

  if (id == "interview-btn") {
    allCardsSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderedInterview();
  } else if (id == "all-btn") {
    allCardsSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  } else if (id == "rejected-btn") {
    allCardsSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderedRejected();
  }
}

mainContainer.addEventListener("click", function (event) {
  console.log(event.target.classList.contains("interview-btn"));
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobDescription = parentNode.querySelector(".job-des").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;

    parentNode.querySelector(".status").innerText = "INTERVIEW";
    const cardInfo = {
      jobName,
      jobTitle,
      jobDescription,
      jobStatus: "INTERVIEW",
      jobType,
    };

    const jobExist = interviewList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!jobExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );
    calculateCount();
    if (currentStatus == "rejected-btn") {
      renderedRejected();
    }
  } else if (event.target.classList.contains("rejected-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const jobName = parentNode.querySelector(".job-name").innerText;
    const jobTitle = parentNode.querySelector(".job-title").innerText;
    const jobDescription = parentNode.querySelector(".job-des").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const jobType = parentNode.querySelector(".job-type").innerText;

    parentNode.querySelector(".status").innerText = "REJECTED";
    const cardInfo = {
      jobName,
      jobTitle,
      jobDescription,
      jobStatus: "REJECTED",
      jobType,
    };

    const jobExist = rejectedList.find(
      (item) => item.jobName == cardInfo.jobName,
    );

    if (!jobExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(
      (item) => item.jobName != cardInfo.jobName,
    );

    if (currentStatus == "interview-btn") {
      renderedInterview();
    }

    calculateCount();
  }
});
function renderedInterview() {
  filteredSection.innerHTML = "";
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement("div");
    div.className = "card flex justify-between mt-4 bg-white rounded-md p-6";
    div.innerHTML = `
    
    <div class="card flex justify-between mt-4 bg-white rounded-md">
          <!-- left part -->
          <div>
            <h1 class="font-bold job-name">${interview.jobName}</h1>
            <h4 class="job-title text-[#64748b] font-light">
              ${interview.jobTitle}
            </h4>
            <p class="job-des text-[#64748b] font-light mt-5">
              ${interview.jobDescription}
            </p>
            <p
              class="job-status status mt-5 px-4 w-[130px] text-center text-[14px] py-2 rounded-md uppercase bg-[#eef4ff]"
            >
              ${interview.jobStatus}
            </p>
            <p class="job-type text-[#64748b] font-light">
              ${interview.jobType}
            </p>
            <div class="mt-5">
              <button
                class="interview-btn px-3 py-2 border uppercase rounded-md border-green-500"
              >
                interview
              </button>
              <button
                class="rejected-btn px-3 py-2 border uppercase rounded-md ml-1 border-red-400"
              >
                Rejected
              </button>
            </div>
          </div>
          <!-- right part -->
          <div><img src="delete.png" alt="" /></div>
        </div>`;
    filteredSection.appendChild(div);
  }
}

function renderedRejected() {
  filteredSection.innerHTML = "";
  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className = "card flex justify-between mt-4 bg-white rounded-md p-6";
    div.innerHTML = `
    
    <div class="card flex justify-between mt-4 bg-white rounded-md">
          <!-- left part -->
          <div>
            <h1 class="font-bold job-name">${rejected.jobName}</h1>
            <h4 class="job-title text-[#64748b] font-light">
              ${rejected.jobTitle}
            </h4>
            <p class="job-des text-[#64748b] font-light mt-5">
              ${rejected.jobDescription}
            </p>
            <p
              class="job-status status mt-5 px-4 w-[130px] text-center text-[14px] py-2 rounded-md uppercase bg-[#eef4ff]"
            >
              ${rejected.jobStatus}
            </p>
            <p class="job-type text-[#64748b] font-light">
              ${rejected.jobType}
            </p>
            <div class="mt-5">
              <button
                class="interview-btn px-3 py-2 border uppercase rounded-md border-green-500"
              >
                interview
              </button>
              <button
                class="rejected-btn px-3 py-2 border uppercase rounded-md ml-1 border-red-400"
              >
                Rejected
              </button>
            </div>
          </div>
          <!-- right part -->
          <div><img src="delete.png" alt="" /></div>
        </div>`;
    filteredSection.appendChild(div);
  }
}
