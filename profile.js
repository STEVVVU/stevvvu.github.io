export const profile = {
  name: 'Steven Vu',
  description: 'Steven Vu, computer science student at Georgia Tech. Research infrastructure, low-latency systems, and automated data pipelines.'
};

export const collections = {
  experience: [
    {
      title: 'Software Development Engineer Intern · Amazon',
      label: 'Jun – Sep 2026',
      description: 'Automated Spark research jobs with AWS Step Functions and EMR, replacing manual scripts.',
      url: 'https://www.amazon.com/',
      technologies: ['AWS Step Functions', 'EMR', 'Spark', 'Bedrock AgentCore', 'React', 'Cloudscape']
    },
    {
      title: 'Software Development Engineer Intern · Amazon',
      label: 'Jun – Sep 2025',
      description: 'Built Java rules to cap Autocomplete impressions using Redis counts.',
      url: 'https://www.amazon.com/',
      technologies: ['Java', 'Redis', 'Apache Spark', 'AWS AppConfig']
    },
    {
      title: 'Independent Game Developer · Roblox experiences',
      label: 'Feb 2022 – Present',
      description: 'Built gameplay and monetization systems for Roblox experiences supporting 700K concurrent players.',
      technologies: ['Luau', 'Real-time networking', 'MemoryStore', 'Server-authoritative gameplay']
    }
  ],
  projects: [
    {
      title: 'Sharded Key-Value Database', label: 'Distributed systems',
      description: 'A Go database with Raft replication, shard migration, and crash recovery.',
      url: 'https://github.com/STEVVVU/sharded-raft-database',
      technologies: ['Go', 'HashiCorp Raft', 'BoltDB']
    },
    {
      title: 'M:N Fiber Task Runtime', label: 'Concurrency',
      description: 'An extension of Marl’s C++ fiber scheduler with worker-local hints and work stealing.',
      url: 'https://github.com/STEVVVU/mn-thread-runtime',
      technologies: ['C++', 'Marl', 'Multithreading']
    },
    {
      title: 'LLM Serving Engine', label: 'ML infrastructure',
      description: 'A Python LLM service built on nano-vllm, with paged attention and prefix caching.',
      url: 'https://github.com/STEVVVU/llm-serving-engine',
      technologies: ['Python', 'PyTorch', 'CUDA', 'Transformers']
    }
  ]
};
