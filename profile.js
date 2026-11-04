export const profile = {
  name: 'Steven Vu',
  description: 'Steven Vu, computer science student at Georgia Tech. Research infrastructure, low-latency systems, and automated data pipelines.'
};

export const collections = {
  experience: [
    {
      title: 'Software Development Engineer Intern · Amazon',
      label: 'Jun – Sep 2026',
      description: 'Built a self-service platform for running research workflows on Spark and EMR.',
      url: 'https://www.amazon.com/',
      technologies: ['React', 'Cloudscape', 'Apache Spark', 'Amazon EMR', 'AWS Step Functions', 'Amazon Bedrock AgentCore']
    },
    {
      title: 'Software Development Engineer Intern · Amazon',
      label: 'Jun – Sep 2025',
      description: 'Built Spark pipelines and Redis-backed Java checks to limit repeated Autocomplete impressions.',
      url: 'https://www.amazon.com/',
      technologies: ['Java', 'Redis', 'Apache Spark', 'Amazon EMR', 'AWS Step Functions', 'AWS AppConfig']
    },
    {
      title: 'Game Developer · Roblox',
      label: 'Feb 2022 – Present',
      description: 'Built gameplay and monetization systems for Roblox experiences supporting 700K concurrent players.',
      technologies: ['Luau', 'MemoryStore']
    }
  ],
  projectGroups: [
    {
      id: 'projects-distributed', title: 'Distributed systems & backend',
      projects: [
        {
          title: 'Sharded Key-Value Database', label: 'Replication',
          description: 'A sharded Go database with migration and retry handling built on HashiCorp Raft.',
          url: 'https://github.com/STEVVVU/sharded-raft-database',
          technologies: ['Go', 'HashiCorp Raft', 'BoltDB']
        },
        {
          title: 'Distributed Task Runtime', label: 'Task orchestration',
          description: 'A Go/Python task runtime with durable task graphs, worker recovery, and result references.',
          url: 'https://github.com/STEVVVU/distributed-task-runtime',
          technologies: ['Go', 'Python', 'gRPC']
        }
      ]
    },
    {
      id: 'projects-data', title: 'Data, storage & analytics',
      projects: [
        {
          title: 'StrataDB', label: 'Embedded storage',
          description: 'An embedded Rust database with a write-ahead log, snapshots, and crash-safe compaction.',
          url: 'https://github.com/STEVVVU/stratadb',
          technologies: ['Rust']
        },
        {
          title: 'Document Data Warehouse', label: 'Data pipelines',
          description: 'A document-to-warehouse pipeline with revision-aware dbt models and local DuckDB reporting.',
          url: 'https://github.com/STEVVVU/document-data-warehouse',
          technologies: ['Python', 'SQL', 'dbt', 'DuckDB']
        }
      ]
    },
    {
      id: 'projects-runtimes', title: 'Runtimes, compilers & program analysis',
      projects: [
        {
          title: 'M:N Fiber Task Runtime', label: 'Concurrency',
          description: 'Adds preferred-worker hints and atomic task claiming to Google Marl’s C++ scheduler.',
          url: 'https://github.com/STEVVVU/mn-thread-runtime',
          technologies: ['C++', 'Marl']
        },
        {
          title: 'Compiler & Virtual Machine', label: 'Language tooling',
          description: 'A Rust compiler and bytecode VM with type checking, optimization, and source diagnostics.',
          url: 'https://github.com/STEVVVU/emberlang-vm',
          technologies: ['Rust']
        }
      ]
    },
    {
      id: 'projects-ml', title: 'AI & ML infrastructure',
      projects: [
        {
          title: 'LLM Serving Engine', label: 'Inference',
          description: 'Extends nano-vllm with paged attention, prefix caching, and a local generation API.',
          url: 'https://github.com/STEVVVU/llm-serving-engine',
          technologies: ['Python', 'PyTorch', 'CUDA']
        },
        {
          title: 'ML Monitoring Pipeline', label: 'Online learning',
          description: 'An online learning pipeline that handles delayed labels, detects drift, and tracks prediction quality.',
          url: 'https://github.com/STEVVVU/driftguard-ml',
          technologies: ['Python']
        }
      ]
    },
    {
      id: 'projects-graphics', title: 'Graphics & GPU computing',
      projects: [
        {
          title: 'CUDA Path Tracer', label: 'GPU rendering',
          description: 'A CUDA renderer with BVH traversal and wavefront queues grouped by material.',
          url: 'https://github.com/STEVVVU/cuda-path-tracer',
          technologies: ['CUDA', 'C++']
        },
        {
          title: 'WebGL Asset Viewer', label: 'Browser graphics',
          description: 'A WebGL2 glTF viewer with object picking, material inspection, and context-loss recovery.',
          url: 'https://github.com/STEVVVU/lumenforge-webgl',
          technologies: ['TypeScript', 'React', 'WebGL2']
        }
      ]
    },
    {
      id: 'projects-applications', title: 'Applications & developer tools',
      projects: [
        {
          title: 'Collaborative Python Notebook', label: 'Collaboration',
          description: 'A shared Python notebook with live editing, execution traces, and offline drafts.',
          url: 'https://github.com/STEVVVU/collaborative-code-editor',
          technologies: ['TypeScript', 'Yjs', 'Pyodide']
        },
        {
          title: 'Evidence Investigation Workspace', label: 'Research tools',
          description: 'Adds saved-source quotations, claim tracking, and reviewed reports to DeerFlow.',
          url: 'https://github.com/STEVVVU/technical-evidence-workbench',
          technologies: ['Python', 'React', 'SQLite']
        }
      ]
    },
    {
      id: 'projects-mobile', title: 'Mobile & cross-platform',
      projects: [
        {
          title: 'Repairable File Bundles', label: 'File transfer',
          description: 'Adds verified file chunks and missing-part repair to LocalSend’s Flutter app.',
          url: 'https://github.com/STEVVVU/parceltrace',
          technologies: ['Dart', 'Flutter']
        }
      ]
    },
    {
      id: 'projects-security', title: 'Security & resilient storage',
      projects: [
        {
          title: 'Encrypted Semantic File Sharing', label: 'Encrypted search',
          description: 'Adds client-side encryption and local semantic search to SecuShare’s sharing workflow.',
          url: 'https://github.com/STEVVVU/encrypted-semantic-file-sharing',
          technologies: ['Python', 'Go', 'React']
        }
      ]
    }
  ]
};
