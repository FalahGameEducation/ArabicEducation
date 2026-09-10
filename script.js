/* =========================================================
   ARABKU — SCRIPT.JS
   Web Pembelajaran Bahasa Arab untuk Pemula
========================================================= */


/* =========================================================
   1. DATA HURUF HIJAIYAH
========================================================= */

const hijaiyahLetters = [
    {
        letter: "ا",
        name: "Alif",
        latin: "A",
        description: "Huruf pertama dalam alfabet Arab."
    },
    {
        letter: "ب",
        name: "Ba",
        latin: "B",
        description: "Huruf Ba memiliki satu titik di bawah."
    },
    {
        letter: "ت",
        name: "Ta",
        latin: "T",
        description: "Huruf Ta memiliki dua titik di atas."
    },
    {
        letter: "ث",
        name: "Tsa",
        latin: "Ts",
        description: "Huruf Tsa memiliki tiga titik di atas."
    },
    {
        letter: "ج",
        name: "Jim",
        latin: "J",
        description: "Huruf Jim memiliki satu titik di bawah."
    },
    {
        letter: "ح",
        name: "Ha",
        latin: "H",
        description: "Huruf Ha tidak memiliki titik."
    },
    {
        letter: "خ",
        name: "Kha",
        latin: "Kh",
        description: "Huruf Kha memiliki satu titik di atas."
    },
    {
        letter: "د",
        name: "Dal",
        latin: "D",
        description: "Huruf Dal tidak memiliki titik."
    },
    {
        letter: "ذ",
        name: "Dzal",
        latin: "Dz",
        description: "Huruf Dzal memiliki satu titik di atas."
    },
    {
        letter: "ر",
        name: "Ra",
        latin: "R",
        description: "Huruf Ra tidak memiliki titik."
    },
    {
        letter: "ز",
        name: "Zai",
        latin: "Z",
        description: "Huruf Zai memiliki satu titik di atas."
    },
    {
        letter: "س",
        name: "Sin",
        latin: "S",
        description: "Huruf Sin memiliki tiga gigi dan tidak memiliki titik."
    },
    {
        letter: "ش",
        name: "Syin",
        latin: "Sy",
        description: "Huruf Syin memiliki tiga titik di atas."
    },
    {
        letter: "ص",
        name: "Shad",
        latin: "Sh",
        description: "Huruf Shad merupakan salah satu huruf tebal."
    },
    {
        letter: "ض",
        name: "Dhad",
        latin: "Dh",
        description: "Huruf Dhad merupakan huruf yang khas dalam Bahasa Arab."
    },
    {
        letter: "ط",
        name: "Tha",
        latin: "Th",
        description: "Huruf Tha termasuk huruf tebal."
    },
    {
        letter: "ظ",
        name: "Dza",
        latin: "Dz",
        description: "Huruf Dza termasuk huruf tebal."
    },
    {
        letter: "ع",
        name: "Ain",
        latin: "‘",
        description: "Huruf Ain berasal dari makhraj tenggorokan."
    },
    {
        letter: "غ",
        name: "Ghain",
        latin: "Gh",
        description: "Huruf Ghain memiliki satu titik di atas."
    },
    {
        letter: "ف",
        name: "Fa",
        latin: "F",
        description: "Huruf Fa memiliki satu titik di atas."
    },
    {
        letter: "ق",
        name: "Qaf",
        latin: "Q",
        description: "Huruf Qaf memiliki dua titik di atas."
    },
    {
        letter: "ك",
        name: "Kaf",
        latin: "K",
        description: "Huruf Kaf merupakan huruf yang umum digunakan dalam Bahasa Arab."
    },
    {
        letter: "ل",
        name: "Lam",
        latin: "L",
        description: "Huruf Lam sering ditemukan dalam kata-kata Arab."
    },
    {
        letter: "م",
        name: "Mim",
        latin: "M",
        description: "Huruf Mim memiliki bentuk bulat."
    },
    {
        letter: "ن",
        name: "Nun",
        latin: "N",
        description: "Huruf Nun memiliki satu titik di atas."
    },
    {
        letter: "ه",
        name: "Ha",
        latin: "H",
        description: "Huruf Ha memiliki bentuk khas seperti lingkaran kecil."
    },
    {
        letter: "و",
        name: "Waw",
        latin: "W",
        description: "Huruf Waw dapat digunakan sebagai konsonan maupun vokal panjang."
    },
    {
        letter: "ي",
        name: "Ya",
        latin: "Y",
        description: "Huruf Ya memiliki dua titik di bawah."
    }
];


