import Navbar from "../components/Navbar.jsx";

function Home() {
  return (
    <>
      <Navbar />
         <div className="hero-content">

          <h1>
            Learn Languages.
            <br />
            <span>Play. Practice. Progress.</span>
          </h1>

          <p>
            Learn English, Hindi and Arabic
            through fun interactive games.
          </p>

          <button className="start-btn">
            Start Learning 🚀
          </button>

        </div>

        {/* Stats */}
        <div className="stats">

          <div className="stat-card">
            <h3>⭐ 1200+</h3>
            <p>XP</p>
          </div>

          <div className="stat-card">
            <h3>🔥 7</h3>
            <p>Daily Streak</p>
          </div>

          <div className="stat-card">
            <h3>🏆 15</h3>
            <p>Achievements</p>
          </div>

        </div>

      {/* Games Section */}
      <section className="games">

        <h2>🎮 Choose Your Learning Adventure</h2>

        <p className="section-text">
          Learn vocabulary and improve your language skills
          through fun interactive activities.
        </p>

        <div className="game-container">

          {/* Game 1 */}
          <div className="game-card">

            <div className="game-icon">
              📝
            </div>

            <h3>Fill in the Blanks</h3>

            <p>
              Complete sentences by choosing
              the correct word.
            </p>

            <button>
              Play Game →
            </button>

          </div>


          {/* Game 2 */}
          <div className="game-card">

            <div className="game-icon">
              😀
            </div>

            <h3>Emoji Guess</h3>

            <p>
              Guess words and phrases using
              fun emojis.
            </p>

            <button>
              Play Game →
            </button>

          </div>


          {/* Game 3 */}
          <div className="game-card">

            <div className="game-icon">
              🧠
            </div>

            <h3>Vocabulary Quiz</h3>

            <p>
              Test your vocabulary and
              improve your language skills.
            </p>

            <button>
              Play Game →
            </button>

          </div>

        </div>

      </section>


      {/* Languages Section */}
      <section className="languages">

        <h2>🌍 Learn Multiple Languages</h2>

        <div className="language-container">

          <div className="language-card">
            <div>🇬🇧</div>
            <h3>English</h3>
            <p>Learn English vocabulary</p>
          </div>

          <div className="language-card">
            <div>🇮🇳</div>
            <h3>Hindi</h3>
            <p>Learn Hindi vocabulary</p>
          </div>

          <div className="language-card">
            <div>🇸🇦</div>
            <h3>Arabic</h3>
            <p>Learn Arabic vocabulary</p>
          </div>

        </div>

      </section>

    </>
  );
}

export default Home;