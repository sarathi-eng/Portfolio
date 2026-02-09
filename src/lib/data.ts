import {
    Code2,
    Database,
    Brain,
    Shield,
    Globe,
    Cpu,
    CheckCircle2,
    FileText,
    type IconComponent,
} from "@/components/icons";

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    tech: string[];
    language: string;
    github: string;
    live?: string;
    category: "ai" | "fullstack" | "backend" | "tools";
    gradient: string;
    icon: IconComponent;
    architecture?: string;
    tradeoffs?: string[];
    challenges?: string[];
    nextImprovements?: string[];
    keyFiles?: { label: string; path: string }[];
    operationalNotes?: string[];
    whatFailed?: string[];
    metric?: string;
}

export interface Skill {
    name: string;
    icon: IconComponent;
    level: number;
    color: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
    icon: IconComponent;
    gradient: string;
}

export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    description: string;
    fileUrl: string;
    icon: IconComponent;
}

export interface EngineeringHighlight {
    metric: string;
    label: string;
    detail: string;
}

export const engineeringHighlights: EngineeringHighlight[] = [
    {
        metric: "11",
        label: "Backend Systems Built",
        detail: "Auth, caching, service-oriented backends, async AI pipelines",
    },
    {
        metric: "5",
        label: "RAG & AI Pipelines",
        detail: "Vector search, embedding caches, multi-LLM orchestration",
    },
    {
        metric: "6",
        label: "Languages Used in Projects",
        detail: "Python, Java, Rust, Go, C#, TypeScript",
    },
    {
        metric: "3",
        label: "Security Implementations",
        detail: "AES-256-GCM encryption, JWT auth, RBAC flows",
    },
];

export const productionReadiness = {
    reliability: [
        "Structured error handling with typed exceptions",
        "Request validation & input sanitization on all endpoints",
        "Graceful degradation when external APIs fail",
        "Retry logic with exponential backoff for LLM calls",
    ],
    deployment: [
        "Containerized services with Docker & Docker Compose",
        "Environment config separation (dev / staging / prod)",
        "K8s manifests prepared (tested on local cluster)",
        "Health check endpoints for service monitoring",
    ],
    performance: [
        "Embedding caching to avoid repeated vector computation",
        "Async endpoints for non-blocking AI inference",
        "TTL-based cache invalidation for financial data",
        "Connection pooling for database operations",
    ],
};

export const engineeringPrinciples = [
    "Prefer simple systems over complex ML when the problem allows it",
    "Optimize latency before accuracy — users leave before models converge",
    "APIs first, UI later — every system starts as a service",
    "Avoid blocking operations — async by default for inference",
    "Design for debugging — structured logs and trace correlation",
    "Ship containers, not instructions — reproducible environments always",
];

export const personalInfo = {
    name: "SARATHI S",
    username: "sarathi-eng",
    title: "Backend & AI Systems Engineer",
    tagline: "I build API-first intelligent systems — auth flows, retrieval pipelines, async inference, and deployable backend architectures.",
    bio: "I design and ship backend systems that integrate AI into real workflows. My projects handle encrypted data pipelines, vector similarity search, service-oriented architectures, and async inference — not as demos, but as deployable systems with auth, error handling, and containerized infrastructure.",
    avatar: "https://avatars.githubusercontent.com/u/250086307?v=4",
    github: "https://github.com/sarathi-eng",
    linkedin: "https://www.linkedin.com/in/sarathi-eng/",
    email: "sarathijee2024@gmail.com",
    location: "IIIT Kottayam, India",
    stats: {
        repos: 11,
        contributions: 29,
        languages: 6,
        yearStarted: 2024,
    },
};

export const education = {
    degree: "B.Tech in Computer Science Engineering",
    university: "Indian Institute of Information Technology (IIIT) Kottayam",
    period: "2024 – 2028 (Expected)",
    focusAreas: [
        "Backend Architecture & API Design",
        "AI/ML Pipeline Engineering",
        "Distributed Systems",
        "Security & Auth Flows",
    ],
};

