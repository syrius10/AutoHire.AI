import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar, 
  Clock, 
  Users, 
  MessageSquare,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    demoDate: '',
    demoTime: '',
    teamSize: '',
    interests: [] as string[],
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value],
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          demoDate: '',
          demoTime: '',
          teamSize: '',
          interests: [],
        });
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: 'Email',
      details: 'contact@autohire.ai',
      link: 'mailto:contact@autohire.ai',
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-400" />,
      title: 'Address',
      details: '123 Innovation Drive, San Francisco, CA 94103',
      link: 'https://maps.google.com/?q=123+Innovation+Drive,+San+Francisco,+CA+94103',
    },
  ];

  const demoFeatures = [
    {
      id: 'ai-matching',
      label: 'AI-Driven Candidate Matching',
    },
    {
      id: 'skill-assessment',
      label: 'Automated Skill Assessments',
    },
    {
      id: 'video-interviews',
      label: 'Video Interview Analysis',
    },
    {
      id: 'analytics',
      label: 'Recruitment Analytics',
    },
    {
      id: 'bias-elimination',
      label: 'Bias Elimination Tools',
    },
    {
      id: 'workflow',
      label: 'Workflow Automation',
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <motion.section
        ref={headerRef}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get in 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"> Touch</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-300">
              Schedule a demo or reach out to our team with any questions about AutoHire.AI
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <motion.a
                href={item.link}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="bg-slate-800/80 p-3 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.details}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50 shadow-xl"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-white"
              >
                Request a Demo
              </motion.h2>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="w-16 h-16 mx-auto text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your demo request has been submitted successfully. Our team will contact you shortly to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300 mb-1">
                      Team Size
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="" disabled>Select team size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501+">501+ employees</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="demoDate" className="block text-sm font-medium text-gray-300 mb-1">
                        Preferred Demo Date
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                          type="date"
                          id="demoDate"
                          name="demoDate"
                          value={formData.demoDate}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="demoTime" className="block text-sm font-medium text-gray-300 mb-1">
                        Preferred Time
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                        <input
                          type="time"
                          id="demoTime"
                          name="demoTime"
                          value={formData.demoTime}
                          onChange={handleInputChange}
                          className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 pl-10 pr-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Features You're Interested In
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {demoFeatures.map((feature) => (
                        <div key={feature.id} className="flex items-center">
                          <input
                            type="checkbox"
                            id={feature.id}
                            name="interests"
                            value={feature.id}
                            checked={formData.interests.includes(feature.id)}
                            onChange={handleCheckboxChange}
                            className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded bg-slate-900"
                          />
                          <label htmlFor={feature.id} className="ml-2 text-sm text-gray-300">
                            {feature.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-md py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your specific recruitment challenges..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-md transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Send className="mr-2" size={18} />
                    Request Demo
                  </button>
                </motion.form>
              )}
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              ref={mapRef}
              initial="hidden"
              animate={mapInView ? "visible" : "hidden"}
              variants={containerVariants}
              className="space-y-8"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50 shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">Visit Our Office</h2>
                <div className="aspect-video w-full rounded-lg overflow-hidden border border-slate-700/50 mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.95397618613!2d-122.43913217768052!3d37.77117797908745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652892876414!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="AutoHire.AI Office Location"
                  ></iframe>
                </div>
                <p className="text-gray-300">
                  Our headquarters is located in the heart of San Francisco's tech district. We'd love to show you around and demonstrate our AI-powered recruitment platform in person.
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50 shadow-xl"
              >
                <h2 className="text-2xl font-bold mb-6 text-white">What to Expect</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-white">Personalized Demo</h3>
                      <p className="text-gray-300 text-sm">
                        Our team will tailor the demonstration to your specific recruitment needs and challenges.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-white">30-45 Minute Session</h3>
                      <p className="text-gray-300 text-sm">
                        We'll walk you through the platform, showcase key features, and answer all your questions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MessageSquare className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-white">Q&A Opportunity</h3>
                      <p className="text-gray-300 text-sm">
                        Bring your team's questions and challenges - our experts are ready to help.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Send className="w-5 h-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-white">Follow-up Resources</h3>
                      <p className="text-gray-300 text-sm">
                        You'll receive custom materials and pricing information based on your specific needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Frequently Asked <span className="text-blue-400">Questions</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">How long does implementation typically take?</h3>
                <p className="text-gray-300">
                  Most clients are up and running within 2-4 weeks, depending on the size of your organization and integration requirements. Our team provides comprehensive support throughout the implementation process.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Can AutoHire.AI integrate with our existing HR systems?</h3>
                <p className="text-gray-300">
                  Yes, we offer seamless integration with most major HRIS, ATS, and other HR systems. Our platform uses standard APIs and custom connectors to ensure smooth data flow between systems.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">How does your pricing model work?</h3>
                <p className="text-gray-300">
                  Our pricing is based on your organization's size and specific needs. We offer flexible subscription plans that can be customized to include the features most relevant to your recruitment process. Contact us for a personalized quote.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">Is my candidate data secure with AutoHire.AI?</h3>
                <p className="text-gray-300">
                  Absolutely. We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with GDPR, CCPA, and other relevant regulations. Your data security is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;