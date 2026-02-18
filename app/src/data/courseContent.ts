import { parts5to12 } from './courseContentParts5-12';

export interface Topic {
  id: string;
  title: string;
  whyItMatters: string;
  coreConcepts: string[];
  commonFailureModes: string[];
  implementationNotes: string[];
  debuggingPlaybook: string[];
  exercises: string[];
  expertChecklist: string[];
  codeExample?: string;
}

export interface Part {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

export const courseParts: Part[] = [
  {
    id: "part-i",
    title: "Part I - Networking and Protocols",
    description: "You should be able to reason about the network path, caching, and protocol behavior under loss, latency, and intermediaries.",
    topics: [
      {
        id: "dns-caching",
        title: "1. DNS and Caching",
        whyItMatters: "DNS is a distributed database. Web performance and reliability depend on resolver behavior and caching at multiple layers. In production, DNS is also an operational lever (traffic shifting, blue/green, failover), so misunderstandings cause outages.",
        coreConcepts: [
          "Resolvers cache answers using TTL. Different users can see different answers based on resolver choice and geo routing.",
          "Negative caching means NXDOMAIN results are cached too. This can make fixes look 'ignored'.",
          "CNAME chains add latency and failure points; some clients cap chain length."
        ],
        commonFailureModes: [
          "Stale records due to long TTLs or resolver bugs. Mixed IPv4/IPv6 causing one family to fail.",
          "Split-horizon DNS: internal and external views differ; VPN changes behavior.",
          "CDN misrouting when CNAME points to the wrong zone or apex limitations force workarounds."
        ],
        implementationNotes: [
          "Design changes with rollout: reduce TTL in advance, then change records, then restore TTL once stable.",
          "Monitor with synthetic checks from multiple regions and different resolvers.",
          "For critical services, keep an emergency fallback hostname ready."
        ],
        debuggingPlaybook: [
          "Reproduce with dig/nslookup against specific resolvers. Compare answers and TTLs.",
          "If only some clients fail, check their resolver and whether IPv6 is preferred.",
          "Check CDN dashboards for CNAME validation and propagation status."
        ],
        exercises: [
          "Simulate a DNS cutover with TTL changes and measure propagation windows across regions.",
          "Create a failure where AAAA points to a dead target; observe browser fallback behavior.",
          "Write a runbook for 'domain works for me but not customers' with a decision tree."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ],
        codeExample: `# Examples
# dig +trace example.com
# dig @1.1.1.1 example.com A
# dig @8.8.8.8 example.com AAAA
# Compare TTL, CNAME chain, and record sets`
      },
      {
        id: "tls-certificates",
        title: "2. TLS 1.2/1.3, Certificates, and Deployment",
        whyItMatters: "TLS is the default transport security for the web. Expertise includes understanding handshakes, certificates, and operational rotation. Most real-world failures are not cryptography; they are configuration and compatibility.",
        coreConcepts: [
          "Certificates form a chain to a trusted root. Clients validate hostname, chain, and validity period.",
          "TLS 1.3 reduces handshake complexity and round trips. ALPN negotiates HTTP/1.1 vs HTTP/2 vs HTTP/3.",
          "Session resumption and 0-RTT can improve performance but may have replay considerations."
        ],
        commonFailureModes: [
          "Wrong certificate served due to missing SNI behind shared IPs.",
          "Intermediate certificate missing, causing failures on some clients.",
          "Clock skew causes 'not yet valid' and can break only some machines."
        ],
        implementationNotes: [
          "Terminate TLS at the edge when you need CDN/WAF features, but understand trust boundaries and header integrity.",
          "Rotate certs before expiry; automate issuance (ACME). Keep staging and production separated.",
          "Enable HSTS only when you are confident HTTPS is always available."
        ],
        debuggingPlaybook: [
          "Use openssl s_client and curl -v to inspect negotiated protocol and cert chain.",
          "Check ALPN for HTTP/2 negotiation and validate SNI configuration.",
          "If failures are client-specific, examine OS trust store differences and clock."
        ],
        exercises: [
          "Set up a local test with a self-signed cert; implement proper trust for development only.",
          "Deliberately omit an intermediate cert and observe which clients fail.",
          "Design a certificate rotation plan with rollback and monitoring."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ],
        codeExample: `# Inspect chain and protocol negotiation
# openssl s_client -connect example.com:443 -servername example.com -alpn h2
# curl -vI https://example.com`
      },
      {
        id: "http-semantics",
        title: "3. HTTP Semantics, Caching, and Validators",
        whyItMatters: "HTTP is not just transport; it is a set of semantics that intermediaries rely on. If you violate it, retries and caches bite you. Clever caching is a major cost/perf lever, but correctness comes first.",
        coreConcepts: [
          "Safe vs idempotent methods: GET is safe; PUT/DELETE are intended to be idempotent.",
          "Validators: ETag/If-None-Match and Last-Modified/If-Modified-Since enable 304 responses.",
          "Cache-Control directives (max-age, s-maxage, stale-while-revalidate) control freshness at different layers."
        ],
        commonFailureModes: [
          "Serving personalized content with shared caching (missing Vary), leaking data.",
          "Caching errors incorrectly (e.g., caching 500 responses) causing prolonged incidents.",
          "Confusing client cache vs CDN cache vs origin cache leading to 'it still shows old content'."
        ],
        implementationNotes: [
          "Use immutable, content-hashed URLs for static assets and long max-age.",
          "For dynamic content, use ETags or short TTL with revalidation. Always set Vary for negotiated resources.",
          "For APIs, prefer explicit caching behavior and avoid accidental caching of auth responses."
        ],
        debuggingPlaybook: [
          "Capture response headers at each hop (browser devtools, CDN logs, origin logs).",
          "Force bypass caches to confirm origin behavior, then reintroduce caches step-by-step.",
          "Use synthetic tests that verify both correctness and cache hit ratios."
        ],
        exercises: [
          "Build an endpoint with ETag support and measure bandwidth reduction with 304s.",
          "Create a bug by forgetting Vary: Authorization and demonstrate the leak in a controlled environment.",
          "Implement a cache-busting strategy for a SPA and show why content hashing is superior."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "http2-multiplexing",
        title: "4. HTTP/2: Multiplexing, Prioritization, and Head-of-Line Blocking",
        whyItMatters: "HTTP/2 changes performance characteristics by multiplexing streams over one connection; you must understand it to debug slow pages. It also changes failure modes: a single congested connection can affect many resources.",
        coreConcepts: [
          "Streams multiplex requests; header compression (HPACK) reduces overhead.",
          "Prioritization is inconsistently implemented; in practice, you often rely on server push avoidance and correct resource ordering.",
          "TCP head-of-line blocking still exists at the transport layer; packet loss can stall all streams."
        ],
        commonFailureModes: [
          "Overusing a single connection to a slow origin; loss causes global slowdown.",
          "Incorrect server settings (max concurrent streams) throttles resource loading.",
          "Over-compression or large headers can trigger compression issues."
        ],
        implementationNotes: [
          "Use HTTP/2 where it helps; still keep bundles reasonable and avoid pathological request storms.",
          "Prefer content-hashed static assets and preloading critical resources.",
          "Tune server limits based on real RUM data."
        ],
        debuggingPlaybook: [
          "Inspect network waterfall with protocol column. Compare with HTTP/1.1 behavior.",
          "Look for stalled streams under loss; test with throttling and packet loss simulation.",
          "Validate origin and CDN settings for stream limits."
        ],
        exercises: [
          "Create a page with many assets; compare HTTP/1.1 vs HTTP/2 under 1% loss.",
          "Measure effect of bundling vs many small files.",
          "Tune server concurrency settings and observe changes."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "http3-quic",
        title: "5. HTTP/3 and QUIC: 0-RTT and Connection Migration",
        whyItMatters: "HTTP/3 can improve performance on lossy networks and mobile by avoiding TCP head-of-line blocking. Understanding QUIC helps explain why some networks behave differently.",
        coreConcepts: [
          "QUIC runs over UDP and includes TLS 1.3. Streams avoid transport-level HOL blocking.",
          "Connection IDs enable migration when IP changes (mobile networks).",
          "0-RTT can send data early but may be replayable depending on use."
        ],
        commonFailureModes: [
          "UDP blocked or rate-limited in some networks, causing fallback.",
          "Middleboxes mishandling UDP leading to intermittent connectivity.",
          "Incorrect assumptions about universal HTTP/3 support."
        ],
        implementationNotes: [
          "Enable HTTP/3 at the CDN first; measure improvements for mobile users.",
          "Ensure robust fallback to HTTP/2 and HTTP/1.1.",
          "Treat 0-RTT carefully; avoid unsafe state changes."
        ],
        debuggingPlaybook: [
          "Use browser devtools to confirm protocol used. Test on networks with UDP restrictions.",
          "Compare latencies with RUM segmented by protocol and region.",
          "Verify QUIC settings on CDN and origin."
        ],
        exercises: [
          "Enable HTTP/3 on a staging domain and compare LCP/TTFB by protocol.",
          "Simulate IP changes mid-connection and observe behavior.",
          "Document your fallback strategy and monitoring."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "proxies-cdns",
        title: "6. Proxies, CDNs, Gateways, and WAFs",
        whyItMatters: "Most production apps sit behind intermediaries that cache, route, and filter. Expertise includes knowing what they rewrite and why. Many 'app bugs' are proxy behaviors: header normalization, body size limits, timeouts.",
        coreConcepts: [
          "Reverse proxies terminate connections, apply routing, and can enforce timeouts and body limits.",
          "CDNs cache static and sometimes dynamic content. Gateways centralize auth and rate limits.",
          "WAFs detect patterns; false positives can break legitimate traffic."
        ],
        commonFailureModes: [
          "Mismatch between proxy and app timeouts causing 504s.",
          "Header rewriting breaks auth (e.g., stripping Authorization).",
          "WAF blocks specific payload patterns or user agents."
        ],
        implementationNotes: [
          "Define a contract: which headers are trusted, what timeouts exist, max body size, and which errors are surfaced.",
          "Add standard forwarding headers and validate them.",
          "Keep an escape hatch: bypass WAF rules for known safe paths when needed (with controls)."
        ],
        debuggingPlaybook: [
          "Compare logs at edge and app with request IDs. Validate timeout configuration at each hop.",
          "Reproduce with curl including headers and payload sizes.",
          "Temporarily disable caching/WAF rules in staging to isolate root cause."
        ],
        exercises: [
          "Create a large upload path and tune body limits across proxy and app.",
          "Introduce a 2-minute upstream delay and observe where timeouts trigger.",
          "Write a runbook for WAF false positives with safe mitigations."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "cors-security",
        title: "7. CORS and the Browser Security Model",
        whyItMatters: "CORS is a browser policy, not a server feature. You must understand it to build safe APIs and debug blocked requests. Misconfiguration can either break clients or expose sensitive data.",
        coreConcepts: [
          "Same-origin policy restricts reads across origins. CORS uses preflight OPTIONS for non-simple requests.",
          "Allow-Origin, Allow-Headers, Allow-Methods, and credentials flags must match the browser's request.",
          "CORS does not protect your server from being called; it protects browsers from reading responses."
        ],
        commonFailureModes: [
          "Using '*' with credentials is invalid; browsers block it.",
          "Forgetting to allow custom headers triggers preflight failure.",
          "Overly broad allow-list allows untrusted origins to read sensitive data."
        ],
        implementationNotes: [
          "Explicitly allow only required origins. Separate public endpoints from credentialed endpoints.",
          "Cache preflights carefully (Access-Control-Max-Age) but consider rollout implications.",
          "Use origin reflection only with strict validation."
        ],
        debuggingPlaybook: [
          "Inspect network preflight requests in devtools. Verify server returns correct CORS headers for both OPTIONS and actual request.",
          "Confirm cookies are sent only when credentials mode is enabled and SameSite permits it.",
          "Distinguish CORS failure from actual server 4xx/5xx."
        ],
        exercises: [
          "Implement a minimal CORS handler and test with fetch credentials.",
          "Design an allow-list that supports multiple environments without becoming permissive.",
          "Create a demo showing that CORS does not prevent server-side attacks."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "websockets-sse",
        title: "8. WebSockets vs SSE vs Long Polling",
        whyItMatters: "Realtime features require tradeoffs between simplicity, scalability, and reliability. Choosing the wrong primitive leads to load or correctness problems.",
        coreConcepts: [
          "WebSockets provide full duplex communication. SSE provides server->client streaming over HTTP.",
          "Long polling is simplest but can be inefficient. Keep-alives and proxies influence behavior.",
          "Backpressure and message ordering are central to correctness."
        ],
        commonFailureModes: [
          "Proxy timeouts break idle WebSockets. Message bursts overwhelm clients without backpressure.",
          "State loss on reconnect causes duplicate or missing messages.",
          "Scaling requires sticky sessions or an external pub/sub layer."
        ],
        implementationNotes: [
          "For notifications and streaming updates, SSE is often simpler. For interactive collaboration, WebSockets are typical.",
          "Design reconnection: resume tokens, last-event-id, and idempotent message processing.",
          "Use a pub/sub broker when scaling beyond one instance."
        ],
        debuggingPlaybook: [
          "Simulate reconnects and packet loss. Observe behavior behind real proxies/CDNs.",
          "Track connection counts, message rates, and p95 send latency.",
          "Use correlation IDs in messages for debugging."
        ],
        exercises: [
          "Implement SSE with last-event-id and show replay on reconnect.",
          "Implement WebSocket chat with backpressure and message ack.",
          "Scale to multiple instances using a broker and prove correctness."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      }
    ]
  },
  {
    id: "part-ii",
    title: "Part II - Browser Internals and Web Platform",
    description: "How browsers parse, execute, cache, and secure your application.",
    topics: [
      {
        id: "parsing-rendering",
        title: "1. Parsing and Rendering Pipeline",
        whyItMatters: "To make fast UIs you must know what the browser does with your HTML/CSS/JS. Performance bugs often come from accidental forced reflows and main-thread contention.",
        coreConcepts: [
          "HTML parsing builds the DOM. CSS parsing builds the CSSOM. They combine into a render tree.",
          "Layout computes geometry; paint draws pixels; compositing assembles layers.",
          "JS can block parsing; async/defer scripts change ordering."
        ],
        commonFailureModes: [
          "Layout thrashing from alternating reads/writes of layout properties.",
          "Large DOM trees increase style and layout cost.",
          "Third-party scripts block main thread and delay input."
        ],
        implementationNotes: [
          "Batch DOM reads/writes. Avoid measuring layout in tight loops. Prefer CSS transforms for animations.",
          "Use contain and will-change thoughtfully; misuse can increase memory.",
          "Load third-party scripts with care and isolate when possible."
        ],
        debuggingPlaybook: [
          "Use Performance panel to find long tasks and layout events. Use Layers and Rendering tools for paint/composite issues.",
          "Measure LCP/INP/CLS in lab and in RUM; compare."
        ],
        exercises: [
          "Create a page that triggers forced reflow; fix it by batching.",
          "Reduce DOM nodes by 50% and measure impact on style/layout.",
          "Write a performance checklist for new UI components."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "service-workers",
        title: "2. Service Workers and Offline Patterns",
        whyItMatters: "Service workers enable offline, caching, and background sync but add a new failure surface. Experts treat them like a programmable proxy with a versioned lifecycle.",
        coreConcepts: [
          "Lifecycle: install, activate, fetch. Updates require skipping waiting or user reload.",
          "Cache strategies: cache-first, network-first, stale-while-revalidate.",
          "Be careful with caching auth responses and personalized data."
        ],
        commonFailureModes: [
          "Serving stale HTML causing users to run incompatible JS bundles.",
          "Cache poisoning: incorrect keys or missing Vary headers.",
          "Update bugs where old worker stays active longer than expected."
        ],
        implementationNotes: [
          "Use content hashing for assets and a manifest to guarantee compatibility.",
          "Scope caches by version; delete old caches on activate.",
          "Implement a user-visible 'update available' prompt when needed."
        ],
        debuggingPlaybook: [
          "Use Application panel to inspect service worker state and caches.",
          "Hard reload and unregister worker to isolate issues.",
          "Log fetch events in development builds to understand routing."
        ],
        exercises: [
          "Implement stale-while-revalidate for images and measure perceived speed.",
          "Build an offline fallback page and test airplane mode.",
          "Design an update strategy that avoids breaking logged-in sessions."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "storage",
        title: "3. Storage: Cookies, localStorage, IndexedDB",
        whyItMatters: "Client storage choices affect security, reliability, and performance. Expert decisions avoid XSS amplification and cross-tab consistency bugs.",
        coreConcepts: [
          "Cookies are attached to requests; they support HttpOnly/Secure/SameSite attributes.",
          "localStorage is synchronous (can block main thread) and vulnerable to XSS.",
          "IndexedDB is async and suited for larger structured data; it has transactional semantics."
        ],
        commonFailureModes: [
          "Storing tokens in localStorage increases blast radius of XSS.",
          "Cookie SameSite misconfig breaks auth flows across subdomains.",
          "IndexedDB schema versioning mistakes break upgrades."
        ],
        implementationNotes: [
          "Prefer HttpOnly cookies for session tokens in browser apps.",
          "Use IndexedDB for offline data with careful schema migrations.",
          "Treat client storage as cache, not source of truth, unless cryptographically protected."
        ],
        debuggingPlaybook: [
          "Inspect cookies in devtools and verify attributes.",
          "Use performance profiling to detect localStorage blocking.",
          "Test IndexedDB migrations across versions and handle failures."
        ],
        exercises: [
          "Implement cookie-based session auth and demonstrate CSRF mitigation.",
          "Build an IndexedDB cache with version upgrades and rollback.",
          "Design a cross-tab sync mechanism using BroadcastChannel."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "css-layout",
        title: "4. CSS Layout and Paint",
        whyItMatters: "Understanding CSS layout and paint helps you create performant, responsive UIs. Poor CSS choices can cause layout thrashing and jank.",
        coreConcepts: [
          "Layout (reflow) is expensive; paint is cheaper; compositing is cheapest.",
          "The contain property isolates layout/paint boundaries.",
          "will-change hints to the browser what will animate."
        ],
        commonFailureModes: [
          "Animating layout properties (width, height, top, left) causes reflow.",
          "Complex selectors slow down style calculation.",
          "Large layer counts increase memory and compositing cost."
        ],
        implementationNotes: [
          "Prefer transform and opacity for animations.",
          "Use CSS containment for widget boundaries.",
          "Minimize DOM depth for faster style recalculation."
        ],
        debuggingPlaybook: [
          "Use Rendering panel to show paint rectangles.",
          "Profile with Layers panel to see layer composition.",
          "Check performance metrics for style/layout time."
        ],
        exercises: [
          "Optimize an animation from layout-based to transform-based.",
          "Add containment to a complex widget and measure improvement.",
          "Profile and fix a page with slow style recalculation."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "js-in-browser",
        title: "5. JavaScript in the Browser",
        whyItMatters: "Browser JS runs in a constrained environment. Understanding the event loop, task queues, and main thread contention is essential for smooth UIs.",
        coreConcepts: [
          "The main thread handles JS, layout, paint, and user input.",
          "Long tasks block input and cause jank.",
          "Web Workers move work off the main thread."
        ],
        commonFailureModes: [
          "Synchronous work blocking user input.",
          "Memory leaks from forgotten event listeners.",
          "Excessive re-renders from state updates."
        ],
        implementationNotes: [
          "Break long tasks with yieldToMain() patterns.",
          "Use requestIdleCallback for non-urgent work.",
          "Consider Web Workers for heavy computation."
        ],
        debuggingPlaybook: [
          "Use Performance panel to find long tasks.",
          "Monitor INP (Interaction to Next Paint) in RUM.",
          "Check for memory leaks in Memory panel."
        ],
        exercises: [
          "Move a heavy calculation to a Web Worker.",
          "Implement chunked rendering for a large list.",
          "Profile and optimize INP for a slow interaction."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "performance-apis",
        title: "6. Performance APIs and RUM",
        whyItMatters: "Real User Monitoring (RUM) provides insights into actual user experiences. Performance APIs enable you to capture and analyze these metrics.",
        coreConcepts: [
          "Core Web Vitals: LCP, INP, CLS measure loading, interactivity, and stability.",
          "Navigation Timing and Resource Timing provide detailed timing data.",
          "PerformanceObserver enables efficient metric collection."
        ],
        commonFailureModes: [
          "Collecting metrics without sampling can impact performance.",
          "Not correlating metrics with business outcomes.",
          "Missing data from certain browsers or conditions."
        ],
        implementationNotes: [
          "Use web-vitals library for accurate Core Web Vitals.",
          "Send metrics to analytics with appropriate sampling.",
          "Set up alerting on p75/p95 metrics, not just averages."
        ],
        debuggingPlaybook: [
          "Compare lab (Lighthouse) vs field (RUM) metrics.",
          "Segment RUM by device, connection, and geography.",
          "Use Long Animation Frames API for INP debugging."
        ],
        exercises: [
          "Implement RUM collection for Core Web Vitals.",
          "Create a dashboard showing metric distributions.",
          "Set up alerts for performance regressions."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "accessibility",
        title: "7. Accessibility and Semantics",
        whyItMatters: "Accessible web apps reach more users and are often more usable for everyone. Semantic HTML provides the foundation for assistive technologies.",
        coreConcepts: [
          "Semantic HTML provides meaning to assistive technologies.",
          "ARIA attributes extend semantics when HTML is insufficient.",
          "Keyboard navigation is essential for many users."
        ],
        commonFailureModes: [
          "Missing alt text on images.",
          "Non-semantic interactive elements (divs as buttons).",
          "Focus traps or missing focus indicators."
        ],
        implementationNotes: [
          "Use semantic HTML first, ARIA second.",
          "Test with keyboard-only navigation.",
          "Run automated audits (axe, Lighthouse) in CI."
        ],
        debuggingPlaybook: [
          "Use screen readers for manual testing.",
          "Check focus order and visibility.",
          "Validate ARIA usage with automated tools."
        ],
        exercises: [
          "Make a complex widget keyboard accessible.",
          "Fix accessibility issues found by axe-core.",
          "Test your app with a screen reader."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      }
    ]
  },
  {
    id: "part-iii",
    title: "Part III - JavaScript and Runtime Internals",
    description: "Concurrency, memory, and types: the core of modern JS systems.",
    topics: [
      {
        id: "scopes-closures",
        title: "1. Scopes, Closures, and Prototypes",
        whyItMatters: "Understanding JS's lexical scope, closure mechanics, and prototype chain is fundamental to writing correct and efficient code.",
        coreConcepts: [
          "Lexical scope is determined at write time, not runtime.",
          "Closures capture variables, not values.",
          "Prototypes form a delegation chain for property lookup."
        ],
        commonFailureModes: [
          "Closure loops capturing the same variable.",
          "Unexpected 'this' binding in callbacks.",
          "Prototype pollution from untrusted input."
        ],
        implementationNotes: [
          "Use let/const to avoid hoisting issues.",
          "Prefer arrow functions for lexical this.",
          "Use Object.freeze() for immutable prototypes."
        ],
        debuggingPlaybook: [
          "Use debugger to inspect scope chains.",
          "Check prototype chain in devtools.",
          "Look for unexpected property inheritance."
        ],
        exercises: [
          "Implement a module pattern using closures.",
          "Fix a 'this' binding bug in event handlers.",
          "Create a class hierarchy using prototypes."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "modules-bundlers",
        title: "2. Modules and Bundlers",
        whyItMatters: "Module systems and bundlers shape how code is organized, loaded, and optimized. Understanding them helps debug build issues and optimize load performance.",
        coreConcepts: [
          "ESM (static) vs CommonJS (dynamic) module systems.",
          "Tree shaking eliminates dead code based on static analysis.",
          "Code splitting reduces initial bundle size."
        ],
        commonFailureModes: [
          "Circular dependencies causing undefined imports.",
          "Side effects preventing tree shaking.",
          "Dynamic imports breaking static analysis."
        ],
        implementationNotes: [
          "Prefer ESM for better tree shaking.",
          "Use dynamic imports for code splitting.",
          "Mark pure functions for better optimization."
        ],
        debuggingPlaybook: [
          "Analyze bundle with webpack-bundle-analyzer.",
          "Check for duplicate dependencies.",
          "Verify tree shaking with source maps."
        ],
        exercises: [
          "Set up tree shaking and verify dead code removal.",
          "Implement route-based code splitting.",
          "Debug and fix a circular dependency."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "event-loop",
        title: "3. Event Loop, Scheduling, and Async Semantics",
        whyItMatters: "Async bugs are among the most expensive to debug in production. You must predict ordering and starvation. Understanding scheduling prevents UI jank and server tail latency.",
        coreConcepts: [
          "Microtasks run before the next macrotask. Await queues microtasks. Timers are macrotasks.",
          "Node adds more phases (timers, I/O callbacks, poll, check).",
          "Cancellation is not built-in; you implement via AbortController or explicit flags."
        ],
        commonFailureModes: [
          "Starvation when microtasks are queued in a loop.",
          "Unbounded concurrency causing resource exhaustion (sockets, DB pool).",
          "Forgotten timers and listeners causing leaks."
        ],
        implementationNotes: [
          "Limit concurrency with pools or semaphores. Use AbortController for timeouts and cancellation.",
          "Use streaming and backpressure for large data flows.",
          "Prefer structured concurrency patterns where possible."
        ],
        debuggingPlaybook: [
          "Reproduce with minimal scripts. Add instrumentation for queue lengths and active promises.",
          "Use async_hooks (Node) or tracing to track async causality.",
          "Inspect event loop delay metrics to detect blocking."
        ],
        exercises: [
          "Write a concurrency limiter and integrate into an API endpoint.",
          "Create a microtask starvation bug and fix it.",
          "Implement request timeouts with AbortController and verify cleanup."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ],
        codeExample: `// Event loop (conceptual)
// Macrotasks (timers, I/O callbacks) -> tick
// Microtasks (promises) -> I/O poll (libuv / browser) -> Thread pool (fs, crypto)`
      },
      {
        id: "promises-async",
        title: "4. Promises, Async/Await, and Cancellation",
        whyItMatters: "Promises and async/await are the foundation of modern async JS. Understanding their semantics is essential for writing correct concurrent code.",
        coreConcepts: [
          "Promises are eager and single-use.",
          "Async functions always return promises.",
          "Cancellation requires explicit patterns (AbortController, tokens)."
        ],
        commonFailureModes: [
          "Unhandled promise rejections.",
          "Awaiting in loops causing sequential execution.",
          "No cleanup on cancellation."
        ],
        implementationNotes: [
          "Always attach catch handlers or use try/catch.",
          "Use Promise.all for parallel execution.",
          "Implement proper cleanup in finally blocks."
        ],
        debuggingPlaybook: [
          "Enable unhandled rejection warnings.",
          "Trace promise chains with async stack traces.",
          "Use debugger to step through async code."
        ],
        exercises: [
          "Implement a promise pool with concurrency limit.",
          "Add cancellation to a long-running operation.",
          "Fix a race condition in async code."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "streams-backpressure",
        title: "5. Streams and Backpressure",
        whyItMatters: "Streams enable processing large data efficiently. Backpressure prevents memory exhaustion when producer is faster than consumer.",
        coreConcepts: [
          "Streams process data in chunks, not all at once.",
          "Backpressure signals when consumer can't keep up.",
          "Transform streams modify data in flight."
        ],
        commonFailureModes: [
          "Buffering entire streams in memory.",
          "Ignoring backpressure causing memory exhaustion.",
          "Not handling stream errors properly."
        ],
        implementationNotes: [
          "Pipe streams with proper error handling.",
          "Respect backpressure signals (return false).",
          "Use pipeline() for automatic cleanup."
        ],
        debuggingPlaybook: [
          "Monitor memory during stream processing.",
          "Check for paused/resumed stream states.",
          "Profile for buffer accumulation."
        ],
        exercises: [
          "Build a streaming file processor.",
          "Implement backpressure in a custom stream.",
          "Handle errors in a pipeline without leaks."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "memory-gc",
        title: "6. Memory, GC, and Leak Hunting",
        whyItMatters: "Memory leaks cause crashes and latency spikes. Experts can find retention paths and fix them systematically. GC is a performance tradeoff; you reduce allocation rates and object churn.",
        coreConcepts: [
          "V8 uses generational GC. Short-lived objects are cheap; long-lived objects move to old space.",
          "Retained references keep objects alive: closures, globals, caches, event listeners.",
          "Large buffers and arrays can fragment memory and increase GC cost."
        ],
        commonFailureModes: [
          "Caching without eviction. Retaining request objects in logs.",
          "Streaming responses buffered entirely in memory.",
          "Unbounded queues building up when downstream is slow."
        ],
        implementationNotes: [
          "Implement bounded caches (LRU) and backpressure-aware pipelines.",
          "Avoid logging entire objects; log IDs and selected fields.",
          "Use object pools carefully; premature pooling can worsen performance."
        ],
        debuggingPlaybook: [
          "Take heap snapshots and compare. Use allocation profiling to locate hot paths.",
          "Check RSS vs heap; native allocations can leak too.",
          "Add circuit breakers and queue limits to prevent unbounded growth."
        ],
        exercises: [
          "Create a leak via a global Map; detect it via heap snapshot diff.",
          "Implement an LRU cache with a max size and validate eviction.",
          "Load test and measure GC pause distribution before and after changes."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ],
        codeExample: `// Node: start with inspector for heap snapshots
// node --inspect server.js
// In Chrome DevTools: Memory tab -> Heap snapshot`
      },
      {
        id: "typescript",
        title: "7. TypeScript as a Scaling Tool",
        whyItMatters: "TypeScript is a productivity multiplier when used correctly; it reduces runtime defects and clarifies contracts. Expert usage balances type safety with iteration speed and avoids type-level overengineering.",
        coreConcepts: [
          "Types express invariants. Narrowing and discriminated unions model business states safely.",
          "Use strict mode and incremental adoption strategies. Generate types from schemas (OpenAPI/JSON schema).",
          "Beware 'any' leakage and unsafe casting."
        ],
        commonFailureModes: [
          "Overly complex generics reduce readability.",
          "Type mismatches between client and server due to duplicated models.",
          "Runtime validation missing even though types exist (types do not exist at runtime)."
        ],
        implementationNotes: [
          "Use runtime validators (zod/valibot) and infer types from schema.",
          "Share types via contracts, not by importing server code into client.",
          "Prefer simple types and explicit boundaries over cleverness."
        ],
        debuggingPlaybook: [
          "Track where 'any' enters; enforce lint rules to prevent it spreading.",
          "Test edge cases where runtime inputs violate types.",
          "Use tsserver performance tools if builds become slow."
        ],
        exercises: [
          "Model a payment state machine with discriminated unions.",
          "Generate client types from OpenAPI and replace handwritten types.",
          "Add runtime validation and demonstrate a bad payload being rejected."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ],
        codeExample: `// Discriminated union example
type Payment =
  | { kind: "pending"; id: string }
  | { kind: "paid"; id: string; paidAt: string }
  | { kind: "failed"; id: string; reason: string };

function isPaid(p: Payment) {
  return p.kind === "paid";
}`
      }
    ]
  }
];

// Additional parts will be added in subsequent files
export const additionalParts: Part[] = [
  {
    id: "part-iv",
    title: "Part IV - Frontend Architecture",
    description: "Scaling UI codebases with stable boundaries.",
    topics: [
      {
        id: "component-boundaries",
        title: "1. Component Boundaries",
        whyItMatters: "This module develops expert intuition for component boundaries in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ],
        codeExample: `// Walkthrough stub for Component boundaries
// 1) Define contract
// 2) Implement with validation
// 3) Add metrics + logs
// 4) Load test and tune`
      },
      {
        id: "state-management",
        title: "2. State Management and Server State",
        whyItMatters: "This module develops expert intuition for state management patterns in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "routing-data-loaders",
        title: "3. Routing, Data Loaders, and Prefetching",
        whyItMatters: "This module develops expert intuition for data fetching and caching in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "ssr-ssg-isr",
        title: "4. SSR/SSG/ISR and Hydration",
        whyItMatters: "This module develops expert intuition for ssr/ssg/isr and hydration in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "rendering-performance",
        title: "5. Rendering Performance and Memoization",
        whyItMatters: "This module develops expert intuition for rendering performance in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "forms-validation",
        title: "6. Forms and Validation",
        whyItMatters: "This module develops expert intuition for forms and validation in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "design-systems",
        title: "7. Design Systems and CSS Architecture",
        whyItMatters: "This module develops expert intuition for design systems in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      },
      {
        id: "frontend-security",
        title: "8. Frontend Security Hardening",
        whyItMatters: "This module develops expert intuition for frontend security hardening in real web systems. The focus is not syntax; it is correctness under scale, failure, and change.",
        coreConcepts: [
          "You should be able to explain the underlying model, not just use a framework feature.",
          "You should know where the boundaries are: what is guaranteed, what is best-effort, and what must be enforced by you.",
          "You should be able to design interfaces that remain stable as the system evolves."
        ],
        commonFailureModes: [
          "Mismatched assumptions across layers (browser vs CDN vs app vs DB).",
          "Inadequate validation leading to corrupted state or security issues.",
          "Missing observability that turns incidents into guesswork."
        ],
        implementationNotes: [
          "Prefer small, explicit contracts. Validate at boundaries. Keep deterministic behavior for caching and hydration.",
          "Write runbooks as you build. Add feature flags for risky changes. Make rollbacks cheap.",
          "Use load tests and security tests to prove claims, not vibes."
        ],
        debuggingPlaybook: [
          "Reproduce with a minimal test case. Use request IDs and structured logs. Check one hop at a time.",
          "Inspect headers, timeouts, and retries. Compare behavior across environments (local, staging, prod).",
          "Add targeted instrumentation (timers, counters) before attempting optimization."
        ],
        exercises: [
          "Build a minimal working example and then break it intentionally to learn the failure modes.",
          "Add a monitoring dashboard and a simple on-call style runbook for the feature.",
          "Explain tradeoffs in writing: what you chose, what you rejected, and why."
        ],
        expertChecklist: [
          "Explain it from first principles without notes.",
          "Implement a minimal version from scratch.",
          "Demonstrate a failure and show how you detect + fix it."
        ]
      }
    ]
  }
];

// Combine all parts
export const allParts: Part[] = [...courseParts, ...additionalParts, ...parts5to12];
