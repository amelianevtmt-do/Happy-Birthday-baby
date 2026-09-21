/* =====================================================================
   BIRTHDAY SURPRISE — SCRIPT
   -----------------------------------------------------------------
   HOW THIS FILE IS ORGANIZED:
     - Section A (right below this comment) is the ONLY part you need
       to touch to personalize the site: names, messages, photos,
       timeline, reasons, quiz, and the letter.
     - Everything after "DO NOT NEED TO EDIT BELOW THIS LINE" makes the
       page actually work. You don't need to understand it to use it.
   ===================================================================== */


/* =====================================
   ✨ EDIT YOUR BIRTHDAY SURPRISE HERE
   ===================================== */

// His name — shown in the big reveal, the letter, and the final screen.
const birthdayPerson = "Baby";

// Short message shown right under "Happy Birthday, [Name]".
// Use \n to start a new line.
const birthdayMessage =
  " Happiest birthday to the man who always makes me happy ! I hope you enjoy your day, baby. I made you this surprise because you know how special you are to me, and I’m so lucky that I got the chance to know you even more. I never felt like this before, but somehow, you made me feel something that I couldn’t really explain. It’s something new to me, and honestly, I don’t even know how to put it into words. \n \n" +
   "Maybe it’s the way you make me feel comfortable, the little things you do, or simply the way you became someone I genuinely look forward to talking to. Hindi ko rin alam kung kailan exactly nagsimula, but somewhere along the way, you became someone really special to me. \n \n " +
   "So, I wanted to make something that could somehow show you how much I appreciate you and how happy I am that I got to know you. This may not be the biggest or most extravagant surprise, but I made every part of this with you in mind. \n \n "+ 
  "So take your time, enjoy this little surprise, and scroll down whenever you’re ready.";

// --- OUR LITTLE TIMELINE -------------------------------------------
// Add, remove, or edit as many entries as you like.
const timeline = [
  {
    label: "The Beginning",
    text: "Where everything started. When we first talked, you were asking me if I played 99 Nights on Roblox. Did you know that I had just downloaded the game and I didn't know anything about it pa? So I'm really happy that you recommended me so many games that I could play. I'm so happy that you started showing me those games na I didn't even know how to play, so I started playing all of them even though I didn't know how. The only thing that I liked was the hiking HAHHAHAHHA, and I'm so happy that you always go with me even though it's your first time playing it too. You always go with what I want, and that's what I want to thank you for." +
    "I didn't really expect that a simple question about a game would lead to all of this. I thought we were just going to play and talk about random things, but somehow, that little conversation became the start of something that I really treasure now. I'm really happy that you decided to talk to me that day because if you didn't, I don't even know if we would have gotten this close."
  },
  {
    label: "The First Conversation",
    text: "That conversation I'll always remember is about that game that you played. Like, sa start pa lang ng conversation natin, I already yapped so much agad, like we've known each other for so long. That's when I realized that I'm so comfortable talking to you. I didn't even feel awkward or hesitant to tell you random things, kahit kakakilala pa lang natin." +
    " I think that's one of the things that made me enjoy talking to you more. It felt so easy and natural, like I didn't have to think too much about what I was going to say. I could just be myself and yap about literally anything HAHAHAHAHA. And somehow, you still listened to me and kept the conversation going. That's something I really appreciate about you."
  },
  {
    label: "The Moment I Started Liking You",
    text: "The moment that I realized I started liking you was when I always craved for your attention. Like, when you're not active, I'm always missing you, and I want you to talk to me a lot. But I know that you're busy sometimes, that's why I always wait for you." +
    " I didn't really notice it at first. I just thought that I liked talking to you a lot, but then I started looking for you whenever I opened the game or whenever I was online. I'd get happy whenever I saw you active, and I'd secretly wait for you to message me. That's when I realized na ay, baka iba na talaga 'to HAHAHAHAHA." +
    " I never expected myself to feel this way because I've never really felt like this before. Somehow, you became someone I look forward to, someone I want to spend time with, and someone whose attention means a lot to me. And honestly, I'm kind of happy that it happened."
  },
  {
    label: "Today",
    text: "Now that we both like each other, I'm so happy that you confessed to me, even though it's just a happy crush. Pero when you started feeling different, you started lumalayo na, and it's actually cute when you got jealous. But the one thing that I don't like is that instead of talking about it, you always choose to ignore me and leave everything behind." +
    " I know we're still figuring things out, and I know that we're not perfect when it comes to communicating with each other. Sometimes we misunderstand things, sometimes we don't know what to say, and sometimes you choose to stay quiet instead. But despite that, I'm still happy that it's you that I get to experience all of this with you." +
    " I really appreciate all the little things you do for me, even the things that you probably don't think are a big deal. The way you give me assurance, the way you make me feel wanted, and the way you still try to make me feel better whenever I'm not okay. Those little things mean more to me than you probably realize." +
    " I'm really happy that I got to know you, and I'm even happier that somehow, you became someone this special to me"
  }
];