/* =========================================================
   2. DATA QUIZ
========================================================= */

const quizQuestions = [
    {
        question: "Apa arti dari kata berikut?",
        arabic: "كِتَابٌ",
        answers: [
            "Buku",
            "Pena",
            "Ayah",
            "Ibu"
        ],
        correct: "Buku"
    },

    {
        question: "Apa arti dari kata berikut?",
        arabic: "قَلَمٌ",
        answers: [
            "Buku",
            "Pena",
            "Rumah",
            "Sekolah"
        ],
        correct: "Pena"
    },

    {
        question: "Apa arti dari kata berikut?",
        arabic: "أَبٌ",
        answers: [
            "Ibu",
            "Anak",
            "Ayah",
            "Guru"
        ],
        correct: "Ayah"
    },

    {
        question: "Apa arti dari kata berikut?",
        arabic: "أُمٌّ",
        answers: [
            "Ibu",
            "Ayah",
            "Saudara",
            "Teman"
        ],
        correct: "Ibu"
    },

    {
        question: "Apa arti dari kata berikut?",
        arabic: "شُكْرًا",
        answers: [
            "Selamat pagi",
            "Terima kasih",
            "Sampai jumpa",
            "Halo"
        ],
        correct: "Terima kasih"
    }
];


/* =========================================================
   3. ELEMENT DOM
========================================================= */

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navMenu = document.getElementById("navMenu");

const filterButtons = document.querySelectorAll(".filter-btn");
const vocabularyCards = document.querySelectorAll(".vocabulary-card");

const audioButtons = document.querySelectorAll(".audio-btn");

const lettersGrid = document.getElementById("lettersGrid");
const showAllLettersBtn = document.getElementById("showAllLettersBtn");

const letterModal = document.getElementById("letterModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalLetter = document.getElementById("modalLetter");
const modalLetterName = document.getElementById("modalLetterName");
const modalLetterDescription =
    document.getElementById("modalLetterDescription");
const modalAudioBtn = document.getElementById("modalAudioBtn");

const questionNumber = document.getElementById("questionNumber");
const questionArabic = document.getElementById("questionArabic");
const answerGrid = document.getElementById("answerGrid");

const scoreElement = document.getElementById("score");
const quizProgress = document.getElementById("quizProgress");
const quizFeedback = document.getElementById("quizFeedback");

const nextQuestionBtn =
    document.getElementById("nextQuestionBtn");

const learningProgress =
    document.getElementById("learningProgress");

const currentYear =
    document.getElementById("currentYear");


/* =========================================================
   4. MOBILE NAVIGATION
========================================================= */

if (mobileMenuBtn && navMenu) {

    mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

        const isOpen = navMenu.classList.contains("show");

        mobileMenuBtn.textContent = isOpen ? "×" : "☰";

        mobileMenuBtn.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );
    });


    // Tutup menu setelah memilih navigasi
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

            mobileMenuBtn.textContent = "☰";

            mobileMenuBtn.setAttribute(
                "aria-label",
                "Buka menu"
            );

        });

    });

}


/* =========================================================
   5. ACTIVE NAVIGATION SAAT SCROLL
========================================================= */

