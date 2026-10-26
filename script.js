
"use strict";

// Reel Roulette: built-in movie collection.
// No API keys, dependencies, or backend required.

const movies = [
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    moods: ["Mind-bending", "Thriller", "Sci-Fi"],
    description: "A skilled thief enters people's dreams to steal secrets, but one final job challenges the boundaries of reality.",
    tags: ["Dreams", "Reality", "Heist"]
  },
  {
    id: "memento",
    title: "Memento",
    year: 2000,
    genre: "Mystery / Thriller",
    moods: ["Mind-bending", "Thriller"],
    description: "A man with short-term memory loss pieces together clues while hunting for his wife's killer.",
    tags: ["Memory", "Mystery", "Nonlinear"]
  },
  {
    id: "predestination",
    title: "Predestination",
    year: 2014,
    genre: "Sci-Fi / Thriller",
    moods: ["Mind-bending", "Thriller", "Sci-Fi"],
    description: "A time-traveling agent pursues a criminal across decades in a story full of identity twists.",
    tags: ["Time Travel", "Identity", "Paradox"]
  },
  {
    id: "shutter-island",
    title: "Shutter Island",
    year: 2010,
    genre: "Psychological Thriller",
    moods: ["Mind-bending", "Thriller", "Drama"],
    description: "Two US marshals investigate a disappearance at an isolated psychiatric institution, where nothing feels quite right.",
    tags: ["Psychological", "Mystery", "Twists"]
  },
  {
    id: "fight-club",
    title: "Fight Club",
    year: 1999,
    genre: "Drama / Thriller",
    moods: ["Mind-bending", "Thriller", "Drama"],
    description: "An insomniac office worker meets a charismatic stranger and becomes involved in an underground fight club.",
    tags: ["Identity", "Rebellion", "Psychological"]
  },
  {
    id: "the-prestige",
    title: "The Prestige",
    year: 2006,
    genre: "Mystery / Drama",
    moods: ["Mind-bending", "Thriller", "Drama"],
    description: "Two rival magicians push their obsession with the perfect illusion to increasingly dangerous extremes.",
    tags: ["Magic", "Rivalry", "Secrets"]
  },
  {
    id: "donnie-darko",
    title: "Donnie Darko",
    year: 2001,
    genre: "Sci-Fi / Drama",
    moods: ["Mind-bending", "Sci-Fi", "Drama"],
    description: "A troubled teenager encounters a mysterious figure whose predictions blur the line between destiny and delusion.",
    tags: ["Time", "Fate", "Surreal"]
  },
  {
    id: "eternal-sunshine",
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    genre: "Romance / Sci-Fi",
    moods: ["Mind-bending", "Sci-Fi", "Drama"],
    description: "After a breakup, two former lovers undergo a procedure to erase each other from their memories.",
    tags: ["Memory", "Love", "Surreal"]
  },
  {
    id: "mulholland-drive",
    title: "Mulholland Drive",
    year: 2001,
    genre: "Mystery / Thriller",
    moods: ["Mind-bending", "Thriller", "Drama"],
    description: "An aspiring actress in Los Angeles helps an amnesiac woman uncover her identity in a surreal mystery.",
    tags: ["Surreal", "Identity", "Dreams"]
  },
  {
    id: "arrival",
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi / Drama",
    moods: ["Mind-bending", "Sci-Fi", "Drama"],
    description: "A linguist attempts to communicate with mysterious visitors whose language changes how humanity understands time.",
    tags: ["Language", "Time", "First Contact"]
  },
  {
    id: "gone-girl",
    title: "Gone Girl",
    year: 2014,
    genre: "Psychological Thriller",
    moods: ["Thriller", "Mind-bending"],
    description: "When a woman disappears on her wedding anniversary, the investigation turns into a media spectacle filled with suspicion.",
    tags: ["Suspense", "Marriage", "Secrets"]
  },
  {
    id: "prisoners",
    title: "Prisoners",
    year: 2013,
    genre: "Crime / Thriller",
    moods: ["Thriller", "Drama"],
    description: "After two children vanish, a desperate father and a determined detective follow increasingly disturbing leads.",
    tags: ["Crime", "Morality", "Suspense"]
  },
  {
    id: "nightcrawler",
    title: "Nightcrawler",
    year: 2014,
    genre: "Crime / Thriller",
    moods: ["Thriller", "Drama"],
    description: "An ambitious freelancer discovers the dark world of crime journalism and becomes increasingly willing to cross ethical lines.",
    tags: ["Ambition", "Media", "Crime"]
  },
  {
    id: "se7en",
    title: "Se7en",
    year: 1995,
    genre: "Crime / Thriller",
    moods: ["Thriller", "Drama"],
    description: "Two detectives pursue a serial killer whose crimes are inspired by the seven deadly sins.",
    tags: ["Detective", "Crime", "Dark"]
  },
  {
    id: "the-game",
    title: "The Game",
    year: 1997,
    genre: "Mystery / Thriller",
    moods: ["Thriller", "Mind-bending"],
    description: "A wealthy investment banker receives an unusual birthday gift that begins dismantling his carefully controlled life.",
    tags: ["Conspiracy", "Suspense", "Mystery"]
  },
  {
    id: "knives-out",
    title: "Knives Out",
    year: 2019,
    genre: "Mystery / Comedy",
    moods: ["Thriller", "Comedy"],
    description: "A sharp detective investigates a famous novelist's death amid a family full of secrets and suspicious motives.",
    tags: ["Whodunit", "Detective", "Witty"]
  },
  {
    id: "the-truman-show",
    title: "The Truman Show",
    year: 1998,
    genre: "Comedy / Drama",
    moods: ["Comedy", "Mind-bending", "Drama"],
    description: "An ordinary man's seemingly perfect life begins to unravel as he questions whether his world is genuine.",
    tags: ["Reality", "Satire", "Freedom"]
  },
  {
    id: "groundhog-day",
    title: "Groundhog Day",
    year: 1993,
    genre: "Comedy / Fantasy",
    moods: ["Comedy", "Mind-bending"],
    description: "A cynical weatherman finds himself reliving the same day repeatedly and must rethink how he lives.",
    tags: ["Time Loop", "Romance", "Growth"]
  },
  {
    id: "the-grand-budapest-hotel",
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: "Comedy / Adventure",
    moods: ["Comedy", "Drama"],
    description: "A legendary hotel concierge and his protégé become entangled in a stolen painting and a family inheritance dispute.",
    tags: ["Adventure", "Friendship", "Whimsical"]
  },
  {
    id: "superbad",
    title: "Superbad",
    year: 2007,
    genre: "Comedy",
    moods: ["Comedy"],
    description: "Two high-school friends try to make their final days before graduation unforgettable, with chaotic results.",
    tags: ["Friendship", "Coming of Age", "Chaos"]
  },
  {
    id: "the-nice-guys",
    title: "The Nice Guys",
    year: 2016,
    genre: "Comedy / Crime",
    moods: ["Comedy", "Thriller"],
    description: "A private investigator and an enforcer reluctantly team up to investigate a disappearance in 1970s Los Angeles.",
    tags: ["Buddy Comedy", "Mystery", "Crime"]
  },
  {
    id: "hot-fuzz",
    title: "Hot Fuzz",
    year: 2007,
    genre: "Action / Comedy",
    moods: ["Comedy", "Thriller"],
    description: "An exceptionally dedicated police officer is transferred to a quiet village where a series of strange accidents raises questions.",
    tags: ["Parody", "Mystery", "Action"]
  },
  {
    id: "interstellar",
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi / Drama",
    moods: ["Sci-Fi", "Drama", "Mind-bending"],
    description: "A pilot joins a mission beyond Earth to find humanity a future as the planet faces an agricultural crisis.",
    tags: ["Space", "Time", "Humanity"]
  },
  {
    id: "blade-runner-2049",
    title: "Blade Runner 2049",
    year: 2017,
    genre: "Sci-Fi / Thriller",
    moods: ["Sci-Fi", "Thriller", "Mind-bending"],
    description: "A replicant detective uncovers a secret that could destabilize the fragile relationship between humans and artificial beings.",
    tags: ["Identity", "AI", "Future"]
  },
  {
    id: "ex-machina",
    title: "Ex Machina",
    year: 2014,
    genre: "Sci-Fi / Thriller",
    moods: ["Sci-Fi", "Thriller", "Mind-bending"],
    description: "A programmer visits a reclusive inventor to evaluate an advanced humanoid AI, but the experiment grows unsettling.",
    tags: ["Artificial Intelligence", "Ethics", "Control"]
  },
  {
    id: "the-matrix",
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi / Action",
    moods: ["Sci-Fi", "Mind-bending", "Thriller"],
    description: "A computer hacker discovers that the reality he knows hides a much larger system of control.",
    tags: ["Simulation", "Freedom", "Cyberpunk"]
  },
  {
    id: "arrival-of-a-different-kind",
    title: "Moon",
    year: 2009,
    genre: "Sci-Fi / Drama",
    moods: ["Sci-Fi", "Mind-bending", "Drama"],
    description: "Near the end of a lunar mining assignment, a solitary worker begins questioning what is happening at his remote base.",
    tags: ["Isolation", "Identity", "Space"]
  },
  {
    id: "her",
    title: "Her",
    year: 2013,
    genre: "Romance / Sci-Fi",
    moods: ["Sci-Fi", "Drama"],
    description: "A lonely writer develops an unexpected emotional connection with an intelligent operating system.",
    tags: ["Technology", "Love", "Loneliness"]
  },
  {
    id: "good-will-hunting",
    title: "Good Will Hunting",
    year: 1997,
    genre: "Drama",
    moods: ["Drama"],
    description: "A gifted young janitor at MIT confronts his troubled past with the help of a therapist and his friends.",
    tags: ["Growth", "Friendship", "Potential"]
  },
  {
    id: "whiplash",
    title: "Whiplash",
    year: 2014,
    genre: "Drama / Music",
    moods: ["Drama", "Thriller"],
    description: "An ambitious jazz drummer faces an intense instructor whose teaching methods blur the line between discipline and abuse.",
    tags: ["Ambition", "Music", "Obsession"]
  },
  {
    id: "the-shawshank-redemption",
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    moods: ["Drama"],
    description: "A banker serving a life sentence builds an unlikely friendship while holding on to hope inside prison walls.",
    tags: ["Hope", "Friendship", "Resilience"]
  }
];

