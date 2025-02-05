import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

const footerSections = [
  {
    title: "ABOUT",
    links: [
      { name: "Contact Us", path: "#" },
      { name: "About Us", path: "#" },
      { name: "Careers", path: "#" },
      { name: "VendoraX Stories", path: "#" },
      { name: "Press", path: "#" },
      { name: "Corporate Information", path: "#" },
    ],
  },
  {
    title: "GROUP COMPANIES",
    links: [
      { name: "Myntra", path: "#" },
      { name: "Cleartrip", path: "#" },
      { name: "Shopsy", path: "#" },
    ],
  },
  {
    title: "HELP",
    links: [
      { name: "Payments", path: "#" },
      { name: "Shipping", path: "#" },
      { name: "Cancellation & Returns", path: "#" },
      { name: "FAQ", path: "#" },
    ],
  },
  {
    title: "CONSUMER POLICY",
    links: [
      { name: "Cancellation & Returns", path: "#" },
      { name: "Terms Of Use", path: "#" },
      { name: "Security", path: "#" },
      { name: "Privacy", path: "#" },
      { name: "Sitemap", path: "#" },
      { name: "Grievance Redressal", path: "#" },
      { name: "EPR Compliance", path: "#" },
    ],
  },
];

const bottomLinks = [
  { name: "Become a Seller", path: "#" },
  { name: "Advertise", path: "#" },
  { name: "Gift Cards", path: "#" },
  { name: "Help Center", path: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px- grid grid-cols-1 md:grid-cols-4 gap-8">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-white font-semibold text-lg mb-4">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.path} className="hover:text-white hover:underline transition duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 px-6 max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <p className="text-sm text-gray-400">VendoraX Internet Private Limited, Bengaluru, Karnataka, India</p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaXTwitter className="text-2xl" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <FaYoutube className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 px-6 max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
        <div className="flex space-x-6">
          {bottomLinks.map((link, idx) => (
            <a key={idx} href={link.path} className="text-gray-400 hover:text-white hover:underline transition duration-300">
              {link.name}
            </a>
          ))}
        </div>
        <p className="text-gray-400">&copy; 2025-2026 VendoraX.com</p>
      </div>
    </footer>
  );
}