
interface ExpInfo {
    year: String,
    company: String,
    title: String,
    description: String,
    techStack: Array<String>
}

const ExperienceCard = ({year, company, title, description, techStack}: ExpInfo) => {

  return (
<div className="grid grid-cols-12 gap-2 p-8 rounded-xl hover:bg-primary hover:bg-opacity-10 transition duration-300 ease-in-out">
        <div className="col-span-4 text-sm text-primary ">{year}</div>
        <div className="col-span-8">
            <h1 className="text-lg font-bold">{title}</h1>
            <h2 className="text-lg mb-5">{company}</h2>
            <p className="mb-5 text-sm">{description}</p>
            <div className="flex flex-wrap">
                {
                    techStack.map((tech, index) => (
                        <span key={index} className="bg-secondary text-secondary-content text-[.7rem] font-bold rounded-full px-2 py-0.5 mr-2 mb-2">{tech}</span>))
                }
            </div>
        </div>
        
    </div>
  )
}

export default ExperienceCard