// DOM references
const moodButtons = [...document.querySelectorAll(".mood-button")];
const findButton = document.getElementById("find-button");
const surpriseButton = document.getElementById("surprise-button");
const anotherButton = document.getElementById("another-button");
const copyButton = document.getElementById("copy-button");
const saveButton = document.getElementById("save-button");

const movieCount = document.getElementById("movie-count");
const movieTitle = document.getElementById("movie-title");
const movieYear = document.getElementById("movie-year");
const movieGenre = document.getElementById("movie-genre");
const movieDescription = document.getElementById("movie-description");
const movieTags = document.getElementById("movie-tags");
const movieArt = document.getElementById("movie-art");
const resultLabel = document.getElementById("result-label");
const feedback = document.getElementById("feedback");
const watchlistElement = document.getElementById("watchlist");
const watchlistCount = document.getElementById("watchlist-count");

const STORAGE_KEY = "reel-roulette-watchlist";

let selectedMood = "Mind-bending";
let currentMovie = null;
let lastMovieId = null;
let surpriseMode = false;
let watchlist = loadWatchlist();

movieCount.textContent = String(movies.length);

// Read saved movies safely and discard entries not in the dataset.
function loadWatchlist() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

    if (!Array.isArray(saved)) return [];

    const validIds = new Set(movies.map((movie) => movie.id));
    return [...new Set(
      saved.filter((id) => typeof id === "string" && validIds.has(id))
    )];
  } catch {
    return [];
  }
}

