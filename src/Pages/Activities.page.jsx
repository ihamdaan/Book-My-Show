import React from 'react';

//import poster component
import Poster from '../components/Poster/Poster.component';

//import Filter for the Activities page from PlaysFilter components since both are similar
import PlaysFilter from '../components/PlaysFilter/PlaysFilters.component';

const Activities = () => {
    return (
        <>
            <div className="lg:py-12 bg-page-800">
                {/*RHS of page*/}
                <div className="container mx-auto px-4">
                    <div className="w-full lg:flex lg:flex-row-reverse gap-5">
                        
                        <div className="lg:w-9/12">
                            <h2 className="text-2xl font-bold mb-4 px-3">Activities in Chandigarh</h2>
                            <div className="flex flex-wrap">
                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312639-dgbdypmufw-portrait.jpg"
                                    title="Mystery Rooms - Chandigarh"
                                    subtitle="English, Hindi -> ₹669 onwards" /> 
                                </div>

                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312639-dgbdypmufw-portrait.jpg"
                                    title="Mystery Rooms - Chandigarh"
                                    subtitle="English, Hindi -> ₹669 onwards" /> 
                                </div>

                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312639-dgbdypmufw-portrait.jpg"
                                    title="Mystery Rooms - Chandigarh"
                                    subtitle="English, Hindi -> ₹669 onwards" /> 
                                </div>

                                <div className="w-1/2 my-3 md:w-1/3 lg:w-3/12">
                                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312639-dgbdypmufw-portrait.jpg"
                                    title="Mystery Rooms - Chandigarh"
                                    subtitle="English, Hindi -> ₹669 onwards" /> 
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
                                title="Categories"
                                tags={["Unique Tours", "Gaming", "Adventure", "Antiques, Heritage", "Adventure", "Amusement Parks", "Tourist Attractions", "Museums"]} />

                                <PlaysFilter 
                                title="More Filters"
                                tags={["Online Streaming", "Kids Allowed", "Kids Activities", "Outdoor Events", "Weekend Gateway"]} />

                                <PlaysFilter 
                                title="Price"
                                tags={["Free", "0-500", "501-1000", "1000-2000", "2000-5000", "Above 5000"]} />
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

export default Activities;
