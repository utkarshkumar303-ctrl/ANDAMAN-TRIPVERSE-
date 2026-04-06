import React from 'react';
import { motion } from 'motion/react';
import { 
  Waves, 
  Plane, 
  Palmtree, 
  Compass, 
  Anchor, 
  Camera, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook,
  ChevronRight,
  Fish,
  Wind
} from 'lucide-react';
import { Logo } from './components/Logo';

const services = [
  {
    title: "Island Tours",
    description: "Curated journeys across Havelock, Neil, and Port Blair.",
    icon: MapPin,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Flights & Transfers",
    description: "Seamless booking for your journey to paradise.",
    icon: Plane,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Scuba Diving",
    description: "Explore the vibrant coral reefs of the Andaman Sea.",
    icon: Waves,
    color: "bg-sky-50 text-sky-600"
  },
  {
    title: "Snorkeling",
    description: "Crystal clear waters teeming with marine life.",
    icon: Fish,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    title: "Kayaking",
    description: "Paddle through serene mangroves and hidden lagoons.",
    icon: Wind,
    color: "bg-teal-50 text-teal-600"
  },
  {
    title: "Bioluminescence",
    description: "Witness the magical glowing waters at night.",
    icon: Sparkles,
    color: "bg-indigo-50 text-indigo-600"
  }
];

const destinations = [
  { name: "Havelock Island", image: "https://picsum.photos/seed/havelock/800/600" },
  { name: "Neil Island", image: "https://picsum.photos/seed/neil/800/600" },
  { name: "Radhanagar Beach", image: "https://picsum.photos/seed/radhanagar/800/600" },
  { name: "Ross Island", image: "https://picsum.photos/seed/ross/800/600" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-100 selection:text-sky-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">
                ANDAMAN <span className="text-sky-600">TRIPVERSE</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <a href="#tours" className="hover:text-sky-600 transition-colors">Tours</a>
              <a href="#activities" className="hover:text-sky-600 transition-colors">Activities</a>
              <a href="#destinations" className="hover:text-sky-600 transition-colors">Destinations</a>
              <a href="#contact" className="px-5 py-2.5 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition-all shadow-lg shadow-sky-200">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold tracking-widest uppercase mb-6">
                Your Gateway to Paradise
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-8">
                Experience the Magic of <span className="text-sky-600 italic">Andamans</span>
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                From glowing bioluminescent waters to pristine white sand beaches. 
                Discover the ultimate tropical escape with Andaman Tripverse.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-200 flex items-center justify-center gap-2">
                  Plan Your Trip <ChevronRight size={18} />
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all">
                  View Packages
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="activities" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Unforgettable Experiences</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We offer a wide range of activities to make your Andaman trip truly special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Popular Destinations</h2>
              <p className="text-slate-600">Explore the most beautiful islands in the archipelago.</p>
            </div>
            <button className="text-sky-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View All Destinations <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative aspect-[3/4] rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{dest.name}</h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <MapPin size={14} />
                    Andaman Islands
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-sky-500 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500 rounded-full blur-[120px]"></div>
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Ready for your island adventure?</h2>
              <p className="text-slate-400 text-lg mb-10">
                Contact our travel experts today and let us craft the perfect itinerary for your dream Andaman vacation.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="tel:+1234567890" className="flex items-center gap-3 text-white hover:text-sky-400 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="font-bold">+91 98765 43210</span>
                </a>
                <a href="mailto:hello@andamantripverse.com" className="flex items-center gap-3 text-white hover:text-sky-400 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold">hello@andamantripverse.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-slate-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <Logo className="w-10 h-10" />
                <span className="font-bold text-lg tracking-tight text-slate-900">
                  ANDAMAN <span className="text-sky-600">TRIPVERSE</span>
                </span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Your trusted partner for exploring the hidden gems of the Andaman & Nicobar Islands. 
                Professional service, local expertise.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-50 hover:text-sky-600 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sky-50 hover:text-sky-600 transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-sky-600 transition-colors">Home</a></li>
                <li><a href="#tours" className="hover:text-sky-600 transition-colors">Tours</a></li>
                <li><a href="#activities" className="hover:text-sky-600 transition-colors">Activities</a></li>
                <li><a href="#destinations" className="hover:text-sky-600 transition-colors">Destinations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Services</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-sky-600 transition-colors">Scuba Diving</a></li>
                <li><a href="#" className="hover:text-sky-600 transition-colors">Snorkeling</a></li>
                <li><a href="#" className="hover:text-sky-600 transition-colors">Kayaking</a></li>
                <li><a href="#" className="hover:text-sky-600 transition-colors">Bioluminescence</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
              <p className="text-slate-500 text-sm mb-4">Get the latest travel deals and island news.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/20"
                />
                <button className="px-4 py-2 bg-sky-600 text-white rounded-xl text-sm font-bold hover:bg-sky-700 transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
            <p>© 2026 Andaman Tripverse. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
