
const noJobsCard = document.getElementById('no-jobs-card');
const jobList = document.getElementById('job-list');
function updateStats() {
  const all = document.querySelectorAll('.job-card');
  const interviews = document.querySelectorAll('.job-card[data-status="interview"]');
  const rejected = document.querySelectorAll('.job-card[data-status="rejected"]');
  document.getElementById('total-count').innerText = all.length;
  document.getElementById('interview-count').innerText = interviews.length;
  document.getElementById('rejected-count').innerText = rejected.length;
  document.getElementById('jobs-label').innerText = `${all.length} jobs`;
  if (all.length === 0) {
    noJobsCard.classList.remove('hidden');
  } else {
    noJobsCard.classList.add('hidden');
  }
}
jobList.addEventListener('click', (e) => {
  const card = e.target.closest('.job-card');
  if (!card) return;
if (e.target.closest('.delete-btn')) {
    card.remove();
    updateStats();
  }
if (e.target.classList.contains('interview-btn')) {
    card.setAttribute('data-status', 'interview');
    const badge = card.querySelector('.status-badge');
    badge.innerText = "Interviewing";
   
    badge.className = "status-badge bg-emerald-100 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded uppercase";
    updateStats();
  }
if (e.target.classList.contains('reject-btn')) {
    card.setAttribute('data-status', 'rejected');
    const badge = card.querySelector('.status-badge');
    badge.innerText = "Rejected";
    
    badge.className = "status-badge bg-red-100 text-red-600 text-[10px] font-bold px-2 py-1 rounded uppercase";
    updateStats();
  }
});
function filterJobs(status) {
  const allCards = document.querySelectorAll('.job-card');
  let visibleCount = 0;

  allCards.forEach(card => {
    const cardStatus = card.getAttribute('data-status');
    
    if (status === 'all' || cardStatus === status) {
      card.style.display = 'block';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (visibleCount === 0) {
    noJobsCard.classList.remove('hidden');
  } else {
    noJobsCard.classList.add('hidden');
  }
}
updateStats();