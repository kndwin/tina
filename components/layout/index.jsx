import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <header
        className="relative flex items-center justify-center w-full 
				max-w-2xl mt-16 mb-4 text-center color-primary"
      >
        <h2 className="absolute text-5xl left-4 font-beauty">tina dairy</h2>
        <Link href="/">
          <p className="text-lg mr-4 cursor-pointer font-recoleta">work</p>
        </Link>
        <Link className="ml-4" href="/about">
          <p className="text-lg font-recoleta cursor-pointer">about</p>
        </Link>
      </header>
      {children}
    </div>
  );
};

export default Layout;
