import { Header } from '@/components/layout/Header';
import Image from 'next/image';

export default function Merch() {
  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col gap-6 px-6 py-16">
          <div className="w-fit rounded-2xl border px-4 py-1 uppercase">official merch</div>
          <h1 className="text-5xl">
            Carry the <span className="text-blue-600">Sysarmy</span>
            <span className="block">with you</span>
          </h1>
          <p className="text-gray-500">
            Ex incididunt eu proident ullamco amet incididunt pariatur amet. Commodo Lorem non duis laborum eiusmod
            nostrud do duis aliqua officia minim do. Mollit proident pariatur eu dolore. Consectetur incididunt ex
          </p>
        </section>

        <nav aria-label="Product filters" className="my-3.5 flex gap-3 px-4 py-3">
          <button className="rounded-lg border px-2.5 py-1.5">All</button>
          <button className="rounded-lg border px-2.5 py-1.5">Stickers</button>
          <button className="rounded-lg border px-2.5 py-1.5">Limited</button>
        </nav>

        <section className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-lg border">
            <div className="relative h-48 w-full">
              <Image src="https://picsum.photos/200/300" alt="Product name" fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 px-5 py-3">
              <h2 className="text-lg font-bold">Product name</h2>
              <p className="text-gray-500">Ex id non tempor cillum pariatur mollit eiusmod</p>
              <div className="flex items-center justify-between">
                <data value="30" className="text-xl font-semibold">
                  30€
                </data>
                <button className="border px-4 py-1.5">Buy now</button>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
