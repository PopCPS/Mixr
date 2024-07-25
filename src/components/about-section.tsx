import { ChevronLeft, Play } from "lucide-react";

interface AboutSectionProps {
  closeAbout: () => void
}

export function AboutSection({ closeAbout }: AboutSectionProps) {
  return (
    <div className="flex justify-center">

      <div className="flex flex-col gap-8 items-center py-3 w-[800px]">
        <div className="flex items-center w-full h-40 rounded-3xl bg-gradient-to-r from-lime to-lilac relative">
          <button onClick={closeAbout} className="bg-lilac p-3 rounded-2xl absolute left-[-1.5rem]">
            <ChevronLeft className="size-6 text-slate-300" />
          </button>
          <button onClick={closeAbout} className="bg-lime p-3 rounded-2xl absolute right-[-1.5rem]">
            <Play className="size-6 text-slate-300 fill-current" />
          </button>
        </div>

        <div className="w-full px-4 space-y-6">
          <h1 className="text-4xl font-bold text-left text-font-dark dark:text-zinc-300">Título</h1>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <span className="text-slate-500 font-normal dark:text-zinc-400">Autor</span>
              <div className="size-1 rounded-lg bg-slate-300" />
              <span className="text-slate-500 font-normal dark:text-zinc-400">Data</span>
              <div className="size-1 rounded-lg bg-slate-300" />
              <span className="text-slate-500 font-normal dark:text-zinc-400">Duração</span>
            </div>
            <div className="h-px w-full bg-slate-300 dark:bg-zinc-400" />
          </div>
        </div>

        <p className="px-4 text-font-dark dark:text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tortor nunc, rhoncus sit amet eros a, suscipit posuere tortor. Nam nisl purus, congue a tellus in, consectetur luctus purus. Donec vel bibendum sapien, nec dignissim mi. In a fringilla tortor, sed ullamcorper nisi. Sed mi augue, dapibus eu pharetra eget, lacinia eu sem. Vestibulum non pretium turpis, sit amet blandit massa. Cras ultrices nulla ut fringilla convallis. Quisque malesuada interdum semper. Morbi non ultricies libero. Phasellus aliquet purus sit amet dapibus varius. Etiam et enim non erat posuere ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent condimentum vel neque eget imperdiet. Vestibulum dictum, arcu non luctus vehicula, ante erat vestibulum elit, quis efficitur arcu risus a nisl. Quisque suscipit auctor justo, a commodo turpis laoreet eu. Praesent ac ullamcorper mauris.

          Maecenas molestie sapien sit amet metus tincidunt mattis viverra at neque. Donec dapibus, dolor ut rutrum laoreet, arcu diam convallis massa, sodales tristique magna justo vitae massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque non gravida quam, ut vehicula ipsum. Quisque sit amet arcu non neque laoreet pretium. Curabitur hendrerit vel metus eu cursus. Ut sit amet magna eget est finibus congue. Nunc non congue erat. Aenean orci sem, porta vitae justo sit amet, tincidunt consectetur enim. Nullam magna velit, ullamcorper ut nibh at, volutpat euismod arcu.
        </p>

      </div>
    </div>
  )
}