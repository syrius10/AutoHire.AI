import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BrainCircuit,
  Users,
  LineChart,
  Clock,
  CheckCircle,
  Award,
  Zap,
  Shield,
  ArrowRight,
} from "lucide-react";

const HomePage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="inline-block">
                <span className="bg-blue-600/20 text-blue-400 py-1 px-3 rounded-full text-sm font-medium">
                  AI-Powered Recruitment
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="block">Transform Your</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Hiring Process
                </span>
                <span className="block">With AI</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-300 max-w-xl"
              >
                AutoHire.AI uses advanced artificial intelligence to streamline
                recruitment, match the perfect candidates, and eliminate bias
                from your hiring process.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-center"
                >
                  Request Demo
                </Link>
                <Link
                  to="/features"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-md transition-all duration-300 backdrop-blur-sm text-center flex items-center justify-center gap-2"
                >
                  Explore Features <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[500px]">
                <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg backdrop-blur-md border border-white/10"></div>
                <div className="absolute bottom-0 left-0 w-[90%] h-[90%] bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg backdrop-blur-sm border border-white/10 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="AI Recruitment Dashboard"
                    className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BrainCircuit className="w-24 h-24 text-blue-400/70" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_) => (
            <motion.div
              key={crypto.randomUUID()}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-slate-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700/50 shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 text-blue-400 rounded-lg mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">85%</h3>
              <p className="text-gray-400">Reduction in Time-to-Hire</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700/50 shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-500/20 text-purple-400 rounded-lg mb-4">
                <LineChart size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">93%</h3>
              <p className="text-gray-400">Improved Candidate Quality</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700/50 shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 text-green-400 rounded-lg mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">70%</h3>
              <p className="text-gray-400">Decrease in Recruitment Costs</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-slate-700/50 shadow-xl"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 text-pink-400 rounded-lg mb-4">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-3xl font-bold mb-2">5,000+</h3>
              <p className="text-gray-400">Companies Using AutoHire.AI</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Preview */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-b from-slate-900 to-slate-800"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Revolutionize Your Hiring with&nbsp;
              <div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {" "}
                  AI-Powered Tools
                </span>
              </div>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-300">
              Our platform combines cutting-edge AI technology with intuitive
              design to transform your recruitment process.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-blue-500/20 text-blue-400 rounded-full mb-6 group-hover:bg-blue-500/30 transition-all duration-300">
                <BrainCircuit size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Driven Matching</h3>
              <p className="text-gray-400 mb-4">
                Our AI analyzes thousands of data points to match candidates
                with your job requirements with unprecedented accuracy.
              </p>
              <Link
                to="/features"
                className="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-sm"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-purple-500/20 text-purple-400 rounded-full mb-6 group-hover:bg-purple-500/30 transition-all duration-300">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Skill Assessment</h3>
              <p className="text-gray-400 mb-4">
                Automatically evaluate candidate skills with customizable
                assessments that provide objective insights into capabilities.
              </p>
              <Link
                to="/features"
                className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-green-500/20 text-green-400 rounded-full mb-6 group-hover:bg-green-500/30 transition-all duration-300">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Automated Interviews
              </h3>
              <p className="text-gray-400 mb-4">
                Conduct and analyze video interviews with AI that identifies key
                traits, skills, and cultural fit indicators.
              </p>
              <Link
                to="/features"
                className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-pink-500/20 text-pink-400 rounded-full mb-6 group-hover:bg-pink-500/30 transition-all duration-300">
                <LineChart size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-400 mb-4">
                Gain deep insights into your recruitment process with
                comprehensive analytics and actionable recommendations.
              </p>
              <Link
                to="/features"
                className="text-pink-400 hover:text-pink-300 flex items-center gap-1 text-sm"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-yellow-500/20 text-yellow-400 rounded-full mb-6 group-hover:bg-yellow-500/30 transition-all duration-300">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Time-Saving Automation
              </h3>
              <p className="text-gray-400 mb-4">
                Automate repetitive tasks like screening, scheduling, and
                follow-ups to focus on what matters most.
              </p>
              <Link
                to="/features"
                className="text-yellow-400 hover:text-yellow-300 flex items-center gap-1 text-sm"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-red-500/20 text-red-400 rounded-full mb-6 group-hover:bg-red-500/30 transition-all duration-300">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bias Elimination</h3>
              <p className="text-gray-400 mb-4">
                Our AI is designed to identify and eliminate unconscious bias,
                ensuring a fair and diverse hiring process.
              </p>
              <Link
                to="/features"
                className="text-red-400 hover:text-red-300 flex items-center gap-1 text-sm"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
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
              Ready to Transform Your Hiring Process?
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-white/80 mb-8"
            >
              Join thousands of companies that have revolutionized their
              recruitment with AutoHire.AI
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg text-center"
              >
                Request Demo
              </Link>
              <Link
                to="/features"
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
