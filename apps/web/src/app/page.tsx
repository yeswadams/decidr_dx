export default function HomePage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '12vh 2rem', color: '#17212b' }}>
      <p
        style={{
          color: '#476b8a',
          fontWeight: 650,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        Decidr · Early foundation
      </p>
      <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.04, margin: '1.5rem 0' }}>
        A clearer way to work with backend systems.
      </h1>
      <p style={{ maxWidth: 640, fontSize: '1.2rem', lineHeight: 1.7, color: '#52606d' }}>
        Decidr is an open-source developer platform taking shape for exploring, executing, testing,
        and observing services, AI workflows, and smart contracts. This studio is an early
        foundation.
      </p>
      <p style={{ marginTop: '3rem', color: '#637381' }}>
        Built in the open. Integrations and execution capabilities are still being designed.
      </p>
    </main>
  );
}
