import { useEffect, useRef, useState } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";
import Button from "react-bootstrap/Button";

interface GooglePlacesAutocompleteProps {
  apiKey: string;
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

export const GooglePlacesAutocomplete = ({
  apiKey,
  onPlaceSelect,
}: GooglePlacesAutocompleteProps) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places"); // Loads the Places library

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
      north: center.lat + 0.1,
      south: center.lat - 0.1,
      east: center.lng + 0.1,
      west: center.lng - 0.1,
    };

    const options = {
      componentRestrictions: { country: "in" },
      fields: ["address_components", "geometry", "icon", "name"],
      strictBounds: false,
    };

    const autocomplete = new places.Autocomplete(inputRef.current, options);
    setPlaceAutocomplete(autocomplete);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      onPlaceSelect(place);
    });

    autocomplete.addListener("place_changed", () => {
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
