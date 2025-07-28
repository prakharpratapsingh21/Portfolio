import Image from "next/image";
import icon1 from '../images/Figma logo.png'
import icon2 from '../images/uiux.png'
import icon3 from '../images/web.png'


const services = [
  {
    title: "Web Design",
    desc: "Modern and responsive website designs to make your business stand out. Building websites that work and wow",
    icon: icon1,
  },
  {
    title: "UI/UX",
    desc: "Creating seamless and intuitive interfaces focused on user experience.",
    icon: icon2,
  },
  {
    title: "Development",
    desc: "Clean and scalable frontend development using modern tech stacks.",
    icon: icon3,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-10  px-24 ">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Services</h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/30 p-8 rounded-lg shadow hover:shadow-2xl transition hover:scale-105 "
            >
              <div className="w-20 h-20 flex justify-center items-center mx-auto mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-zinc-900">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
