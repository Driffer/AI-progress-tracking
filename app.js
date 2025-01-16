let progressData = JSON.parse(localStorage.getItem('progressData')) || [];

const progressForm = document.getElementById('progressForm');
const challengeList = document.getElementById('challengeList');
const userFeedback = document.getElementById('userFeedback');

// Render logged challenges
function renderProgress() {
    challengeList.innerHTML = '';
    progressData.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        challengeList.appendChild(li);
    });
    provideFeedback();
}

// Provide feedback based on completed challenges
function provideFeedback() {
    const challengesCompleted = progressData.length;
    if (challengesCompleted === 0) {
        userFeedback.textContent = 'Let’s start your learning journey!';
    } else if (challengesCompleted <= 30) {
        userFeedback.textContent = 'Good start! Keep up the momentum!';
    } else if (challengesCompleted <= 60) {
        userFeedback.textContent = 'Great job! You’re making solid progress.';
    } else if (challengesCompleted < 90) {
        userFeedback.textContent = 'Almost there! Keep pushing forward!';
    } else {
        userFeedback.textContent = 'Congratulations! You’ve completed your 90-day challenge!';
    }
}

// Handle form submission to log progress
progressForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const challengeName = document.getElementById('challengeName').value;
    if (challengeName) {
        progressData.push(challengeName);
        localStorage.setItem('progressData', JSON.stringify(progressData));
        document.getElementById('challengeName').value = ''; // Reset input
        renderProgress();
    } else {
        alert('Please enter a challenge for today!');
    }
});

// Initial render of progress
renderProgress();
