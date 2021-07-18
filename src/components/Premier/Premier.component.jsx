import React from 'react'
import Slider from 'react-slick';

//import poster here
import Poster from '../Poster/Poster.component';

export const Premier = () => {

    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        InitialSlide: 0,
        responsive: [
            {
            breakpoints: 1024,
            settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },

            {
                breakpoints: 768,
                settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    InitialSlide: 1,
                },
            },

            {
                breakpoints: 480,
                settings: 
                {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    //to contain all the images of the poster in premier section
    const PremierImage = [
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
        {
            src: "https://in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/zack-snyder-s-justice-league-et00047164-10-04-2021-03-22-49.jpg",
            alt: "zack",
            title: "Zacl",
            subtitle: "english"
        },
    ];

    return (
        <div>
            <Slider {...settings}>
                {PremierImage.map((image) => (
                    <Poster {...image} />
                ))}
            </Slider>
        </div>
    )
}

export default Premier;
