import * as React from "react"

export function Document({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>FlexRoom</title>
      </head>
      <body style={{ fontFamily: "Arial, sans-serif", padding: "1rem" }}>
        <nav
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "2rem",
            background: "#eee",
            padding: "1rem",
            borderRadius: "8px",
          }}
        >
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/rooms">Rooms</a>
          <a href="/booking">Booking</a>
          <a href="/contact">Contact</a>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  )
}
