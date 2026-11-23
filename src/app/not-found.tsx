import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background-primary flex items-center justify-center px-6 py-24 text-center transition-colors">
      <div className="max-w-md mx-auto space-y-6">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-terracotta-bg text-accent-terracotta-text border border-accent-terracotta/20">
          404 • Page Not Found
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-content-primary tracking-tight">
          Lost in the canvas?
        </h1>
        <p className="text-content-secondary text-sm sm:text-base leading-relaxed">
          The page you are looking for doesn&apos;t exist or has moved. Let&apos;s get you back to familiar ground.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full font-heading font-semibold text-sm text-white bg-accent-terracotta hover:bg-accent-terracotta-hover shadow-md shadow-accent-terracotta/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Return to Portfolio</span>
            <span>↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