// --- PHOTO / MEMORY GALLERY ------------------------------------------
// Put your photo files inside assets/images/ and list them here.
// The "image" path must match the filename exactly (including .jpg/.png).
const memories = [
  {
    image: "photo1.jpg",
    caption: "One of my favorite memories ♡"
  },
  {
    image: "photo2.jpg",
    caption: "This day was special."
  },
  { 
    image: "photo3.jpg",
    caption: "I still think about this one."
  },
  {
    image: "photo4.jpg",
    caption: "Our rb bonding."
  },
  {
    image: "photo5.jpg",
    caption: "This one too."
  },
  {
    image: "photo6.jpg",
    caption: "Your kabaliwan."
  },
  {
    image: "photo7.jpg",
    caption: "Our kulitan."
  },
  {
    image: "photo8.jpg",
    caption: "Our babies."
  },
  {
    image: "photo9.jpg",
    caption: "The things that i love."
  },
  {
    image: "photo10.jpg",
    caption: "The things that i love."
  },
   {
    image: "photo11.jpg",
    caption: "Your jealousy HAHAHHAHA."
  },
   {
    image: "photo12.jpg",
    caption: "Our ML bonding."
  }
];

// --- REASONS WHY I LIKE YOU -------------------------------------------
// Each one becomes a little envelope card. Add as many as you like (6-10 works well).
const reasons = [
  "I like how you always make me laugh, even on bad days.",
  "I love how you listen, really listen, when I yapped a lot.",
  "I like your terrible jokes. Don't ever stop.",
  "I love how you remember the little things.",
  "I like how calm you make everything feel.",
  "I love your corny jokes.",
  "I love how you always choose to listen instead of arguing.",
  "I love that you always like the things that i love.",
  "I love how cute you are when you're jealous.",
  "I love when you're telling me what happened to you the whole day.",
  "I love how you keep updating me even though you're busy.",
  "I love when you always choose to be with me.",
  "I love when you always gave me assurance, even if i didn't ask you.",
  "I love how you always think of me first rather than yourself.",
  "I love when you always miss me.",
  "I love when you didn't let me be the last chat.",
  "I love when you always include me with your prayers.",
  "I love when you always compliment me.",
  "I love when you constantly checking up on me when i'm not okay.",
  "I love all of you."
];

// --- MINI INTERACTIVE GAME: "How well do you know me?" ----------------
// Each question needs: the question text, an array of choices, and the
// index (starting at 0) of the correct choice.
const quizQuestions = [
  {
    question: "Choose 1 thing that you really really like",
    choices: ["Me", "Hiking", "Yapping", "Matcha"],
    correctIndex: 0,
    correctFeedback: "Obviously. Loaf you baby.",
    incorrectFeedback: "Mali! Dapat ako yun eh."
  },
  {
    question: "What's one thing you secretly wish would happen today?",
    choices: ["A surprise", "A gift", "Good food", "Something from me"],
    correctIndex: 3,
    correctFeedback: "HAHAHAHA i hope this website count as something.",
    incorrectFeedback: "Try ulit, gusto mo naman talaga something from me diba HAHAHA"
  },
  {
    question: "What's something you really want right now?",
    choices: ["New shoes", "More sleep", "Money", "Me"],
    correctIndex: 2,
    correctFeedback: "Tapos hati tayo ha",
    incorrectFeedback: "Money is more important, baby HAHHAHAH not me"
  }
];

