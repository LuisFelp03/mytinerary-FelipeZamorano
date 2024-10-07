import { useNavigate } from 'react-router-dom'; // Para manejar la navegación

const offers = [
    { name: 'Paris', img: 'https://cdn2.civitatis.com/francia/paris/galeria/torre-eiffel-altura.jpg' },
    { name: 'New York', img: 'https://a.storyblok.com/f/239725/1500x1072/fd73127c21/02_us_ny_gallery_destination_studentsatbroadway.png/m/1920x1372' },
    { name: 'Tokyo', img: 'https://a.storyblok.com/f/112937/568x464/d57e6cab1d/moving_to_tokyo_hero.jpg/m/620x0/filters:quality(70)/' },
    { name: 'London', img: 'https://www.vietnamairlines.com/~/media/Images/Discovery/England/London/canh%20dep/986x906/London_canhdep_986x906.jpg' },
];

const CallToAction = () => {
    const navigate = useNavigate(); // Hook para la navegación

    const handleShowMore = () => {
        navigate(''); // Redirige a la página CitiesPage
    };

    return (
        <section className="py-20">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Popular Mytineraries</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {offers.map((offer, index) => (
                        <div key={index} className="shadow-lg rounded-lg overflow-hidden">
                            <img src={offer.img} alt={offer.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{offer.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Botón centrado */}
                <div className="text-center mt-10">
                    <button
                        onClick={handleShowMore}
                        className="bg-blue-600 text-white py-3 px-6 rounded-full text-lg hover:bg-blue-500 transition-colors"
                    >
                        Show More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
