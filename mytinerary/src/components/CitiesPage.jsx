import { useState, useEffect } from 'react';

// Componente CitiesPage
const CitiesPage = () => {
    const [cities, setCities] = useState([]);

    // Función para obtener los datos de la API
    const fetchCities = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/city/AllCities");
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            const data = await response.json();
            setCities(data); // Almacenar las ciudades en el estado
        } catch (error) {
            console.error("Error al obtener las ciudades:", error);
        }
    };

    // Ejecutar fetchCities cuando el componente se monte
    useEffect(() => {
        fetchCities();
    }, []);

    return (
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-10">Popular Mytineraries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {cities.map((city) => (
                    <div key={city.id} className="shadow-lg rounded-lg overflow-hidden bg-white">
                        <img src={city.imageUrl} alt={city.name} className="w-full h-64 object-cover" />
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                            <p className="text-gray-700">{city.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default CitiesPage;
