import type { Part } from './courseContent';

export const parts5to12: Part[] = [
  {
    id: "part-v",
    title: "Part V - Backend Fundamentals",
    description: "APIs, background work, and real-world integrations.",
    topics: [
      {
        id: "layered-architecture",
        title: "1. Layered Architecture",
        whyItMatters: "This module develops expert intuition for layered architecture in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      },
      {
        id: "rest-design",
        title: "2. REST Design",
        whyItMatters: "This module develops expert intuition for REST design in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      },
      {
        id: "graphql-design",
        title: "3. GraphQL Design",
        whyItMatters: "This module develops expert intuition for GraphQL design in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      },
      {
        id: "rpc-grpc",
        title: "4. RPC and gRPC Basics",
        whyItMatters: "This module develops expert intuition for RPC and gRPC basics in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      },
      {
        id: "validation-errors",
        title: "5. Validation and Error Modeling",
        whyItMatters: "This module develops expert intuition for validation and error modeling in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      },
      {
        id: "background-jobs",
        title: "6. Background Jobs and Schedulers",
        whyItMatters: "This module develops expert intuition for background jobs and schedulers in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      },
      {
        id: "email-systems",
        title: "7. Email Delivery and Deliverability",
        whyItMatters: "This module develops expert intuition for email systems in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      },
      {
        id: "file-uploads",
        title: "8. File Uploads and Media Pipelines",
        whyItMatters: "This module develops expert intuition for file uploads and media in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
        commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
        implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
        debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
        exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
        expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
      }
    ]
  }
];

// Part VI - Auth and Identity
const partVI: Part = {
  id: "part-vi",
  title: "Part VI - Auth and Identity",
  description: "Identity, authorization, and abuse resistance.",
  topics: [
    {
      id: "password-mfa",
      title: "1. Password Storage and MFA",
      whyItMatters: "This module develops expert intuition for password storage and MFA in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "sessions-jwt",
      title: "2. Sessions vs JWT",
      whyItMatters: "This module develops expert intuition for sessions vs JWT in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "oauth-oidc",
      title: "3. OAuth2 and OIDC",
      whyItMatters: "This module develops expert intuition for OAuth2 and OIDC in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "saml",
      title: "4. SAML Basics",
      whyItMatters: "This module develops expert intuition for SAML basics in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "rbac-abac",
      title: "5. RBAC vs ABAC",
      whyItMatters: "This module develops expert intuition for RBAC vs ABAC in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "multi-tenant-auth",
      title: "6. Multi-tenant Auth Models",
      whyItMatters: "This module develops expert intuition for multi-tenant auth models in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "credential-stuffing",
      title: "7. Threats: Credential Stuffing",
      whyItMatters: "This module develops expert intuition for credential stuffing defenses in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "audit-logs",
      title: "8. Audit Logs and Compliance Basics",
      whyItMatters: "This module develops expert intuition for audit logs in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    }
  ]
};

// Part VII - Databases and Data Modeling
const partVII: Part = {
  id: "part-vii",
  title: "Part VII - Databases and Data Modeling",
  description: "Schema design, query performance, and operational correctness.",
  topics: [
    {
      id: "normalization",
      title: "1. Normalization and Constraints",
      whyItMatters: "This module develops expert intuition for normalization and constraints in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "index-design",
      title: "2. Index Design and Query Planning",
      whyItMatters: "This module develops expert intuition for index design and query planning in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "transactions",
      title: "3. Transactions and Isolation",
      whyItMatters: "This module develops expert intuition for transactions and isolation in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "mvcc-vacuum",
      title: "4. MVCC and Vacuum",
      whyItMatters: "This module develops expert intuition for MVCC and vacuum in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "replication",
      title: "5. Replication and Failover",
      whyItMatters: "This module develops expert intuition for replication and failover in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "migrations",
      title: "6. Migrations at Scale",
      whyItMatters: "This module develops expert intuition for migrations at scale in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "search",
      title: "7. Search: Full Text vs External",
      whyItMatters: "This module develops expert intuition for search systems in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "analytics",
      title: "8. Analytics and OLAP Basics",
      whyItMatters: "This module develops expert intuition for analytics basics in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    }
  ]
};

parts5to12.push(partVI, partVII);

// Part VIII - Storage Engines and Algorithms
const partVIII: Part = {
  id: "part-viii",
  title: "Part VIII - Storage Engines and Algorithms",
  description: "Internal algorithms that shape performance and correctness.",
  topics: [
    {
      id: "btrees",
      title: "1. B-trees and Buffer Pools",
      whyItMatters: "This module develops expert intuition for B-trees and buffer pools in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "lsm-trees",
      title: "2. LSM Trees and Compaction",
      whyItMatters: "This module develops expert intuition for LSM trees and compaction in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "wal",
      title: "3. Write-Ahead Logging",
      whyItMatters: "This module develops expert intuition for write-ahead logging in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "raft",
      title: "4. Consensus Overview (Raft)",
      whyItMatters: "This module develops expert intuition for consensus overview (Raft) in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "consistent-hashing",
      title: "5. Consistent Hashing",
      whyItMatters: "This module develops expert intuition for consistent hashing in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "bloom-filters",
      title: "6. Bloom Filters",
      whyItMatters: "This module develops expert intuition for bloom filters in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "rate-limiting",
      title: "7. Rate Limiting Algorithms",
      whyItMatters: "This module develops expert intuition for rate limiting algorithms in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "scheduling-queues",
      title: "8. Scheduling and Queues",
      whyItMatters: "This module develops expert intuition for scheduling and queues in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    }
  ]
};

parts5to12.push(partVIII);

// Part IX - Distributed Systems for Web Apps
const partIX: Part = {
  id: "part-ix",
  title: "Part IX - Distributed Systems for Web Apps",
  description: "Scaling patterns with queues, caches, and consistency boundaries.",
  topics: [
    {
      id: "caching-patterns",
      title: "1. Caching Patterns",
      whyItMatters: "This module develops expert intuition for caching patterns in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "cdn-caching",
      title: "2. CDN Caching and Invalidation",
      whyItMatters: "This module develops expert intuition for CDN caching and invalidation in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "queues-exactly-once",
      title: "3. Queues and Exactly-Once Effects",
      whyItMatters: "This module develops expert intuition for queues and exactly-once effects in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "event-driven",
      title: "4. Event-Driven Architecture",
      whyItMatters: "This module develops expert intuition for event-driven architecture in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "idempotency",
      title: "5. Idempotency and Deduplication",
      whyItMatters: "This module develops expert intuition for idempotency and dedupe in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "distributed-locks",
      title: "6. Distributed Locks and Pitfalls",
      whyItMatters: "This module develops expert intuition for distributed locks in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "consistency-models",
      title: "7. Consistency Models",
      whyItMatters: "This module develops expert intuition for consistency models in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "multi-region",
      title: "8. Multi-Region Patterns",
      whyItMatters: "This module develops expert intuition for multi-region patterns in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    }
  ]
};

// Part X - DevOps and Reliability
const partX: Part = {
  id: "part-x",
  title: "Part X - DevOps and Reliability",
  description: "Deployments, observability, and incident response.",
  topics: [
    {
      id: "linux",
      title: "1. Linux and Process Model",
      whyItMatters: "This module develops expert intuition for Linux fundamentals in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "docker",
      title: "2. Docker Images and Runtime",
      whyItMatters: "This module develops expert intuition for Docker and containers in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "cicd",
      title: "3. CI/CD Pipelines",
      whyItMatters: "This module develops expert intuition for CI/CD pipelines in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "canary",
      title: "4. Blue/Green and Canary Deploys",
      whyItMatters: "This module develops expert intuition for canary deploys in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "observability",
      title: "5. Observability: Logs/Metrics/Traces",
      whyItMatters: "This module develops expert intuition for observability in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "slos",
      title: "6. SLOs and Error Budgets",
      whyItMatters: "This module develops expert intuition for SLOs and error budgets in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "incident-response",
      title: "7. Incident Response",
      whyItMatters: "This module develops expert intuition for incident response in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "capacity-planning",
      title: "8. Capacity Planning",
      whyItMatters: "This module develops expert intuition for capacity planning in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    }
  ]
};

parts5to12.push(partIX, partX);

// Part XI - Security Engineering
const partXI: Part = {
  id: "part-xi",
  title: "Part XI - Security Engineering",
  description: "Threat models and hardened defaults across the stack.",
  topics: [
    {
      id: "threat-modeling",
      title: "1. Threat Modeling",
      whyItMatters: "This module develops expert intuition for threat modeling in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "xss-csrf",
      title: "2. XSS/CSRF/Injection",
      whyItMatters: "This module develops expert intuition for XSS/CSRF/injection in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "ssrf",
      title: "3. SSRF and Egress Controls",
      whyItMatters: "This module develops expert intuition for SSRF and egress controls in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "waf",
      title: "4. WAFs and Bot Mitigation",
      whyItMatters: "This module develops expert intuition for WAF and bot mitigation in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "secrets",
      title: "5. Secrets Management",
      whyItMatters: "This module develops expert intuition for secrets management in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "supply-chain",
      title: "6. Supply Chain Security",
      whyItMatters: "This module develops expert intuition for supply chain security in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "csp",
      title: "7. Secure Headers and CSP",
      whyItMatters: "This module develops expert intuition for secure headers and CSP in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "security-testing",
      title: "8. Security Testing and Scanning",
      whyItMatters: "This module develops expert intuition for security testing in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    }
  ]
};

// Part XII - Expert Projects and Mastery Tests
const partXII: Part = {
  id: "part-xii",
  title: "Part XII - Expert Projects and Mastery Tests",
  description: "Projects that force integration of everything.",
  topics: [
    {
      id: "saas-baseline",
      title: "1. SaaS Baseline Build",
      whyItMatters: "This module develops expert intuition for SaaS baseline build in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "payments-webhooks",
      title: "2. Payments and Webhooks",
      whyItMatters: "This module develops expert intuition for payments and webhooks in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "perf-hardening",
      title: "3. Performance Hardening",
      whyItMatters: "This module develops expert intuition for performance hardening in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "security-hardening",
      title: "4. Security Hardening",
      whyItMatters: "This module develops expert intuition for security hardening in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "multi-region-reads",
      title: "5. Multi-Region Read Strategy",
      whyItMatters: "This module develops expert intuition for multi-region read strategy in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "migration-drill",
      title: "6. Migration Disaster Drill",
      whyItMatters: "This module develops expert intuition for migration disaster drill in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "observability-drill",
      title: "7. Observability Drill",
      whyItMatters: "This module develops expert intuition for observability drill in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    },
    {
      id: "interview-prep",
      title: "8. Explain-it-Like-a-Lead Interview",
      whyItMatters: "This module develops expert intuition for interview-level explanations in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
      coreConcepts: ["You should be able to explain the underlying model, not just use a framework feature.", "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.", "You should be able to design interfaces that remain stable as the system evolves."],
      commonFailureModes: ["Mismatched assumptions across layers (browser vs CDN vs app vs DB).", "Inadequate validation leading to corrupted state or security issues.", "Missing observability that turns incidents into guesswork."],
      implementationNotes: ["Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.", "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.", "Use load tests and security tests to prove claims, not vibes."],
      debuggingPlaybook: ["Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.", "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).", "Add targeted instrumentation (timers, counters) before attempting optimization."],
      exercises: ["Build a minimal working example and then break it intentionally to learn the failure modes.", "Add a monitoring dashboard and a simple on-call style runbook for the feature.", "Explain tradeoffs in writing: what you chose, what you rejected, and why."],
      expertChecklist: ["Explain it from first principles without notes.", "Implement a minimal version from scratch.", "Demonstrate a failure and show how you detect + fix it."]
    }
  ]
};

parts5to12.push(partXI, partXII);
