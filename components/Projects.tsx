import Link from "next/link"
import Script from "next/script"

const projects = [
    {
        glyph: '💬',
        name: 'Bragi',
        description: 'Branching dialog framework for video games',
        homepage: 'https://bragi.subtale.com',
    },
    {
        glyph: '🧠',
        name: 'Mímir',
        description: 'Contextual query engine for dynamic video games',
        homepage: 'https://mimir.subtale.com',
    },
    {
        glyph: '🗓️',
        name: 'Sköll',
        description: 'Flexible DateTime system for video games ',
        homepage: 'https://skoll.subtale.com',
    },
    {
        glyph: '📚',
        name: 'Opinions',
        description: 'Opinionated knowledge base for game development',
        homepage: 'https://opinions.subtale.com',
    },
]

export default function Projects() {
    return <>
        <Script>
            {`document.getElementById("projects").onmousemove = e => {
                for(const proj of document.getElementsByClassName("project")) {
                    const rect = proj.getBoundingClientRect(),
                        x = e.clientX - rect.left,
                        y = e.clientY - rect.top;

                    proj.style.setProperty("--mouse-x", x + 'px');
                    proj.style.setProperty("--mouse-y", y + 'px');
                };
            }`}
        </Script>
        <section id="projects" className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {projects.map(({ homepage, glyph, name, description }, i) => <Link href={homepage} target="_blank" rel="noreferrer" key={i}>
                <div className="project rounded cursor-pointer flex h-64 flex-col relative">
                    <div className="project-content rounded flex flex-col flex-1 inset-px p-3 absolute z-20">
                        <div className="project-glyph flex-1 text-6xl flex items-center justify-center">{glyph}</div>
                        <div className="project-info-wrapper">
                            <div className="project-info p-4">
                                <h2 className="font-black text-2xl">{name}</h2>
                                <p className="text-gray-400 text-base">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>)}
        </section>
    </>
}