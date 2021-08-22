import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div
      className="flex flex-col items-center 
				justify-center min-h-screen py-2"
    >
      <header className="w-full max-w-2xl color-primary text-center
				mt-16 mb-4 relative flex items-center justify-center">
				<h2 className="text-5xl absolute left-4 font-beauty">tina dairy</h2>
        <Link  href="/">
					<p className="font-recoleta cursor-pointer mr-4">
						work
					</p>
				</Link>
        <Link className='ml-4' href="/about">
					<p className="font-recoleta cursor-pointer">
						about
					</p>
				</Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
