import React from 'react'
import PlaysFilter from '../components/PlaysFilter/PlaysFilters.component';

//import poster component

//import Filter for the Plays page from components
import Poster from '../components/Poster/Poster.component';

const Plays = () => {
    return (
        <>
            <div className="lg:my-12">
                {/*RHS of page*/}
                <div className="container mx-auto px-4">
                    <div className="w-full lg:flex lg:flex-row-reverse gap-5">
                        
                        <div className="lg:w-9/12">
                            <h2 className="text-2xl font-bold mb-4 px-3">Plays in Chandigarh</h2>
                            <div className="flex flex-wrap">
                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telugu -> ₹420" /> 
                                </div>

                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telugu -> ₹420" /> 
                                </div>

                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telugu -> ₹420" /> 
                                </div>

                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxOSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                                    title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                                    subtitle="Telugu -> ₹420" /> 
                                </div>
                            </div>
                        </div>

                        {/*LHS of page*/}
                        <div className="lg:w-3/12">
                            <h2 className="text-2xl font-bold mb-8 px-1">Filters</h2>
                            <div>
                                <PlaysFilter 
                                title="Date"
                                tags={["Today", "Tomorrow", "This Weekend"]} />

                                <PlaysFilter 
                                title="Language"
                                tags={["Tamil", "Telugu", "English", "Punjabi", "Hindi"]} />

                                <PlaysFilter 
                                title="Categories"
                                tags={["Theatre"]} />

                                <PlaysFilter 
                                title="Genres"
                                tags={["Drama", "Adaptation", "Comedy", "Historical", "Mythological", "Online Streaming Plays"]} />

                                <PlaysFilter 
                                title="More Filters"
                                tags={["Online Streaming", "Kids Allowed"]} />

                                <PlaysFilter 
                                title="Price"
                                tags={["Free", "0-500", "501-1000", "1000-2000", "Above 2000"]} />
                            </div>

                            <button className="px-3 py-1 border border-red-400 text-red-500 w-5/6 hover:bg-red-400 hover:text-white cursor-pointer rounded">
                                Browse by Venues
                            </button>
                        </div>
                    </div>
                </div>

                
            </div>
        </>
    )
}

export default Plays;
