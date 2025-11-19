import { BookmarkPlus, Star } from "lucide-react";

export default function BookCard({ book }) {
  return (
    <div className="group relative rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/80 transition-all overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/0 via-slate-900/0 to-slate-900/0 group-hover:via-slate-900/0" />
      <div className="p-4 flex gap-4">
        <div className="h-36 w-28 rounded-xl overflow-hidden border border-slate-200 shadow-md shadow-slate-200/80">
          <img src={book.cover} alt={book.title} className="h-full w-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="text-slate-900 font-semibold truncate">{book.title}</h3>
              <p className="text-slate-500 text-sm truncate">{book.author}</p>
            </div>
            <button className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 text-slate-600 hover:text-blue-700 hover:border-blue-200 hover:shadow-md hover:shadow-blue-200/80 transition">
              <BookmarkPlus size={18} />
            </button>
          </div>
          <div className="mt-3 flex items-center gap-2 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill={i < Math.round(book.rating) ? "currentColor" : "none"} />
            ))}
            <span className="text-xs text-slate-500 ml-1">{book.rating.toFixed(1)}</span>
          </div>
          <p className="mt-3 text-sm text-slate-600 line-clamp-2">
            {book.description}
          </p>
          <div className="mt-4 flex items-center gap-2">
            {book.tags.map((t) => (
              <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full bg-slate-50 text-slate-700 text-xs border border-slate-200">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
