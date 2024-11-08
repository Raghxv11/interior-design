import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function RoomType({ selectedRoomType }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-600 font-medium">Room Type</label>
      <Select
        onValueChange={(value) => selectedRoomType(value)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Room Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="bedroom">Bedroom</SelectItem>
          <SelectItem value="livingroom">Living Room</SelectItem>
          <SelectItem value="kitchen">Kitchen</SelectItem>
          <SelectItem value="bathroom">Bathroom</SelectItem>
          <SelectItem value="office">Office</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default RoomType;
