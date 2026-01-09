
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
    id: 'otakuverse',
    title: 'OtakuVerse',
    description: 'Multi-agent AI system for content orchestration and semantic analysis.',
    problemSolved: 'Fragmented data streams requiring intelligent context mapping.',
    architecture: 'Modular multi-agent framework utilizing LangChain for orchestration and Redis for state management.',
    depth: 'Implements agentic memory patterns and autonomous context retrieval protocols.',
    learning: 'Optimizing token costs and managing asynchronous race conditions in multi-agent tool calling.',
    techStack: ['Python', 'LangChain', 'FastAPI', 'Redis', 'PostgreSQL'],
    impact: 'Scalable architecture processing high-frequency requests with autonomous feedback loops.',
    color: 'cyan',
    status: 'live',
    demoUrl: '#',
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
    demoUrl: '#',
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
    demoUrl: '#'
  }
];

export interface SkillCategoryExtended extends Omit<SkillCategory, 'icon'> {
  IconComponent: LucideIcon;
}

export const SKILL_CATEGORIES_DATA: SkillCategoryExtended[] = [
  {
    title: 'APPLIED AI & ML',
    skills: [
      'Neural Network Fundamentals',
      'CNNs for Computer Vision',
      'Supervised/Unsupervised Learning',
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
      'Secure Authentication Protocols',
      'Defensive AI Guardrails',
      'Identity Management (OAuth)',
      'Input Sanitization Logic',
      'Cryptographic Architectures'
    ],
    IconComponent: Shield,
    color: 'red'
  },
  {
    title: 'Engineering Stack',
    skills: [
      'Python (Advanced)',
      'C++ / Java Development',
      'FastAPI / Node.js Backends',
      'React / TypeScript Frontends',
      'Database Schema Modeling',
      'Application State Logic'
    ],
    IconComponent: Code,
    color: 'blue'
  }
];