const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   6. FILTER KOSAKATA
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedCategory =
            button.dataset.category;


        // Ubah tombol aktif
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Filter kartu
        vocabularyCards.forEach(card => {

            const cardCategory =
                card.dataset.category;

            if (
                selectedCategory === "semua" ||
                selectedCategory === cardCategory
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


/* =========================================================
   7. TEXT-TO-SPEECH BAHASA ARAB
========================================================= */

function speakArabic(text) {

    // Pastikan browser mendukung Speech Synthesis
    if (!("speechSynthesis" in window)) {

        alert(
            "Maaf, browser kamu belum mendukung fitur pengucapan otomatis."
        );

        return;
    }


    // Hentikan suara sebelumnya
    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "ar-SA";

    speech.rate = 0.75;
    speech.pitch = 1;
    speech.volume = 1;


    window.speechSynthesis.speak(speech);
}


/* =========================================================
   8. TOMBOL AUDIO KOSAKATA
========================================================= */

audioButtons.forEach(button => {

    // Abaikan tombol audio yang bukan kartu kosakata
    if (!button.dataset.word) {
        return;
    }


    button.addEventListener("click", () => {

        const word =
            button.dataset.word;

        speakArabic(word);


        // Animasi kecil pada tombol
        const originalText =
            button.innerHTML;

        button.innerHTML = "🔊 Sedang diputar...";

        button.disabled = true;


        setTimeout(() => {

            button.innerHTML = originalText;

            button.disabled = false;

        }, 1200);

    });

});


/* =========================================================
   9. MEMBUAT SEMUA HURUF HIJAIYAH
========================================================= */

let showingAllLetters = false;


function renderLetters() {

    if (!lettersGrid) {
        return;
    }


    lettersGrid.innerHTML = "";


    const lettersToShow =
        showingAllLetters
            ? hijaiyahLetters
            : hijaiyahLetters.slice(0, 12);


    lettersToShow.forEach(item => {

        const button =
            document.createElement("button");

        button.className = "letter-card";

        button.type = "button";

        button.dataset.letter =
            item.letter;


        button.innerHTML = `
            <span class="letter-arabic">
                ${item.letter}
            </span>

            <span class="letter-name">
                ${item.name}
            </span>

            <span class="letter-latin">
                ${item.latin}
            </span>
        `;


        button.addEventListener("click", () => {

            openLetterModal(item);

        });


        lettersGrid.appendChild(button);

    });


    if (showAllLettersBtn) {

        showAllLettersBtn.textContent =
            showingAllLetters
                ? "Tampilkan Lebih Sedikit"
                : "Lihat Semua Huruf";

    }

}


/* =========================================================
   10. TAMPILKAN SEMUA HURUF
========================================================= */

if (showAllLettersBtn) {

    showAllLettersBtn.addEventListener("click", () => {

        showingAllLetters =
            !showingAllLetters;

        renderLetters();

    });

}


/* =========================================================
   11. MODAL HURUF
========================================================= */

function openLetterModal(letterData) {

    if (!letterModal) {
        return;
    }


    modalLetter.textContent =
        letterData.letter;

    modalLetterName.textContent =
        `${letterData.name} (${letterData.latin})`;

    modalLetterDescription.textContent =
        letterData.description;


    letterModal.classList.add("show");

    letterModal.setAttribute(
        "aria-hidden",
        "false"
    );


    // Simpan huruf yang sedang ditampilkan
    modalAudioBtn.dataset.word =
        letterData.letter;


    document.body.style.overflow = "hidden";

}


/* =========================================================
   12. TUTUP MODAL
========================================================= */

function closeLetterModal() {

    if (!letterModal) {
        return;
    }


    letterModal.classList.remove("show");

    letterModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";

    window.speechSynthesis.cancel();

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeLetterModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeLetterModal
    );

}


// Tutup modal dengan tombol Escape
document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        letterModal.classList.contains("show")
    ) {
        closeLetterModal();
    }

});


/* =========================================================
   13. AUDIO HURUF PADA MODAL
========================================================= */

if (modalAudioBtn) {

    modalAudioBtn.addEventListener("click", () => {

        const letter =
            modalAudioBtn.dataset.word;

        if (!letter) {
            return;
        }

        speakArabic(letter);

    });

}


/* =========================================================
   14. INITIAL RENDER HURUF
========================================================= */

renderLetters();


/* =========================================================
   15. SISTEM QUIZ
========================================================= */

let currentQuestionIndex = 0;
let score = 0;
let answered = false;


function loadQuestion() {

    const currentQuestion =
        quizQuestions[currentQuestionIndex];


    if (!currentQuestion) {
        finishQuiz();
        return;
    }


    answered = false;


    // Nomor pertanyaan
    questionNumber.textContent =
        `Pertanyaan ${currentQuestionIndex + 1} dari ${quizQuestions.length}`;


    // Pertanyaan
    document.querySelector(".question").textContent =
        currentQuestion.question;


    // Kata Arab
    questionArabic.textContent =
        currentQuestion.arabic;


    // Reset feedback
    quizFeedback.textContent = "";

    quizFeedback.className =
        "quiz-feedback";


    // Reset tombol berikutnya
    nextQuestionBtn.disabled = true;


    // Progress bar
    const progress =
        ((currentQuestionIndex + 1) /
            quizQuestions.length) * 100;

    quizProgress.style.width =
        `${progress}%`;


    // Hapus jawaban lama
    answerGrid.innerHTML = "";


    // Acak pilihan jawaban
    const shuffledAnswers =
        [...currentQuestion.answers]
            .sort(() => Math.random() - 0.5);


    shuffledAnswers.forEach(answer => {

        const button =
            document.createElement("button");

        button.className =
            "answer-btn";

        button.type = "button";

        button.textContent =
            answer;

        button.dataset.answer =
            answer;


        button.addEventListener(
            "click",
            () => checkAnswer(button)
        );


        answerGrid.appendChild(button);

    });

}


