import fishingDerby from '~/assets/post-event/fishing-derby.png'
import wrestling from '~/assets/post-event/wrestling.jpeg'
import concertStage from '~/assets/post-event/concert-stage.jpg'

const photos = [
  { src: fishingDerby, alt: 'Families fishing off the docks at the Ladysmith harbour', caption: 'Another great bullhead derby' },
  { src: wrestling, alt: 'Pro wrestling in the ring at Transfer Beach with a packed crowd', caption: 'Ringside at Transfer Beach with VIPW' },
  { src: concertStage, alt: 'A band on the tent stage at dusk, the crowd lit up with phone lights', caption: 'Sunset Strip right before the fireworks' },
]

function SectionPostGallery() {
  return (
    <section className="max-w-[1160px] mx-auto pt-10 px-4 pb-2">
      <div className="grid gap-3.5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))' }}>
        {photos.map(({ src, alt, caption }) => (
          <figure key={caption} className="m-0 flex flex-col gap-2">
            <div className="h-[260px] rounded-2xl border-[3px] border-[#BFD3F2] overflow-hidden bg-[#FFF9F1]">
              <img src={src} alt={alt} className="w-full h-full object-cover block" />
            </div>
            <figcaption className="text-[0.95rem] font-semibold text-ld-slate">{caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default SectionPostGallery
