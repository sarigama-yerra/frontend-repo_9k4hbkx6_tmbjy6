import { Stars } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100 shadow-sm">
              <Stars size={14} />
              Discover your next favorite book
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              A modern library experience for everyone
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Explore a curated catalog with powerful search, beautiful book previews, and a clean, accessible interface.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#catalog" className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition">Browse Catalog</a>
              <a href="#" className="inline-flex items-center justify-center h-11 px-5 rounded-xl border border-slate-200 text-slate-700 font-medium shadow-sm hover:bg-slate-50 transition">Get a Card</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[5/3] rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100 shadow-xl shadow-slate-200/60 p-4">
              <div className="h-full w-full rounded-2xl border border-dashed border-slate-200 grid place-items-center text-slate-400">
                Catalog preview area
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
