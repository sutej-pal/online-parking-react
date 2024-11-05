import { useEffect, useRef, useState } from 'react';
import { APIProvider, useMapsLibrary } from '@vis.gl/react-google-maps';
import Button from 'react-bootstrap/Button';

interface GooglePlacesAutocompleteProps {
    apiKey: string;
    onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

export const GooglePlacesAutocomplete = ({ apiKey, onPlaceSelect }: GooglePlacesAutocompleteProps) => {
    const [placeAutocomplete, setPlaceAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const places = useMapsLibrary('places');  // Loads the Places library

    useEffect(() => {
        if (!places || !inputRef.current) return;

        const options = {
            fields: ['geometry', 'name', 'formatted_address'],
        };

        const autocomplete = new places.Autocomplete(inputRef.current, options);
        setPlaceAutocomplete(autocomplete);

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            onPlaceSelect(place);
        });

        return () => {
            // Cleanup on component unmount
            if (autocomplete) {
                google.maps.event.clearInstanceListeners(autocomplete);
            }
        };
    }, [places, onPlaceSelect]);

    return (
        <div className="autocomplete-container">
            <input ref={inputRef} placeholder="Enter a location" />
        </div>
    );
};