import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets";
import Title from "../../components/Title";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  const handleToggle = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].active = !updatedRooms[index].active; // toggle status
    setRooms(updatedRooms);
  };

  return (
    <div>
      <Title
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, edit or manage all listed rooms. Keep the information up to date to provide the best experience for the users."
      />
      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium">
                Price / night
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  ${item.pricePerNight}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.active}
                      onChange={() => handleToggle(index)}
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 peer-checked:translate-x-full transition-transform"></div>
                    </div>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
