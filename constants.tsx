
import React from 'react';
import { Brain, Shield, Code, Braces, Cpu, LucideIcon, Terminal, Layers } from 'lucide-react';
import { Project, SkillCategory, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Engineering', href: '#engineering' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI & ML', href: '#applied-ai' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-sentinel',
    title: 'Project Sentinel',
    description: 'Autonomous security agent bridging system observability with AI-driven threat reasoning.',
    problemSolved: 'Fragmented security logs requiring manual intervention for threat detection.',
    architecture: 'Multi-agent system using ADK for specialized hierarchy and log analysis loops.',
    depth: 'Implements adversarial attack mitigation and real-time system state reasoning.',
    learning: 'Balancing LLM latency with real-time packet inspection requirements.',
    techStack: ['Python', 'ADK', 'FastAPI', 'MongoDB', 'Docker'],
    impact: 'Autonomous detection and mitigation of 0-day credential stuffing patterns.',
    color: 'red',
    status: 'research',
    githubUrl: 'https://github.com/Ironomism1/ironomism1'
  },
  {
    id: 'otakuverse',
    title: 'OtakuVerse',
    description: 'Multi-agent AI system for content orchestration and semantic analysis.',
    problemSolved: 'Fragmented data streams requiring intelligent context mapping.',
    architecture: 'Modular multi-agent framework utilizing LangChain for orchestration and Redis.',
    depth: 'Implements agentic memory patterns and autonomous context retrieval protocols.',
    learning: 'Optimizing token costs and managing asynchronous race conditions.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'Redis', 'PostgreSQL'],
    impact: 'Scalable architecture processing high-frequency requests with autonomous feedback loops.',
    color: 'cyan',
    status: 'live',
    demoUrl: 'https://otakuverse-ai.vercel.app',
    githubUrl: 'https://github.com/Ironomism1/ironomism1'
  },
  {
    id: 'agriware',
    title: 'AgriWare',
    description: 'AI-driven agricultural platform utilizing predictive analytics and computer vision.',
    problemSolved: 'Low efficiency in crop monitoring and yield prediction for small-scale farms.',
    architecture: 'Integrated CV models for pest detection with Firebase for real-time sensor sync.',
    depth: 'Constructs localized knowledge graphs for soil-specific crop advice.',
    learning: 'Managing image-heavy ML pipelines in low-bandwidth edge environments.',
    techStack: ['TensorFlow', 'Firebase', 'React Native', 'Node.js', 'MongoDB'],
    impact: 'Significant improvement in early pest detection accuracy using mobile-edge inference.',
    color: 'emerald',
    status: 'live',
    demoUrl: 'https://agriware-platform.vercel.app',
    githubUrl: 'https://github.com/Ironomism1/ironomism1'
  },
  {
    id: 'project-pegasus',
    title: 'Project Pegasus',
    description: 'High-speed data orchestration framework for distributed AI workloads.',
    problemSolved: 'Bottlenecks in context retrieval for large-scale RAG systems.',
    architecture: 'Distributed message queue with prioritized agentic task scheduling.',
    depth: 'Uses custom graph traversals to optimize context retrieval paths.',
    learning: 'Implementing memory-safe concurrency for high-throughput state updates.',
    techStack: ['C++', 'Python', 'Redis', 'Firebase', 'ADK'],
    impact: '40% reduction in retrieval latency for multi-agent knowledge systems.',
    color: 'purple',
    status: 'research',
    githubUrl: 'https://github.com/Ironomism1/ironomism1'
  },
  {
    id: 'pixis-validate',
    title: 'Pixis Validate',
    description: 'Security-first validation system for digital asset authenticity.',
    problemSolved: 'Mitigating manipulated media in high-stakes digital environments.',
    architecture: 'CNN-based forensic analysis combined with cryptographic verification.',
    depth: 'Uses frequency-domain analysis and error-level analysis (ELA).',
    learning: 'Reducing false-positive rates in lossy media compression environments.',
    techStack: ['TensorFlow', 'Python', 'Docker', 'OpenCV'],
    impact: 'High-accuracy detection of manipulated regions in large-scale datasets.',
    color: 'red',
    status: 'live',
    demoUrl: 'https://pixis-validate.vercel.app',
    githubUrl: 'https://github.com/Ironomism1/ironomism1'
  },
  {
    id: 'academia-ascend',
    title: 'Academia Ascend',
    description: 'Full-stack EdTech platform utilizing predictive analytics for learning optimization.',
    problemSolved: 'Generic education models failing to adapt to student-specific knowledge gaps.',
    architecture: 'MERN stack integrated with a behavioral recommendation engine.',
    depth: 'Constructs knowledge graphs for real-time curriculum adjustment.',
    learning: 'Implementing efficient graph traversal for curriculum path generation.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Scikit-learn'],
    impact: 'Significant engagement increase through dynamic difficulty adjustment.',
    color: 'emerald',
    status: 'live',
    demoUrl: 'https://academia-ascend.vercel.app',
    githubUrl: 'https://github.com/Ironomism1/ironomism1'
  }
];

export interface SkillCategoryExtended extends Omit<SkillCategory, 'icon'> {
  IconComponent: LucideIcon;
}

export const SKILL_CATEGORIES_DATA: SkillCategoryExtended[] = [
  {
    title: 'APPLIED AI & ML',
    skills: [
      'ADK (Agent Development Kit)',
      'Neural Network Fundamentals',
      'CNNs for Computer Vision',
      'LLM Integration & Prompting',
      'Agentic Systems (LangChain)',
      'Local Inference (Ollama)',
      'ML Data Pipelines'
    ],
    IconComponent: Brain,
    color: 'cyan'
  },
  {
    title: 'SOFTWARE ENGINEERING',
    skills: [
      'Big O Complexity Analysis',
      'Advanced Data Structures',
      'Graph Theory & Traversals',
      'Memory-Safe Concurrency',
      'Object-Oriented Design',
      'Software Design Patterns',
      'DSA Problem Solving'
    ],
    IconComponent: Braces,
    color: 'emerald'
  },
  {
    title: 'Security Engineering',
    skills: [
      'Web Application Security',
      'Secure Auth Protocols',
      'Defensive AI Guardrails',
      'Identity (OAuth/Firebase)',
      'Input Sanitization',
      'Cryptographic Arch'
    ],
    IconComponent: Shield,
    color: 'red'
  },
  {
    title: 'Engineering Stack',
    skills: [
      'Python (Advanced)',
      'MongoDB & NoSQL',
      'Firebase Ecosystem',
      'FastAPI / Node.js',
      'React / TypeScript',
      'C++ / Java Core'
    ],
    IconComponent: Code,
    color: 'blue'
  }
];
