import { Search, Library, Menu } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Navbar({ query, setQuery }) {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus search on load for quick access
    if (inputRef.current) inputRef.current.focus();
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
              <Library size={22} />
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight text-slate-900">BlueLib</p>
              <p className="text-xs text-slate-500 -mt-0.5">Modern Public Library</p>
            </div>
          </div>

          <div className="flex-1 max-w-2xl hidden md:flex">
            <div className="w-full flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm shadow-slate-200/60 focus-within:shadow-blue-200/80 focus-within:border-blue-300 transition-all">
              <Search className="text-slate-400" size={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search books, authors, genres..."
                className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="text-xs text-slate-500 hover:text-slate-700 transition"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <button className="inline-flex md:hidden items-center justify-center h-11 w-11 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition shadow-sm">
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="w-full flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-sm shadow-slate-200/60 focus-within:shadow-blue-200/80 focus-within:border-blue-300 transition-all">
            <Search className="text-slate-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search books, authors, genres..."
              className="w-full bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="text-xs text-slate-500 hover:text-slate-700 transition"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
