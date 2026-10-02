function Glyph({ children }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="glyph">
      {children}
    </svg>
  )
}

export function IconDrop() {
  return (
    <Glyph>
      <path d="M12 3s6 6.2 6 10.2A6 6 0 1 1 6 13.2C6 9.2 12 3 12 3z" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </Glyph>
  )
}

export function IconSlope() {
  return (
    <Glyph>
      <path d="M3 18l7-9 4 4 7-8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 21h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Glyph>
  )
}

export function IconSprout() {
  return (
    <Glyph>
      <path d="M12 21V11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M12 13c0-4 3.2-6 7-6-0.4 4-3 6-7 6zM12 15c0-3-2.6-5-6-5 .3 3.2 2.6 5 6 5z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </Glyph>
  )
}

export function IconDoc() {
  return (
    <Glyph>
      <path d="M7 3.5h7l4 4V20.5H7v-17z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M14 3.5V8h4.2M9 13h6M9 16.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Glyph>
  )
}

export function IconChart() {
  return (
    <Glyph>
      <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8 15v-3M12 15V8M16 15v-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Glyph>
  )
}

export function IconPin() {
  return (
    <Glyph>
      <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="11" r="2" fill="currentColor" />
    </Glyph>
  )
}

export function IconRoad() {
  return (
    <Glyph>
      <path d="M8 4l-3 16M16 4l3 16M12 8v2.2M12 13v2.2M12 18v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Glyph>
  )
}

export function IconPeople() {
  return (
    <Glyph>
      <circle cx="9" cy="9" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16" cy="10" r="1.8" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4.5 18.5c.6-2.4 2.4-3.7 4.5-3.7s3.9 1.3 4.5 3.7M13 14.8c1.3-.5 2.6-.4 4 .4 1.2.7 2 1.8 2.4 3.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Glyph>
  )
}

export function IconShield() {
  return (
    <Glyph>
      <path d="M12 3.5l7 2.4v6.2c0 4.2-2.8 7.2-7 8.4-4.2-1.2-7-4.2-7-8.4V5.9l7-2.4z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.8 12.2l2.2 2.2 4.2-4.4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </Glyph>
  )
}

const reasonIcons = [IconShield, IconDrop, IconSprout, IconRoad, IconPeople, IconDoc]
const intelIcons = [IconDrop, IconSlope, IconSprout, IconDoc, IconChart, IconPin]

export function ReasonIcon({ index }) {
  const Icon = reasonIcons[index % reasonIcons.length]
  return <Icon />
}

export function IntelIcon({ index }) {
  const Icon = intelIcons[index % intelIcons.length]
  return <Icon />
}
