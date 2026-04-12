import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import { videos, videoCategories, getVideosByCategory, type VideoEntry } from '../data/videos'

interface VideoCardProps {
  video: VideoEntry
  highContrast: boolean
}

function VideoCard({ video, highContrast }: VideoCardProps) {
  const [playing, setPlaying] = useState(false)

  return (
    <article
      className={`rounded-2xl border-2 overflow-hidden flex flex-col ${
        highContrast ? 'bg-black border-white' : 'bg-white border-slate-200'
      }`}
      aria-labelledby={`video-card-${video.id}`}
    >
      {/* Thumbnail / embed */}
      <div className="relative aspect-video bg-slate-900">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-3 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            aria-label={`Reproduzir vídeo: ${video.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Play overlay */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                viewBox="0 0 24 24"
                fill="white"
                className="w-8 h-8 translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="relative z-10 sr-only">Reproduzir</span>
          </button>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3
          id={`video-card-${video.id}`}
          className={`font-bold text-base leading-snug ${
            highContrast ? 'text-white' : 'text-slate-800'
          }`}
        >
          {video.title}
        </h3>
        <p className={`text-sm leading-relaxed ${highContrast ? 'text-white/80' : 'text-slate-500'}`}>
          {video.description}
        </p>

        {/* External link */}
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            highContrast
              ? 'text-yellow-400 focus-visible:outline-yellow-400'
              : 'text-blue-600 hover:text-blue-800 focus-visible:outline-blue-600'
          }`}
          aria-label={`Abrir "${video.title}" no YouTube (abre numa nova janela)`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          Ver no YouTube
        </a>
      </div>
    </article>
  )
}

export default function VideoGallery() {
  const { highContrast } = useAccessibility()
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const displayed =
    activeFilter === 'all' ? videos : getVideosByCategory(activeFilter)

  return (
    <section aria-labelledby="video-gallery-heading" className="animate-fade-in">
      {/* Intro */}
      <div className={`mb-6 rounded-2xl p-5 border-2 ${
        highContrast ? 'bg-black border-white' : 'bg-indigo-50 border-indigo-100'
      }`}>
        <h2
          id="video-gallery-heading"
          className={`text-xl font-bold mb-1 flex items-center gap-2 ${
            highContrast ? 'text-yellow-400' : 'text-indigo-800'
          }`}
        >
          <span aria-hidden="true">🎥</span> Galeria de vídeos de apoio
        </h2>
        <p className={`text-sm leading-relaxed ${highContrast ? 'text-white' : 'text-indigo-700'}`}>
          Seleccione um vídeo para o ver directamente aqui, ou abra no YouTube.
          Nos tutoriais de texto encontra um botão <strong>"Ver vídeo"</strong> que o traz directamente ao vídeo certo.
        </p>
      </div>

      {/* Filter tabs */}
      <nav aria-label="Filtrar vídeos por categoria" className="mb-6">
        <ul className="flex flex-wrap gap-2" role="list">
          <li>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              aria-pressed={activeFilter === 'all'}
              className={`px-4 py-2 rounded-lg font-semibold border-2 text-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                activeFilter === 'all'
                  ? highContrast
                    ? 'bg-yellow-400 text-black border-yellow-400 focus-visible:outline-white'
                    : 'bg-indigo-700 text-white border-indigo-700 focus-visible:outline-indigo-900'
                  : highContrast
                  ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-indigo-400 hover:text-indigo-700 focus-visible:outline-indigo-600'
              }`}
            >
              Todos
            </button>
          </li>
          {videoCategories.map(cat => (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => setActiveFilter(cat.id)}
                aria-pressed={activeFilter === cat.id}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold border-2 text-sm transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  activeFilter === cat.id
                    ? highContrast
                      ? 'bg-yellow-400 text-black border-yellow-400 focus-visible:outline-white'
                      : 'bg-indigo-700 text-white border-indigo-700 focus-visible:outline-indigo-900'
                    : highContrast
                    ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-indigo-400 hover:text-indigo-700 focus-visible:outline-indigo-600'
                }`}
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Video grid */}
      <ul
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        role="list"
        aria-label={`${displayed.length} vídeo${displayed.length !== 1 ? 's' : ''} encontrado${displayed.length !== 1 ? 's' : ''}`}
      >
        {displayed.map(video => (
          <li key={video.id}>
            <VideoCard video={video} highContrast={highContrast} />
          </li>
        ))}
      </ul>
    </section>
  )
}
