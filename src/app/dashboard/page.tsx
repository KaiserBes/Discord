import Link from "next/link";

export default function DashboardPage() {
  return (
    <header className="w-full relative m-auto bg-blue-600">
      <div className="container">
        <nav className="flex text-sm py-2 space-x-10 justify-between items-center">
          <Link href="/">
            <img
              style={{ filter: "brightness(0) invert(1) grayscale(100%)" }}
              className="w-40 text-white object-cover"
              src="https://1000logos.net/wp-content/uploads/2021/06/Discord-logo.png"
              alt=""
            />
          </Link>
          <div className="space-x-11 text-white ">
            <Link href="dashboard/download" className="hover:underline">
              Download
            </Link>
            <Link href="dashboard/nitro" className="hover:underline">
              Nitro
            </Link>
            <Link href="dashboard/discover" className="hover:underline">
              Discover
            </Link>
            <Link href="dashboard/safety" className="hover:underline">
              Safety
            </Link>
            <Link href="dashboard/support" className="hover:underline">
              Support
            </Link>
            <Link href="dashboard/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="dashboard/careers" className="hover:underline">
              Careers
            </Link>
          </div>

          <Link href="/login">
            <div className="bg-white text-black py-3 px-3 rounded-2xl  hover:shadow-2xl">
              Login
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
