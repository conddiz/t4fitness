"use client"

import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useRef } from "react"
import "leaflet/dist/leaflet.css"

export type MapUnit = {
  name: string
  address: string
  neighborhood: string
  lat: number
  lng: number
  /* endereço textual completo (referência; o mapa usa lat/lng) */
  mapsQuery: string
}

type Props = {
  unit: MapUnit | null
  onClose: () => void
}

function LeafletMap({ unit }: { unit: MapUnit }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let map: import("leaflet").Map | undefined
    let cancelled = false

    async function mount() {
      const mod = await import("leaflet")
      const L = ((mod as { default?: typeof import("leaflet") }).default ??
        mod) as typeof import("leaflet")
      if (cancelled || !ref.current) {
        return
      }
      map = L.map(ref.current, { scrollWheelZoom: false }).setView([unit.lat, unit.lng], 16)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map)
      L.circleMarker([unit.lat, unit.lng], {
        radius: 10,
        color: "#ff6a00",
        weight: 3,
        fillColor: "#ff6a00",
        fillOpacity: 0.5,
      })
        .addTo(map)
        .bindPopup(`<strong>T4 Fitness ${unit.name}</strong><br/>${unit.address}`)
        .openPopup()
    }

    mount()
    return () => {
      cancelled = true
      map?.remove()
    }
  }, [unit])

  return <div ref={ref} className="h-full w-full" />
}

export default function UnitMapModal({ unit, onClose }: Props) {
  useEffect(() => {
    if (!unit) {
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [unit, onClose])

  if (!unit) {
    return null
  }

  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(unit.mapsQuery)}`

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Localização da unidade ${unit.name}`}
      onClick={onClose}
      onKeyDown={e => {
        if (e.key === "Escape") {
          onClose()
        }
      }}
    >
      {/* biome-ignore lint/a11y/noStaticElementInteractions: impede que cliques no painel fechem o modal */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: onClick é apenas stopPropagation; teclado é tratado no overlay */}
      <div
        className="w-full max-w-[680px] border border-orange-500 bg-[#0d0d0e] text-white shadow-form"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-5 md:p-6">
          <div>
            <h3 className="text-[24px] md:text-[28px] tracking-[-.02em]">T4 Fitness {unit.name}</h3>
            <p className="mt-1 text-[14px] leading-[1.6] text-[#b7b7bb]">
              {unit.address} · {unit.neighborhood}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar mapa"
            className="grid h-9 w-9 shrink-0 cursor-pointer place-content-center border border-[#4a4a4a] bg-transparent text-white transition-colors hover:border-orange-500 hover:text-orange-500"
          >
            <FontAwesomeIcon icon={faXmark} className="text-[16px]" />
          </button>
        </div>

        <div className="h-[320px] md:h-[400px] w-full bg-[#181819]">
          <LeafletMap unit={unit} />
        </div>

        <div className="p-4 md:px-6 text-right">
          <a
            href={routeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-2xs font-extrabold uppercase tracking-[.09em] text-orange-500 no-underline hover:text-orange-400 transition-colors"
          >
            Traçar rota no Google Maps ↗
          </a>
        </div>
      </div>
    </div>
  )
}