export const interests = [
    "System Design & Architecture",
    "AI Pipeline Engineering",
    "API-First Development",
    "Developer Tooling",
    "Observability & Tracing",
    "Production-Grade Security",
];

export const currentlyDoing = [
    "Building async AI inference pipelines with FastAPI",
    "Designing multi-service backend architectures",
    "Implementing vector search with embedding caching strategies",
    "Shipping containerized apps with Docker Compose",
    "Contributing to open-source backend tooling",
];

export const certificates: Certificate[] = [
    {
        id: "deloitte-internship",
        title: "Internship Certificate",
        issuer: "Deloitte",
        date: "2026",
        description: "Internship completion certificate.",
        fileUrl: "/certificates/Deloitte.pdf",
        icon: FileText,
    },
    {
        id: "resume-feb",
        title: "Resume",
        issuer: "Sarathi S",
        date: "Feb 2026",
        description: "Latest resume.",
        fileUrl: "/certificates/Resume_Feb.pdf",
        icon: FileText,
    },
];

export const projects: Project[] = [
    {
        id: "doctor-appointment",
        title: "Doctor Appointment System",
        description:
            "End-to-end healthcare platform with AES-256-GCM encrypted PII, JWT auth, and role-based access for patients, doctors, and admins.",
        longDescription:
            "Full-stack appointment system with Express.js API layer, SQLite persistence, and React frontend. Implements AES-256-GCM encryption for all patient PII at rest, JWT-based session management, and granular RBAC with 3 distinct permission levels.",
        tech: ["React", "Node.js", "Express", "SQLite", "JWT", "AES-256"],
        language: "JavaScript",
        github: "https://github.com/sarathi-eng/Doctor-Appointment-System",
        category: "fullstack",
        gradient: "from-emerald-500 to-cyan-500",
        icon: Shield,
        architecture: "Client (React) → Express API → Auth Middleware (JWT) → Encryption Layer (AES-256-GCM) → SQLite",
        tradeoffs: [
            "Chose SQLite over PostgreSQL — dataset is small, single-server deployment simplifies ops",
            "AES-256-GCM over bcrypt for PII — need reversible encryption for displaying patient data, not just hashing",
            "Stateless JWT over sessions — scales horizontally without shared session store",
        ],
        challenges: [
            "Encrypting PII at rest without degrading query performance",
            "Implementing granular RBAC across 3 user roles with different data visibility",
            "Handling concurrent appointment slot conflicts with optimistic locking",
        ],
        nextImprovements: [
            "Add rate limiting per user role to prevent booking abuse",
            "Implement audit logging for compliance tracking",
            "Migrate to PostgreSQL for production-scale deployments",
        ],
        keyFiles: [
            { label: "Auth middleware", path: "middleware/auth.js" },
            { label: "Encryption service", path: "utils/encryption.js" },
            { label: "RBAC logic", path: "middleware/rbac.js" },
        ],
        operationalNotes: [
            "Tested with ~50 patient records on local SQLite instance",
            "AES-256-GCM adds ~2ms overhead per encrypt/decrypt cycle",
            "JWT tokens configured with 24h expiry, refresh flow not yet implemented",
        ],
        whatFailed: [
            "Initial RBAC logic leaked admin routes to patient role — rewrote middleware",
            "Encryption key was hardcoded in first version — moved to env vars",
            "SQLite concurrent writes caused SQLITE_BUSY — added retry with backoff",
        ],
        metric: "~2ms encryption overhead per field",
    },
    {
        id: "rag-chatbot",
        title: "RAG ChatBot",
        description:
            "Document Q&A system processing PDFs through chunking, FAISS vector indexing, and semantic retrieval with multi-LLM backend support.",
        longDescription:
            "Async RAG pipeline: PDF ingestion → text chunking → embedding generation → FAISS vector store → semantic similarity retrieval → LLM response synthesis. Supports OpenRouter, OpenAI, and Ollama backends.",
        tech: ["FastAPI", "React", "FAISS", "LangChain", "Python", "Vite"],
        language: "Python",
        github: "https://github.com/sarathi-eng/RAG-ChatBot",
        category: "ai",
        gradient: "from-violet-500 to-purple-500",
        icon: Brain,
        architecture: "PDF Upload → Chunker → Embeddings API → FAISS Index → Query → Semantic Retrieval → LLM → Cached Response",
        tradeoffs: [
            "Used FAISS over Pinecone — avoids vendor lock-in and API costs for campus-scale data",
            "Embedding search over fine-tuning — reduces compute cost, works with any LLM backend",
            "LangChain orchestration over custom pipeline — faster iteration at cost of some flexibility",
        ],
        challenges: [
            "Handling documents exceeding LLM context windows with recursive chunking",
            "Reducing embedding computation costs with vector caching strategy",
            "Supporting hot-swappable LLM backends without pipeline changes",
        ],
        nextImprovements: [
            "Streaming responses for real-time UX",
            "Batch embedding generation for bulk uploads",
            "Hybrid search combining dense + sparse retrieval",
        ],
        keyFiles: [
            { label: "RAG pipeline", path: "backend/rag_pipeline.py" },
            { label: "Retrieval engine", path: "backend/retrieval.py" },
            { label: "LLM router", path: "backend/llm_providers.py" },
        ],
        operationalNotes: [
            "Tested on ~120 PDF documents (lecture notes + project docs)",
            "Avg retrieval latency: ~350–600ms on local machine (no GPU)",
            "Optimized chunk size to 512 tokens after context overflow issues",
            "Memory constrained → switched from full context to retrieval-only",
        ],
        whatFailed: [
            "Synchronous inference blocked all requests — moved to async endpoints",
            "Large documents exceeded token limits — added recursive chunking",
            "Repeated embedding calls increased latency 3x — added vector cache",
        ],
        metric: "~350–600ms avg retrieval latency on 120 docs",
    },
    {
        id: "open-backend",
        title: "OpenCore Backend",
        description:
            "Service-oriented backend with Rust API gateway, Spring Boot services, Kafka event streaming, and k8s manifests prepared.",
        longDescription:
            "Deployable backend architecture: Rust gateway handles routing/rate-limiting, Spring Boot services manage auth, billing, and notifications. Kafka provides async event streaming between services. K8s manifests tested on local cluster.",
        tech: ["Java", "Rust", "Spring Boot", "Kafka", "PostgreSQL", "Docker"],
        language: "Java / Rust",
        github: "https://github.com/sarathi-eng/Open-Backend",
        category: "backend",
        gradient: "from-orange-500 to-red-500",
        icon: Cpu,
        architecture: "Client → Rust Gateway (rate limit) → Kafka Bus → Spring Boot Services [Auth | Billing | Notifications] → PostgreSQL",
        tradeoffs: [
            "Rust gateway over Node.js — lower latency, better memory safety for request routing",
            "Kafka over REST inter-service calls — eventual consistency acceptable, decouples services",
            "PostgreSQL per-service over shared DB — data isolation at cost of cross-service joins",
        ],
        challenges: [
            "Designing inter-service communication with eventual consistency via Kafka",
            "Building a low-latency Rust gateway with configurable rate limiting",
            "Managing distributed transactions across auth, billing, and notification services",
        ],
        nextImprovements: [
            "Add distributed tracing with OpenTelemetry integration",
            "Implement circuit breakers for service resilience",
            "Add API versioning strategy for backward compatibility",
        ],
        keyFiles: [
            { label: "Rust gateway", path: "gateway/src/main.rs" },
            { label: "Auth service", path: "services/auth/src/main/java/" },
            { label: "Kafka config", path: "docker-compose.yml" },
        ],
        operationalNotes: [
            "Rust gateway tested at ~200 req/s on local Docker setup",
            "Kafka consumer lag monitored via docker-compose logs",
            "K8s manifests tested on Minikube, not cloud-deployed yet",
            "Each service has its own PostgreSQL schema — no shared tables",
        ],
        whatFailed: [
            "Kafka consumer deserialization errors on schema changes — added versioned schemas",
            "Rust gateway panicked on malformed headers — added input validation",
            "Services started out of order — added health check dependencies in compose",
        ],
        metric: "~200 req/s gateway throughput (local Docker)",
    },
    {
        id: "ai-resume-analyzer",
        title: "AI Resume Analyzer",
        description:
            "Pipeline: PDF parsing → entity extraction → job description embedding comparison → gap score with actionable improvement suggestions.",
        longDescription:
            "Async pipeline: Parses PDF resumes, extracts structured entities, generates embeddings, compares against job description vectors. Zero data persistence — privacy-first stateless API.",
        tech: ["FastAPI", "React", "OpenAI", "Python", "Vite"],
        language: "Python",
        github: "https://github.com/sarathi-eng/AI-Resume-Analyzer",
        category: "ai",
        gradient: "from-blue-500 to-indigo-500",
        icon: Brain,
        architecture: "PDF Upload → Text Extraction → Entity Parser → Embedding Gen → Vector Comparison → Gap Analysis → Score + Suggestions",
        tradeoffs: [
            "Stateless API over persistent storage — privacy-first, no resume data retention",
            "OpenAI embeddings over local models — better accuracy, acceptable latency for single-resume use",
            "Structured entity extraction over raw text comparison — more actionable gap analysis",
        ],
        challenges: [
            "Designing async pipeline to avoid blocking during LLM inference",
            "Extracting structured entities from unstructured resume PDFs",
            "Preventing hallucinated improvement suggestions with grounded context",
        ],
        nextImprovements: [
            "Add batch processing for recruiter-side bulk analysis",
            "Support multiple resume formats (DOCX, LinkedIn export)",
            "Implement confidence intervals for match scores",
        ],
        keyFiles: [
            { label: "Analysis pipeline", path: "backend/analyzer.py" },
            { label: "Entity extractor", path: "backend/parser.py" },
            { label: "Score engine", path: "backend/scoring.py" },
        ],
        operationalNotes: [
            "Tested with ~30 resumes against 10 different job descriptions",
            "Avg response time: ~1.2s per resume (OpenAI API latency dominates)",
            "PDF text extraction fails on scanned images — only works with text PDFs",
            "No data stored — stateless by design, all processing in memory",
        ],
        whatFailed: [
            "First version used synchronous OpenAI calls — blocked the entire server",
            "Entity extraction returned inconsistent schemas — added Pydantic validation",
            "Gap suggestions hallucinated skills not in the JD — added grounding check",
        ],
        metric: "~1.2s avg per resume analysis (API-bound)",
    },
    {
        id: "manager-gpt",
        title: "ManagerGPT",
        description:
            "Project management API with GPT-powered task analysis, automated team summaries, and SQLite-backed workflow persistence.",
        longDescription:
            "Backend system combining GPT capabilities with structured project management: task decomposition, priority scoring, team workload analysis, and automated progress summaries.",
        tech: ["Python", "FastAPI", "SQLite", "React", "AI/ML"],
        language: "Python",
        github: "https://github.com/sarathi-eng/ManagerGPT",
        category: "ai",
        gradient: "from-pink-500 to-rose-500",
        icon: Brain,
        architecture: "User Input → FastAPI → Task Decomposer (GPT) → Priority Scorer → SQLite State → Summary Generator → Dashboard",
        tradeoffs: [
            "SQLite over PostgreSQL — lightweight single-user workflow, no need for concurrent writes",
            "GPT for task decomposition over rule-based — handles ambiguous project descriptions better",
            "Synchronous summaries over streaming — simpler state management for MVP",
        ],
        challenges: [
            "Structuring GPT output into actionable task breakdowns with consistent schema",
            "Implementing persistent workflow state across async AI operations",
            "Rate-limiting AI calls while maintaining responsive user experience",
        ],
        nextImprovements: [
            "Add streaming responses for real-time task generation",
            "Implement team collaboration with multi-user workflows",
            "Add Gantt chart visualization for task dependencies",
        ],
        keyFiles: [
            { label: "Task decomposer", path: "backend/decomposer.py" },
            { label: "GPT integration", path: "backend/ai_service.py" },
            { label: "Workflow state", path: "backend/models.py" },
        ],
        operationalNotes: [
            "Tested with ~15 project descriptions of varying complexity",
            "GPT-3.5-turbo used to keep API costs under $0.02/request",
            "SQLite DB size stays under 5MB for typical project workflows",
            "Task decomposition quality drops on vague single-line inputs",
        ],
        whatFailed: [
            "GPT returned free-form text instead of JSON — added structured output parsing",
            "Priority scoring was random without context — added project metadata prompts",
            "Lost workflow state on server restart — added SQLite persistence layer",
        ],
        metric: "~$0.02 avg cost per task decomposition call",
    },
    {
        id: "opentracex",
        title: "OpenTraceX",
        description:
            "Tracing prototype with instrumentation agents for Python, Java, Go, Rust, and C# — span collection and correlation across services.",
        longDescription:
            "Observability prototype providing trace collection, span correlation, and performance visualization across polyglot service setups. Instrumentation agents are early-stage prototypes.",
        tech: ["Python", "Java", "Go", "Rust", "C#", "C++"],
        language: "Multi-language",
        github: "https://github.com/sarathi-eng/OpenTraceX",
        category: "tools",
        gradient: "from-amber-500 to-yellow-500",
        icon: Globe,
        architecture: "App Code → Language Agent (auto-instrument) → Span Collector → Trace Correlator → Storage → Flame Graph UI",
        tradeoffs: [
            "Custom agents over OpenTelemetry SDK — deeper control over instrumentation overhead",
            "Pull-based collection over push — reduces agent-side complexity and network chatter",
            "Flame graph over Jaeger-style timeline — better for identifying hot paths in latency",
        ],
        challenges: [
            "Correlating trace spans across services with different language runtimes",
            "Minimizing instrumentation overhead to <2% latency impact",
            "Designing a unified trace format compatible with OpenTelemetry standards",
        ],
        nextImprovements: [
            "Add anomaly detection on trace latency distributions",
            "Implement trace-based alerting rules",
            "Support sampling strategies for high-throughput services",
        ],
        keyFiles: [
            { label: "Python agent", path: "agents/python/tracer.py" },
            { label: "Span correlator", path: "collector/correlator.py" },
            { label: "Trace format", path: "spec/trace_format.md" },
        ],
        operationalNotes: [
            "Python agent tested on 3 Flask services running locally",
            "Span correlation works for 2-hop call chains, untested beyond that",
            "Trace data stored in flat JSON files — no database backend yet",
            "Go and Rust agents are scaffolded, not fully instrumented",
        ],
        whatFailed: [
            "Trace IDs collided under concurrent requests — switched to UUID v4",
            "Python agent added ~8% latency initially — reduced to ~3% with lazy init",
            "Cross-language span format inconsistencies — standardized on OpenTelemetry spec",
        ],
        metric: "~3% agent overhead after optimization (Python)",
    },
    {
        id: "exchange-rate",
        title: "Exchange Rate Cache",
        description:
            "High-throughput caching service for real-time exchange rates with TTL-based invalidation and REST API layer.",
        longDescription:
            "Caching service built for financial data: fetches rates from upstream providers, stores with configurable TTL, serves via REST API with sub-millisecond cache hits.",
        tech: ["C#", ".NET", "Redis", "REST API"],
        language: "C#",
        github: "https://github.com/sarathi-eng/Exchange-rate-caching-service",
        category: "backend",
        gradient: "from-teal-500 to-green-500",
        icon: Database,
        architecture: "Client → REST API → Cache Layer (Redis + TTL) → Upstream Rate Provider → Async Refresh Worker",
        tradeoffs: [
            "Redis over in-memory cache — survives service restarts, shared across instances",
            "TTL-based invalidation over webhook-based — upstream APIs don't support push notifications",
            "Async refresh worker over on-demand fetch — prevents cache stampede on expiry",
        ],
        challenges: [
            "Implementing TTL-based cache invalidation without stale data serving",
            "Handling upstream API rate limits with request queuing and backoff",
            "Designing cache warming strategy for frequently accessed currency pairs",
        ],
        nextImprovements: [
            "Add cache stampede prevention with probabilistic early expiration",
            "Implement rate limit budget tracking per upstream provider",
            "Add historical rate storage for trend analysis",
        ],
        keyFiles: [
            { label: "Cache service", path: "Services/CacheService.cs" },
            { label: "Rate provider", path: "Providers/ExchangeRateProvider.cs" },
            { label: "API controller", path: "Controllers/RateController.cs" },
        ],
        operationalNotes: [
            "Tested with 12 currency pairs from a free-tier exchange rate API",
            "Cache hit response: <1ms, cache miss with upstream fetch: ~400ms",
            "TTL set to 5 minutes — balances freshness vs API rate limits",
            "Redis runs in Docker alongside the service for local dev",
        ],
        whatFailed: [
            "Cache stampede on TTL expiry — all requests hit upstream simultaneously",
            "Upstream API returned stale data during rate limit — added fallback logic",
            "Redis connection dropped silently — added health check retry loop",
        ],
        metric: "<1ms cache hit, ~400ms cache miss (12 pairs)",
    },
    {
        id: "intent-guard-ai",
        title: "Intent Guard AI",
        description:
            "Intent classification API with safety guardrails — classifies user input, flags risky patterns, and enforces policy constraints.",
        longDescription:
            "Security-focused AI system: classifies incoming user intent using NLP models, applies configurable safety guardrails, and blocks or modifies requests that violate policy constraints.",
        tech: ["Python", "NLP", "FastAPI", "Machine Learning"],
        language: "Python",
        github: "https://github.com/sarathi-eng/Intent-Guard-AI",
        category: "ai",
        gradient: "from-cyan-500 to-blue-500",
        icon: Shield,
        architecture: "User Input → Tokenizer → Intent Classifier → Policy Engine (rules) → Allow / Block / Modify → Response",
        tradeoffs: [
            "Rule-based policy engine over ML-only — explicit, auditable safety decisions",
            "Local classifier over cloud API — lower latency, no data leaving the system",
            "Conservative blocking over permissive filtering — safety-critical context requires false-positive tolerance",
        ],
        challenges: [
            "Balancing false positive rates against safety coverage thresholds",
            "Designing pluggable classifier architecture for swappable NLP models",
            "Handling adversarial prompt injection attempts in classification layer",
        ],
        nextImprovements: [
            "Add adversarial robustness testing suite",
            "Implement A/B testing for classifier model swaps",
            "Support multi-language intent classification",
        ],
        keyFiles: [
            { label: "Intent classifier", path: "core/classifier.py" },
            { label: "Policy engine", path: "core/policy_engine.py" },
            { label: "Guard middleware", path: "middleware/guard.py" },
        ],
        operationalNotes: [
            "Tested on ~200 sample prompts (mix of safe and adversarial inputs)",
            "Classification latency: ~15ms per input with local model",
            "False positive rate: ~8% on adversarial test set — needs tuning",
            "Policy rules defined in YAML config, not hardcoded",
        ],
        whatFailed: [
            "Initial keyword-based filter was trivially bypassed with misspellings",
            "Model confidence thresholds too aggressive — blocked 20% of safe inputs",
            "Policy engine had no fallback — unclassified inputs were silently passed through",
        ],
        metric: "~15ms classification latency, ~8% false positive rate",
    },
    {
        id: "ai-fake-job-posting-detector",
        title: "AI Fake Job Posting Detector",
        description:
            "Multi-signal fraud detection: text pattern analysis, company verification, salary anomaly detection with explainable risk scores.",
        longDescription:
            "AI fraud detection system analyzing job postings across multiple signals: NLP text pattern matching, company legitimacy verification, salary range anomaly detection. Returns explainable risk scores via REST API.",
        tech: ["Python", "FastAPI", "TypeScript", "Next.js", "Docker"],
        language: "Python / TypeScript",
        github: "https://github.com/sarathi-eng/AI-Fake-Job-Posting-Detector",
        category: "ai",
        gradient: "from-rose-500 to-pink-500",
        icon: Shield,
        architecture: "Job Posting → Text Analyzer → Company Verifier → Salary Checker → Signal Aggregator → Risk Score + Explanation",
        tradeoffs: [
            "Multi-signal aggregation over single-model prediction — more explainable, easier to debug false positives",
            "Rule-based salary anomaly detection over statistical models — works with small training sets",
            "Dockerized deployment over serverless — consistent inference latency, no cold starts",
        ],
        challenges: [
            "Combining multiple weak signals into reliable composite risk scores",
            "Handling dataset imbalance — legitimate postings vastly outnumber fraudulent ones",
            "Making risk scores explainable with human-readable reasoning chains",
        ],
        nextImprovements: [
            "Add feedback loop for user-reported false positives",
            "Implement temporal analysis for posting pattern detection",
            "Add browser extension for real-time job board scanning",
        ],
        keyFiles: [
            { label: "Signal aggregator", path: "backend/aggregator.py" },
            { label: "Text analyzer", path: "backend/text_analysis.py" },
            { label: "Risk scorer", path: "backend/scoring.py" },
        ],
        operationalNotes: [
            "Trained on ~800 job postings (Kaggle dataset, 70/30 split)",
            "Composite risk score accuracy: ~76% on test set",
            "Avg inference time: ~600ms per posting (text analysis dominates)",
            "Docker image size: ~1.2GB due to NLP model weights",
        ],
        whatFailed: [
            "Single-model approach plateaued at 68% accuracy — switched to multi-signal",
            "Salary anomaly detector failed on international postings — added currency normalization",
            "Explanation generation produced generic text — added signal-specific templates",
        ],
        metric: "~76% accuracy on 800-posting test set",
    },
    {
        id: "resume-op",
        title: "Resume-op",
        description:
            "Resume optimizer SaaS with decoupled frontend/backend services, Docker Compose orchestration, and structured analysis API.",
        longDescription:
            "SaaS architecture with separate TypeScript frontend and Python backend. Backend provides structured resume analysis via REST API. Docker Compose manages service orchestration.",
        tech: ["TypeScript", "Python", "Docker", "React"],
        language: "TypeScript / Python",
        github: "https://github.com/sarathi-eng/Resume-op",
        category: "fullstack",
        gradient: "from-indigo-500 to-violet-500",
        icon: Code2,
        architecture: "React Frontend → API Gateway → Python Analysis Service → Response Formatter → Client",
        tradeoffs: [
            "Decoupled services over monolith — independent scaling and deployment of frontend/backend",
            "Docker Compose over bare metal — reproducible dev environment, one-command setup",
            "REST API over GraphQL — simpler contract for CRUD-style resume operations",
        ],
        challenges: [
            "Designing clean API contract between decoupled frontend and backend services",
            "Managing file upload handling across service boundaries",
            "Implementing Docker Compose health checks for service dependency ordering",
        ],
        nextImprovements: [
            "Add WebSocket for real-time analysis progress",
            "Implement resume version diffing",
            "Add CI/CD pipeline with automated testing",
        ],
        keyFiles: [
            { label: "Analysis API", path: "backend/api/routes.py" },
            { label: "Docker setup", path: "docker-compose.yml" },
            { label: "Frontend API client", path: "frontend/src/api/client.ts" },
        ],
        operationalNotes: [
            "Docker Compose spins up both services in ~8s on local machine",
            "Backend API handles PDFs up to 5MB — larger files timeout",
            "Frontend-to-backend latency: ~200ms on localhost Docker network",
            "No CI/CD yet — manual docker-compose up for deployment",
        ],
        whatFailed: [
            "CORS misconfiguration blocked all frontend requests initially",
            "File upload multipart parsing failed on large resumes — added size limits",
            "Docker Compose services started before DB was ready — added healthcheck wait",
        ],
        metric: "~8s cold start, ~200ms API latency (local Docker)",
    },
    {
        id: "veridict",
        title: "VeriDict",
        description:
            "Planned verification & validation toolkit — repo scaffolded, architecture design in progress. No code yet.",
        longDescription:
            "Early-stage project. Repo initialized with Apache 2.0 license. Currently in architecture and research phase — no implementation code yet.",
        tech: ["Not started"],
        language: "TBD",
        github: "https://github.com/sarathi-eng/VeriDict",
        category: "tools",
        gradient: "from-slate-500 to-zinc-500",
        icon: CheckCircle2,
    },
];

