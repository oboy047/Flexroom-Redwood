import { render, route } from "rwsdk/router"
import { defineApp } from "rwsdk/worker"
import "./polyfills/weakref"

import { Document } from "@/app/Document"
import { setCommonHeaders } from "@/app/headers"

// Importer sidene
import { Home } from "@/app/pages/Home"
import { About } from "@/app/pages/About"
import { Contact } from "@/app/pages/Contact"
import { Rooms } from "@/app/pages/Rooms"
import { Booking } from "@/app/pages/Booking"

export type AppContext = {}

export default defineApp([
  setCommonHeaders(),
  ({ ctx }) => {
    // global kontekst kan settes her
    ctx
  },
  render(Document, [
    route("/", Home),
    route("/about", About),
    route("/contact", Contact),
    route("/rooms", Rooms),
    route("/booking", Booking),
  ]),
])
