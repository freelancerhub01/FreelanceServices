export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  tags: string[];
  features: string[];
  tools: string[];
  useCases: string[];
}

const codeIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`;
const apiIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`;
const clockIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
const cloudIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>`;
const upgradeIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`;
const migrateIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`;
const devopsIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>`;
const dockerIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`;
const k8sIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`;
const sparkleIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`;
const plusIcon = `<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom, responsive websites and web apps built with modern frameworks and best practices.',
    description: 'From pixel-perfect landing pages to complex web applications, I deliver fast, accessible, and maintainable web solutions tailored to your business goals.',
    icon: codeIcon,
    tags: ['React', 'Vue', 'Angular', 'Astro', 'Next.js'],
    features: [
      'Custom website development from scratch',
      'Responsive, mobile-first design implementation',
      'Frontend frameworks: React, Vue, Angular, Astro',
      'Landing pages and marketing sites',
      'Performance optimization and Core Web Vitals',
      'SEO-friendly markup and metadata',
    ],
    tools: ['React', 'Vue', 'Angular', 'Next.js', 'Astro', 'TypeScript', 'Tailwind CSS', 'Vite'],
    useCases: [
      'SaaS product frontend',
      'Corporate marketing website',
      'E-commerce storefront',
      'Portfolio or personal brand site',
    ],
  },
  {
    slug: 'api-development',
    title: 'REST API Development',
    shortDescription: 'Robust, well-documented REST APIs with authentication, validation, and third-party integrations.',
    description: 'I design and build scalable RESTful APIs following industry standards, complete with OpenAPI documentation, proper error handling, and security best practices.',
    icon: apiIcon,
    tags: ['Node.js', 'FastAPI', 'OpenAPI', 'OAuth2'],
    features: [
      'RESTful API design and implementation',
      'OpenAPI/Swagger documentation',
      'Third-party API integrations',
      'Authentication & authorization (JWT, OAuth2, API keys)',
      'Rate limiting, caching, and pagination',
      'Comprehensive error handling and logging',
    ],
    tools: ['Node.js', 'Express', 'FastAPI', 'NestJS', 'Swagger', 'Postman', 'PostgreSQL', 'Redis'],
    useCases: [
      'Mobile app backend',
      'Microservices communication layer',
      'Third-party integration hub',
      'Internal tooling API',
    ],
  },
  {
    slug: 'backend-schedulers',
    title: 'Backend Scheduler Development',
    shortDescription: 'Reliable cron jobs, task queues, and automated workflows that run without manual intervention.',
    description: 'I build robust background processing systems — from simple cron jobs to complex distributed task queues — ensuring your automated workflows are reliable, observable, and scalable.',
    icon: clockIcon,
    tags: ['Cron', 'BullMQ', 'Celery', 'Queues'],
    features: [
      'Cron job implementation and management',
      'Task queue systems (BullMQ, Celery, RabbitMQ)',
      'Automated workflow scheduling',
      'Background job processing with retry logic',
      'Dead letter queues and failure handling',
      'Job monitoring and alerting',
    ],
    tools: ['BullMQ', 'Celery', 'RabbitMQ', 'Redis', 'node-cron', 'Temporal', 'PostgreSQL'],
    useCases: [
      'Nightly data sync jobs',
      'Email/notification dispatch queues',
      'Report generation pipelines',
      'Scheduled data cleanup tasks',
    ],
  },
  {
    slug: 'cloud-services',
    title: 'Cloud Services',
    shortDescription: 'Cloud infrastructure setup, storage solutions, data migration, and serverless functions across AWS, Azure, and GCP.',
    description: 'I help businesses leverage the full power of cloud platforms — from setting up storage buckets and CDNs to architecting serverless functions and managing cloud security.',
    icon: cloudIcon,
    tags: ['AWS', 'Azure', 'GCP', 'Serverless'],
    features: [
      'Storage setup: S3, Azure Blob, Google Cloud Storage',
      'Cloud hosting and infrastructure setup',
      'Database migration between cloud providers',
      'CDN configuration and optimization',
      'Serverless functions (Lambda, Azure Functions, Cloud Run)',
      'Cloud security and IAM policy management',
    ],
    tools: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation', 'CDK', 'Pulumi'],
    useCases: [
      'Migrating on-prem workloads to cloud',
      'Setting up multi-region storage',
      'Serverless API backends',
      'Cloud cost optimization',
    ],
  },
  {
    slug: 'app-upgrades',
    title: 'App Version Upgrades',
    shortDescription: 'Safe, systematic framework and dependency upgrades with breaking change resolution and performance improvements.',
    description: 'Keeping your stack up to date is critical for security and performance. I handle the full upgrade lifecycle — from dependency audits to breaking change resolution — with minimal disruption.',
    icon: upgradeIcon,
    tags: ['Migrations', 'Security', 'Performance', 'Dependencies'],
    features: [
      'Framework and library version upgrades',
      'Dependency management and security patching',
      'Breaking change identification and resolution',
      'Performance optimization during upgrades',
      'Automated testing to validate upgrades',
      'Rollback planning and risk mitigation',
    ],
    tools: ['npm', 'pnpm', 'Renovate', 'Dependabot', 'Jest', 'Vitest', 'ESLint'],
    useCases: [
      'React 17 → 18 migration',
      'Node.js LTS upgrades',
      'Angular major version upgrades',
      'Security vulnerability patching',
    ],
  },
  {
    slug: 'migrations',
    title: 'App & Data Migration',
    shortDescription: 'Zero-downtime application and database migrations with full data validation and integrity checks.',
    description: 'I plan and execute complex migrations — moving applications between platforms, migrating databases across paradigms, and ensuring data integrity throughout the process.',
    icon: migrateIcon,
    tags: ['Zero-downtime', 'SQL', 'NoSQL', 'Cloud'],
    features: [
      'Application migration between platforms',
      'Database migration (SQL to NoSQL, on-prem to cloud)',
      'Zero-downtime migration strategies',
      'Data validation and integrity checks',
      'Rollback procedures and contingency planning',
      'Post-migration monitoring and support',
    ],
    tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'AWS DMS', 'Flyway', 'Liquibase'],
    useCases: [
      'Heroku to AWS migration',
      'MySQL to PostgreSQL migration',
      'Monolith to microservices split',
      'On-prem to cloud lift-and-shift',
    ],
  },
  {
    slug: 'devops',
    title: 'DevOps',
    shortDescription: 'CI/CD pipelines, Infrastructure as Code, monitoring, and environment management for reliable delivery.',
    description: 'I implement DevOps practices that accelerate your delivery pipeline — from automated CI/CD to infrastructure as code and comprehensive monitoring setups.',
    icon: devopsIcon,
    tags: ['CI/CD', 'Terraform', 'GitHub Actions', 'Monitoring'],
    features: [
      'CI/CD pipeline setup (GitHub Actions, GitLab CI, Jenkins)',
      'Infrastructure as Code (Terraform, Pulumi)',
      'Monitoring and alerting setup (Datadog, Grafana)',
      'Environment management (dev, staging, production)',
      'Secret management and security scanning',
      'Automated testing integration in pipelines',
    ],
    tools: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Terraform', 'Pulumi', 'Datadog', 'Grafana', 'Prometheus'],
    useCases: [
      'Setting up automated deployment pipelines',
      'Infrastructure provisioning automation',
      'Production monitoring dashboards',
      'Multi-environment configuration management',
    ],
  },
  {
    slug: 'docker',
    title: 'Docker',
    shortDescription: 'Optimized Dockerfiles, multi-stage builds, Docker Compose setups, and container registry management.',
    description: 'I containerize your applications for consistent, portable deployments — from writing optimized Dockerfiles to orchestrating multi-service environments with Docker Compose.',
    icon: dockerIcon,
    tags: ['Docker', 'Compose', 'Registry', 'Multi-stage'],
    features: [
      'Dockerfile creation and optimization',
      'Multi-stage builds for minimal image sizes',
      'Docker Compose configurations for local dev',
      'Container registry management (ECR, GCR, Docker Hub)',
      'Security scanning and image hardening',
      'Development environment standardization',
    ],
    tools: ['Docker', 'Docker Compose', 'BuildKit', 'ECR', 'GCR', 'Docker Hub', 'Trivy'],
    useCases: [
      'Containerizing legacy applications',
      'Local development environment setup',
      'CI/CD container build pipelines',
      'Microservices local orchestration',
    ],
  },
  {
    slug: 'kubernetes',
    title: 'Kubernetes Clusters',
    shortDescription: 'Cluster setup, Helm chart development, pod scaling, and service mesh implementation for production workloads.',
    description: 'I design and manage Kubernetes infrastructure that scales with your needs — from initial cluster setup to advanced service mesh configurations and GitOps workflows.',
    icon: k8sIcon,
    tags: ['Kubernetes', 'Helm', 'Scaling', 'Service Mesh'],
    features: [
      'Cluster setup and configuration (EKS, GKE, AKS)',
      'Helm chart development and management',
      'Pod scaling and resource management (HPA, VPA)',
      'Service mesh implementation (Istio, Linkerd)',
      'GitOps workflows (ArgoCD, Flux)',
      'RBAC and network policy configuration',
    ],
    tools: ['Kubernetes', 'Helm', 'ArgoCD', 'Istio', 'Linkerd', 'Prometheus', 'Grafana', 'kubectl'],
    useCases: [
      'Production Kubernetes cluster setup',
      'Microservices deployment orchestration',
      'Auto-scaling for variable traffic loads',
      'Multi-tenant cluster management',
    ],
  },
  {
    slug: 'app-enhancements',
    title: 'App Enhancements',
    shortDescription: 'Performance optimization, UX improvements, accessibility compliance, and technical debt reduction.',
    description: 'I audit and improve existing applications — boosting performance, enhancing user experience, achieving accessibility compliance, and cleaning up technical debt.',
    icon: sparkleIcon,
    tags: ['Performance', 'UX', 'WCAG', 'Refactoring'],
    features: [
      'Performance profiling and optimization',
      'UX/UI improvements and modernization',
      'Accessibility compliance (WCAG 2.1 AA)',
      'Code refactoring and technical debt reduction',
      'Bundle size optimization',
      'Database query optimization',
    ],
    tools: ['Lighthouse', 'WebPageTest', 'axe', 'Chrome DevTools', 'SonarQube', 'Webpack Bundle Analyzer'],
    useCases: [
      'Improving Lighthouse scores',
      'Reducing page load times',
      'Making apps screen-reader friendly',
      'Modernizing legacy codebases',
    ],
  },
  {
    slug: 'new-features',
    title: 'Adding New Features',
    shortDescription: 'Feature scoping, seamless integration with existing codebases, testing, and documentation.',
    description: 'I scope, design, and implement new features that integrate cleanly with your existing codebase — with full test coverage and documentation so your team can maintain them confidently.',
    icon: plusIcon,
    tags: ['Feature Dev', 'Integration', 'Testing', 'Docs'],
    features: [
      'Feature scoping and technical planning',
      'Seamless integration with existing codebase',
      'Unit, integration, and E2E testing',
      'Documentation updates (code + user-facing)',
      'Code review and knowledge transfer',
      'Incremental delivery with feature flags',
    ],
    tools: ['Jest', 'Vitest', 'Playwright', 'Cypress', 'Storybook', 'JSDoc', 'Confluence'],
    useCases: [
      'Adding payment integration to existing app',
      'Building new dashboard modules',
      'Implementing real-time notifications',
      'Adding multi-language support',
    ],
  },
];
