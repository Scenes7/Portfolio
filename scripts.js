const homeBtn = document.getElementById('home-btn');
const resumeBtn = document.getElementById('resume-btn');
const homeView = document.getElementById('home-view');
const resumeView = document.getElementById('resume-view');

homeBtn.addEventListener('click', () => {
  homeBtn.classList.add('active');
  resumeBtn.classList.remove('active');
  homeView.classList.remove('hidden');
  resumeView.classList.add('hidden');
});

resumeBtn.addEventListener('click', () => {
  resumeBtn.classList.add('active');
  homeBtn.classList.remove('active');
  resumeView.classList.remove('hidden');
  homeView.classList.add('hidden');
});
