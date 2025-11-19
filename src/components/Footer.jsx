export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} BlueLib — Crafted for a calm, focused reading experience.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-700 transition">Accessibility</a>
            <a href="#" className="hover:text-slate-700 transition">Privacy</a>
            <a href="#" className="hover:text-slate-700 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
