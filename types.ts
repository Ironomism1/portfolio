
// Import React to resolve 'React' namespace for React.ReactNode
import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  problemSolved: string;
  architecture: string;
  depth: string;
  learning: string;
  techStack: string[];
  impact: string;
  color: string;
  status: 'live' | 'in-progress' | 'research';
  demoUrl?: string;
  githubUrl?: string;
  designUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

export interface NavItem {
  label: string;
  href: string;
}