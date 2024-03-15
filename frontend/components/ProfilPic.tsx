import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const ProfilPic: React.FC = () => {
    const [image, setImage] = useState<string | null>(null);

    // Utilizamos useEffect para asegurarnos de que el código solo se ejecute en el lado del cliente
    React.useEffect(() => {
        // Verificamos si window está definido, lo que indica que estamos en el lado del cliente
        if (typeof window !== 'undefined') {
            // Ahora podemos usar useState sin problemas
            const [clientImage, setClientImage] = useState<string | null>(null);
            setImage(clientImage);
        }
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedImage = event.target.files[0];
            setImage(URL.createObjectURL(selectedImage));
        }
    };

    return (
        <div className="image-upload">
            <label htmlFor="image" className="image-label">
                {image ? <img src={image} alt="Preview" /> : <div className="circle"><FontAwesomeIcon icon={faPlus} size="3x" color="#555" /></div>}
                {/* "+" will be displayed if there is no selected image */}
            </label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
        </div>
    );
}

export default ProfilPic;