/* =========================================================
   16. CEK JAWABAN QUIZ
========================================================= */

function checkAnswer(selectedButton) {

    if (answered) {
        return;
    }


    answered = true;


    const currentQuestion =
        quizQuestions[currentQuestionIndex];

    const selectedAnswer =
        selectedButton.dataset.answer;


    const answerButtons =
        document.querySelectorAll(".answer-btn");


    // Nonaktifkan semua tombol
    answerButtons.forEach(button => {
        button.disabled = true;
    });


    // Jawaban benar
    if (
        selectedAnswer ===
        currentQuestion.correct
    ) {

        selectedButton.classList.add("correct");

        score++;

        scoreElement.textContent =
            score;


        quizFeedback.textContent =
            "🎉 Benar! Jawabanmu tepat.";

        quizFeedback.classList.add(
            "correct"
        );


    } else {

        selectedButton.classList.add("wrong");


        // Tampilkan jawaban benar
        answerButtons.forEach(button => {

            if (
                button.dataset.answer ===
                currentQuestion.correct
            ) {
                button.classList.add("correct");
            }

        });


        quizFeedback.textContent =
            `❌ Belum tepat. Jawaban yang benar adalah "${currentQuestion.correct}".`;

        quizFeedback.classList.add(
            "wrong"
        );

    }


    nextQuestionBtn.disabled = false;

}


/* =========================================================
   17. PERTANYAAN BERIKUTNYA
========================================================= */

if (nextQuestionBtn) {

    nextQuestionBtn.addEventListener("click", () => {

        currentQuestionIndex++;


        if (
            currentQuestionIndex >=
            quizQuestions.length
        ) {

            finishQuiz();

            return;

        }


        loadQuestion();

    });

}


/* =========================================================
   18. SELESAI QUIZ
========================================================= */

function finishQuiz() {

    questionNumber.textContent =
        "Latihan Selesai!";


    questionArabic.textContent =
        "مُبَارَك!";


    answerGrid.innerHTML = "";


    const percentage =
        Math.round(
            (score / quizQuestions.length) * 100
        );


    let message = "";


    if (percentage === 100) {

        message =
            "🏆 Luar biasa! Semua jawaban benar!";

    } else if (percentage >= 80) {

        message =
            "🌟 Sangat bagus! Pemahamanmu sudah baik.";

    } else if (percentage >= 60) {

        message =
            "👍 Bagus! Terus berlatih agar semakin lancar.";

    } else {

        message =
            "💪 Jangan menyerah! Coba pelajari kembali kosakatanya.";

    }


    quizFeedback.textContent =
        `Skor akhir: ${score}/${quizQuestions.length} (${percentage}%). ${message}`;

    quizFeedback.className =
        "quiz-feedback correct";


    quizProgress.style.width =
        "100%";


    nextQuestionBtn.disabled = false;

    nextQuestionBtn.textContent =
        "🔄 Ulangi Latihan";


    // Progress belajar
    if (learningProgress) {

        const learningValue =
            Math.max(
                25,
                percentage
            );

        learningProgress.textContent =
            `${learningValue}%`;

    }


    nextQuestionBtn.onclick = restartQuiz;

}


/* =========================================================
   19. ULANGI QUIZ
========================================================= */

function restartQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    answered = false;


    scoreElement.textContent =
        "0";


    nextQuestionBtn.textContent =
        "Pertanyaan Berikutnya →";


    nextQuestionBtn.onclick = null;


    loadQuestion();

}


/* =========================================================
   20. LOAD QUIZ PERTAMA KALI
========================================================= */

if (
    questionNumber &&
    questionArabic &&
    answerGrid
) {

    loadQuestion();

}


/* =========================================================
   21. UPDATE TAHUN FOOTER
========================================================= */

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =========================================================
   22. EFEK SCROLL HALUS UNTUK CTA
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener("click", event => {

        const targetId =
            link.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {
            return;
        }


        event.preventDefault();


        const target =
            document.querySelector(targetId);


        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   23. INTERSECTION OBSERVER
   Animasi ketika elemen masuk viewport
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".stat-card, .vocabulary-card, .letter-card, .quiz-card, .progress-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


animatedElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(15px)";

    element.style.transition =
        "opacity 0.5s ease, transform 0.5s ease";


    observer.observe(element);

});


/* =========================================================
   24. PESAN CONSOLE
========================================================= */

console.log(
    "%cArabKu siap digunakan! 🌱",
    "color: #176b52; font-size: 16px; font-weight: bold;"
);
