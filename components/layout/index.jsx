import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
    >
      <header className="w-full max-w-2xl color-primary text-center
      <header className="relative flex items-center justify-center w-full max-w-2xl mt-16 mb-4 text-center color-primary">
        <Link  href="/">
				<h2 className="absolute text-5xl left-4 font-beauty">tina dairy</h2>
						work
					<p className="mr-4 cursor-pointer font-recoleta">
				</Link>
        <Link className='ml-4' href="/about">
					<p className="font-recoleta cursor-pointer">
						about
					<p className="cursor-pointer font-recoleta">
				</Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
