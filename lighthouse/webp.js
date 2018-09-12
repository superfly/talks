// on Fastly
import { autoWebp } from "./lib/images"
import proxy from "@fly/proxy"

const origin = proxy("https://www.discovery.com/")

fly.http.respondWith(autoWebp(origin))