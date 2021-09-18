import { useState } from 'react';
import DatePicker from 'react-datepicker';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FileBase from 'react-file-base64';

function ListingForm({ onCreateListing }) {

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    startDate: new Date(),
    term: "Winter 2022",
    price: 0,
    utilities: 0,
    image: "",
    buildingType: "Apartment/Condo",
    duration: "4 Months",
    roomsAvailable: 1,
    bathrooms: 1,
    gender: "Any",
    coordinates: [,],
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setFormData({
      ...formData,
      [event.target.name]: value
    });
  }

  const handleSelect = async address => {
    setFormData({ ...formData, location: address });
  };

  const handleSubmit = (event) => {
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);
    setFormData({ ...formData, coordinates: [latLng.lat, latLng.lng] });
    event.preventDefault();

    onCreateListing(formData);
  }

  return (
    <form className="w-full" onSubmit={handleSubmit} >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Listing Title (120 character max)
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-[0.6rem] px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="title"
            type="text"
            maxLength="120"
            placeholder="Ensuite room in a 3 bedroom unit!"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Address (use up/down arrow to select)
          </label>
          <PlacesAutocomplete

            value={formData.location}
            onChange={(address) => setFormData({ ...formData, location: address })}
            onSelect={handleSelect}
            searchOptions={{ componentRestrictions: { country: ['ca'] }, types: ['address'] }}
          >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-[0.6rem] px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  {...getInputProps({ placeholder: "Type address" })} />

                <div className="absolute z-50">
                  {suggestions.map(suggestion => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                    };

                    return (
                      <div key={suggestion.description} {...getSuggestionItemProps(suggestion, { style })} onClick={(e) => handleSelect(suggestion.description)}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div className="w-full px-3 mb-6 md:mb-4">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Description (500 character max)
          </label>
          <textarea
            className="appearance-none block w-full h-24 bg-gray-100 text-gray-700 border border-gray-200 rounded py-[0.6rem] px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            name="description"
            type="text"
            maxLength="500"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Bedroom(s) Available
          </label>
          <div className="relative">
            <select name="roomsAvailable" onChange={handleInputChange} value={formData.roomsAvailable} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-[0.6rem] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Number of Bathroom(s)
          </label>
          <div className="relative">
            <select name="bathrooms" onChange={handleInputChange} value={formData.bathrooms} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-[0.6rem] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Building Type
          </label>
          <div className="relative">
            <select name="buildingType" onChange={handleInputChange} value={formData.buildingType} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-[0.6rem] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="Apartment/Condo">Apartment/Condo</option>
              <option value="Townhouse">Townhouse</option>
              <option value="Detatched House">Detatched House</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Price / month ($)
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-[0.6rem] px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="price"
            type="number"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full md:w-1/2  px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Estimated Utilities / month ($)
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border rounded py-[0.6rem] px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            name="utilities"
            type="number"
            value={formData.utilities}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Start Date
          </label>
          <DatePicker
            wrapperClassName="w-full"
            className="block appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-[0.6rem] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            selected={formData.startDate}
            onChange={(date) => setFormData({ ...formData, startDate: date })}
            minDate={new Date()}
          />
        </div>
        <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Term
          </label>
          <div className="relative">
            <select name="term" onChange={handleInputChange} value={formData.term} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-[0.6rem] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="Winter 2022">Winter 2022</option>
              <option value="Spring 2022">Spring 2022</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Duration
          </label>
          <div className="relative">
            <select name="duration" onChange={handleInputChange} value={formData.duration} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-[0.6rem] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="4 Months">4 Months</option>
              <option value="8 Months">8 Months</option>
              <option value="12 Months">12 Months</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Gender
          </label>
          <div className="relative">
            <select name="gender" onChange={handleInputChange} value={formData.gender} className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-[0.6rem] px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option value="Any">Any</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1">
            Image
          </label>
          <FileBase className="w-24" type="file" multiple={false} onDone={({ base64 }) => setFormData({ ...formData, image: base64 })} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <button className="block appearance-none w-full bg-indigo-200 border-2 border-indigo-900 text-indigo-900 py-[0.6rem] px-4 pr-8 rounded-xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}

export default ListingForm;
