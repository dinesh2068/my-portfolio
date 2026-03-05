export function AnimeWatchlist() {
  return (
    <section id ="anime"  className="py-12 scroll-mt-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Anime Corner
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-red-400" />

        </div>

        {/* BOX */}
        <div className="border border-red-500/40 rounded-2xl p-6 bg-black/40 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT CONTENT */}
          <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed">
            Anime has always been part of my world — from psychological
            mind games to strategic battles and unforgettable stories.
            I keep track of everything I watch in my personal archive.
          </p>

          {/* RIGHT BUTTON */}
          <a
            href="https://docs.google.com/spreadsheets/d/1agFVk7K_XiykqEU3NKYIlWlFAUDl9vL7/edit?usp=sharing&ouid=105283292879605527865&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-red-500 text-red-400 rounded-lg hover:bg-red-500 hover:text-black transition duration-300 whitespace-nowrap"
          >
            View Watchlist
          </a>

        </div>

      </div>

    </section>
  )
}