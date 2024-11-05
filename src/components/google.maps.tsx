
const GoogleMaps = ({ height }: { height: number }) => {
    const position = { lat: 53.54992, lng: 10.00678 };

    return (
        <>
            {/* <APIProvider apiKey={'AIzaSyBnW5jE0cIHXHRRdIJn3uMxuU3OLnyGV-I'} onLoad={() => console.log('Map Loaded')}>
                <Map style={{ height: height }} defaultCenter={position} defaultZoom={10} mapId="DEMO_MAP_ID">
                    <AdvancedMarker position={position} />
                </Map>

            </APIProvider>
            <APIProvider apiKey={'AIzaSyBnW5jE0cIHXHRRdIJn3uMxuU3OLnyGV-I'} onLoad={() => console.log('Map Loaded')}>
                <AutoComplete></AutoComplete>
            </APIProvider> */}
        </>
    );
}

export default GoogleMaps;