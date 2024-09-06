import { Caroussel } from "@/components/carousel"

const photos = [
  { src: "https://picsum.photos/200/300?random=1", width: 2000, height: 2000, slug: 'test-1 ', title: 'Test' },
  { src: "https://picsum.photos/300/300?random=2", width: 2000, height: 2000, slug: 'test-1 ', title: 'Passer'},
  { src: "https://picsum.photos/300/200?random=3", width: 2000, height: 2000, slug: 'test-1 ', title: 'Test' },
  { src: "https://picsum.photos/500/1000?random=4", width: 2000, height: 2000, slug: 'test-1 ', title: '500x1000'},
  { src: "https://picsum.photos/200/300?random=5", width: 2000, height: 2000, slug: 'test-1 ', title: 'Test' },
  { src: "https://picsum.photos/200/300?random=6", width: 2000, height: 2000, slug: 'test-1 ', title: 'Passer'},
  { src: "https://picsum.photos/200/300?random=7", width: 2000, height: 2000, slug: 'test-1 ', title: 'Test' },
  { src: "https://picsum.photos/200/300?random=8", width: 2000, height: 2000, slug: 'test-1 ', title: 'Passer'},
];

const Photobox = () => {
  return (
    <div className="h-[calc(100vh-4rem)] w-screen overflow-hidden flex">
      <div className="my-auto w-full mx-auto h-full">
        <Caroussel works={photos}/>
      </div>
    </div>

  )
}
export default Photobox