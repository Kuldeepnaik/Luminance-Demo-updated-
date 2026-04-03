export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <span className="font-serif text-2xl font-bold tracking-wider text-white block">
            LUMINANCE
          </span>
          <span className="text-xs tracking-[0.2em] text-amber-500 uppercase">
            Salon & Spa
          </span>
        </div>
        
        <div className="text-zinc-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Luminance Unisex Salon and Spa.</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
