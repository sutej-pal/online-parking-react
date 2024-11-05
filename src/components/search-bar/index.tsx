import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import { SearchBarContainer } from "./search-bar.styles";
import { CustomDatePicker } from "./date-picker";
import { GooglePlacesAutocomplete } from "./place.autocomplete";
import { APIProvider } from "@vis.gl/react-google-maps";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Filters from "./filters";

const SearchBar = () => {
  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [isFiltersCardVisible, setFiltersCardVisiblity] =
    useState<boolean>(false);

  const handlePlaceSelect = (place: google.maps.places.PlaceResult | null) => {
    setSelectedPlace(place);
    if (place) {
      console.log("Selected Place:", place);
    }
  };

  return (
    <>
      <SearchBarContainer className="my-3 p-2 d-flex justify-content-center align-items-center gap-3">
        <APIProvider apiKey={"AIzaSyBnW5jE0cIHXHRRdIJn3uMxuU3OLnyGV-I"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <GooglePlacesAutocomplete
              apiKey={"AIzaSyBnW5jE0cIHXHRRdIJn3uMxuU3OLnyGV-I"}
              onPlaceSelect={handlePlaceSelect}
            />
          </div>
        </APIProvider>
        <CustomDatePicker />
        <span className="material-icons">arrow_forward</span>
        <CustomDatePicker />
        <div className="position-relative">
          <Button
            variant="light"
            className="filter-button"
            onClick={() => setFiltersCardVisiblity(!isFiltersCardVisible)}
          >
            <span className="material-icons">tune</span>
          </Button>
          {isFiltersCardVisible && (
            <Filters
              isCardVisible={isFiltersCardVisible}
              setCardVisibility={(e: boolean) => setFiltersCardVisiblity(e)}
            />
          )}
        </div>
        <Button onClick={() => console.log("Searching for:", selectedPlace)}>
          Search
        </Button>
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