function persistWatchlist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchlist));
    return true;
  } catch {
    showFeedback("Couldn't save. Check browser storage settings.");
    return false;
  }
}

function showFeedback(message) {
  feedback.textContent = message;
}

// Pick a random movie, avoiding the previous pick when possible.
function chooseMovie(pool) {
  if (pool.length === 0) {
    showFeedback("No movies match this mood yet. Try another mood.");
    return null;
  }

  let choices = pool;

  if (pool.length > 1) {
    choices = pool.filter((movie) => movie.id !== lastMovieId);
  }

  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getMoodMovies() {
  return movies.filter((movie) => movie.moods.includes(selectedMood));
}

function pickMovie(ignoreMood = false) {
  const pool = ignoreMood ? movies : getMoodMovies();
  const movie = chooseMovie(pool);

  if (!movie) return;

  surpriseMode = ignoreMood;
  lastMovieId = movie.id;
  currentMovie = movie;

  renderMovie(movie);
  showFeedback("");
  resultLabel.textContent = ignoreMood
    ? "WILD CARD PICK"
    : `${selectedMood.toUpperCase()} PICK`;

  const card = document.getElementById("movie-card");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "";

  document.getElementById("result-heading").scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}

function renderMovie(movie) {
  movieTitle.textContent = movie.title;
  movieYear.textContent = String(movie.year);
  movieGenre.textContent = movie.genre.toUpperCase();
  movieDescription.textContent = movie.description;

  movieTags.replaceChildren();

  movie.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    movieTags.appendChild(span);
  });

  // Give the movie art a title-based monogram.
  const initials = movie.title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

  movieArt.querySelector(".art-core").textContent = initials;

  copyButton.disabled = false;
  saveButton.disabled = false;
  updateSaveButton();
}

