import Image from "next/image";


export default function ContactModal({ isOpen , setIsOpen }: { isOpen: boolean , setIsOpen: (isOpen: boolean) => void }) {
    
    if (!isOpen) return null;
    return (
        <dialog open={isOpen} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-black/50 backdrop-blur-md border border-white/30">
                <form method="dialog">
                    <button onClick={() => setIsOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                
                <div className="flex gap-4 justify-center mt-2">
                    <a href="https://github.com/abhinavsurya1" rel="noopener noreferrer" target="_blank">
                        <Image src="/images/github.svg" alt="GitHub" width={36} height={36} />
                    </a>
                    <a href="mailto:abhinavsurya5334@gmail.com" rel="noopener noreferrer" target="_blank">
                        <Image src="/images/gmail.svg" alt="Gmail" width={36} height={36} />
                    </a>
                    <a href="https://www.linkedin.com/in/abhinav-surya/"  rel="noopener noreferrer" target="_blank">
                        <Image src="/images/linkedinIconDisp.svg" alt="LinkedIn" width={36} height={36} />
                    </a>
                </div>


            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => setIsOpen(false)}>close</button>
            </form>
        </dialog>
    )
}