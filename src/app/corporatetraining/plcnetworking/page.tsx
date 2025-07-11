// 'use client';
// import PageBanner from '@/components/pageBanner';
// import { Box, Container, Typography } from '@mui/material';

// export default function PLCNetworking() {
//   return (
//      <>
//       <Box component="main">
//           <PageBanner
//             title="PLC Networking Training"
//             description='Transforming manufacturing with PLC, SCADA, robotics and Industry 4.0 integration'
//             imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
//           />
//         <Box sx={{ py: 10 }}>
//           <Container>
//             <Typography variant="h4" fontWeight="bold" gutterBottom>
//               PLC Networking
//             </Typography>
//             <Typography variant="body1" mt={2}>
//               Understand how PLCs communicate within industrial networks including protocols, topology, and integration with SCADA/HMI.
//             </Typography>
//             <Typography variant="body2" mt={3}>
//               Course highlights:
//               <ul>
//                 <li>Modbus, Profibus, Ethernet/IP</li>
//                 <li>PLC to SCADA Communication</li>
//                 <li>Network Design & Troubleshooting</li>
//               </ul>
//             </Typography>
//           </Container>
//         </Box>
//       </Box>
//      </>
//   );
// }
'use client';

import PageBanner from '@/components/pageBanner';
import ContactComponent from '../../contact/contactcomponent';
import IndustryFeatureSection from '@/components/industryfeature'; //reuseable
import { motion } from 'framer-motion';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Accordion from '@/components/accordion';
import { plcNetworkingItems } from '@/data/faqData';

const Industries = () => {
  const featureData = [
    {
      title: 'Explore PLC Networking',
      image: 'https://i.pinimg.com/736x/6a/13/be/6a13bee609d40823375309bd53f1fb53.jpg',
      desc: `Welcome to KP Automation, your gateway to mastering PLC (Programmable Logic Controller) Networking. In today's interconnected industrial landscape, PLC networking plays a crucial role in ensuring seamless communication and control across various automation systems`,
      extra: `Let's delve into what PLC networking entails and how our training program can empower you in this field.`,
    },
    {
      title: 'Understanding PLC Networking',
      image: '/PLC_SCADA.jpeg',
      desc: `Understanding PLC networking involves the interconnection of multiple PLCs within a system or across different systems to facilitate data exchange, coordination, and control. `,
      extra: `It enables centralized monitoring and control of complex industrial processes, improving efficiency, reliability, and scalability.`,
    },
    {
      title: 'Importance of PLC Networking',
      image: 'https://i.pinimg.com/736x/74/1d/b1/741db1a815a41e172baa0d6c17853427.jpg',
      desc: `PLC Networking involves connecting multiple PLCs and automation devices using industrial communication protocols like Modbus, Profibus, and Ethernet/IP.`,
      extra: `Allows centralized monitoring and control of multiple machines.`,
    },
    {
      title: 'Course Content ',
      image: '/panel.jpg',
      desc: `Fundamentals of PLC Networking , Network Design and Configuration ,  Industrial Communication Protocols ,  Troubleshooting and Maintenance. `,
      extra: `Mastering PLC networking opens up diverse career opportunities in industries such as manufacturing, process control, energy, and more.`,
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      <PageBanner
        title="PLC Networking"
        description='PLC Networking involves connecting multiple PLCs or PLCs with other devices'
        imageUrl="https://i.pinimg.com/736x/56/d8/a1/56d8a14df98686062ee2367a10514052.jpg" 
      />

      <div className="px-6 md:px-16 py-12 ">
        {/* CardSection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-8xl mx-auto px-6 md:px-12 py-16 "
        >
          <h1 className="text-3xl font-semibold text-red-400 text-center mb-10 ">Skill Up with Practical Learning and Personal Guidance!</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-15  ">
            {[{
              icon: <CalendarMonthIcon className="text-5xl text-red-400 mb-2" />,
              title: "Duration",
              desc: "Within 5 days"
            }, {
              icon: <HistoryToggleOffIcon className="text-5xl text-green-400 mb-2" />,
              title: "Timing",
              desc: "10 am to 6 pm Monday to Saturday"
            }, {
              icon: <AutoStoriesIcon className="text-5xl text-blue-400 mb-2" />,
              title: "Eligibility",
              desc: "B.tech Diploma( electrical or electronics), ITI & also working Professional.."
            }].map((item, i) => (
              <motion.div
                key={i}
                //whileHover={{ scale: 1.03 }}
                className="card bg-base-50 p-5 items-center text-center "
              >
                {item.icon}
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Overview Section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Overview</h1>
          <p className="mb-4">
            PLC Networking involves connecting multiple PLCs or PLCs with other devices (like HMIs, SCADA systems, or sensors) using industrial communication protocols such as Modbus, Ethernet/IP, or Profibus. 
          </p>
          <p className="mb-4 text-red-400">
            <i>This training enables professionals to design, configure, and troubleshoot networked automation systems for efficient data sharing and process coordination.</i>
          </p>
          <p>
            Our solutions help manufacturers stay competitive, meet demand, and foster innovation.
          </p>
        </div>

        {/* Reused Feature Sections */}
        {featureData.map((item, i) => (
          <IndustryFeatureSection key={i} index={i} {...item} />
        ))}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ContactComponent />
        </motion.div>

        {/* Accordion */}
        <main>
          <Accordion title="PLC Networking FAQs" items={plcNetworkingItems} />
        </main>
      </div>
    </div>
  );
};

export default Industries;