function updateSaveButton() {
  const saved = currentMovie && watchlist.includes(currentMovie.id);

  saveButton.setAttribute("aria-pressed", String(Boolean(saved)));
  saveButton.setAttribute(
    "aria-label",
    saved ? "Remove movie from watchlist" : "Add movie to watchlist"
  );
  saveButton.title = saved ? "Remove from watchlist" : "Add to watchlist";
  saveButton.querySelector("span").textContent = saved ? "♥" : "♡";
}

// Render the watchlist using DOM methods instead of HTML injection.
function renderWatchlist() {
  watchlistElement.replaceChildren();

  watchlistCount.textContent =
    `${watchlist.length} SAVED`;

  if (watchlist.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-watchlist";

    const icon = document.createElement("span");
    icon.className = "empty-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "♡";

    const message = document.createElement("p");
    message.textContent = "Your watchlist is looking a little empty.";

    const hint = document.createElement("span");
    hint.textContent = "Save movies you want to watch later.";

    empty.append(icon, message, hint);
    watchlistElement.appendChild(empty);
    return;
  }

  watchlist.forEach((id) => {
    const movie = movies.find((item) => item.id === id);
    if (!movie) return;

    const item = document.createElement("article");
    item.className = "watchlist-item";

    const art = document.createElement("div");
    art.className = "watchlist-art";
    art.setAttribute("aria-hidden", "true");
    art.textContent = movie.title
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");

    const details = document.createElement("div");
    details.className = "watchlist-details";

    const title = document.createElement("h3");
    title.textContent = movie.title;

    const meta = document.createElement("p");
    meta.textContent = `${movie.year} · ${movie.genre}`;

    details.append(title, meta);

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.type = "button";
    removeButton.textContent = "×";
    removeButton.setAttribute(
      "aria-label",
      `Remove ${movie.title} from watchlist`
    );
    removeButton.title = "Remove from watchlist";

    removeButton.addEventListener("click", () => {
      removeFromWatchlist(movie.id);
    });

    item.append(art, details, removeButton);
    watchlistElement.appendChild(item);
  });
}

function toggleWatchlist() {
  if (!currentMovie) return;

  const id = currentMovie.id;
  const wasSaved = watchlist.includes(id);

  const previousWatchlist = [...watchlist];

  if (wasSaved) {
    watchlist = watchlist.filter((item) => item !== id);
  } else {
    watchlist = [...watchlist, id];
  }

  if (!persistWatchlist()) {
    watchlist = previousWatchlist;
    return;
  }

  renderWatchlist();
  updateSaveButton();

  showFeedback(
    wasSaved
      ? "Removed from your watchlist."
      : "Added to your watchlist!"
  );
}

function removeFromWatchlist(id) {
  const previousWatchlist = [...watchlist];
  watchlist = watchlist.filter((item) => item !== id);

  if (!persistWatchlist()) {
    watchlist = previousWatchlist;
    return;
  }

  renderWatchlist();
  updateSaveButton();

  if (currentMovie && currentMovie.id === id) {
    showFeedback("Removed from your watchlist.");
  }
}

async function copyMovieDetails() {
  if (!currentMovie) return;

  const movie = currentMovie;
  const details = [
    `${movie.title} (${movie.year})`,
    `Genre: ${movie.genre}`,
    movie.description,
    `Recommended by Reel Roulette`
  ].join("\n");

  try {
    if (!navigator.clipboard || !window.isSecureContext) {
      throw new Error("Clipboard API unavailable");
    }

    await navigator.clipboard.writeText(details);
    showFeedback("Movie details copied!");
  } catch {
    // Fallback for browsers that do not support the Clipboard API.
    const textarea = document.createElement("textarea");
    textarea.value = details;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);
    textarea.select();

    let copied = false;

    try {
      copied = document.execCommand("copy");
    } catch {
      copied = false;
    }

    textarea.remove();

    showFeedback(
      copied
        ? "Movie details copied!"
        : "Copy unavailable. Please copy the movie details manually."
    );
  }
}

// Mood filter interactions.
moodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedMood = button.dataset.mood;
    surpriseMode = false;

    moodButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    showFeedback("");

    // Update an existing recommendation to match the new mood.
    if (currentMovie && !currentMovie.moods.includes(selectedMood)) {
      resultLabel.textContent = "MOOD UPDATED";
      showFeedback("Mood updated. Find a new movie when you're ready.");
    }
  });
});

findButton.addEventListener("click", () => pickMovie(false));
anotherButton.addEventListener("click", () => pickMovie(surpriseMode));
surpriseButton.addEventListener("click", () => pickMovie(true));
copyButton.addEventListener("click", copyMovieDetails);
saveButton.addEventListener("click", toggleWatchlist);

// Initial page state.
renderWatchlist();
