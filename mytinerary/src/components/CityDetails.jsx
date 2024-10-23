import { useParams } from 'react-router-dom';

const CityDetails = () => {
    const { id } = useParams(); // Obtener el ID de la ciudad desde la URL

    return (
        <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">City Details</h2>
            <p className="text-xl text-gray-700">Details for city with ID: {id}</p>
            <p className="text-xl text-gray-700">Under construction</p>
        </div>
    );
};

export default CityDetails;
