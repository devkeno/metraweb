export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#ffb200] mb-4">404</h1>
        <p className="text-xl text-white/70 mb-8">Page not found</p>
        <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#ffb200] text-black font-medium rounded-lg hover:bg-[#ffb200]/90 transition-all duration-200">
          Back to home
        </a>
      </div>
    </div>
  );
}
