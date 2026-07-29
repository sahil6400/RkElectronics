import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-5 text-center">
      <p className="font-mono text-sm uppercase tracking-wider text-copper-600">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-navy-900">
        This page took a wrong turn.
      </h1>
      <p className="mt-3 max-w-md text-ink-600">
        The page you&apos;re looking for doesn&apos;t exist. Head back to the catalog
        or message us if you were looking for something specific.
      </p>
      <Link
        href="/products"
        className="mt-8 rounded-full bg-copper-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-copper-600"
      >
        Browse Products
      </Link>
    </div>
  );
}
