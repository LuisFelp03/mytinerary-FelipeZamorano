import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CitiesPage = () => {
    const [cities, setCities] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);
    const navigate = useNavigate(); // Definir hook de navegación

    // Función para obtener los datos de la API
    const fetchCities = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/city/AllCities");
            if (!response.ok) {
                throw new Error('Request error');
            }
            const data = await response.json();
            setCities(data);
            setFilteredCities(data);
        } catch (error) {
            console.error("Error getting cities:", error);
        }
    };

    // Filtrar las ciudades cada vez que el texto de búsqueda cambia
    useEffect(() => {
        const filtered = cities.filter((city) =>
            city.name.toLowerCase().startsWith(searchText.toLowerCase()) // mayúsculas/minúsculas
        );
        setFilteredCities(filtered);
    }, [searchText, cities]);

    // Ejecutar fetchCities cuando el componente se monte
    useEffect(() => {
        fetchCities();
    }, []);

    // Redirigir al hacer clic en el botón
    const handleCityClick = (city) => {
        navigate(`/city/${city._id}`);
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10">Popular Mytineraries</h2>

            {/* Input de búsqueda */}
            <input
                type="text"
                placeholder="Search cities..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full mb-6 p-2 border border-gray-300 rounded-md"
            />

            {/* Mensaje si no hay ciudades que coincidan */}
            {filteredCities.length === 0 ? (
                <p className="text-center text-gray-600">No cities match your search.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {filteredCities.map((city) => (
                        <div key={city.id} className="shadow-lg rounded-lg overflow-hidden bg-white border-4 border-blue-500 hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out">
                            <img src={city.photo} alt={city.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                                <p className="text-gray-700">{city.description}</p>

                                <button
                                    onClick={() => handleCityClick(city)}
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CitiesPage;
