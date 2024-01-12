import Link from "next/link";

export default function Home() {
  return (
    <header className="w-full relative m-auto">
      <div className="container">
        <nav className="flex py-2 space-x-10 justify-between items-center">
          <Link href="/">
            <img
              className="w-40 flex"
              src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png"
              alt=""
            />
          </Link>
          <div className="space-x-11">
            <Link href="/download">Download</Link>
            <Link href="/nitro">Nitro</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/safety">Safety</Link>
            <Link href="/support">Support</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/careers">Careers</Link>
          </div>
          <div className="">
            <Link href="/login">Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}