import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote, Building, ArrowRight } from 'lucide-react';

const TestimonialsPage = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [caseStudiesRef, caseStudiesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Head of Talent Acquisition',
      company: 'TechGlobal Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      quote: 'AutoHire.AI has completely transformed our recruitment process. We have reduced our time-to-hire by 78% while improving the quality of our candidates. The AI-driven matching is incredibly accurate.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CEO',
      company: 'Innovate Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      quote: 'As a fast-growing startup, finding the right talent quickly is crucial. AutoHire.AI has been a game-changer for us, helping us build our team with precision and efficiency.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'HR Director',
      company: 'Global Retail Group',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      quote: 'The automated skill assessments have been invaluable in objectively evaluating candidates. We have seen a significant reduction in turnover since implementing AutoHire.AI.',
      rating: 4,
    },
    {
      id: 4,
      name: 'David Wilson',
      position: 'Talent Acquisition Manager',
      company: 'Finance Partners Ltd.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      quote: 'The analytics provided by AutoHire.AI have given us unprecedented insights into our recruitment process. We have been able to identify and eliminate bottlenecks we did not even know existed.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Priya Patel',
      position: 'COO',
      company: 'HealthTech Innovations',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      quote: 'The bias elimination features have helped us build a more diverse team. The ROI on AutoHire.AI has been exceptional - we have reduced our recruitment costs by over 60%.',
      rating: 5,
    },
    {
      id: 6,
      name: 'James Thompson',
      position: 'VP of Human Resources',
      company: 'Manufacturing Excellence',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      quote: 'The customer support team at AutoHire.AI is exceptional. They have been with us every step of the way, ensuring we get the most out of the platform.',
      rating: 4,
    },
  ];

  const caseStudies = [
    {
      id: 1,
      company: 'TechGlobal Inc.',
      industry: 'Technology',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
      challenge: 'Struggling with high volume of applications and long time-to-hire for technical positions.',
      solution: 'Implemented AutoHire.AI with custom skill assessments and AI-driven matching.',
      results: [
        '78% reduction in time-to-hire',
        '45% decrease in recruitment costs',
        '92% increase in hiring manager satisfaction',
      ],
    },
    {
      id: 2,
      company: 'Global Retail Group',
      industry: 'Retail',
      logo: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      challenge: 'High turnover rates and difficulty finding candidates who were a good cultural fit.',
      solution: 'Used AutoHire.AI\'s video interview analysis and cultural fit assessment tools.',
      results: [
        '35% reduction in employee turnover',
        '60% improvement in cultural fit scores',
        'Saved 1,200+ hours of manual screening annually',
      ],
    },
    {
      id: 3,
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      challenge: 'Needed to build a diverse team while maintaining high standards for specialized healthcare roles.',
      solution: 'Leveraged AutoHire.AI\'s bias elimination features and specialized healthcare skill assessments.',
      results: [
        '40% increase in diversity of candidate pool',
        '85% of hires rated as "exceptional" by managers',
        'Reduced time spent on compliance documentation by 65%',
      ],
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
              What Our Clients 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"> Say About Us</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-300">
              Discover how AutoHire.AI is transforming recruitment processes for companies worldwide.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Grid */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-slate-800"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            Testimonials from <span className="text-blue-400">Industry Leaders</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-6 shadow-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-400"
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.position}</p>
                    <p className="text-xs text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}
                    />
                  ))}
                </div>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-500/20" />
                  <p className="text-gray-300 relative z-10 pl-4">{testimonial.quote}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Case Studies */}
      <motion.section
        ref={caseStudiesRef}
        initial="hidden"
        animate={caseStudiesInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-center"
          >
            Success <span className="text-purple-400">Case Studies</span>
          </motion.h2>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                variants={itemVariants}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-slate-700/50`}
              >
                <div className="lg:w-1/3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                  <img
                    src={study.logo}
                    alt={study.company}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-white/10 text-center">
                      <Building className="w-12 h-12 mx-auto text-blue-400 mb-2" />
                      <h3 className="text-xl font-bold text-white">{study.company}</h3>
                      <p className="text-sm text-blue-400">{study.industry}</p>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2">✓</span>
                          <span className="text-gray-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Join Our Success Stories
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-white/80 mb-8">
              Experience the AutoHire.AI difference and transform your recruitment process today.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2"
              >
                Schedule a Demo <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default TestimonialsPage;