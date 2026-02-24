let interviewList = [];
let rejectedList = [];

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
    div.innerHTML = `
    
    <div class="card flex justify-between mt-4 bg-white rounded-md p-6">
          <!-- left part -->
          <div>
            <h1 class="font-bold job-name">Mobile First Corp</h1>
            <h4 class="job-title text-[#64748b] font-light">
              React Native Developer
            </h4>
            <p class="job-des text-[#64748b] font-light mt-5">
              Remote • Full-time • $130,000 - $175,000
            </p>
            <p
              class="job-status status mt-5 px-4 w-[130px] text-center text-[14px] py-2 rounded-md uppercase bg-[#eef4ff]"
            >
              Not Applied
            </p>
            <p class="job-type text-[#64748b] font-light">
              Build cross-platform mobile applications using React Native. Work
              on products used by millions of users worldwide.
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
  }
}
