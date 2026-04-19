import type { CSSProperties } from 'react'
import { motion } from 'framer-motion'

const PHONE_BASE: CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 160,
  height: 300,
  borderRadius: 28,
  overflow: 'hidden',
  background: 'linear-gradient(160deg, #1a2332, #0d1520)',
  marginTop: -150,
  marginLeft: -80,
}

function StatusBar() {
  return (
    <div style={{ height: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
      <span style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>9:41</span>
      <div style={{ width: 50, height: 12, background: '#0d1520', borderRadius: '0 0 8px 8px' }} />
      <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>●●●</span>
    </div>
  )
}

export function HeroPhones() {
  return (
    <div style={{ position: 'relative', height: 400, overflow: 'visible' }}>
      {/* Radial glow behind phone 2 */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 200,
          height: 200,
          background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          right: 20,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
        }}
      />

      {/* Phone 1 — Card List (back, left) */}
      <motion.div
        initial={{ opacity: 0, x: -20, rotate: -14 }}
        animate={{ opacity: 1, x: -40, rotate: -10, y: 20 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{
          ...PHONE_BASE,
          border: '1.5px solid rgba(255,255,255,0.15)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
          zIndex: 1,
        }}
      >
        <StatusBar />
        <div style={{ padding: '10px 14px 6px' }}>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>Good morning, Gabriel</div>
          <div style={{ fontSize: 13, color: 'white', fontWeight: 700 }}>My Cards</div>
          <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>3 cards · $2,847 pts this month</div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '6px 10px' }} />

        {/* Chase Sapphire */}
        <div style={{ margin: '0 10px 6px', borderRadius: 12, padding: '10px 12px', background: 'linear-gradient(135deg, rgba(26,26,110,0.6), rgba(37,99,235,0.3))', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 18, borderRadius: 4, background: 'linear-gradient(135deg, #1a1a6e, #2563EB)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Chase Sapphire</div>
            <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.4)' }}>1,240 pts earned</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#60A5FA' }}>3×</div>
        </div>

        {/* Amex Gold */}
        <div style={{ margin: '0 10px 6px', borderRadius: 12, padding: '10px 12px', background: 'linear-gradient(135deg, rgba(184,134,11,0.4), rgba(255,215,0,0.15))', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 18, borderRadius: 4, background: 'linear-gradient(135deg, #b8860b, #ffd700)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Amex Gold</div>
            <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.4)' }}>840 pts earned</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#ffd700' }}>4×</div>
        </div>

        {/* Citi Double Cash */}
        <div style={{ margin: '0 10px 6px', borderRadius: 12, padding: '10px 12px', background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 28, height: 18, borderRadius: 4, background: 'linear-gradient(135deg, #0f4c81, #1a73e8)', flexShrink: 0 }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 9, color: 'white', fontWeight: 600 }}>Citi Double Cash</div>
            <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.4)' }}>767 pts earned</div>
          </div>
          <div style={{ fontSize: 11, fontWeight: 800, color: '#93C5FD' }}>2%</div>
        </div>

        {/* Earnings callout */}
        <div style={{ margin: '8px 10px 0', padding: '8px 10px', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: 10 }}>
          <span style={{ fontSize: 7.5, color: '#10B981', fontWeight: 600 }}>↑ You earned +$14.20 more this week</span>
        </div>
      </motion.div>

      {/* Phone 2 — Live Recommendation (front, right) */}
      <motion.div
        initial={{ opacity: 0, x: 20, rotate: 4 }}
        animate={{ opacity: 1, x: 40, rotate: 8, y: -10 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          ...PHONE_BASE,
          border: '1.5px solid rgba(37,99,235,0.3)',
          boxShadow: '0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(37,99,235,0.25), 0 0 40px rgba(37,99,235,0.15)',
          zIndex: 3,
        }}
      >
        <StatusBar />
        <div style={{ padding: '8px 14px 6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 4 }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
            <span style={{ fontSize: 7.5, color: '#10B981', fontFamily: 'monospace', letterSpacing: 1 }}>LIVE RECOMMENDATION</span>
          </div>
          <div style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.5)' }}>
            {'📍 '}<strong>Blue Bottle Coffee</strong>{' · Hayes Valley'}
          </div>
        </div>
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '4px 10px 8px' }} />

        {/* Recommendation card */}
        <div style={{ margin: '0 10px', background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 14, padding: 12 }}>
          <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace', marginBottom: 8 }}>POINTSTAX RECOMMENDS</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 36, height: 22, borderRadius: 5, background: 'linear-gradient(135deg, #1a1a6e, #2563EB)', flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, color: 'white', fontWeight: 700 }}>Chase Sapphire</div>
              <div style={{ fontSize: 7.5, color: '#93C5FD' }}>3× on dining · best match</div>
            </div>
            <div style={{ fontSize: 22, color: 'white', fontWeight: 800, marginLeft: 'auto' }}>3×</div>
          </div>
        </div>

        {/* Earnings row */}
        <div style={{ margin: '0 10px', padding: '8px 0', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>YOU'D EARN</div>
            <div style={{ fontSize: 15, color: 'white', fontWeight: 700 }}>
              +21 pts <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>vs 7 pts</span>
            </div>
          </div>
          <div style={{ fontSize: 10, color: '#10B981', fontWeight: 600 }}>+$0.26 extra</div>
        </div>

        {/* Other options */}
        <div style={{ margin: '6px 10px 0' }}>
          <div style={{ fontSize: 7.5, color: 'rgba(255,255,255,0.35)', marginBottom: 5, letterSpacing: 0.5 }}>OTHER OPTIONS</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>Amex Gold</span>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>1× · not best here</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)' }}>Citi Double Cash</span>
            <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.35)' }}>2% · decent</span>
          </div>
        </div>
      </motion.div>

      {/* Floating ticker */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        style={{
          position: 'absolute',
          bottom: 20,
          right: -10,
          background: 'rgba(15,23,42,0.9)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 50,
          padding: '5px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          backdropFilter: 'blur(12px)',
          zIndex: 4,
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#10B981', flexShrink: 0 }} />
        <span style={{ fontSize: 9, color: 'white', fontWeight: 600, fontFamily: 'monospace' }}>Today +3,240 pts</span>
      </motion.div>
    </div>
  )
}
