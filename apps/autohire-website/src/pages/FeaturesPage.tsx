import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BrainCircuit,
  LineChart,
  Clock,
  CheckCircle,
  Award,
  Shield,
  Layers,
  Cpu,
  BarChart4,
  VideoIcon,
  UserCheck,
  Workflow,
  Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [howItWorksRef, howItWorksInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [comparisonRef, comparisonInView] = useInView({
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

  const features = [
    {
      id: 1,
      title: "AI-Driven Candidate Matching",
      description:
        "Our proprietary algorithm analyzes thousands of data points to match candidates with job requirements with unprecedented accuracy.",
      icon: <BrainCircuit className="w-12 h-12 text-blue-400" />,
      color: "blue",
      details: [
        "Resume parsing and semantic analysis",
        "Skills and experience mapping",
        "Cultural fit prediction",
        "Career trajectory analysis",
      ],
    },
    {
      id: 2,
      title: "Automated Skill Assessments",
      description:
        "Customizable assessments that objectively evaluate candidate skills and provide insights into their capabilities.",
      icon: <Award className="w-12 h-12 text-purple-400" />,
      color: "purple",
      details: [
        "Technical skill verification",
        "Soft skills evaluation",
        "Customizable assessment templates",
        "Comparative scoring against industry benchmarks",
      ],
    },
    {
      id: 3,
      title: "Video Interview Analysis",
      description:
        "AI-powered analysis of video interviews to identify key traits, skills, and cultural fit indicators.",
      icon: <VideoIcon className="w-12 h-12 text-green-400" />,
      color: "green",
      details: [
        "Sentiment and emotion analysis",
        "Speech pattern recognition",
        "Non-verbal cue interpretation",
        "Response quality assessment",
      ],
    },
    {
      id: 4,
      title: "Comprehensive Analytics",
      description:
        "Deep insights into your recruitment process with actionable recommendations for improvement.",
      icon: <BarChart4 className="w-12 h-12 text-pink-400" />,
      color: "pink",
      details: [
        "Recruitment funnel analysis",
        "Time-to-hire tracking",
        "Source effectiveness evaluation",
        "Predictive hiring insights",
      ],
    },
    {
      id: 5,
      title: "Bias Elimination",
      description:
        "Advanced algorithms designed to identify and eliminate unconscious bias throughout the hiring process.",
      icon: <Shield className="w-12 h-12 text-red-400" />,
      color: "red",
      details: [
        "Blind resume screening",
        "Inclusive language suggestions",
        "Diversity monitoring",
        "Bias detection alerts",
      ],
    },
    {
      id: 6,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks like screening, scheduling, and follow-ups to focus on what matters most.",
      icon: <Workflow className="w-12 h-12 text-yellow-400" />,
      color: "yellow",
      details: [
        "Candidate communication automation",
        "Interview scheduling",
        "Document collection and verification",
        "Onboarding process integration",
      ],
    },
    {
      id: 7,
      title: "Candidate Experience Enhancement",
      description:
        "Create a seamless, engaging experience for candidates throughout the recruitment process.",
      icon: <UserCheck className="w-12 h-12 text-teal-400" />,
      color: "teal",
      details: [
        "Personalized communication",
        "Real-time application status updates",
        "Feedback collection and analysis",
        "Mobile-optimized candidate portal",
      ],
    },
    {
      id: 8,
      title: "Enterprise-Grade Security",
      description:
        "State-of-the-art security measures to protect sensitive candidate and company data.",
      icon: <Lock className="w-12 h-12 text-indigo-400" />,
      color: "indigo",
      details: [
        "End-to-end encryption",
        "GDPR and CCPA compliance",
        "Role-based access control",
        "Regular security audits",
      ],
    },
  ];

  const steps = [
    {
      id: 1,
      title: "Job Requirement Analysis",
      description:
        "Our AI analyzes your job descriptions and requirements to understand the skills, experience, and qualities needed.",
      icon: <Layers className="w-10 h-10 text-blue-400" />,
    },
    {
      id: 2,
      title: "Candidate Matching",
      description:
        "The system processes candidate profiles and matches them to your requirements using our proprietary algorithm.",
      icon: <Cpu className="w-10 h-10 text-purple-400" />,
    },
    {
      id: 3,
      title: "Automated Assessments",
      description:
        "Qualified candidates receive customized skill assessments to objectively evaluate their capabilities.",
      icon: <CheckCircle className="w-10 h-10 text-green-400" />,
    },
    {
      id: 4,
      title: "Video Interview Analysis",
      description:
        "AI analyzes video interviews to identify key traits, communication skills, and cultural fit indicators.",
      icon: <VideoIcon className="w-10 h-10 text-pink-400" />,
    },
    {
      id: 5,
      title: "Data-Driven Decisions",
      description:
        "Comprehensive analytics help you make informed hiring decisions based on objective data.",
      icon: <LineChart className="w-10 h-10 text-yellow-400" />,
    },
  ];

  const comparisonData = {
    traditional: [
      "Manual resume screening",
      "Subjective candidate evaluation",
      "Time-consuming interview scheduling",
      "Limited candidate insights",
      "Potential for unconscious bias",
      "Inconsistent hiring processes",
      "Delayed feedback to candidates",
      "Limited data for decision-making",
    ],
    autohire: [
      "AI-powered candidate matching",
      "Objective skill assessments",
      "Automated scheduling and coordination",
      "Deep candidate insights and analytics",
      "Bias elimination algorithms",
      "Standardized, consistent processes",
      "Real-time candidate updates",
      "Data-driven hiring decisions",
    ],
  };

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
              Powerful Features for
              <div>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Modern Recruitment
                </span>
              </div>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-gray-300">
              Discover how our AI-powered platform transforms every aspect of
              your hiring process.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-slate-800"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={`bg-slate-900/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-slate-700/50 hover:border-${feature.color}-500/30 transition-all duration-300 group`}
              >
                <div
                  className={`bg-gradient-to-r from-${feature.color}-500/20 to-${feature.color}-600/10 p-6`}
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start">
                        <span className={`text-${feature.color}-400 mr-2`}>
                          ✓
                        </span>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        ref={howItWorksRef}
        initial="hidden"
        animate={howItWorksInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-gradient-to-b from-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              How <span className="text-blue-400">AutoHire.AI</span> Works
            </h2>
            <p className="text-gray-300">
              Our platform streamlines your recruitment process from start to
              finish with advanced AI technology.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8`}
                >
                  <div className="md:w-1/2 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl"></div>
                      <div className="relative bg-slate-800 p-6 rounded-full border border-slate-700/50 shadow-xl">
                        {step.icon}
                      </div>
                      <div className="hidden md:block absolute top-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 left-full"></div>
                    </div>
                  </div>
                  <div className="md:w-1/2 bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 shadow-xl">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {step.id}. {step.title}
                    </h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Comparison Table */}
      <motion.section
        ref={comparisonRef}
        initial="hidden"
        animate={comparisonInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 bg-slate-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Traditional Recruitment vs{" "}
              <span className="text-blue-400">AutoHire.AI</span>
            </h2>
            <p className="text-gray-300">
              See how our AI-powered platform compares to traditional
              recruitment methods.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-slate-700/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 border-b md:border-b-0 md:border-r border-slate-700/50">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-gray-400 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-300">
                    Traditional Recruitment
                  </h3>
                </div>
                <ul className="space-y-4">
                  {comparisonData.traditional.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span className="text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                <div className="flex items-center mb-6">
                  <BrainCircuit className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    AutoHire.AI
                  </h3>
                </div>
                <ul className="space-y-4">
                  {comparisonData.autohire.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
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
                to="/testimonials"
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md transition-all duration-300 text-center"
              >
                See Success Stories
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FeaturesPage;