// --- SECRET MESSAGE (the letter) --------------------------------------
// This is the longer, more personal message inside the envelope.
const letterMessage =
  "Happiest birthday again, baby ! I don't say this enough, so I'm writing it down instead.\n\n" +
  "Thank you for being exactly who you are. For every little things that you did for me, " +
  "every corny jokes, every random conversation, and every time you somehow manage to make an ordinary day feel like something so, so special. I hope you know that I notice all those little things, even if I don't always say it.\n \n" +
  "Thank you for always making me feel comfortable, for listening to all my yapping, for giving me assurance when I need it, and for being someone I can genuinely enjoy spending time with. I know sometimes we don't really say what we feel, and there are moments when we misunderstand each other, but despite all that, I'm still really happy that I got to know you this much. \n \n " +
  "You became someone I look forward to talking to, someone I miss when you're not around, and someone who can make me smile just by simply being there. I never really expected that you'd become this special to me, but here we are HAHAHAHA. And honestly, I'm really glad it happened. \n\n"+
  "I hope this year is kind to you and that it brings you even a little of the happiness you give to everyone around you. I hope you get to achieve the things you've been wishing for, experience more good days, and have more reasons to smile. You deserve so many good things, and I hope life gives you more of them this year." +
  "I hope you know that I'm always here for you, no matter what happens. You don't have to go through everything alone, okay? I'll always be here to listen to your stories, your rants, your random thoughts, and kahit mga corny jokes mo pa HAHAHAHA. \n\n" +
  "I'm really thankful that somehow, our paths crossed. From that random first conversation to everything that happened after, I wouldn't trade those memories for anything. I don't know what the future holds for us, but for now, I'm just really happy that I have you in my life. \n\n" +
  "So enjoy your day, baby. You deserve to be celebrated, not just today but every day. And please remember that someone out here is genuinely happy that you exist. Happiest birthday again! I hope you have the happiest, sweetest, and most memorable birthday ever. \n\n" +
  "I loaf you so, so much!";

// --- FINAL SURPRISE MESSAGE -------------------------------------------
const finalMessage =
  "I hope your birthday is as special as you are to me. ♡";


