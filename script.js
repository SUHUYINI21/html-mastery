console.log("HTML Mastery loaded successfully 🚀");

/* ============================= */
/* COURSE PROGRESS SYSTEM */
/* ============================= */

const TOTAL_LESSONS = 24;

function getCompletedLessons() {
    return JSON.parse(localStorage.getItem("htmlProgress")) || [];
}

function updateProgress() {
    const completedLessons = getCompletedLessons();
    const completedCount = completedLessons.length;

    const percentage = Math.round(
        (completedCount / TOTAL_LESSONS) * 100
    );

    const progressText = document.getElementById("progress-text");
    const progressBar = document.getElementById("progress-bar");

    if (progressText) {
       progressText.textContent =
    `${completedCount} / ${TOTAL_LESSONS} Lessons Completed — ${percentage}%`;
    }

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }
}

function completeLesson(number) {
    let completedLessons = getCompletedLessons();

    if (!completedLessons.includes(number)) {
        completedLessons.push(number);

        localStorage.setItem(
            "htmlProgress",
            JSON.stringify(completedLessons)
        );
    }

    updateProgress();

    const button = document.querySelector(
        `.complete-lesson[onclick="completeLesson(${number})"]`
    );

    if (button) {
        button.textContent = "Lesson Completed ✓";
        button.classList.add("completed");
    }
}

/* Load saved progress when the page opens */
updateProgress();
function resetProgress() {
    const confirmReset = confirm(
        "Are you sure you want to reset your course progress?"
    );

    if (confirmReset) {
        localStorage.removeItem("htmlProgress");

        location.reload();
    }
}