export const skillCategories: SkillCategory[] = [
    {
        title: "Backend Engineering",
        skills: [
            "Async API Design",
            "REST Architecture",
            "Microservice Patterns",
            "Database Modeling",
            "Caching Strategies",
            "Auth Flows (JWT, RBAC)",
        ],
        icon: Database,
        gradient: "from-violet-500 to-purple-500",
    },
    {
        title: "AI/ML Pipelines",
        skills: [
            "RAG Pipeline Design",
            "Vector Search & Indexing",
            "Embedding Caching",
            "LLM Orchestration",
            "Prompt Engineering",
            "Multi-Model Routing",
        ],
        icon: Brain,
        gradient: "from-pink-500 to-rose-500",
    },
    {
        title: "Languages & Runtimes",
        skills: [
            "Python (Primary)",
            "Java / Spring Boot",
            "Rust (Systems)",
            "TypeScript / Node.js",
            "C# / .NET",
            "Go (Tooling)",
        ],
        icon: Code2,
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        title: "Infrastructure",
        skills: [
            "Docker & Compose",
            "Kubernetes Manifests",
            "Kafka Event Streaming",
            "PostgreSQL / SQLite",
            "Redis Caching",
            "CI/CD Pipelines",
        ],
        icon: Cpu,
        gradient: "from-emerald-500 to-teal-500",
    },
    {
        title: "Security",
        skills: [
            "AES-256-GCM Encryption",
            "JWT Session Management",
            "Role-Based Access Control",
            "Input Validation & Sanitization",
            "CORS Policy Design",
            "Secure Data Pipelines",
        ],
        icon: Shield,
        gradient: "from-red-500 to-pink-500",
    },
    {
        title: "Observability & Quality",
        skills: [
            "Distributed Tracing",
            "Performance Profiling",
            "Error Handling Patterns",
            "API Contract Testing",
            "Log Aggregation",
            "Health Check Design",
        ],
        icon: Globe,
        gradient: "from-orange-500 to-amber-500",
    },
];

export const experiences = [
    {
        role: "B.Tech Computer Science",
        type: "IIIT Kottayam",
        period: "2024 – 2028",
        description:
            "Building production-style backend systems and AI pipelines. Focus on shipping deployable code with proper auth, error handling, and containerized infrastructure.",
        highlights: [
            "11 backend systems with auth & encryption",
            "5 AI/RAG pipelines in deployable architecture",
            "6 languages used: Python, Java, Rust, Go, C#, TS",
            "Deloitte Data Analytics simulation (Forage)",
        ],
    },
];
