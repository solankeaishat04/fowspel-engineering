import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-white text-sm">
          
          {/* LOGO + ABOUT */}
          <div>
            <Image
              src="/fowspel_logo-removebg-preview.png"
              alt="Fowspel Engineering Ltd"
              width={120}
              height={60}
              className="object-contain"
            />
            <p className="mt-4 text-gray-300">
              Delivering reliable engineering solutions with precision,
              innovation, and integrity.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/teams" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-orange-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Construction</li>
              <li>Electrical Installation</li>
              <li>Fabrication</li>
              <li>Engineering Consultancy</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-orange-500">Facebook</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-12 max-w-md">
          <label
            htmlFor="email"
            className="block mb-2 text-sm text-white font-medium"
          >
            Subscribe to our newsletter
          </label>

          <div className="flex flex-wrap gap-3">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 px-4 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-orange-600 focus:outline-none"
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-md text-sm font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 flex flex-wrap justify-between items-center gap-6 text-gray-300 text-sm">
          <p>
            &copy; {year} Fowspel Engineering Ltd. All Rights Reserved.
          </p>

          <Link href="#" className="underline hover:text-orange-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
