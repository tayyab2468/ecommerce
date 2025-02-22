import React,{useState} from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      {/* Desktop Slider (Visible on md and larger) */}
      <div className="hidden md:block">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg"
              />
              <div className="absolute top-1/2 left-5 sm:left-10 transform -translate-y-1/2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-lg text-black mt-2 sm:mt-4 font-Poppins max-w-[90%] sm:max-w-[600px]">
                  {slide.description}
                </p>
                <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-blue-800 text-white hover:bg-blue-700 rounded-lg text-sm sm:text-base">
                  {slide.buttonText}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Cards (Visible only on mobile) */}
      <div className="block md:hidden px-6 mt-10">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={15}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={slide.image} alt={slide.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900">{slide.title}</h2>
                  <p className="text-gray-700 mt-2">{slide.description}</p>
                  <button className="mt-4 px-4 py-2 bg-blue-600 text-white hover:bg-blue-500 rounded-md">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* Cards Section */}
      <div className="block max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center">
            <img src={card.image} alt={card.title} className="mx-auto w-full h-48 rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mt-4 text-black font-Poppins">{card.title}</h2>
            <p className="text-gray-600 mt-2">{card.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              {card.buttonText}
            </button>
          </div>
        ))}
      </div>
  {/* Background Image Section */}
  <div
        className="relative mt-20 h-[400px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-PC-SMB-OneNote:VP5-1596x600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-20 px-10">
          <h1 className="text-5xl font-bold text-right">Organize your life</h1>
          <p className="text-lg mt-4 max-w-[600px] mx-auto">Keep your ideas and notes organized with OneNote.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">Learn More</button>
        </div>
      </div>

      {/* Business Section */}
      <div className="max-w-7xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-black mb-8">For Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {businessCards.map((card, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-xl p-6 text-center">
              <img src={card.image} alt={card.title} className="mx-auto w-full h-48 rounded-lg object-cover" />
              <h2 className="text-lg font-semibold mt-4 text-black font-Poppins">{card.title}</h2>
              <p className="text-gray-600 mt-2">{card.description}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

// Footer Component
const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <footer className="bg-gray-100 text-black mt-20">
    <div className="max-w-7xl mx-auto px-6 py-6 border-b border-gray-300">
      <div className="flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold">Follow Microsoft</h2>
          <a href="https://www.facebook.com/Microsoft" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="text-xl cursor-pointer hover:text-blue-600" />
  </a>

  <a href="https://twitter.com/Microsoft" target="_blank" rel="noopener noreferrer">
    <FaXTwitter className="text-xl cursor-pointer hover:text-gray-800" />
  </a>

  <a href="https://www.instagram.com/microsoft/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-xl cursor-pointer hover:text-pink-600" />
  </a>

  <a href="https://www.linkedin.com/company/microsoft/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-700" />
  </a>
        </div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-6">
      {footerLinks.map((section, index) => (
        <div key={index}>
          <h3 className="font-bold mb-3">{section.title}</h3>
          <ul className="space-y-2 text-gray-600">
            {section.links.map((link, i) => (
              <li
                key={i}
                onClick={() => setActiveLink(`${index}-${i}`)}
                className={`cursor-pointer hover:underline ${
                  activeLink === `${index}-${i}` ? "underline font-semibold text-black" : ""
                }`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </footer>
  );
};
// Data Arrays
const slides = [
  {
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Copilot-Native-App-ROW:VP5-1920x600",
    title: "Copilot is your AI companion",
    description: "Always by your side, ready to support you whenever and wherever you need it.",
    buttonText: "Download the Copilot App",
  },
  {
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce:VP5-1920x600",
    title: "Achieve the extraordinary",
    description: "With Microsoft 365, get spacious cloud storage, advanced security, and powerful AI-powered productivity.",
    buttonText: "Buy Now",
  },
];

// Cards for Home Page
const cards = [
  {
    title: "Designed for Life Today and Tomorrow",
    description: "The best Windows ever, now with AI-powered Copilot to boost productivity.",
    buttonText: "See if your PC is ready",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Windows11-GlobalLaunch?wid=380&hei=213&fit=crop",
  },
  {
    title: "Microsoft Edge",
    description: "Enjoy world-class performance with privacy, security, and AI assistance.",
    buttonText: "Download Now",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-MSFT-CP-Edge?wid=380&hei=213&fit=crop",
  },
  {
    title: "Microsoft OneDrive",
    description: "Store, share, and access your files securely from anywhere.",
    buttonText: "Learn More",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-Soft-CP-OneDriveCampaignRefresh-2?wid=380&hei=213&fit=crop",
  },
];
const businessCards = [
  {
    title: "Microsoft 365 for Business",
    description: "Unlock productivity with AI-powered Microsoft 365 apps.",
    buttonText: "Learn More",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Copilot-Commercial?wid=380&hei=213&fit=crop",
  },
  {
    title: "Microsoft Teams",
    description: "Collaborate with your team in real-time, anywhere in the world.",
    buttonText: "Get Started",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-Teams-Commercial-Meeting?wid=380&hei=213&fit=crop",
  },
  {
    title: "Azure Cloud Solutions",
    description: "Power your business with secure and scalable cloud computing.",
    buttonText: "Explore Now",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/JIC-DPS-CP01?wid=380&hei=213&fit=crop",
  },
  {
    title: "Surface for Business",
    description: "Designed for performance and collaboration in the modern workplace.",
    buttonText: "Shop Now",
    image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/MSFT-Home-SurfaceLaptopIntel-SurfaceProIntel-interactivehero-Desktopimage?scl=1",
  },
];
const footerLinks = [
  { title: "What's New", links: ["Surface Pro", "Microsoft Copilot", "Explore Microsoft"] },
  { title: "Microsoft Store", links: ["Download Center", "Returns", "Order Tracking"] },
  { title: "Business", links: ["Microsoft 365", "Azure", "Microsoft Security"] },
  { title: "Developer & IT", links: ["Visual Studio", "AppSource", "Windows Dev Center"] },
  { title: "Company", links: ["Careers", "Privacy at Microsoft", "Accessibility"] },
];

export default Home;
