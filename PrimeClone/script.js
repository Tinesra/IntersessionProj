document.addEventListener("DOMContentLoaded", function () {
  const movieData = [
    {
      id: 1,
      title: "Deep Cover",
      year: 2025,
      genre: "Thriller",
      rating: "4.3/5",
      image:
        "https://images.justwatch.com/poster/330876543/s332/deep-cover-2025",
      description:
        "An undercover agent infiltrates a dangerous drug cartel, but as he gets deeper into his role, the line between duty and criminal blurs. With time running out and his true identity at risk of exposure, he must decide where his loyalties truly lie.",
    },
    {
      id: 2,
      title: "Simple Favor",
      year: 2025,
      genre: "Mystery",
      rating: "4.5/5",
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2025/05/zboCGZ4aIqPMd7VFI4HWnmc7KYJ.jpg?p=1",
      description:
        "A mommy vlogger seeks to uncover the truth behind her best friend's sudden disappearance from their small town. As she digs deeper into her friend's mysterious past, she uncovers shocking secrets that will change her life forever.",
    },
    {
      id: 3,
      title: "Parking",
      year: 2025,
      genre: "Drama",
      rating: "4.0/5",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/0deb3b16691fc92d036460433329f0c1e77c2da14be38e0c34a1f304656a36a9.jpg",
      description:
        "What begins as a simple parking dispute between neighbors escalates into a full-blown psychological battle that reveals the darkest aspects of human nature. As tensions rise, both sides must confront uncomfortable truths about themselves.",
    },
    {
      id: 4,
      title: "Solis",
      year: 2025,
      genre: "Sci-Fi",
      rating: "4.1/5",
      image: "https://images.justwatch.com/poster/89992418/s718/solis.jpg",
      description:
        "After a catastrophic space accident, an astronaut finds himself trapped in an escape pod drifting toward the sun with rapidly depleting oxygen. With no communication and limited resources, he must use his ingenuity to find a way to survive.",
    },
    {
      id: 5,
      title: "Role Play",
      year: 2025,
      genre: "Action",
      rating: "3.9/5",
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2024/01/7MhXiTmTl16LwXNPbWCmqxj7UxH.jpg",
      description:
        "A married couple decides to spice up their relationship with role-playing games, but their fantasy world quickly turns dangerous when they discover that one of them has been living a double life as an elite assassin.",
    },
    {
      id: 6,
      title: "The Accountant",
      year: 2025,
      genre: "Thriller",
      rating: "4.6/5",
      image:
        "https://www.digitaltrends.com/wp-content/uploads/2025/03/qttnL1Kt1EDCOiLBOdqbl82fwYa.jpg",
      description:
        "A mathematical genius working as a forensic accountant for dangerous criminal organizations finds himself taking on a legitimate client, but as he uncooks the books, he discovers financial discrepancies that put him in extreme danger.",
    },
    {
      id: 7,
      title: "May I Help You",
      year: 2025,
      genre: "Comedy",
      rating: "4.2/5",
      image:
        "https://sm.mashable.com/mashable_in/photo/default/whatsapp-image-2023-04-18-at-33744-pm_5qp5.jpg",
      description:
        "A recently unemployed woman starts a concierge service, fulfilling unusual requests for clients. What begins as a desperate attempt to pay bills turns into a journey of self-discovery as she helps others solve their problems.",
    },
    {
      id: 8,
      title: "The Summer I Turned Pretty",
      year: 2025,
      genre: "Romance",
      rating: "4.4/5",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/bd5d4c47dce70f437e4c7090e4447bbe04063ccb3f9a1eeba078ecaf4953b058._UR2000,3000_CLs%7C2000,3000%7C/G/bundle/BottomRightCardGradient2x3.png,/G/01/digital/video/merch/subs/benefit-id/m-r/Prime/logos/channels-logo-white.png%7C0,0,2000,3000+0,0,2000,3000+1670,2769,243,144_.jpg",
      description:
        "A young woman who has spent every summer of her life at a beach house finds herself caught in a love triangle between two brothers she's known since childhood. As she navigates her feelings, she discovers what she truly wants.",
    },
    {
      id: 9,
      title: "The Boys",
      year: 2025,
      genre: "Action",
      rating: "4.8/5",
      image:
        "https://images-r2-1.thebrag.com/tb/uploads/2022/05/The_Boys_season_3_poster-768x960.webp",
      description:
        "In a world where superheroes embrace the darker side of their massive celebrity and fame, a group of vigilantes known as 'The Boys' embark on a heroic quest to expose the truth about a powerful superhero group backed by a multi-billion dollar conglomerate.",
    },
    {
      id: 10,
      title: "The Killer",
      year: 2025,
      genre: "Thriller",
      rating: "4.7/5",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/cf03955bb416df80e5e88285a2a2a717f3c76c14c654fa0c5b1a218c7bec6dba.jpg",
      description:
        "A highly skilled assassin known for his methodical precision finds himself becoming a target after a job goes wrong. As he searches for who wants him dead, he's forced to face his own moral code and the toll his profession has taken on his humanity.",
    },
  ];

  const modal = document.getElementById("movie-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalYearGenre = document.getElementById("modal-year-genre");
  const modalRating = document.getElementById("modal-rating");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.querySelector(".close-modal");

  const movieCards = document.querySelectorAll(".movie-card");

  movieCards.forEach((card, index) => {
    card.addEventListener("click", function (e) {
      e.preventDefault(); 

      const rankElement = card.querySelector(".rank");
      const rank = parseInt(rankElement.textContent);
      const movie = movieData.find((m) => m.id === rank);

      if (movie) {

        modalTitle.textContent = movie.title;
        modalImage.src = movie.image;
        modalImage.alt = movie.title;
        modalYearGenre.textContent = `${movie.year} • ${movie.genre}`;
        modalRating.textContent = movie.rating;
        modalDescription.textContent = movie.description;

        modal.style.display = "block";
        document.body.style.overflow = "hidden"; 
      }
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; 
    }
  });

  const trendingGrid = document.querySelector(".trending-grid");
  const prevBtn = document.querySelector(".nav-btn:first-child");
  const nextBtn = document.querySelector(".nav-btn:last-child");

  if (prevBtn && nextBtn && trendingGrid) {
    prevBtn.addEventListener("click", function () {
      trendingGrid.scrollBy({ left: -600, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
      trendingGrid.scrollBy({ left: 600, behavior: "smooth" });
    });
  }
});
