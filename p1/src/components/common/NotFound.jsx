import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#080808] text-white flex items-center justify-center px-6 overflow-hidden">
      <div className="text-center">

        {/* 404 */}
        <h1 className="text-[clamp(120px,25vw,320px)] font-[font8] font-bold leading-none tracking-[-0.08em] text-white/10 select-none">
          404
        </h1>

        {/* Content */}
        <div className="-mt-10 relative">
          <p className="text-white/40 text-xs tracking-[0.3em] uppercase mb-4">
          </p>

          <h2 className="text-2xl md:text-4xl font-medium tracking-tight mb-4 font-[font5]">
            Looks like you took a wrong turn.
          </h2>

          <p className="text-sm md:text-base text-white/40 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full
                       border border-white/15 bg-white/5
                       text-sm text-white
                       hover:bg-white hover:text-black
                       transition-all duration-300 cursor-pointer cursor-target"
          >
            Back to Home
            <span>↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;