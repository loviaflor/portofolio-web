import googlecolab from '@/assets/logos/googlecolab.svg';
import java from '@/assets/logos/java.svg';
import mysql from '@/assets/logos/mysql.svg';
import tableau from '@/assets/logos/tableau.svg';
import figma from '@/assets/logos/figma.svg';
import powerbi from '@/assets/logos/powerbi.svg';

export const resume = {
  eyebrow: 'Resume',
  title: '10+ years shaping digital products through UX, UI, and',
  highlight: 'systems thinking.',
  text: 'My work centres on product clarity: bringing structure to messy workflows, overloaded interfaces, and growing systems that need to scale without becoming harder to use.',
  snapshot: [
    { label: 'Location', value: 'Lisbon, Portugal' },
    { label: 'Focus', value: 'UX and product design' },
    { label: 'Specialties', value: 'Dashboards, workflows, design systems' },
    { label: 'Languages', value: 'English, Portuguese, Romanian' },
  ],
  experience: [
    {
      role: 'Business Analyst Intern',
      company: 'PT Bank Central Asia Tbk',
      period: '2026 - 2027',
      text: 'As a Business Analyst Intern in the Information Technology Department at BCA, I support initiatives related to system enhancement and operational improvement within the unit responsible for Data Center services and infrastructure. In this role, I collaborate with internal stakeholders to gather business requirements, analyze user needs, and translate them into detailed requirement documents. Im also involved in conducting User Acceptance Testing (UAT) for feature improvements, and data sorting, validation, and reconciliation of staff records to support administrative and operational processes.',
    },
    {
      role: 'Vice Project Manager',
      company: 'StartUp Project by DWDG BINUS x Contigo Mobility',
      period: 'May-Jul 2025',
      text: "As part of Do Well Do Good (DWDG) BINUS University, a student-led business and consulting organization, I served as Vice Project Manager for its two-month Startup Project with Contigo Mobility. I coordinated a cross-functional team of 8, tracked project milestones and deliverables, and aligned team efforts to ensure the proposed solutions addressed the client’s business needs.",
    },
    // {
    //   role: 'UI/UX Designer',
    //   company: 'In-house product teams',
    //   period: '2014 - 2017',
    //   text: 'Built core interface patterns, user flows, and production-ready visual systems for web and mobile products.',
    // },
  ],
  capabilities: [
    {
      title: 'Business Analysis',
      text: 'Uncovering underlying business needs, translating ambiguous requirements into clear specifications, and defining what successful solutions should achieve.',
    },
    {
      title: 'Business Intelligence',
      text: 'Combining SQL-based data exploration with Power BI visualization to transform business data into accessible reports, performance metrics, and actionable insights.',
    },
    {
      title: 'Project Management',
      text: 'Organizing tasks, aligning team priorities, tracking progress, and coordinating deliverables to keep projects moving toward their goals.',
    },
  ],
  education: [
    // { title: 'Bachelor of 000', place: '000 University', period: '1999' },
    // { title: '000', place: '000 High School', period: '1999' },
  ],
    tools: [
    { name: 'Tableau', logo: tableau, dark: false },
    { name: 'PowerBI', logo: powerbi, dark: false },
    { name: 'Figma', logo: figma, dark: false },
    { name: 'Google Colab', logo: googlecolab, dark: false },
    { name: 'MySQL', logo: mysql, dark: false },
    { name: 'Java', logo: java, dark: false },
  ],
};