/* =====================================================================
   DO NOT NEED TO EDIT BELOW THIS LINE
   (unless you want to change how things behave, not what they say)
   ===================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------------------------------------
     Fill in personalized text
  ------------------------------------------------- */
  document.getElementById("name-slot").textContent = birthdayPerson;
  document.getElementById("reveal-message").textContent = birthdayMessage;
  document.getElementById("letter-name-slot").textContent = birthdayPerson;
  document.getElementById("letter-body").textContent = letterMessage;
  document.getElementById("final-name-slot").textContent = birthdayPerson;
  document.getElementById("final-message").textContent = finalMessage;
  document.title = `Happy Birthday, ${birthdayPerson}`;

  /* -------------------------------------------------
     1. Floating particle background (hearts + sparkles)
  ------------------------------------------------- */
  const particleField = document.getElementById("particle-field");
  const particleSymbols = ["♡", "✦", "✧", "♥"];

  function spawnParticle() {
    if (prefersReducedMotion) return; // respect the user's motion preference

    const el = document.createElement("span");
    el.className = "particle";
    el.textContent = particleSymbols[Math.floor(Math.random() * particleSymbols.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 12 + Math.random() * 18 + "px";
    el.style.color = Math.random() > 0.5 ? "var(--blush)" : "var(--gold)";
    el.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    el.style.animationDuration = 8 + Math.random() * 10 + "s";
    particleField.appendChild(el);

    // Clean up after the animation finishes so the DOM doesn't grow forever
    setTimeout(() => el.remove(), 20000);
  }

  if (!prefersReducedMotion) {
    for (let i = 0; i < 6; i++) {
      setTimeout(spawnParticle, i * 600);
    }
    setInterval(spawnParticle, 1800);
  }

  /* -------------------------------------------------
     2. Landing screen → main content transition
  ------------------------------------------------- */
  const landingScreen = document.getElementById("landing-screen");
  const openBtn = document.getElementById("open-btn");
  const mainContent = document.getElementById("main-content");
  const musicControl = document.getElementById("music-control");

  openBtn.addEventListener("click", () => {
    landingScreen.classList.add("is-leaving");
    mainContent.hidden = false;
    musicControl.hidden = false;

    setTimeout(() => {
      landingScreen.hidden = true;
      document.getElementById("reveal").classList.add("is-visible");
    }, prefersReducedMotion ? 0 : 600);
  });

  /* -------------------------------------------------
     3. "Scroll to next section" buttons
  ------------------------------------------------- */
  document.querySelectorAll(".scroll-next").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });

  /* -------------------------------------------------
     4. Fade sections in as they enter the viewport
  ------------------------------------------------- */
  const fadeSections = document.querySelectorAll(".fade-section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeSections.forEach((section) => observer.observe(section));

  /* -------------------------------------------------
     5. Timeline: render items + popup modal
  ------------------------------------------------- */
  const timelineList = document.getElementById("timeline-list");
  const timelineModal = document.getElementById("timeline-modal");
  const timelineModalLabel = document.getElementById("timeline-modal-label");
  const timelineModalTitle = document.getElementById("timeline-modal-title");
  const timelineModalText = document.getElementById("timeline-modal-text");
  const timelineModalClose = document.getElementById("timeline-modal-close");

  timeline.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "timeline-item";

    const btn = document.createElement("button");
    btn.className = "timeline-btn";
    btn.type = "button";
    btn.innerHTML = `
      <span class="timeline-label">${item.label}</span>
      <span class="timeline-hint">Tap to read</span>
    `;
    btn.addEventListener("click", () => openTimelineModal(item, index));

    li.appendChild(btn);
    timelineList.appendChild(li);
  });

  function openTimelineModal(item, index) {
    timelineModalLabel.textContent = `Moment ${index + 1} of ${timeline.length}`;
    timelineModalTitle.textContent = item.label;
    timelineModalText.textContent = item.text;
    timelineModal.hidden = false;
    timelineModalClose.focus();
  }

  timelineModalClose.addEventListener("click", () => (timelineModal.hidden = true));
  timelineModal.addEventListener("click", (e) => {
    if (e.target === timelineModal) timelineModal.hidden = true;
  });

  /* -------------------------------------------------
     6. Gallery: render photos + lightbox
  ------------------------------------------------- */
  const galleryGrid = document.getElementById("gallery-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  memories.forEach((memory) => {
    const btn = document.createElement("button");
    btn.className = "gallery-item";
    btn.type = "button";
    btn.innerHTML = `
  <img class="gallery-photo" src="${memory.image}" alt="${memory.caption}" />
  <span class="gallery-caption">${memory.caption}</span>
`;
    btn.addEventListener("click", () => {
      lightboxImage.src = memory.image;
      lightboxImage.alt = memory.caption;
      lightboxCaption.textContent = memory.caption;
      lightbox.hidden = false;
      lightboxClose.focus();
    });
    galleryGrid.appendChild(btn);
  });

  lightboxClose.addEventListener("click", () => (lightbox.hidden = true));
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) lightbox.hidden = true;
  });

  /* -------------------------------------------------
     7. Reasons: envelope cards that open on click
  ------------------------------------------------- */
  const reasonsGrid = document.getElementById("reasons-grid");

  reasons.forEach((reason) => {
    const card = document.createElement("button");
    card.className = "reason-card";
    card.type = "button";
    card.setAttribute("aria-pressed", "false");
    card.innerHTML = `
      <span class="reason-front">💌 Open me</span>
      <span class="reason-back">${reason}</span>
    `;
    card.addEventListener("click", () => {
      const isOpen = card.classList.toggle("is-open");
      card.setAttribute("aria-pressed", String(isOpen));
    });
    reasonsGrid.appendChild(card);
  });

  /* -------------------------------------------------
     8. Quiz: one question at a time
  ------------------------------------------------- */
  const quizContainer = document.getElementById("quiz-container");
  let quizIndex = 0;
  let quizScore = 0;

  function renderQuizQuestion() {
    if (quizIndex >= quizQuestions.length) {
      renderQuizResult();
      return;
    }

    const q = quizQuestions[quizIndex];
    quizContainer.innerHTML = `
      <p class="quiz-progress">Question ${quizIndex + 1} of ${quizQuestions.length}</p>
      <p class="quiz-question">${q.question}</p>
      <div class="quiz-choices" id="quiz-choices"></div>
      <p class="quiz-feedback" id="quiz-feedback" aria-live="polite"></p>
    `;

    const choicesEl = document.getElementById("quiz-choices");
    const feedbackEl = document.getElementById("quiz-feedback");

    q.choices.forEach((choiceText, i) => {
      const choiceBtn = document.createElement("button");
      choiceBtn.className = "quiz-choice";
      choiceBtn.type = "button";
      choiceBtn.textContent = choiceText;

      choiceBtn.addEventListener("click", () => {
        const allChoices = choicesEl.querySelectorAll(".quiz-choice");
        allChoices.forEach((btn) => (btn.disabled = true));

        if (i === q.correctIndex) {
          choiceBtn.classList.add("correct");
          quizScore++;
          feedbackEl.textContent = q.correctFeedback || "";
        } else {
          choiceBtn.classList.add("incorrect");
          allChoices[q.correctIndex].classList.add("correct");
          feedbackEl.textContent = q.incorrectFeedback || "";
        }

        const nextBtn = document.createElement("button");
        nextBtn.className = "btn btn-primary quiz-next-btn";
        nextBtn.type = "button";
        nextBtn.textContent = quizIndex === quizQuestions.length - 1 ? "See result" : "Next question";
        nextBtn.addEventListener("click", () => {
          quizIndex++;
          renderQuizQuestion();
        });
        quizContainer.appendChild(nextBtn);
      });

      choicesEl.appendChild(choiceBtn);
    });
  }

  function renderQuizResult() {
    quizContainer.innerHTML = `
      <div class="quiz-result">
        <p class="quiz-result-score">${quizScore} / ${quizQuestions.length}</p>
        <p>${quizScore === quizQuestions.length
          ? "Perfect score. You really do know me."
          : "Close enough. I'll let you off easy this time."}</p>
      </div>
    `;
  }

  if (quizQuestions.length > 0) {
    renderQuizQuestion();
  }

  /* -------------------------------------------------
     9. Letter: envelope opening animation
  ------------------------------------------------- */
  const letterIntro = document.getElementById("letter-intro");
  const letterOpenBtn = document.getElementById("letter-open-btn");
  const envelope = document.getElementById("envelope");
  const afterLetterBtn = document.getElementById("after-letter-btn");

  letterOpenBtn.addEventListener("click", () => {
    letterIntro.hidden = true;
    envelope.hidden = false;

    // Small delay so the envelope renders before the "open" animation starts
    requestAnimationFrame(() => {
      setTimeout(() => envelope.classList.add("is-open"), 50);
    });

    afterLetterBtn.hidden = false;
  });

  /* -------------------------------------------------
     10. Final surprise
  ------------------------------------------------- */
  const finalIntro = document.getElementById("final-intro");
  const finalBtn = document.getElementById("final-btn");
  const finalReveal = document.getElementById("final-reveal");
  const finalScreen = document.getElementById("final");

  finalBtn.addEventListener("click", () => {
    finalIntro.hidden = true;
    finalReveal.hidden = false;
    finalScreen.style.background = "var(--plum)";

    if (!prefersReducedMotion) {
      for (let i = 0; i < 24; i++) {
        setTimeout(spawnParticle, i * 80);
      }
    }
  });

  /* -------------------------------------------------
     11. Music control (play/pause, never autoplays)
  ------------------------------------------------- */
  const musicToggle = document.getElementById("music-toggle");
  const bgMusic = document.getElementById("bgMusic");
  const musicStatus = document.getElementById("music-status");
  let isPlaying = false;

  musicToggle.addEventListener("click", () => {
    if (isPlaying) {
      bgMusic.pause();
    } else {
      // play() returns a promise; catch errors quietly (e.g. missing file)
      bgMusic.play().catch(() => {
        musicStatus.textContent = "Music unavailable";
      });
    }
  });

  bgMusic.addEventListener("play", () => {
    isPlaying = true;
    musicToggle.classList.add("is-playing");
    musicToggle.setAttribute("aria-pressed", "true");
    musicStatus.textContent = "Pause music";
  });

  bgMusic.addEventListener("pause", () => {
    isPlaying = false;
    musicToggle.classList.remove("is-playing");
    musicToggle.setAttribute("aria-pressed", "false");
    musicStatus.textContent = "Play music";
  });
});
