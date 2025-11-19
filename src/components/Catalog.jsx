import { useMemo } from "react";
import BookCard from "./BookCard";

const SAMPLE_BOOKS = [
  {
    id: 1,
    title: "The Blue Abyss",
    author: "Nora Hayes",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop",
    description:
      "A deep dive into the mysteries of the ocean and the resilience of the human spirit.",
    rating: 4.4,
    tags: ["Fiction", "Adventure"],
  },
  {
    id: 2,
    title: "Design Systems in Practice",
    author: "T. L. Morgan",
    cover: "https://images.unsplash.com/photo-1524578478664-1e9a61b4f78b?q=80&w=600&auto=format&fit=crop",
    description:
      "Build scalable, accessible design systems with modern tooling and best practices.",
    rating: 4.8,
    tags: ["Design", "Non-fiction"],
  },
  {
    id: 3,
    title: "Signals and Syntax",
    author: "R. K. Patel",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=600&auto=format&fit=crop",
    description:
      "A gentle, hands-on guide to understanding programming languages through examples.",
    rating: 4.6,
    tags: ["Technology", "Education"],
  },
  {
    id: 4,
    title: "Into the North",
    author: "Ava Sund",
    cover: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=600&auto=format&fit=crop",
    description:
      "An intimate portrait of life in Arctic towns and the people who call them home.",
    rating: 4.2,
    tags: ["Travel", "Memoir"],
  },
  {
    id: 5,
    title: "The Quiet Library",
    author: "M. Iwasaki",
    cover: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&auto=format&fit=crop",
    description:
      "A mysterious tale set inside a centuries-old library where books whisper secrets.",
    rating: 4.7,
    tags: ["Mystery", "Fiction"],
  },
  {
    id: 6,
    title: "Blueprints for Tomorrow",
    author: "Elena Voss",
    cover: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=600&auto=format&fit=crop",
    description:
      "How cities evolve: a visual journey through architecture, planning, and people.",
    rating: 4.5,
    tags: ["Architecture", "Culture"],
  },
];

export default function Catalog({ query }) {
  const books = useMemo(() => {
    if (!query) return SAMPLE_BOOKS;
    const q = query.toLowerCase();
    return SAMPLE_BOOKS.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <section id="catalog" className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-slate-900">Featured Books</h2>
          <p className="text-sm text-slate-500">{books.length} results</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
