type DarkLayoutProps = {
  children: JSX.Element | JSX.Element[]
}

export default function DarkLayout({ children }: DarkLayoutProps) {
  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderRadius: '5px',
      padding: '10px',
    }}>
      <h3>Dark Layout</h3>
      { children }
    </div>
  );
}