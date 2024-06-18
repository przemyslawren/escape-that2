export interface EscapeRoomSimpleType {
  id: number;
  name: string;
  difficultyLevel: string;
  hasActor: boolean;
  address: AddressType;
  roomTheme: RoomThemeType;
  playerRange: PlayerRangeType;
  basePrice: number;
}

export interface EscapeRoomDetailsType extends EscapeRoomSimpleType {
  description: string;
  safetyRequirements: string[];
}

export interface AddressType {
  street: string;
  city: string;
  postalCode: string;
}

export interface RoomThemeType {
  themeName: string;
  description: string;
}

export interface PlayerRangeType {
  minPlayers: number;
  maxPlayers: number;
}

export interface CustomerBookingType {
  id: number;
  escapeRoom: EscapeRoomSimpleType;
  bookingDate: string;
  bookingTime: string;
  customer: CustomerType;
}
