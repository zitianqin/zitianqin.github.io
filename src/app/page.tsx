

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Zitian Qin
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
            I like building things that matter.
          </p>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </div>
      </section>

      {/* About Section */}
      <main className="mb-16">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">About Me</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-base leading-relaxed mb-3 text-gray-300">
              Hi, I'm currently a Computer Science student at UNSW.
            </p>
            <p className="text-base leading-relaxed mb-3 text-gray-300">
              I'm passionate about building tools that make a difference in the
              world.
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              In the rare instances when I'm not coding you might find me playing piano, badminton, or
              reading books.
            </p>
          </div>
        </div>
      </main>

      {/* Featured Projects Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-3">What I'm Working On</h2>
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
        </div>
        <div className="space-y-8">

          <p className="text-center text-gray-400">
            Cool stuff coming soon... :)
          </p>
        </div>
      </section>
    </div>
  );
}
