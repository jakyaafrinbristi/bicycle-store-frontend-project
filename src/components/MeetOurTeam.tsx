import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alex Rider",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    social: {
      facebook: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Head Mechanic",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    social: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Customer Experience",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    social: {
      instagram: "#",
      facebook: "#"
    }
  }
];

export const MeetOurTeam = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider text-teal-600 uppercase mb-2">
          Our Experts
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Meet Our Team
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The passionate individuals who make your cycling experience exceptional
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div 
            key={member.id} 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative overflow-hidden h-80">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex space-x-3">
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="text-white hover:text-teal-300 transition-colors">
                      <FaFacebook size={18} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-white hover:text-teal-300 transition-colors">
                      <FaTwitter size={18} />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="text-white hover:text-teal-300 transition-colors">
                      <FaInstagram size={18} />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-white hover:text-teal-300 transition-colors">
                      <FaLinkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {member.name}
              </h3>
              <p className="text-teal-600 dark:text-teal-400 font-medium">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-full shadow-lg hover:shadow-teal-300/50 hover:scale-[1.02] transition-all duration-300">
          Join Our Team
        </button>
      </div>
    </section>
  );
};