import awards from "../../data/awards.json"

export default function Awards() {
    return (
        <div className="w-full h-auto py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-[12px] text-white-200 uppercase tracking-wider mb-2">Achievements</p>
                    <h2 data-aos="fade-up" className="text-[32px] md:text-[40px] font-bold text-white mb-4">
                        Awards & Recognition
                    </h2>
                    <p data-aos="fade-up" className="text-[16px] text-white-200 max-w-2xl mx-auto">
                        Recognition of excellence in academics, technology, and professional development
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {awards.awards.map((award, index) => (
                        <AwardCard key={index} award={award} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function AwardCard({ award, index }) {
    return (
        <div 
            data-aos="zoom-in-up" 
            data-aos-delay={index * 100}
            className="group w-full h-auto p-6 bg-gradient-to-br from-dark-200 to-dark-300 rounded-xl border border-dark-100 hover:border-green-400/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
            {/* Icon */}
            <div className="w-16 h-16 bg-green-400/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-400/20 transition-all duration-300">
                <ion-icon 
                    name={award.icon} 
                    class="text-green-400 text-[28px] group-hover:scale-110 transition-transform duration-300"
                ></ion-icon>
            </div>

            {/* Content */}
            <div className="space-y-4">
                <div>
                    <h3 className="text-[20px] font-bold text-green-100 mb-2 group-hover:text-green-200 transition-colors">
                        {award.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-[13px] text-green-300 font-semibold bg-green-900/20 px-3 py-1 rounded-full">
                            {award.year}
                        </span>
                        <span className="text-[13px] text-white-300 font-medium">
                            {award.organization}
                        </span>
                    </div>
                </div>
                
                <p className="text-[14px] text-white-200 leading-relaxed">
                    {award.description}
                </p>
            </div>

            {/* Decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-green-400/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    )
}
