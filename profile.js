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
      technologies: ['C++', 'Marl']
    },
    {
      title: 'LLM Serving Engine', label: 'ML infrastructure',
      description: 'A Python LLM service built on nano-vllm, with paged attention and prefix caching.',
      url: 'https://github.com/STEVVVU/llm-serving-engine',
      technologies: ['Python', 'PyTorch', 'CUDA', 'Transformers']
    }
  ]
};
